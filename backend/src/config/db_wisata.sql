/*
SQLyog Community v13.2.0 (64 bit)
MySQL - 10.4.28-MariaDB : Database - db_wisata
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`db_wisata` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;

USE `db_wisata`;

/*Table structure for table `appointments` */

DROP TABLE IF EXISTS `appointments`;

CREATE TABLE `appointments` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `wisata_id` int(11) DEFAULT NULL,
  `start` datetime DEFAULT NULL,
  `end` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `wisata_id` (`wisata_id`),
  CONSTRAINT `appointments_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `appointments_ibfk_2` FOREIGN KEY (`wisata_id`) REFERENCES `wisata` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `appointments` */

insert  into `appointments`(`id`,`user_id`,`wisata_id`,`start`,`end`) values 
(1,1,1,'2023-09-23 13:00:00','2023-09-23 14:00:00'),
(2,1,1,'2023-09-23 13:00:00','2023-09-23 14:00:00'),
(3,1,2,'2023-09-23 13:00:00','2023-09-23 14:00:00'),
(4,1,1,'2023-09-23 13:00:00','2023-09-23 14:00:00'),
(5,1,2,'2023-09-23 13:00:00','2023-09-23 14:00:00'),
(6,1,1,'2023-09-23 13:00:00','2023-09-23 14:00:00'),
(7,1,2,'2023-09-23 13:00:00','2023-09-23 14:00:00'),
(8,1,1,'2023-09-23 13:00:00','2023-09-23 14:00:00'),
(9,1,2,'2023-09-23 13:00:00','2023-09-23 14:00:00'),
(10,1,1,'2023-09-23 13:00:00','2023-09-23 14:00:00'),
(11,1,2,'2023-09-23 13:00:00','2023-09-23 14:00:00'),
(12,1,1,'2023-09-23 13:00:00','2023-09-23 14:00:00'),
(13,1,2,'2023-09-23 13:00:00','2023-09-23 14:00:00'),
(14,1,1,'2023-09-23 13:00:00','2023-09-23 14:00:00'),
(15,1,2,'2023-09-23 13:00:00','2023-09-23 14:00:00'),
(16,1,1,'2023-09-23 13:00:00','2023-09-23 14:00:00'),
(17,1,2,'2023-09-23 13:00:00','2023-09-23 14:00:00');

/*Table structure for table `bundle_items` */

DROP TABLE IF EXISTS `bundle_items`;

CREATE TABLE `bundle_items` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `bundle_id` int(11) DEFAULT NULL,
  `wisata_id` int(11) DEFAULT NULL,
  `percentage` double DEFAULT NULL COMMENT 'Persentase harga wisata dalam bundle',
  PRIMARY KEY (`id`),
  KEY `bundle_id` (`bundle_id`),
  KEY `wisata_id` (`wisata_id`),
  CONSTRAINT `bundle_items_ibfk_1` FOREIGN KEY (`bundle_id`) REFERENCES `bundles` (`id`),
  CONSTRAINT `bundle_items_ibfk_2` FOREIGN KEY (`wisata_id`) REFERENCES `wisata` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `bundle_items` */

insert  into `bundle_items`(`id`,`bundle_id`,`wisata_id`,`percentage`) values 
(1,1,1,80),
(2,1,2,20);

/*Table structure for table `bundles` */

DROP TABLE IF EXISTS `bundles`;

CREATE TABLE `bundles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `price` bigint(20) DEFAULT NULL,
  `status` int(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `bundles` */

insert  into `bundles`(`id`,`name`,`price`,`status`) values 
(1,'Hemat',100000,1);

/*Table structure for table `events` */

DROP TABLE IF EXISTS `events`;

CREATE TABLE `events` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `desc` text DEFAULT NULL,
  `start_date` datetime DEFAULT NULL,
  `end_date` datetime DEFAULT NULL,
  `foto` varchar(255) DEFAULT NULL,
  `wisata_id` int(11) DEFAULT NULL,
  `status` int(1) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `wisata_id` (`wisata_id`),
  CONSTRAINT `events_ibfk_1` FOREIGN KEY (`wisata_id`) REFERENCES `wisata` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `events` */

/*Table structure for table `h_trans` */

DROP TABLE IF EXISTS `h_trans`;

CREATE TABLE `h_trans` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `invoice` varchar(255) DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  `total` bigint(20) DEFAULT NULL,
  `status` int(1) DEFAULT NULL COMMENT '0:gagal, 1:sukses, 2:pending',
  `user_id` int(11) DEFAULT NULL,
  `bundles_id` int(11) DEFAULT NULL,
  `wisata_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `bundles_id` (`bundles_id`),
  KEY `user_id` (`user_id`),
  KEY `wisata_id` (`wisata_id`),
  CONSTRAINT `h_trans_ibfk_1` FOREIGN KEY (`bundles_id`) REFERENCES `bundles` (`id`),
  CONSTRAINT `h_trans_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `h_trans_ibfk_3` FOREIGN KEY (`wisata_id`) REFERENCES `wisata` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `h_trans` */

insert  into `h_trans`(`id`,`invoice`,`date`,`total`,`status`,`user_id`,`bundles_id`,`wisata_id`) values 
(1,'INV23092023001','2023-09-23 13:46:12',150000,1,1,NULL,NULL),
(2,'INV23092023002','2023-09-23 13:46:44',100000,1,1,1,NULL),
(3,'INV23092023003','2023-09-23 15:30:48',100000,2,1,1,NULL),
(4,'INV23092023004','2023-09-23 17:37:53',100000,1,1,1,NULL),
(5,'INV23092023005','2023-09-23 18:01:15',100000,2,1,1,NULL),
(6,'INV23092023006','2023-09-23 18:01:59',100000,2,1,1,NULL),
(7,'INV23092023007','2023-09-23 18:03:24',100000,2,1,1,NULL),
(8,'INV23092023008','2023-09-23 18:03:43',100000,1,1,1,NULL),
(9,'INV23092023009','2023-09-23 18:04:11',100000,1,1,1,NULL);

/*Table structure for table `users` */

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `display_name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `no_telp` varchar(15) DEFAULT NULL,
  `no_rek` varchar(25) DEFAULT NULL,
  `role` int(1) DEFAULT NULL COMMENT '0:Master, 1:Admin, 2:Cust',
  `status` int(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `users` */

insert  into `users`(`id`,`username`,`password`,`display_name`,`email`,`no_telp`,`no_rek`,`role`,`status`) values 
(1,'ryk','$2b$10$s32bp0L5kuRoU60hZGyKdefNE3XAeI1q8QAZ9HjE/A9vuIJZNcsR.','Ryan','rk@gmail.com','01803282','0011223344',1,1),
(2,'admin','$2b$10$Ia7rWwR1eVTstM/ONNMY2uif4rI2OOxdXm//wJBTjL6QembHEj40O','ryk','','081234124332',NULL,0,1);

/*Table structure for table `wisata` */

DROP TABLE IF EXISTS `wisata`;

CREATE TABLE `wisata` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `alamat` varchar(255) DEFAULT NULL,
  `latitude` double DEFAULT NULL,
  `longitude` double DEFAULT NULL,
  `price` bigint(20) DEFAULT NULL,
  `desc` text DEFAULT NULL,
  `jenis` int(1) DEFAULT NULL COMMENT '0:Wisata, 1:UMKM',
  `foto` varchar(255) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `status` int(1) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `pemilik` (`user_id`),
  CONSTRAINT `wisata_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `wisata` */

insert  into `wisata`(`id`,`name`,`alamat`,`latitude`,`longitude`,`price`,`desc`,`jenis`,`foto`,`user_id`,`status`) values 
(1,'ArumJeram','Trenggalek',124.2,1.02,150000,NULL,0,NULL,1,1),
(2,'Trailing','Trenggalek',124.2,1.02,100000,NULL,0,NULL,1,1);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
