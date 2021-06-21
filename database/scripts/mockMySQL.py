# -*- coding: utf-8 -*-

import getopt
import sys
import pymysql

from random import randint
from datetime import date, datetime
from faker import Faker
from pymongo import MongoClient

def debug(text, *args, **var):
    isdebug = var.get('isdebug', True)
    if isdebug:
        print('{} {}'.format(text, ' '.join([str(x) for x in args])))


class ExecuteMock():
    """
        Author:  Aline Rodrigues
        Created: 09/06/2021
        Insert data into MySQL database
    """

    def __init__(self, database='alfabd', host='127.0.0.1', user='root', pw='', url_mongo=''):
        # mySQL
        self.con = pymysql.connect(host=host, 
                                   user=user, 
                                   password=pw, 
                                   database=database, 
                                   cursorclass=pymysql.cursors.DictCursor)
        self.year_birth_student = [2012, 2013]
        self.fake = Faker('pt_BR')
        self.classes = ['2ºA', '2ºB', '2ºC', '2ºD','2ºE', '2ºF', '3ºA', '3ºB', '3ºC', '3ºD', '3ºE', '3ºF']
        
        # mongoDB
        self.client = MongoClient(url_mongo)
        self.fluencymetrics = self.client[database]['fluencymetrics']
        
        self.metrics = ['alto', 'medio', 'baixo']
        self.days = [1, 7, 14, 28]
        self.months = [1, 2, 3, 4, 5, 6]
        
            
    def run(self):
        c = self.con.cursor()
        c.execute('DELETE FROM Attendances WHERE att_id > 0;')
        
        c = self.con.cursor()
        c.execute('DELETE FROM Classes WHERE cla_id > 0;')
        
        c = self.con.cursor()
        c.execute('DELETE FROM Schools WHERE sch_id > 0;')
        
        c = self.con.cursor()
        c.execute('DELETE FROM Users WHERE usr_primary_role != \'ADMIN\';')
        
        c = self.con.cursor()
        c.execute('COMMIT;')
        
        # Insert Schools
        schools = open('schools.csv', 'r')
        school = schools.readline()
        while school != '':
            school.replace('\n', '')
            query = f"""INSERT INTO Schools (createdAt, updatedAt, sch_name, sch_city, sch_state, sch_status, sch_address, sch_phoneNumber, sch_email) 
                                     VALUES (NOW(), NOW(), '{school}', 'São José dos Campos', 'São Paulo', 'Ativo', 'Rua da Alegria, n 42, Jardim das Flores', '1239857458', 'escola@email.com');"""
            c = self.con.cursor()
            c.execute(query)
            school = schools.readline()
        
        # Insert Users Students
        for year in self.year_birth_student:
            for i in range(1, 28801):
                name = self.fake.name()
                day = randint(1, 29)
                month = randint(1, 13)
                query = f"""INSERT INTO Users (createdAt, updatedAt, usr_birth_date, usr_email, usr_name, usr_primary_role) 
                                       VALUES (NOW(), NOW(), '{year}-{month}-{day}', 'student{i}{year}@email.com', '{name}', 'STUDENT');"""
                c = self.con.cursor()
                c.execute(query)
            
        # Insert Users Teachers
        for i in range(1, 7201):
            name = self.fake.name()
            query = f"""INSERT INTO Users (createdAt, updatedAt, usr_birth_date, usr_email, usr_name, usr_primary_role) 
                                   VALUES (NOW(), NOW(), '1980-01-01', 'teacher{i}@email.com', '{name}', 'TEACHER');"""
            c = self.con.cursor()
            c.execute(query) 
                                        
        # Insert Users Schools
        for i in range(1, 121):
            name = self.fake.name()
            query = f"""INSERT INTO Users (createdAt, updatedAt, usr_birth_date, usr_email, usr_name, usr_primary_role) 
                                   VALUES (NOW(), NOW(), '1980-01-01', 'school{i}@email.com', '{name}', 'SCHOOL');"""
            c = self.con.cursor()
            c.execute(query) 
        
        c = self.con.cursor()
        c.execute('COMMIT;') 
                
        # Insert Classes
        try:
            with self.con.cursor() as c:
                c.execute('SELECT sch_id FROM Schools;')
                schools = c.fetchall()
                c.execute("SELECT usr_id FROM Users WHERE usr_primary_role='TEACHER';")
                teacher_users = c.fetchall()
                c.execute("SELECT usr_id FROM Users WHERE usr_primary_role='SCHOOL';")
                schools_users = c.fetchall()
        finally:
            c.close()
 
        teacher_index = 0
        school_index = 0
        update_index = False
        
        for school in schools:
            sch_id = school['sch_id']
            school_user = schools_users[school_index]['usr_id']
            for cla in self.classes:
                teacher_user = teacher_users[teacher_index]['usr_id']
                query = f"""INSERT INTO Classes (createdAt, updatedAt, cla_name, cla_status, sch_id, school_user_id, teacher_user_id)
                                         VALUES (NOW(), NOW(), '{cla}', 'Ativo', {sch_id}, {school_user}, {teacher_user});"""
                c = self.con.cursor()
                c.execute(query)
                 
                if update_index:
                    update_index = False
                    teacher_index += 1
                else:
                    update_index = True     
            
            school_index += 1    
        
        c = self.con.cursor()
        c.execute('COMMIT;') 
        
        # Insert Attendances
        try:
            with self.con.cursor() as c:
                c.execute("SELECT usr_id FROM Users WHERE usr_primary_role='STUDENT';")
                student_users = c.fetchall()
                c.execute("SELECT cla_id FROM Classes ORDER BY cla_name;")
                classes = c.fetchall()
        finally:
            c.close()
        
        student_index = 0
        for cla in classes:
            cla = cla['cla_id']
            for i in range(0, 40):
                student_user = student_users[student_index]['usr_id']
                query = f"""INSERT INTO Attendances (createdAt, updatedAt, cla_id, student_user_id)
                                              VALUES (NOW(), NOW(), {cla}, {student_user});"""
                student_index += 1
                c = self.con.cursor()
                c.execute(query) 
        
        c = self.con.cursor()
        c.execute('COMMIT;')
        
        # Insert Fluency Metrics
        try:
            with self.con.cursor() as c:
                c.execute("SELECT sch_id, teacher_user_id, student_user_id FROM Classes, Attendances WHERE Classes.cla_id = Attendances.cla_id;")
                students = c.fetchall()
        finally:
            c.close()
        
        for student in students:
            metrics = []
            month = 0
            day = 0
            for i in range(0, (len(self.days) * len(self.months))):
                metrics.append({'idSchool': student['sch_id'], 
                                'idProfessor': student['teacher_user_id'], 
                                'idStudent': student['student_user_id'],
                                'metrica': self.metrics[randint(0,2)], 
                                'createdAt': datetime.now().replace(month=self.months[month], day=self.days[day])})  
                if day == len(self.days)-1:
                    day = 0
                    month += 1
                else:
                    day += 1
            self.fluencymetrics.insert_many(metrics)
            
               
