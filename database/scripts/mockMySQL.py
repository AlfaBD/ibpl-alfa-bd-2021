# -*- coding: utf-8 -*-

import getopt
import sys
import pymysql
from faker import Faker
from random import randint

def debug(texto, *args, **var):
    isdebug = var.get('isdebug', True)
    if isdebug:
        print("{} {}".format(texto, " ".join([str(x) for x in args])))


class ExecuteMock():
    """
        Author:  Aline Rodrigues
        Created: 09/06/2021
        Insert data into MySQL database
    """

    def __init__(self, database="alfabd", host="127.0.0.1", user="root", pw=""):

        self.con = pymysql.connect(host, user, pw, database, cursorclass=pymysql.cursors.DictCursor)
        self.db = database
        self.year_birth_student = [2012, 2013]
        self.fake = Faker('pt_BR')
        
    
    def run(self):
        query = ''
        # Insert Schools
        schools = open("school.csv", "r")
        school = schools.readline()
        while school != None:
            query += f"""INSERT INTO Schools (shc_name, shc_cnpj, sch_mec_number, shc_city, shc_state, shc_status, shc_address, shc_phoneNUmber, shc_email, createdAt, updatedAt) 
                                     VALUES ({school}, NULL, 'São José dos Campos', 'São Paulo', 'Ativo', 'Rua da Alegria, n 42, Jardim das Flores', '1239857458', 'escola@email.com', NOW(), NOW());"""
            school = schools.readline()
            
        c = self.con.cursor()
        c.execute(query+'COMMIT;')
        
        # Insert Users Students
        for year in self.year_birth_student:
            query = ''
            
            for i in range(1, 24001):
                name = self.fake.name()
                day = randint(1, 28)
                month = randint(1, 31)
                query += f"""INSERT INTO Users (createdAt, updateAt, usr_birth_date, usr_email, usr_name, usr_primary_role) 
                                        VALUES (NOW(), NOW(), '{year}-{month}-{day}', 'student{i}{year}@email.com', '{name}', 'STUDENT');"""
           
            c = self.con.cursor()
            c.execute(query+'COMMIT;') 
            
        # Insert Users Teachers
        query = ''
        for i in range(1, 6001):
            name = self.fake.name()
            query += f"""INSERT INTO Users (createdAt, updateAt, usr_birth_date, usr_email, usr_name, usr_primary_role) 
                                        VALUES (NOW(), NOW(), '1980-01-01', 'teacher{i}@email.com', '{name}', 'TEACHER');"""
                                        
        c = self.con.cursor()
        c.execute(query+'COMMIT;') 
                                        
        # Insert Users Schools
        query = ''
        for i in range(1, 121):
            name = self.fake.name()
            query += f"""INSERT INTO Users (createdAt, updateAt, usr_birth_date, usr_email, usr_name, usr_primary_role) 
                                        VALUES (NOW(), NOW(), '1980-01-01', 'school{i}@email.com', '{name}', 'SCHOOL');"""
        
        c = self.con.cursor()
        c.execute(query+'COMMIT;') 
                
        c = self.con.cursor()
        schools = c.execute("SELECT * from Schools;")
        
        # Insert Classes
        query = ''
        for school in schools:
            query += """INSERT """
            
            
            
        
        
                                        
        
            
        
            
        
        
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
        self.senha = ''

    def usage(self):
        debug('______________________________________\n')
        debug('MOCK DATA ALFA-BD')
        debug('______________________________________\n')
        debug('-> Command: -d  (database selected) default alfabd')
        debug('-> Command: -i  (host or IP) default 127.0.0.1')
        debug('-> Command: -u  (user name) default root')
        debug('-> Command: -p  (password) required')
        debug('')
        debug('-> Example: python mockMySQL.py -d name_database -i 127.0.0.1 -u root -p senha')
        debug('')

        sys.exit()

    def run(self, argv):

        args = argv[1:]
        opts = []

        if not len(args):
            self.usage()

        try:
            opts, args = getopt.getopt(args, "hd:i:u:p:", ["help", "database", "host", "user", "password"])
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
                self.execute = True
                self.senha = a
            else:
                assert False, "Unhandled Option"

        if self.execute:
            ExecuteMock(self.database, self.host, self.user, self.senha).run()
        else:
            self.usage()

        self.execute = False


if __name__ == '__main__':
    try:
        Mock().run(sys.argv)
    except Exception as error:
        print (f'\n---> Error: {error} \n')
