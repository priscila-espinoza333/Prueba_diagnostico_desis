-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema prueba_desis
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema prueba_desis
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `prueba_desis` DEFAULT CHARACTER SET utf8mb4 ;
USE `prueba_desis` ;

-- -----------------------------------------------------
-- Table `prueba_desis`.`candidatos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `prueba_desis`.`candidatos` (
  `id_candidato` INT(11) NOT NULL AUTO_INCREMENT,
  `nombre_candidato` VARCHAR(255) NOT NULL DEFAULT '',
  PRIMARY KEY (`id_candidato`))
ENGINE = InnoDB
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `prueba_desis`.`regiones`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `prueba_desis`.`regiones` (
  `id_region` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `nombre_region` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`id_region`))
ENGINE = InnoDB
AUTO_INCREMENT = 17
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `prueba_desis`.`ciudades`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `prueba_desis`.`ciudades` (
  `id_ciudad` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `id_region` INT(10) UNSIGNED NOT NULL,
  `nombre_ciudad` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`id_ciudad`),
  INDEX `FK_cities_regions` (`id_region` ASC),
  CONSTRAINT `FK_cities_regions`
    FOREIGN KEY (`id_region`)
    REFERENCES `prueba_desis`.`regiones` (`id_region`))
ENGINE = InnoDB
AUTO_INCREMENT = 348
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `prueba_desis`.`registros`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `prueba_desis`.`registros` (
  `id_registro` INT(11) NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(255) NOT NULL DEFAULT '',
  `alias` VARCHAR(255) NOT NULL DEFAULT '',
  `rut` VARCHAR(11) NOT NULL DEFAULT '',
  `email` VARCHAR(255) NOT NULL DEFAULT '',
  `comuna` VARCHAR(255) NOT NULL DEFAULT '',
  `region` VARCHAR(255) NOT NULL DEFAULT '',
  `candidato` VARCHAR(255) NOT NULL DEFAULT '',
  `web` INT(11) NOT NULL,
  `tv` INT(11) NOT NULL,
  `rrss` INT(11) NOT NULL,
  `amigo` INT(11) NOT NULL,
  PRIMARY KEY (`id_registro`))
ENGINE = InnoDB
AUTO_INCREMENT = 64
DEFAULT CHARACTER SET = utf8mb4;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