class Mock():
    """
        Author:  Aline Rodrigues
        Created: 09/06/2021
        Insert data into MySQL database
    """

    def __init__(self):
        self.execute = False
        self.database = 'alfabd'
        self.host = '127.0.0.1'
        self.user = 'root'
        self.password = ''
        self.mongo = ''

    def usage(self):
        debug('______________________________________\n')
        debug('MOCK DATA ALFA-BD')
        debug('______________________________________\n')
        debug('-> Command: -d  (database selected) default alfabd')
        debug('-> Command: -i  (host or IP) default 127.0.0.1')
        debug('-> Command: -u  (user name) default root')
        debug('-> Command: -p  (password) required')
        debug('-> Command: -m  (mongodb) required')
        debug('')
        debug('-> Example: python mockMySQL.py -d name_database -i 127.0.0.1 -u root -p password, -m url_mongo')
        debug('')

        sys.exit()

    def run(self, argv):

        args = argv[1:]
        opts = []

        if not len(args):
            self.usage()

        try:
            opts, args = getopt.getopt(args, 'hd:i:u:p:m:', ['help', 'database', 'host', 'user', 'password', 'mongo'])
        except getopt.GetoptError as err:
            debug(err)
            self.usage()

        for o, a in opts:
            if o in ['-h', '--help']:
                self.execute = False
                self.usage()
                break
            elif o in ['-d', '--database']:
                self.database = a
            elif o in ['-i', '--host']:
                self.host = a
            elif o in ['-u', '--user']:
                self.user = a
            elif o in ['-p', '--password']:
                self.password = a
            elif o in ['-m', '--mongo']:
                self.mongo = a
            else:
                assert False, 'Unhandled Option'
        
        if self.password != '' and self.mongo:
            self.execute = True

        if self.execute:
            ExecuteMock(self.database, self.host, self.user, self.password, self.mongo).run()
        else:
            self.usage()

        self.execute = False


if __name__ == '__main__':
    try:
        Mock().run(sys.argv)
    except Exception as error:
        print (f'\nError: {error} \n')
