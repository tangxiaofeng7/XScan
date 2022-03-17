CREATE DATABASE IF NOT EXISTS xscan default charset utf8 COLLATE utf8_general_ci;
use xscan;


DROP TABLE IF EXISTS `auth`;
CREATE TABLE `auth` (
                        `id` int unsigned NOT NULL AUTO_INCREMENT,
                        `username` varchar(50) DEFAULT '' COMMENT '账号',
                        `password` varchar(50) DEFAULT '' COMMENT '密码',
                        PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb3;


LOCK TABLES `auth` WRITE;
INSERT INTO `auth` VALUES (1,'admin','admin');
UNLOCK TABLES;

DROP TABLE IF EXISTS `fofalist`;
CREATE TABLE `fofalist` (
                            `id` int NOT NULL AUTO_INCREMENT,
                            `task` varchar(255) DEFAULT NULL,
                            `host` varchar(255) DEFAULT NULL,
                            `title` varchar(255) DEFAULT NULL,
                            `ip` varchar(255) DEFAULT NULL,
                            `domain` varchar(255) DEFAULT NULL,
                            `port` varchar(255) DEFAULT NULL,
                            `server` varchar(255) DEFAULT NULL,
                            `protocol` varchar(255) DEFAULT NULL,
                            `iswhite` tinyint(1) DEFAULT NULL,
                            `created_time` varchar(255) DEFAULT NULL,
                            `updated_time` varchar(255) DEFAULT NULL,
                            PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=651 DEFAULT CHARSET=utf8mb3;

DROP TABLE IF EXISTS `platform`;
CREATE TABLE `platform` (
                            `id` int DEFAULT NULL,
                            `platform` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
                            `username` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
                            `password` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

LOCK TABLES `platform` WRITE;
INSERT INTO `platform` VALUES (1,'fofa','',''),(2,'hunter','',''),(3,'shodan','',''),(5,'360quake','','');
UNLOCK TABLES;


DROP TABLE IF EXISTS `policylist`;
CREATE TABLE `policylist` (
                              `id` int NOT NULL AUTO_INCREMENT,
                              `task` varchar(255) DEFAULT NULL,
                              `platform` varchar(255) DEFAULT NULL,
                              `rule` varchar(255) DEFAULT NULL,
                              `created_time` varchar(255) DEFAULT NULL,
                              `updated_time` varchar(255) DEFAULT NULL,
                              `excute_time` varchar(255) DEFAULT NULL,
                              PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb3;
