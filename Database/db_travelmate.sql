-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: May 18, 2022 at 04:48 AM
-- Server version: 5.7.31
-- PHP Version: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_travelmate`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_admin`
--

DROP TABLE IF EXISTS `tbl_admin`;
CREATE TABLE IF NOT EXISTS `tbl_admin` (
  `admin_id` int(11) NOT NULL AUTO_INCREMENT,
  `admin_name` varchar(50) NOT NULL,
  `admin_email` varchar(100) NOT NULL,
  `admin_password` varchar(30) NOT NULL,
  PRIMARY KEY (`admin_id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_admin`
--

INSERT INTO `tbl_admin` (`admin_id`, `admin_name`, `admin_email`, `admin_password`) VALUES
(1, 'Travelmate', 'travelmate@gmail.com', 'travelmate123');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_booking`
--

DROP TABLE IF EXISTS `tbl_booking`;
CREATE TABLE IF NOT EXISTS `tbl_booking` (
  `booking_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `package_id` int(11) NOT NULL,
  `booking_date` varchar(25) NOT NULL,
  `booking_startpoint` varchar(50) NOT NULL,
  `booking_noofpeople` varchar(5) NOT NULL,
  `booking_tripdate` varchar(25) NOT NULL,
  `bus_id` int(11) NOT NULL,
  `booking_triptime` varchar(25) NOT NULL,
  `booking_tripenddate` varchar(25) DEFAULT NULL,
  `booking_status` varchar(10) NOT NULL DEFAULT 'Active',
  `trip_status` varchar(100) NOT NULL DEFAULT 'Yet To Go',
  PRIMARY KEY (`booking_id`)
) ENGINE=MyISAM AUTO_INCREMENT=46 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_booking`
--

INSERT INTO `tbl_booking` (`booking_id`, `user_id`, `package_id`, `booking_date`, `booking_startpoint`, `booking_noofpeople`, `booking_tripdate`, `bus_id`, `booking_triptime`, `booking_tripenddate`, `booking_status`, `trip_status`) VALUES
(1, 1, 1, '2022-04-13', 'Thodupuzha', '45', '2022-04-30', 1, '09:30:00', '2022-05-05', 'Active', 'Yet To Go'),
(2, 2, 1, '2022-05-01', 'Kudayathoor', '42', '2022-05-18', 2, '17:00:00', '2022-05-23', 'Active', 'Yet To Go'),
(44, 4, 40, '2022-05-17', 'Kodikulam', '40', '2022-05-25', 34, '02:12', '2022-05-27', 'Active', 'Yet To Go'),
(45, 1, 1, '2022-05-17', 'Thodupuzha', '49', '2022-05-25', 19, '17:35', '2022-05-30', 'Active', 'Yet To Go');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_bookpayment`
--

DROP TABLE IF EXISTS `tbl_bookpayment`;
CREATE TABLE IF NOT EXISTS `tbl_bookpayment` (
  `bookpayment_id` int(11) NOT NULL AUTO_INCREMENT,
  `booking_id` int(11) NOT NULL,
  `bookpayment_amount` varchar(10) NOT NULL,
  `bookpayment_date` varchar(25) NOT NULL,
  `bookpayment_status` varchar(11) NOT NULL DEFAULT 'Success',
  PRIMARY KEY (`bookpayment_id`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_bookpayment`
--

INSERT INTO `tbl_bookpayment` (`bookpayment_id`, `booking_id`, `bookpayment_amount`, `bookpayment_date`, `bookpayment_status`) VALUES
(1, 1, '31500', '2022-04-14', 'Success'),
(2, 2, '29400', '2022-05-01', 'Success'),
(5, 43, '34300', '2022-05-14', 'Success'),
(7, 44, '10000', '2022-05-17', 'Success'),
(8, 45, '34300', '2022-05-17', 'Success');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_busmodel`
--

DROP TABLE IF EXISTS `tbl_busmodel`;
CREATE TABLE IF NOT EXISTS `tbl_busmodel` (
  `busmodel_id` int(11) NOT NULL AUTO_INCREMENT,
  `busmodel_name` varchar(50) NOT NULL,
  PRIMARY KEY (`busmodel_id`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_busmodel`
--

INSERT INTO `tbl_busmodel` (`busmodel_id`, `busmodel_name`) VALUES
(1, 'Zedone'),
(9, 'Asthra'),
(8, 'BMR Boss'),
(2, 'Vega'),
(7, 'BV Maxima'),
(3, 'BMR'),
(10, 'ZedVega');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_busreg`
--

DROP TABLE IF EXISTS `tbl_busreg`;
CREATE TABLE IF NOT EXISTS `tbl_busreg` (
  `bus_id` int(11) NOT NULL AUTO_INCREMENT,
  `packager_id` int(11) NOT NULL,
  `bus_name` varchar(50) NOT NULL,
  `bus_capacity` varchar(10) NOT NULL,
  `busmodel_id` int(11) NOT NULL,
  `bus_image` varchar(100) NOT NULL,
  `bus_features` varchar(50) NOT NULL,
  `bus_year` varchar(50) NOT NULL,
  PRIMARY KEY (`bus_id`)
) ENGINE=MyISAM AUTO_INCREMENT=43 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_busreg`
--

INSERT INTO `tbl_busreg` (`bus_id`, `packager_id`, `bus_name`, `bus_capacity`, `busmodel_id`, `bus_image`, `bus_features`, `bus_year`) VALUES
(1, 1, 'Kingbull', '49', 1, 'http://127.0.0.1:4000/images/kingbull.jpg', 'AC Pushback', '2020'),
(2, 1, 'Dhashavathar', '49', 1, 'http://127.0.0.1:4000/images/pic55.jpg', 'AC Pushback', '2017'),
(18, 1, 'Thriller', '49', 9, 'http://127.0.0.1:4000/images/pic86.jpg', 'AC Pushback', '2016'),
(17, 1, 'Celebration', '49', 1, 'http://127.0.0.1:4000/images/pic87.jpg', 'AC Pushback', '2016'),
(19, 1, 'Ravan', '49', 1, 'http://127.0.0.1:4000/images/pic86.jpg', 'AC Pushback', '2018'),
(20, 1, 'Thrilok', '49', 1, 'http://127.0.0.1:4000/images/pic87.jpg', 'AC Pushback', '2018'),
(21, 1, 'Matrix', '49', 1, 'http://127.0.0.1:4000/images/pic87.jpg', 'AC Pushback', '2020'),
(22, 1, 'Leo', '49', 1, 'http://127.0.0.1:4000/images/pic85.jpg', 'AC Pushback', '2020'),
(23, 1, 'Defender', '49', 1, 'http://127.0.0.1:4000/images/pic85.jpg', 'AC Pushback', '2020'),
(24, 14, 'Jinn', '49', 10, 'http://127.0.0.1:4000/images/pic82.jpg', 'AC Pushback', '2019'),
(25, 14, 'Gandharvan 2.0', '49', 10, 'http://127.0.0.1:4000/images/pic82.jpg', 'AC Pushback', '2019'),
(26, 14, 'Asthra', '34', 9, 'http://127.0.0.1:4000/images/pic82.jpg', 'AC Pushback', '2019'),
(27, 14, 'Kshathriyan', '49', 2, 'http://127.0.0.1:4000/images/pic82.jpg', 'AC Pushback', '2016'),
(28, 14, 'Heiniken', '49', 2, 'http://127.0.0.1:4000/images/pic82.jpg', 'AC Pushback', '2016'),
(29, 14, 'Bhrahmasthra', '34', 3, 'http://127.0.0.1:4000/images/pic82.jpg', 'AC Pushback', '2016'),
(30, 14, 'Big B', '34', 7, 'http://127.0.0.1:4000/images/pic82.jpg', 'AC Pushback', '2017'),
(31, 14, 'Gangster', '49', 2, 'http://127.0.0.1:4000/images/pic82.jpg', 'AC Pushback', '2014'),
(32, 15, 'Kalliyankattu Neeli', '49', 1, 'http://127.0.0.1:4000/images/pic87.jpg', 'Non AC Pushback', '2019'),
(33, 15, 'Nagavally 2.0', '49', 2, 'http://127.0.0.1:4000/images/pic87.jpg', 'AC Pushback', '2013'),
(34, 16, 'Adholokam', '49', 8, 'http://127.0.0.1:4000/images/pic85.jpg', 'AC Pushback', '2008'),
(35, 16, 'Kaaliyan', '49', 1, 'http://127.0.0.1:4000/images/pic85.jpg', 'AC Pushback', '2018'),
(36, 16, 'Yodhavu', '49', 1, 'http://127.0.0.1:4000/images/pic85.jpg', 'AC Pushback', '2019'),
(37, 16, 'Dawood', '49', 1, 'http://127.0.0.1:4000/images/pic85.jpg', 'AC Pushback', '2020'),
(38, 16, 'Bombay', '49', 1, 'http://127.0.0.1:4000/images/pic85.jpg', 'AC Pushback', '2010'),
(39, 16, 'Gaddafi', '49', 7, 'http://127.0.0.1:4000/images/pic85.jpg', 'AC Pushback', '2022'),
(40, 17, 'Gajaveera', '49', 1, 'http://127.0.0.1:4000/images/pic86.jpg', 'AC Pushback', '2018'),
(41, 18, 'Ranger', '49', 1, 'http://127.0.0.1:4000/images/Moonlight.jpg', 'AC Pushback', '2019'),
(42, 18, 'Wild Boy', '49', 1, 'http://127.0.0.1:4000/images/Moonlight.jpg', 'AC Pushback', '2019');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_complaint`
--

DROP TABLE IF EXISTS `tbl_complaint`;
CREATE TABLE IF NOT EXISTS `tbl_complaint` (
  `complaint_id` int(11) NOT NULL AUTO_INCREMENT,
  `packager_id` int(11) NOT NULL,
  `package_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `booking_id` int(11) NOT NULL,
  `complaint_content` varchar(250) NOT NULL,
  `complaint_date` varchar(25) NOT NULL,
  `complaint_reply` varchar(250) NOT NULL,
  `complaint_replydate` varchar(25) NOT NULL,
  `complaint_status` varchar(11) NOT NULL DEFAULT 'Pending',
  PRIMARY KEY (`complaint_id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_complaint`
--

INSERT INTO `tbl_complaint` (`complaint_id`, `packager_id`, `package_id`, `user_id`, `booking_id`, `complaint_content`, `complaint_date`, `complaint_reply`, `complaint_replydate`, `complaint_status`) VALUES
(1, 1, 1, 1, 1, 'This is my complaint', '2022-04-30', 'Sorry Mikhael', '2022-04-30', 'Resolved'),
(3, 1, 1, 2, 2, 'This is my complaint 123', '2022-04-30', 'Sorry Sir', '2022-05-16', 'Resolved'),
(4, 1, 1, 1, 43, 'This is my complaint', '2022-04-30', 'Sorry', '2022-04-30', 'Resolved');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_district`
--

DROP TABLE IF EXISTS `tbl_district`;
CREATE TABLE IF NOT EXISTS `tbl_district` (
  `district_id` int(11) NOT NULL AUTO_INCREMENT,
  `district_name` varchar(50) NOT NULL,
  PRIMARY KEY (`district_id`)
) ENGINE=MyISAM AUTO_INCREMENT=32 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_district`
--

INSERT INTO `tbl_district` (`district_id`, `district_name`) VALUES
(1, 'Idukki'),
(2, 'Kottayam'),
(3, 'Ernakulam'),
(4, 'Alappuzha'),
(5, 'Pathanamthitta'),
(20, 'Kannur'),
(6, 'Thiruvananthapuram'),
(7, 'Kollam'),
(16, 'Thrissur'),
(18, 'Palakkad'),
(19, 'Kozhikode'),
(22, 'Wayanad'),
(28, 'Kasargod'),
(31, 'Malappuram');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_feedback`
--

DROP TABLE IF EXISTS `tbl_feedback`;
CREATE TABLE IF NOT EXISTS `tbl_feedback` (
  `feedback_id` int(11) NOT NULL AUTO_INCREMENT,
  `packager_id` int(11) NOT NULL,
  `package_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `feedback_content` varchar(250) NOT NULL,
  `feedback_date` varchar(25) NOT NULL,
  PRIMARY KEY (`feedback_id`)
) ENGINE=MyISAM AUTO_INCREMENT=14 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_feedback`
--

INSERT INTO `tbl_feedback` (`feedback_id`, `packager_id`, `package_id`, `user_id`, `feedback_content`, `feedback_date`) VALUES
(1, 1, 1, 1, 'Nice Service and well maintained package by Oneness Travels.. Thank You for your wonderful service.. We are very much satisfied with the food and accommodation you have given.. ', '2022-04-30'),
(2, 1, 1, 2, 'Nice Service and well maintained package by Oneness Travels.. Thank You for your wonderful service.. We are very much satisfied with the food and accommodation you have given.. ', '2022-05-06'),
(4, 1, 1, 3, 'Nice Service and well maintained package by Oneness Travels.. ', '2022-05-06'),
(12, 16, 40, 4, 'Very Nice Trip Awesome', '2022-05-17'),
(11, 16, 40, 4, 'Very Nice Trip', '2022-05-17'),
(10, 1, 1, 1, 'Nice Service', '2022-05-14');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_location`
--

DROP TABLE IF EXISTS `tbl_location`;
CREATE TABLE IF NOT EXISTS `tbl_location` (
  `location_id` int(11) NOT NULL AUTO_INCREMENT,
  `location_name` varchar(50) NOT NULL,
  `district_id` int(11) NOT NULL,
  `location_pincode` varchar(6) NOT NULL,
  PRIMARY KEY (`location_id`)
) ENGINE=MyISAM AUTO_INCREMENT=15 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_location`
--

INSERT INTO `tbl_location` (`location_id`, `location_name`, `district_id`, `location_pincode`) VALUES
(1, 'Thodupuzha', 1, '685585'),
(2, 'Muvattupuzha', 3, '686661'),
(3, 'Pala', 2, '686574'),
(4, 'Cherthala', 4, '688524'),
(5, 'Kottarakkara', 7, '691506'),
(7, 'Muthuvara', 16, '680553'),
(8, 'Pizhaku', 2, '686651'),
(10, 'Anappara', 3, '683581'),
(11, 'Manthuka', 7, '689504'),
(12, 'Pudukkad', 16, '680301'),
(13, 'Nedumoncavu', 7, '691509'),
(14, 'Cheppad', 5, '690507');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_package`
--

DROP TABLE IF EXISTS `tbl_package`;
CREATE TABLE IF NOT EXISTS `tbl_package` (
  `package_id` int(11) NOT NULL AUTO_INCREMENT,
  `packager_id` int(11) NOT NULL,
  `package_name` varchar(50) NOT NULL,
  `package_images` blob,
  `package_noofdays` varchar(2) NOT NULL,
  `package_rate` varchar(5) NOT NULL,
  `package_description` varchar(500) NOT NULL,
  PRIMARY KEY (`package_id`)
) ENGINE=MyISAM AUTO_INCREMENT=53 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_package`
--

INSERT INTO `tbl_package` (`package_id`, `packager_id`, `package_name`, `package_images`, `package_noofdays`, `package_rate`, `package_description`) VALUES
(1, 1, 'Goa', NULL, '5', '7000', 'Explore the Beauty of Beaches...'),
(18, 1, 'Chikkamagalore', NULL, '4', '4750', 'Beauty of Karnataka'),
(19, 1, 'Wayanad', NULL, '2', '2900', 'Hills and Mountains'),
(20, 1, 'Malpe', NULL, '4', '4700', 'Beauty of Karnataka'),
(21, 1, 'Ooty', NULL, '2', '3000', 'Beauty of TamilNadu'),
(22, 1, 'Kodaikanal', NULL, '2', '3000', 'Beauty of TamilNadu'),
(23, 14, 'Goa', NULL, '5', '6900', 'Explore the Beauty of Beaches...'),
(24, 14, 'Chikkamagalore', NULL, '4', '4700', 'Beauty of Karnataka'),
(25, 14, 'Wayanad', NULL, '2', '2800', 'Hills and Mountains'),
(26, 14, 'Malpe', NULL, '4', '4600', 'Beauty of Karnataka'),
(27, 14, 'Ooty', NULL, '2', '2950', 'Beauty of TamilNadu'),
(28, 14, 'Munnar', NULL, '2', '2500', 'Hills And Mountains'),
(29, 15, 'Goa', NULL, '5', '6800', 'Explore the Beauty of Beaches...'),
(30, 15, 'Chikkamagalore', NULL, '4', '4550', 'Beauty of Karnataka'),
(31, 15, 'Wayanad', NULL, '2', '2800', 'Hills and Mountains'),
(32, 15, 'Kodaikanal', NULL, '2', '2800', 'Beauty of TamilNadu'),
(33, 15, 'Coorg', NULL, '4', '4650', 'Beauty of Karnataka'),
(34, 15, 'Munnar', NULL, '2', '2600', 'Hills And Mountains'),
(35, 16, 'Goa', NULL, '5', '7000', 'Explore the Beauty of Beaches...'),
(36, 16, 'Wayanad', NULL, '2', '2900', 'Hills and Mountains'),
(37, 16, 'Ooty', NULL, '2', '3000', 'Beauty of TamilNadu'),
(38, 16, 'Kodaikanal', NULL, '2', '3000', 'Beauty of TamilNadu'),
(39, 16, 'Coorg', NULL, '4', '4800', 'Beauty of Karnataka'),
(40, 16, 'Munnar', NULL, '2', '2500', 'Hills And Mountains'),
(41, 17, 'Chikkamagalore', NULL, '4', '4700', 'Beauty of Karnataka'),
(42, 17, 'Wayanad', NULL, '2', '2800', 'Hills and Mountains'),
(43, 17, 'Ooty', NULL, '2', '2900', 'Beauty of TamilNadu'),
(44, 17, 'Kodaikanal', NULL, '2', '2850', 'Beauty of TamilNadu'),
(45, 17, 'Munnar', NULL, '2', '2450', 'Hills And Mountains'),
(46, 17, 'Coorg', NULL, '4', '4700', 'Beauty of Karnataka'),
(47, 18, 'Goa', NULL, '5', '6800', 'Explore the Beauty of Beaches...'),
(48, 18, 'Wayanad', NULL, '2', '2900', 'Hills and Mountains'),
(49, 18, 'Malpe', NULL, '4', '4650', 'Beauty of Karnataka'),
(50, 18, 'Ooty', NULL, '2', '2900', 'Beauty of TamilNadu'),
(51, 18, 'Coorg', NULL, '4', '4700', 'Beauty of Karnataka'),
(52, 18, 'Munnar', NULL, '2', '2450', 'Hills And Mountains'),
(17, 1, 'Coorg', NULL, '4', '4800', 'Beauty of Karnataka'),
(16, 1, 'Munnar', NULL, '2', '2500', 'Hills And Mountains');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_packager`
--

DROP TABLE IF EXISTS `tbl_packager`;
CREATE TABLE IF NOT EXISTS `tbl_packager` (
  `packager_id` int(11) NOT NULL AUTO_INCREMENT,
  `packager_name` varchar(100) NOT NULL,
  `district_id` int(11) NOT NULL,
  `location_id` int(11) NOT NULL,
  `packager_logo` varchar(500) DEFAULT NULL,
  `packager_contact` varchar(10) NOT NULL,
  `packager_email` varchar(250) NOT NULL,
  `packager_instagram` varchar(50) NOT NULL,
  `packager_password` varchar(50) NOT NULL,
  `packager_status` varchar(50) NOT NULL DEFAULT 'Pending',
  `packager_doj` varchar(25) NOT NULL,
  `packager_noofbus` int(11) NOT NULL,
  PRIMARY KEY (`packager_id`)
) ENGINE=MyISAM AUTO_INCREMENT=20 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_packager`
--

INSERT INTO `tbl_packager` (`packager_id`, `packager_name`, `district_id`, `location_id`, `packager_logo`, `packager_contact`, `packager_email`, `packager_instagram`, `packager_password`, `packager_status`, `packager_doj`, `packager_noofbus`) VALUES
(1, 'Oneness Travels', 4, 4, 'http://127.0.0.1:4000/images/oneness.jpg', '9895954883', 'onenesstravels@gmail.com', 'onenesstravels', 'oneness123', 'Active', '14-04-2022', 9),
(14, 'JaiGuru Holidays', 16, 7, 'http://127.0.0.1:4000/images/pic84.jpg', '9895954883', 'jaiguruholidays@gmail.com', 'jai_guru_holidays', 'jaiguru123', 'Active', '11-05-2022', 7),
(15, 'London TravelLights', 3, 10, 'http://127.0.0.1:4000/images/pic87.jpg', '9895954883', 'londontravellights@gmail.com', 'london_bae', 'london123', 'Active', '11-05-2022', 2),
(16, 'Komban Holidays', 7, 11, 'http://127.0.0.1:4000/images/pic83.jpg', '7594007004', 'kombanholidays@gmail.com', 'komban_holidays_official', 'komban123', 'Active', '2022-05-16', 6),
(17, 'HoneyBase Holidays', 16, 12, 'http://127.0.0.1:4000/images/pic86.jpg', '9447156520', 'honeybaseholidays@gmail.com', 'honeybase_holidays_official', 'honeybase123', 'Active', '2022-05-16', 1),
(18, 'Moonlight Holidays', 7, 13, 'http://127.0.0.1:4000/images/pic100.png', '9946400200', 'moonlightholidays@gmail.com', 'moonlight_holidays_kollam', 'moonlight123', 'Active', '2022-05-16', 2),
(19, 'Anizham Holidays', 5, 14, 'http://127.0.0.1:4000/images/pic101.jpg\r\n', '8078811999', 'anizhamholidays@gmail.com', 'anizham_holidays_official', 'anizham123', 'Pending', '2022-05-26', 6);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_rating`
--

DROP TABLE IF EXISTS `tbl_rating`;
CREATE TABLE IF NOT EXISTS `tbl_rating` (
  `rating_id` int(11) NOT NULL AUTO_INCREMENT,
  `packager_id` int(11) NOT NULL,
  `package_id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `booking_id` int(11) DEFAULT NULL,
  `rating` varchar(10) NOT NULL,
  `rating_date` varchar(25) NOT NULL,
  PRIMARY KEY (`rating_id`)
) ENGINE=MyISAM AUTO_INCREMENT=43 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_rating`
--

INSERT INTO `tbl_rating` (`rating_id`, `packager_id`, `package_id`, `user_id`, `booking_id`, `rating`, `rating_date`) VALUES
(1, 1, 1, NULL, NULL, '4', '2022-05-17'),
(3, 1, 18, NULL, NULL, '5', '2022-05-17'),
(4, 1, 19, NULL, NULL, '5', '2022-05-17'),
(5, 1, 20, NULL, NULL, '5', '2022-05-17'),
(6, 1, 21, NULL, NULL, '4', '2022-05-17'),
(7, 1, 22, NULL, NULL, '5', '2022-05-17'),
(8, 1, 16, NULL, NULL, '4', '2022-05-17'),
(9, 1, 17, NULL, NULL, '5', '2022-05-17'),
(10, 14, 23, NULL, NULL, '5', '2022-05-17'),
(11, 14, 24, NULL, NULL, '5', '2022-05-17'),
(12, 14, 25, NULL, NULL, '4', '2022-05-17'),
(13, 14, 26, NULL, NULL, '5', '2022-05-17'),
(14, 14, 27, NULL, NULL, '4', '2022-05-17'),
(15, 14, 28, NULL, NULL, '5', '2022-05-17'),
(16, 15, 29, NULL, NULL, '5', '2022-05-17'),
(17, 15, 30, NULL, NULL, '5', '2022-05-17'),
(18, 15, 31, NULL, NULL, '4', '2022-05-17'),
(19, 15, 32, NULL, NULL, '5', '2022-05-17'),
(20, 15, 33, NULL, NULL, '4', '2022-05-17'),
(21, 15, 34, NULL, NULL, '5', '2022-05-17'),
(22, 16, 35, NULL, NULL, '5', '2022-05-17'),
(23, 16, 36, NULL, NULL, '5', '2022-05-17'),
(24, 16, 37, NULL, NULL, '4', '2022-05-17'),
(25, 16, 38, NULL, NULL, '5', '2022-05-17'),
(26, 16, 39, NULL, NULL, '4', '2022-05-17'),
(27, 16, 40, NULL, NULL, '5', '2022-05-17'),
(28, 17, 41, NULL, NULL, '5', '2022-05-17'),
(29, 17, 42, NULL, NULL, '5', '2022-05-17'),
(30, 17, 43, NULL, NULL, '4', '2022-05-17'),
(31, 17, 44, NULL, NULL, '5', '2022-05-17'),
(32, 17, 45, NULL, NULL, '4', '2022-05-17'),
(33, 17, 46, NULL, NULL, '5', '2022-05-17'),
(34, 18, 47, NULL, NULL, '5', '2022-05-17'),
(35, 18, 46, NULL, NULL, '5', '2022-05-17'),
(36, 18, 49, NULL, NULL, '4', '2022-05-17'),
(37, 18, 50, NULL, NULL, '5', '2022-05-17'),
(38, 18, 51, NULL, NULL, '4', '2022-05-17'),
(39, 18, 52, NULL, NULL, '5', '2022-05-17'),
(40, 16, 40, 4, 44, '4', '2022-05-17');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_tplaces`
--

DROP TABLE IF EXISTS `tbl_tplaces`;
CREATE TABLE IF NOT EXISTS `tbl_tplaces` (
  `tplace_id` int(11) NOT NULL AUTO_INCREMENT,
  `tplace_name` varchar(100) NOT NULL,
  `tplace_1` varchar(100) NOT NULL,
  `tplace_2` varchar(100) NOT NULL,
  `tplace_3` varchar(100) NOT NULL,
  `tplace_4` varchar(100) NOT NULL,
  `tplace_5` varchar(100) NOT NULL,
  `tplace_6` varchar(100) NOT NULL,
  `tplace_7` varchar(100) NOT NULL,
  `tplace_8` varchar(100) NOT NULL,
  PRIMARY KEY (`tplace_id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_tplaces`
--

INSERT INTO `tbl_tplaces` (`tplace_id`, `tplace_name`, `tplace_1`, `tplace_2`, `tplace_3`, `tplace_4`, `tplace_5`, `tplace_6`, `tplace_7`, `tplace_8`) VALUES
(1, 'Goa', 'Calangute Beach', 'Dudhsagar Falls', 'Anjuna Beach', 'Chapora Fort', 'Basilica of Bom Jesus Church', 'Baga Beach', 'Dona Paula', 'Divar Island '),
(2, 'Munnar', 'Munnar Top Station', 'Lakkam Waterfalls', 'Echo Point', 'Tea Estates', 'Eravikulam Park', 'Attukad Waterfalls', 'Blossom Park', 'Mattupetty Dam'),
(3, 'Chikkamagalore', 'Mullayanagiri', 'Hebbe Falls', 'Jhari Waterfalls', 'Sringeri Mutt', 'Z Point', 'Baba Budangiri', 'Hirekolale Lake', 'Kudremukh Peak'),
(4, 'Coorg', 'Tadiandamol Peak', 'Iruppu Falls', 'Dubare Elepjant Camp', 'Raja\'s Seat', 'Abbey Falls', 'Cauvery River', 'Omkareshwara Temble', 'Brahmagiri Hill');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_user`
--

DROP TABLE IF EXISTS `tbl_user`;
CREATE TABLE IF NOT EXISTS `tbl_user` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(50) NOT NULL,
  `user_email` varchar(100) NOT NULL,
  `user_contact` varchar(10) NOT NULL,
  `user_password` varchar(50) NOT NULL,
  `user_profession` varchar(50) NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=MyISAM AUTO_INCREMENT=15 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_user`
--

INSERT INTO `tbl_user` (`user_id`, `user_name`, `user_email`, `user_contact`, `user_password`, `user_profession`) VALUES
(1, 'Micheal Jose', 'mikhaelkeethappillil@gmail.com', '8157969770', 'mikhael1902', 'Student'),
(2, 'Naveen Krishna', 'naveenkrishnab123@gmail.com', '8137955259', 'naveen123', 'Student'),
(3, 'Rahul Krishna', 'rahulkrishna123@gmail.com', '8086486701', 'rahul123', 'Student'),
(4, 'Nabeel Latheef', 'nabeellatheef123@gmail.com', '7025223044', 'nabeel123', 'Student'),
(14, 'Abin Binoy', 'abinmalayil524@gmail.com', '9207236971', 'abin123', 'Director');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
