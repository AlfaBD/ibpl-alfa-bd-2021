-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema alfadb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema alfadb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `alfadb` DEFAULT CHARACTER SET latin1 ;
USE `alfadb` ;

-- -----------------------------------------------------
-- Table `alfadb`.`school`
-- -----------------------------------------------------

CREATE TABLE IF NOT EXISTS `alfadb`.`school` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `cnpj` VARCHAR(18) NOT NULL,
  `enity_code` INT(8) NOT NULL,
  `city` VARCHAR(50) NOT NULL,
  `state` VARCHAR(2) NOT NULL,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `modified_at` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `cnpj_UNIQUE` (`cnpj` ASC),
  UNIQUE INDEX `enity_code_UNIQUE` (`enity_code` ASC))
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `alfadb`.`class`
-- -----------------------------------------------------

CREATE TABLE IF NOT EXISTS `alfadb`.`class` (
  `id` INT NOT NULL,
  `school_id` INT(11) NOT NULL,
  `class_number` VARCHAR(45) NOT NULL,
  `created_at` DATETIME NOT NULL DEFAULT NOW(),
  `modified_at` DATETIME NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_class_school1_idx` (`school_id` ASC),
  CONSTRAINT `fk_class_school1`
    FOREIGN KEY (`school_id`)
    REFERENCES `alfadb`.`school` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `alfadb`.`user`
-- -----------------------------------------------------

CREATE TABLE IF NOT EXISTS `alfadb`.`user` (
  `id` INT NOT NULL,
  `name` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `password_hash` VARCHAR(255) NOT NULL,
  `birth_date` DATE NOT NULL,
  `telephone` VARCHAR(25) NOT NULL,
  `cpf` VARCHAR(14) NULL,
  `last_login` DATETIME NULL,
  `created_at` DATETIME NOT NULL DEFAULT NOW(),
  `modified_at` DATETIME NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `alfadb`.`teacher`
-- -----------------------------------------------------

CREATE TABLE IF NOT EXISTS `alfadb`.`teacher` (
  `user_id` INT NOT NULL,
  `class_id` INT NOT NULL,
  `created_at` DATETIME NOT NULL DEFAULT NOW(),
  `modified_at` DATETIME NULL,
  PRIMARY KEY (`user_id`),
  INDEX `fk_teacher_class1_idx` (`class_id` ASC),
  CONSTRAINT `fk_teacher_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `alfadb`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_teacher_class1`
    FOREIGN KEY (`class_id`)
    REFERENCES `alfadb`.`class` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `alfadb`.`student`
-- -----------------------------------------------------

CREATE TABLE IF NOT EXISTS `alfadb`.`student` (
  `user_id` INT NOT NULL,
  `class_id` INT NOT NULL,
  `created_at` DATETIME NOT NULL DEFAULT NOW(),
  `modified_at` DATETIME NULL,
  PRIMARY KEY (`user_id`),
  INDEX `fk_student_class1_idx` (`class_id` ASC),
  CONSTRAINT `fk_student_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `alfadb`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_student_class1`
    FOREIGN KEY (`class_id`)
    REFERENCES `alfadb`.`class` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

