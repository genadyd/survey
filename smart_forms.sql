-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Dec 08, 2019 at 09:40 AM
-- Server version: 5.7.27-0ubuntu0.16.04.1
-- PHP Version: 7.2.21-1+ubuntu16.04.1+deb.sury.org+1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `smart_forms`
--

-- --------------------------------------------------------

--
-- Table structure for table `forms_elements`
--

CREATE TABLE `forms_elements` (
  `id` int(50) NOT NULL,
  `name` varchar(100) NOT NULL,
  `form_crypt` varchar(50) NOT NULL,
  `element_crypt` varchar(50) NOT NULL,
  `element_question` text NOT NULL,
  `CT` datetime NOT NULL,
  `UT` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `sf_answers`
--

CREATE TABLE `sf_answers` (
  `id` int(50) NOT NULL,
  `crypt` varchar(64) NOT NULL,
  `answer_text` varchar(200) NOT NULL,
  `survey_crypt` varchar(100) NOT NULL,
  `question_crypt` varchar(100) NOT NULL,
  `answer_type_crypt` varchar(100) NOT NULL,
  `box_crypt` varchar(100) NOT NULL DEFAULT '0',
  `box_type_crypt` varchar(100) NOT NULL DEFAULT '0',
  `next_action` varchar(200) NOT NULL,
  `answer_order` int(5) NOT NULL,
  `CT` datetime NOT NULL,
  `UT` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `sf_answers`
--

INSERT INTO `sf_answers` (`id`, `crypt`, `answer_text`, `survey_crypt`, `question_crypt`, `answer_type_crypt`, `box_crypt`, `box_type_crypt`, `next_action`, `answer_order`, `CT`, `UT`) VALUES
(1, 'jtn7wTbpzoQg3ZDclPaT3t0EYphzg9kpx', 'gfhfhgf', '6674152e5fab87d7f0016933ee871552', 'TOIO3nIlinML3KudlVrnq1NxWZJdbuwmB', 'deba965862921ca71b0bd1905f0dd04f', '0', '0', '0', 1, '2019-11-17 00:36:14', '2019-11-16 22:36:14'),
(2, '2j8RZnGtuMJGwNwUCKO22iRaDAH8lpQx8', 'fghghgf', '6674152e5fab87d7f0016933ee871552', 'TOIO3nIlinML3KudlVrnq1NxWZJdbuwmB', '14d74ff0f146bfe1d23a09d19f21dd63', '0', '0', '0', 2, '2019-11-17 00:36:14', '2019-11-16 22:36:14'),
(3, '1nnVVcqQg9eys4al93KuKFAvw4x0MCkdf', 'gfhgfhgf', '6674152e5fab87d7f0016933ee871552', 'TOIO3nIlinML3KudlVrnq1NxWZJdbuwmB', 'EA77F1B12BFDA7B3F759EB64C5DDF033', '0', '0', '0', 3, '2019-11-17 00:36:14', '2019-11-16 22:36:14'),
(4, 'hJ4IcYQe1gQLKBvI0aMbaBAe16NCNkL4r', 'fghgfhgfhgf', '6674152e5fab87d7f0016933ee871552', 'TOIO3nIlinML3KudlVrnq1NxWZJdbuwmB', '0198FD9AD5B8B25C0D51A2FF86E0A136', '0', '0', '0', 4, '2019-11-17 00:36:14', '2019-11-16 22:36:14'),
(5, 'v8SkWhJmktUcZ9QjB4DSw2XVgPnwqKx4I', 'hghgfhgf', '6674152e5fab87d7f0016933ee871552', 'OpLudCgQpGMVtJvdj7szSf6rrWCyWui2Z', '14d74ff0f146bfe1d23a09d19f21dd63', '0', '0', '0', 5, '2019-11-17 22:10:48', '2019-11-17 20:10:48'),
(6, 'RH53J8sI2T4sY0gvDtNfWP7MC5yKtoNY6', 'fghgfhg', '6674152e5fab87d7f0016933ee871552', 'OpLudCgQpGMVtJvdj7szSf6rrWCyWui2Z', 'EA77F1B12BFDA7B3F759EB64C5DDF033', '0', '0', '0', 6, '2019-11-17 22:10:48', '2019-11-17 20:10:48'),
(7, 'kYIFnb8o5KwtN8aCDzMNvzwKi0V4Xqgru', 'gfhfghfghfghgf', '6674152e5fab87d7f0016933ee871552', 'OpLudCgQpGMVtJvdj7szSf6rrWCyWui2Z', '0198FD9AD5B8B25C0D51A2FF86E0A136', '0', '0', '0', 7, '2019-11-17 22:10:48', '2019-11-17 20:10:48');

-- --------------------------------------------------------

--
-- Table structure for table `sf_elements_types`
--

CREATE TABLE `sf_elements_types` (
  `id` int(50) NOT NULL,
  `crypt` varchar(100) NOT NULL,
  `type` varchar(50) NOT NULL,
  `element_title` varchar(100) NOT NULL,
  `element_description` text NOT NULL,
  `has_elements` int(5) NOT NULL,
  `parent_block` int(4) NOT NULL,
  `CT` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `UT` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `sf_elements_types`
--

INSERT INTO `sf_elements_types` (`id`, `crypt`, `type`, `element_title`, `element_description`, `has_elements`, `parent_block`, `CT`, `UT`) VALUES
(1, 'deba965862921ca71b0bd1905f0dd04f', 'checkbox', 'תיבת סימון', 'תיבת סימון', 0, 0, '0000-00-00 00:00:00', '2018-12-19 08:09:45'),
(2, '990ef01be4505b75130b8da00307b51b', 'radio', 'כפתור רדיו', 'כפתור רדיו', 0, 6, '0000-00-00 00:00:00', '2018-12-19 08:09:45'),
(3, '14d74ff0f146bfe1d23a09d19f21dd63', 'text', 'שדה טקסט', 'שדה טקסט', 0, 0, '0000-00-00 00:00:00', '2018-12-19 08:09:45'),
(4, 'EA77F1B12BFDA7B3F759EB64C5DDF033', 'email', 'כתובת דוא"ל', 'כתובת דוא"ל', 0, 0, '2019-10-23 08:24:08', '2019-10-23 08:24:08'),
(5, '0198FD9AD5B8B25C0D51A2FF86E0A136', 'tel', 'מספר טלפון', 'מספר טלפון', 0, 0, '2019-10-23 08:26:37', '2019-10-23 08:26:37'),
(6, '46A7CF285D64146F0BAEF4368972AFD5', 'radio_box', 'מיכל כפתורי רדיו', 'מיכל כפתורי רדיו', 2, 0, '2019-10-23 08:39:32', '2019-10-23 08:39:32'),
(7, 'CB3EA613191B83F83C112337E8A4A43C', 'select_container', 'תיבת בחירה', 'תיבת בחירה', 8, 0, '2019-10-23 09:04:58', '2019-10-23 09:04:58'),
(8, '0411F1F07197D5C3EDCED5AAA761F965', 'option', 'אלמנט תיבת בחירה', 'אלמנט תיבת בחירה', 0, 7, '2019-10-23 09:13:49', '2019-10-23 09:13:49');

-- --------------------------------------------------------

--
-- Table structure for table `sf_messages`
--

CREATE TABLE `sf_messages` (
  `id` int(11) NOT NULL,
  `crypt` varchar(50) NOT NULL,
  `title` varchar(200) NOT NULL,
  `message_text` text NOT NULL,
  `CT` timestamp NULL DEFAULT NULL,
  `UT` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `sf_questions`
--

CREATE TABLE `sf_questions` (
  `id` int(5) NOT NULL,
  `crypt` varchar(50) NOT NULL,
  `syrvey_crypt` varchar(50) NOT NULL,
  `previus_question_crypt` varchar(50) NOT NULL DEFAULT '0',
  `previus_answer_crypt` varchar(50) NOT NULL DEFAULT '0',
  `question_text` varchar(200) NOT NULL,
  `question_next_action` varchar(100) NOT NULL DEFAULT '0',
  `question_order` int(6) NOT NULL,
  `CT` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `UT` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `sf_surveys`
--

CREATE TABLE `sf_surveys` (
  `id` int(50) NOT NULL,
  `crypt` varchar(64) NOT NULL,
  `survey_name` varchar(100) NOT NULL,
  `survey_order` int(5) NOT NULL,
  `CT` datetime NOT NULL,
  `UT` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `sf_surveys`
--

INSERT INTO `sf_surveys` (`id`, `crypt`, `survey_name`, `survey_order`, `CT`, `UT`) VALUES
(5, 'rQMsFHhyNRdbYYvKq7EFuuEQTvfRl6fKm', 'חדש 2', 1, '2019-12-08 00:57:13', '2019-12-07 22:57:13');

-- --------------------------------------------------------

--
-- Table structure for table `sf_survey_message`
--

CREATE TABLE `sf_survey_message` (
  `survey_crypt` varchar(50) NOT NULL,
  `message_crypt` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `simple_forms`
--

CREATE TABLE `simple_forms` (
  `id` int(5) NOT NULL,
  `crypt` varchar(50) NOT NULL,
  `title` varchar(100) NOT NULL,
  `smart_form_crypt` varchar(50) NOT NULL,
  `up` tinyint(1) NOT NULL DEFAULT '1',
  `form_order` int(5) NOT NULL,
  `CT` datetime NOT NULL,
  `UT` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `simple_forms`
--

INSERT INTO `simple_forms` (`id`, `crypt`, `title`, `smart_form_crypt`, `up`, `form_order`, `CT`, `UT`) VALUES
(5, '97423d7208e209a95e19afdbe595c785', 'simple form', '2b9b2117f92603f5627d2b29b42b0f29', 1, 1, '2019-07-18 14:02:59', '2019-08-04 07:35:00'),
(30, 'a9e1a8cfacb3e189b78a7376279f561f', '1213213123', '2b9b2117f92603f5627d2b29b42b0f29', 0, 4, '2019-08-01 14:03:05', '2019-08-04 07:35:00'),
(36, '80fdcb072007c0c0ce85bf782cfe7d9b', 'gvhgfhgf', '2b9b2117f92603f5627d2b29b42b0f29', 0, 5, '2019-08-01 14:21:07', '2019-08-04 07:35:00');

-- --------------------------------------------------------

--
-- Table structure for table `simple_forms_elements`
--

CREATE TABLE `simple_forms_elements` (
  `id` int(5) NOT NULL,
  `crypt` varchar(50) NOT NULL,
  `form_crypt` varchar(50) NOT NULL,
  `type` varchar(50) NOT NULL,
  `title` varchar(100) NOT NULL,
  `placeholder` varchar(100) NOT NULL,
  `value` varchar(100) NOT NULL,
  `CT` datetime NOT NULL,
  `UT` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `simple_forms_elements`
--

INSERT INTO `simple_forms_elements` (`id`, `crypt`, `form_crypt`, `type`, `title`, `placeholder`, `value`, `CT`, `UT`) VALUES
(75, 'de6f02d7b45148dc7ace01f9f2adcd84', '97423d7208e209a95e19afdbe595c785', 'name', 'שם', 'שם', 'name', '2019-07-18 14:03:00', '2019-07-18 11:03:00'),
(76, 'c5d440fab31bfc4411b2d967f135f52d', '97423d7208e209a95e19afdbe595c785', 'phone', 'טל.', 'טל', 'phone num', '2019-07-18 14:03:00', '2019-07-18 11:03:00'),
(77, '98148b69c29b3986a21771ab65575b4a', 'ff1e38404cbacf4c0f6615a02e00ce58', 'email', 'email 1', 'email1', '', '2019-07-30 13:53:21', '2019-07-30 10:53:21'),
(78, 'aa1cc42946043681c86a88a3e62c12c5', 'ff1e38404cbacf4c0f6615a02e00ce58', 'email', 'email 2', 'email 2', '', '2019-07-30 13:53:21', '2019-07-30 10:53:21'),
(81, '475f4f98c95b4326cf5fd93bcdf83f26', '2c0126811735f2e7879f846daaa3aade', 'email', 'dfsdsfds', 'dsfsdfsd', 'sdfsdf', '2019-07-30 14:09:52', '2019-07-30 11:09:52'),
(82, '49c48d3530bb781014dab3688d997eaf', '2c0126811735f2e7879f846daaa3aade', 'email', 'dsfsdfs', 'sdfsdfds', 'sdfsdfds', '2019-07-30 14:09:52', '2019-07-30 11:09:52'),
(83, '44e03950624bfe3c58d3bbcc86415b5b', '9e7d50c1a61dffc2833109e4ec70628d', 'name', 'rtert', 'retret', '', '2019-07-30 14:19:56', '2019-07-30 11:19:56'),
(84, '4be214e2bf81e5aa2b9edc50cca0cbe0', '783d87a2f36da620c25cb580b9645490', 'email', 'bvcvb', 'vcbcb', 'vcbbcv', '2019-07-30 14:21:03', '2019-07-30 11:21:03'),
(87, 'ab29cc7744fb4a1e6ee52dbe2fc6e716', '0d7a144a8a9d12ad48769d891d571f83', 'email', 'fdggfd', 'dfgfdf', 'fdggfd', '2019-07-30 18:01:10', '2019-07-30 15:01:10'),
(88, '7fce4d4503b6896e3f36445dfade06a2', 'bd8aa7f5e06632bcfb2919cda5e681c5', 'email', 'ghffh', 'fghf', 'gfhgfh', '2019-07-30 18:03:36', '2019-07-30 15:03:36'),
(95, 'c2e43235cea2f7c0560a37f1239448da', '017ec84f305f6d0aa939deca27a0806a', 'name', 'dfsdf', 'sdfdsf', 'sdfdfs', '2019-07-31 12:52:15', '2019-07-31 09:52:15'),
(121, '3a0bd83eb0d2c5d102770502cb36d4f9', 'a9e1a8cfacb3e189b78a7376279f561f', 'email', 'fgfdg', 'fgdfg', 'dfgfd', '2019-08-01 14:03:05', '2019-08-04 07:34:59'),
(127, '46fbf7a4033f17b31cd2e886dfe6e95c', '80fdcb072007c0c0ce85bf782cfe7d9b', 'email', 'ghghgfh', 'ghfgh', '', '2019-08-01 14:21:07', '2019-08-04 07:11:04'),
(156, 'e982a553e41c1d2c19ca863fd960beec', '7cd5b4bde30ce4dead88fa95c3952e1c', 'name', 'gfhghgf', 'hgfh', '', '2019-08-04 11:54:12', '2019-08-04 08:54:12'),
(157, '6ea37c4080c631fd1cafa6f429b40dfd', '7cd5b4bde30ce4dead88fa95c3952e1c', 'phone', 'fghgfh', 'gfhg', '', '2019-08-04 11:54:12', '2019-08-04 08:54:12');

-- --------------------------------------------------------

--
-- Table structure for table `simple_form_user_saved_data`
--

CREATE TABLE `simple_form_user_saved_data` (
  `id` int(5) NOT NULL,
  `smart_form_crypt` varchar(50) NOT NULL,
  `simple_form_crypt` varchar(50) NOT NULL,
  `element_crypt` varchar(50) NOT NULL,
  `saved_value` varchar(100) NOT NULL,
  `user_session_crypt` varchar(50) NOT NULL,
  `CT` datetime NOT NULL,
  `UT` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `simple_form_user_saved_data`
--

INSERT INTO `simple_form_user_saved_data` (`id`, `smart_form_crypt`, `simple_form_crypt`, `element_crypt`, `saved_value`, `user_session_crypt`, `CT`, `UT`) VALUES
(1, '2b9b2117f92603f5627d2b29b42b0f29', '97423d7208e209a95e19afdbe595c785', 'de6f02d7b45148dc7ace01f9f2adcd84', 'גנאדי 2', '7d7edf276808e59a69942521706f4781', '2019-08-08 14:05:48', '2019-08-08 11:06:37'),
(2, '2b9b2117f92603f5627d2b29b42b0f29', '97423d7208e209a95e19afdbe595c785', 'c5d440fab31bfc4411b2d967f135f52d', '0547889098', '7d7edf276808e59a69942521706f4781', '2019-08-08 14:05:48', '2019-08-08 11:06:37'),
(5, '2b9b2117f92603f5627d2b29b42b0f29', '42fe07bb6900f513c7ec00c145a2d59c', 'ac4bf448472055596a8f4a6b9fcf41f3', 'טסט 1', '7d7edf276808e59a69942521706f4781', '2019-08-08 14:07:07', '2019-08-08 11:07:07'),
(6, '2b9b2117f92603f5627d2b29b42b0f29', '42fe07bb6900f513c7ec00c145a2d59c', '1a4b016392d05f4af508b3490f467c79', 'טסט 2', '7d7edf276808e59a69942521706f4781', '2019-08-08 14:07:07', '2019-08-08 11:07:07'),
(7, '2b9b2117f92603f5627d2b29b42b0f29', '97423d7208e209a95e19afdbe595c785', 'de6f02d7b45148dc7ace01f9f2adcd84', 'Genady', '983cd942035b12afa8588a0feecba398', '2019-08-08 15:06:33', '2019-08-08 12:06:33'),
(8, '2b9b2117f92603f5627d2b29b42b0f29', '97423d7208e209a95e19afdbe595c785', 'c5d440fab31bfc4411b2d967f135f52d', '0547668908', '983cd942035b12afa8588a0feecba398', '2019-08-08 15:06:33', '2019-08-08 12:06:33'),
(9, '2b9b2117f92603f5627d2b29b42b0f29', '42fe07bb6900f513c7ec00c145a2d59c', 'ac4bf448472055596a8f4a6b9fcf41f3', 'sdfdsdsf', '983cd942035b12afa8588a0feecba398', '2019-08-08 15:06:41', '2019-08-08 12:06:41'),
(10, '2b9b2117f92603f5627d2b29b42b0f29', '42fe07bb6900f513c7ec00c145a2d59c', '1a4b016392d05f4af508b3490f467c79', 'sdfdfsdf', '983cd942035b12afa8588a0feecba398', '2019-08-08 15:06:41', '2019-08-08 12:06:41'),
(11, '2b9b2117f92603f5627d2b29b42b0f29', '97423d7208e209a95e19afdbe595c785', 'de6f02d7b45148dc7ace01f9f2adcd84', 'gfhggfh', 'cdce210dea7d43719d149399e163c08d', '2019-08-08 15:16:01', '2019-08-08 12:16:01'),
(12, '2b9b2117f92603f5627d2b29b42b0f29', '97423d7208e209a95e19afdbe595c785', 'c5d440fab31bfc4411b2d967f135f52d', '78678678', 'cdce210dea7d43719d149399e163c08d', '2019-08-08 15:16:01', '2019-08-08 12:16:01'),
(13, '2b9b2117f92603f5627d2b29b42b0f29', '42fe07bb6900f513c7ec00c145a2d59c', 'ac4bf448472055596a8f4a6b9fcf41f3', '678876', 'cdce210dea7d43719d149399e163c08d', '2019-08-08 15:16:08', '2019-08-08 12:16:08'),
(14, '2b9b2117f92603f5627d2b29b42b0f29', '42fe07bb6900f513c7ec00c145a2d59c', '1a4b016392d05f4af508b3490f467c79', '76876876', 'cdce210dea7d43719d149399e163c08d', '2019-08-08 15:16:08', '2019-08-08 12:16:08'),
(15, '2b9b2117f92603f5627d2b29b42b0f29', '97423d7208e209a95e19afdbe595c785', 'de6f02d7b45148dc7ace01f9f2adcd84', 'fdggfdg', '70769086078e9559c81684f86f6e5d37', '2019-08-08 15:18:21', '2019-08-08 12:18:21'),
(16, '2b9b2117f92603f5627d2b29b42b0f29', '97423d7208e209a95e19afdbe595c785', 'c5d440fab31bfc4411b2d967f135f52d', '54654654', '70769086078e9559c81684f86f6e5d37', '2019-08-08 15:18:21', '2019-08-08 12:18:21'),
(17, '2b9b2117f92603f5627d2b29b42b0f29', '42fe07bb6900f513c7ec00c145a2d59c', 'ac4bf448472055596a8f4a6b9fcf41f3', '546546', '70769086078e9559c81684f86f6e5d37', '2019-08-08 15:18:27', '2019-08-08 12:18:27'),
(18, '2b9b2117f92603f5627d2b29b42b0f29', '42fe07bb6900f513c7ec00c145a2d59c', '1a4b016392d05f4af508b3490f467c79', '456546645', '70769086078e9559c81684f86f6e5d37', '2019-08-08 15:18:27', '2019-08-08 12:18:27'),
(19, '2b9b2117f92603f5627d2b29b42b0f29', '97423d7208e209a95e19afdbe595c785', 'de6f02d7b45148dc7ace01f9f2adcd84', 'fdgfdg', 'a6bec9347253cd73f3e4d6e653ca69e9', '2019-08-08 15:22:36', '2019-08-08 12:22:36'),
(20, '2b9b2117f92603f5627d2b29b42b0f29', '97423d7208e209a95e19afdbe595c785', 'c5d440fab31bfc4411b2d967f135f52d', '54665456546', 'a6bec9347253cd73f3e4d6e653ca69e9', '2019-08-08 15:22:36', '2019-08-08 12:22:36'),
(21, '2b9b2117f92603f5627d2b29b42b0f29', '42fe07bb6900f513c7ec00c145a2d59c', 'ac4bf448472055596a8f4a6b9fcf41f3', '546546', 'a6bec9347253cd73f3e4d6e653ca69e9', '2019-08-08 15:22:43', '2019-08-08 12:22:43'),
(22, '2b9b2117f92603f5627d2b29b42b0f29', '42fe07bb6900f513c7ec00c145a2d59c', '1a4b016392d05f4af508b3490f467c79', 'erttertre', 'a6bec9347253cd73f3e4d6e653ca69e9', '2019-08-08 15:22:43', '2019-08-08 12:22:43'),
(23, '2b9b2117f92603f5627d2b29b42b0f29', '97423d7208e209a95e19afdbe595c785', 'de6f02d7b45148dc7ace01f9f2adcd84', 'hgjhg', '01ddaaaeeebc3b4536f22306b5aee626', '2019-08-08 15:24:57', '2019-08-08 12:24:57'),
(24, '2b9b2117f92603f5627d2b29b42b0f29', '97423d7208e209a95e19afdbe595c785', 'c5d440fab31bfc4411b2d967f135f52d', '54645654', '01ddaaaeeebc3b4536f22306b5aee626', '2019-08-08 15:24:57', '2019-08-08 12:24:57'),
(25, '2b9b2117f92603f5627d2b29b42b0f29', '97423d7208e209a95e19afdbe595c785', 'de6f02d7b45148dc7ace01f9f2adcd84', 'reter', '332df8e6d8d76c441709e021e69277a7', '2019-08-08 15:26:46', '2019-08-08 12:26:46'),
(26, '2b9b2117f92603f5627d2b29b42b0f29', '97423d7208e209a95e19afdbe595c785', 'c5d440fab31bfc4411b2d967f135f52d', '45334543', '332df8e6d8d76c441709e021e69277a7', '2019-08-08 15:26:46', '2019-08-08 12:26:46'),
(27, '2b9b2117f92603f5627d2b29b42b0f29', '97423d7208e209a95e19afdbe595c785', 'de6f02d7b45148dc7ace01f9f2adcd84', 'fdgdfgdf', '0b49a17fbba35ebf5a8e965f83fd3553', '2019-08-08 15:28:09', '2019-08-08 12:28:09'),
(28, '2b9b2117f92603f5627d2b29b42b0f29', '97423d7208e209a95e19afdbe595c785', 'c5d440fab31bfc4411b2d967f135f52d', '7876887768', '0b49a17fbba35ebf5a8e965f83fd3553', '2019-08-08 15:28:09', '2019-08-08 12:28:09'),
(29, '2b9b2117f92603f5627d2b29b42b0f29', '97423d7208e209a95e19afdbe595c785', 'de6f02d7b45148dc7ace01f9f2adcd84', 'fghgf', 'e8fd9d30503f5dea571c34d73c849e6b', '2019-08-08 15:33:05', '2019-08-08 12:33:05'),
(30, '2b9b2117f92603f5627d2b29b42b0f29', '97423d7208e209a95e19afdbe595c785', 'c5d440fab31bfc4411b2d967f135f52d', '54645645', 'e8fd9d30503f5dea571c34d73c849e6b', '2019-08-08 15:33:05', '2019-08-08 12:33:05'),
(31, '2b9b2117f92603f5627d2b29b42b0f29', '97423d7208e209a95e19afdbe595c785', 'de6f02d7b45148dc7ace01f9f2adcd84', 'dfdsfdsf', 'a1ad4ba27bc8f216dfa63ed2855f0cda', '2019-08-08 15:35:50', '2019-08-08 12:35:50'),
(32, '2b9b2117f92603f5627d2b29b42b0f29', '97423d7208e209a95e19afdbe595c785', 'c5d440fab31bfc4411b2d967f135f52d', '4543543', 'a1ad4ba27bc8f216dfa63ed2855f0cda', '2019-08-08 15:35:50', '2019-08-08 12:35:50'),
(33, '2b9b2117f92603f5627d2b29b42b0f29', '97423d7208e209a95e19afdbe595c785', 'de6f02d7b45148dc7ace01f9f2adcd84', 'xcvfxcvv', 'fe14a74f261061855982375faaab4638', '2019-08-08 15:37:40', '2019-08-08 12:37:40'),
(34, '2b9b2117f92603f5627d2b29b42b0f29', '97423d7208e209a95e19afdbe595c785', 'c5d440fab31bfc4411b2d967f135f52d', '54643', 'fe14a74f261061855982375faaab4638', '2019-08-08 15:37:40', '2019-08-08 12:37:40'),
(35, '2b9b2117f92603f5627d2b29b42b0f29', '97423d7208e209a95e19afdbe595c785', 'de6f02d7b45148dc7ace01f9f2adcd84', 'fgfddf', 'ae639229928d87428cbe9128a7fd8bee', '2019-08-08 15:42:42', '2019-08-08 12:42:42'),
(36, '2b9b2117f92603f5627d2b29b42b0f29', '97423d7208e209a95e19afdbe595c785', 'c5d440fab31bfc4411b2d967f135f52d', '5466545654', 'ae639229928d87428cbe9128a7fd8bee', '2019-08-08 15:42:42', '2019-08-08 12:42:42'),
(37, '2b9b2117f92603f5627d2b29b42b0f29', '97423d7208e209a95e19afdbe595c785', 'de6f02d7b45148dc7ace01f9f2adcd84', 'fdgdfgfdg', '33f880c8305118c9af337cda37eb28d7', '2019-08-08 15:43:30', '2019-08-08 12:43:30'),
(38, '2b9b2117f92603f5627d2b29b42b0f29', '97423d7208e209a95e19afdbe595c785', 'c5d440fab31bfc4411b2d967f135f52d', '43535435', '33f880c8305118c9af337cda37eb28d7', '2019-08-08 15:43:30', '2019-08-08 12:43:30'),
(39, '2b9b2117f92603f5627d2b29b42b0f29', '97423d7208e209a95e19afdbe595c785', 'de6f02d7b45148dc7ace01f9f2adcd84', 'fdgdf', 'f7eb6656d136fcc10c2723e8431bab13', '2019-08-08 15:57:18', '2019-08-08 12:57:18'),
(40, '2b9b2117f92603f5627d2b29b42b0f29', '97423d7208e209a95e19afdbe595c785', 'c5d440fab31bfc4411b2d967f135f52d', '5645645', 'f7eb6656d136fcc10c2723e8431bab13', '2019-08-08 15:57:18', '2019-08-08 12:57:18'),
(41, '2b9b2117f92603f5627d2b29b42b0f29', '97423d7208e209a95e19afdbe595c785', 'de6f02d7b45148dc7ace01f9f2adcd84', 'ghgfhgf', 'cf998d5ed0572f513089f07dd0a20fba', '2019-08-08 15:58:28', '2019-08-08 12:58:28'),
(42, '2b9b2117f92603f5627d2b29b42b0f29', '97423d7208e209a95e19afdbe595c785', 'c5d440fab31bfc4411b2d967f135f52d', '5466456456', 'cf998d5ed0572f513089f07dd0a20fba', '2019-08-08 15:58:28', '2019-08-08 12:58:28'),
(43, '2b9b2117f92603f5627d2b29b42b0f29', '97423d7208e209a95e19afdbe595c785', 'de6f02d7b45148dc7ace01f9f2adcd84', 'ytuytuyt', '1efdba7540eea3134744c29245cac83a', '2019-08-11 01:00:22', '2019-08-10 22:14:21'),
(44, '2b9b2117f92603f5627d2b29b42b0f29', '97423d7208e209a95e19afdbe595c785', 'c5d440fab31bfc4411b2d967f135f52d', '565767657', '1efdba7540eea3134744c29245cac83a', '2019-08-11 01:00:22', '2019-08-10 22:14:21');

-- --------------------------------------------------------

--
-- Table structure for table `smart_form_users`
--

CREATE TABLE `smart_form_users` (
  `id` int(5) NOT NULL,
  `user_crypt` varchar(50) NOT NULL,
  `user_phone` varchar(30) NOT NULL,
  `CT` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `UT` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `smart_form_users`
--

INSERT INTO `smart_form_users` (`id`, `user_crypt`, `user_phone`, `CT`, `UT`) VALUES
(1, 'e57a5362324ac149b823c7d1ca2d1d68', '0547668908', '2019-08-08 10:58:02', '2019-08-08 13:58:02'),
(2, 'bcc2bb308288a4411dd50c2f854e5611', '0547668909', '2019-08-08 10:59:03', '2019-08-08 13:59:03'),
(4, '942b0a3f98cdec78081bafd4a8977233', '0547889098', '2019-08-08 11:06:37', '2019-08-08 14:06:37'),
(6, '65be60e70fe932600d8bc3d60b25fecb', '78678678', '2019-08-08 12:16:01', '2019-08-08 15:16:01'),
(7, 'd45c56d93bb4a34a0041733722237b70', '54654654', '2019-08-08 12:18:21', '2019-08-08 15:18:21'),
(8, 'b923b4d1fd2b59e446c5794ae4072b10', '54665456546', '2019-08-08 12:22:36', '2019-08-08 15:22:36'),
(9, 'b1eff1f944d5a86a45d7e23b3e00382f', '54645654', '2019-08-08 12:24:57', '2019-08-08 15:24:57'),
(10, 'bfaa26b90d5ad10522913f19ba1b92cb', '45334543', '2019-08-08 12:26:45', '2019-08-08 15:26:45'),
(11, '3a382ffc43b1f44adcb21b56118b5707', '7876887768', '2019-08-08 12:28:09', '2019-08-08 15:28:09'),
(12, 'f2ad454aad7acd65c59ef7d8710b4dc5', '54645645', '2019-08-08 12:33:04', '2019-08-08 15:33:04'),
(13, 'bf9471ec86526d1fcd8ed44df71517e1', '4543543', '2019-08-08 12:35:50', '2019-08-08 15:35:50'),
(14, '3b3454742def3f41702067b3de8a5af5', '54643', '2019-08-08 12:37:40', '2019-08-08 15:37:40'),
(15, 'ac3b662780845676c3f90b78d7512968', '5466545654', '2019-08-08 12:42:42', '2019-08-08 15:42:42'),
(16, '1c7d20a92de5e634123fcdcb54fc0f35', '43535435', '2019-08-08 12:43:30', '2019-08-08 15:43:30'),
(17, '80d00c83c0af69835b4015904710acbc', '5645645', '2019-08-08 12:57:18', '2019-08-08 15:57:18'),
(18, '3953c5d5afd410a82df57835d137ae26', '5466456456', '2019-08-08 12:58:28', '2019-08-08 15:58:28'),
(19, 'c89898a23dbae671122c4e5da368e07d', '5445435435', '2019-08-10 22:00:22', '2019-08-11 01:00:22'),
(20, 'd010cbf8f613cb002823480391d3f0f5', '4534543534', '2019-08-10 22:00:54', '2019-08-11 01:00:54'),
(21, 'e970fa3b459f8cb5aa08c71b8417e07f', '45435435', '2019-08-10 22:01:05', '2019-08-11 01:01:05'),
(22, 'dd2050763d71f131004eb77cb2ce5de5', '565767657', '2019-08-10 22:14:21', '2019-08-11 01:14:21');

-- --------------------------------------------------------

--
-- Table structure for table `smart_user_answers`
--

CREATE TABLE `smart_user_answers` (
  `id` int(10) NOT NULL,
  `crypt` varchar(60) NOT NULL,
  `form_crypt` varchar(60) NOT NULL,
  `question_crypt` varchar(60) NOT NULL,
  `answer_crypt` varchar(60) NOT NULL,
  `session_crypt` varchar(50) NOT NULL,
  `CT` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `smart_user_answers`
--

INSERT INTO `smart_user_answers` (`id`, `crypt`, `form_crypt`, `question_crypt`, `answer_crypt`, `session_crypt`, `CT`) VALUES
(1, '37d8eed26d5ca95973dd3f374158f23c', '2b9b2117f92603f5627d2b29b42b0f29', '108a05dc9ebfc6c834ddf9981fd4fa75', 'e9906ae63ee6ba9cb5ec5ec60d226a91', '7d7edf276808e59a69942521706f4781', '2019-08-08 11:07:30'),
(6, 'b7ae3939c017b77371fe0d35363f75dd', '2b9b2117f92603f5627d2b29b42b0f29', 'de8b40913c1db0f79622378dc3873fbc', '1a0f65dce700386d9631f4a668bdad55', '7d7edf276808e59a69942521706f4781', '2019-08-08 11:23:12'),
(7, '7730e7013bb246e92d6fb2616fb1d082', '2b9b2117f92603f5627d2b29b42b0f29', '108a05dc9ebfc6c834ddf9981fd4fa75', '12ff1a2cc4b1b7d4ee12bf6f28de4a01', '983cd942035b12afa8588a0feecba398', '2019-08-08 12:06:48'),
(8, 'c7692b64d755167e06ff5ce78b48e8fa', '2b9b2117f92603f5627d2b29b42b0f29', 'd3d1335b3d663ea4f8de61b24aef8c66', '6778e92185ad8a6fe612eb095982ee13', '983cd942035b12afa8588a0feecba398', '2019-08-08 12:07:12'),
(9, '2d04b3ef5d19c4b7a278d0482b70b3f3', '2b9b2117f92603f5627d2b29b42b0f29', '108a05dc9ebfc6c834ddf9981fd4fa75', 'e9906ae63ee6ba9cb5ec5ec60d226a91', 'cdce210dea7d43719d149399e163c08d', '2019-08-08 12:16:14'),
(10, 'e313aef483ed2704a70ca3e8368db6f1', '2b9b2117f92603f5627d2b29b42b0f29', 'de8b40913c1db0f79622378dc3873fbc', 'b6ab3a88b8f76f54e603d14a1436354b', 'cdce210dea7d43719d149399e163c08d', '2019-08-08 12:16:17'),
(11, '69f8c780a8730207e9925a25f69520e7', '2b9b2117f92603f5627d2b29b42b0f29', '108a05dc9ebfc6c834ddf9981fd4fa75', '12ff1a2cc4b1b7d4ee12bf6f28de4a01', '70769086078e9559c81684f86f6e5d37', '2019-08-08 12:18:33'),
(12, 'e68f5bdb51e8da2d374018c62e5b1f6d', '2b9b2117f92603f5627d2b29b42b0f29', 'd3d1335b3d663ea4f8de61b24aef8c66', 'bec75d85ff0b512ccf1af8233805ceea', '70769086078e9559c81684f86f6e5d37', '2019-08-08 12:18:41'),
(13, '03dcf7c52374130b65db399cf39be77d', '2b9b2117f92603f5627d2b29b42b0f29', '108a05dc9ebfc6c834ddf9981fd4fa75', '12ff1a2cc4b1b7d4ee12bf6f28de4a01', 'a6bec9347253cd73f3e4d6e653ca69e9', '2019-08-08 12:22:48'),
(14, '656149709ae9423ec6a43ea2efca5a07', '2b9b2117f92603f5627d2b29b42b0f29', 'd3d1335b3d663ea4f8de61b24aef8c66', '1f43a9f1bdb5a5a03ab3853a9590eb80', 'a6bec9347253cd73f3e4d6e653ca69e9', '2019-08-08 12:22:51'),
(15, '41277b6334af05f205bf4cf5b064db44', '2b9b2117f92603f5627d2b29b42b0f29', '108a05dc9ebfc6c834ddf9981fd4fa75', '6f3b979437c10e46fffe625cf382d475', '01ddaaaeeebc3b4536f22306b5aee626', '2019-08-08 12:25:03'),
(16, 'cee7f6036ee01bf06ced2085a112b747', '2b9b2117f92603f5627d2b29b42b0f29', '108a05dc9ebfc6c834ddf9981fd4fa75', '6f3b979437c10e46fffe625cf382d475', '332df8e6d8d76c441709e021e69277a7', '2019-08-08 12:26:52'),
(17, '32288aa964bf5490132d9a08cbc99e7d', '2b9b2117f92603f5627d2b29b42b0f29', '108a05dc9ebfc6c834ddf9981fd4fa75', '6f3b979437c10e46fffe625cf382d475', '0b49a17fbba35ebf5a8e965f83fd3553', '2019-08-08 12:28:12'),
(18, '5504da6f331b2edd40c8073a07e242ac', '2b9b2117f92603f5627d2b29b42b0f29', '108a05dc9ebfc6c834ddf9981fd4fa75', '6f3b979437c10e46fffe625cf382d475', 'e8fd9d30503f5dea571c34d73c849e6b', '2019-08-08 12:33:10'),
(19, 'a787044e32e19c33bfac639fe7fd5af8', '2b9b2117f92603f5627d2b29b42b0f29', '108a05dc9ebfc6c834ddf9981fd4fa75', '6f3b979437c10e46fffe625cf382d475', 'a1ad4ba27bc8f216dfa63ed2855f0cda', '2019-08-08 12:36:02'),
(20, '6e3484937fccbd43d47aa7d41c62dbcb', '2b9b2117f92603f5627d2b29b42b0f29', '108a05dc9ebfc6c834ddf9981fd4fa75', '6f3b979437c10e46fffe625cf382d475', 'fe14a74f261061855982375faaab4638', '2019-08-08 12:37:45'),
(21, 'e1000cf9fb1cf583efaa54397c6127d8', '2b9b2117f92603f5627d2b29b42b0f29', '108a05dc9ebfc6c834ddf9981fd4fa75', '6f3b979437c10e46fffe625cf382d475', 'ae639229928d87428cbe9128a7fd8bee', '2019-08-08 12:42:48'),
(22, '49a5254a58b416e13f0b5b118eaad92e', '2b9b2117f92603f5627d2b29b42b0f29', '108a05dc9ebfc6c834ddf9981fd4fa75', '6f3b979437c10e46fffe625cf382d475', '33f880c8305118c9af337cda37eb28d7', '2019-08-08 12:43:35'),
(23, 'c14c796049142546b708fca1943b9e67', '2b9b2117f92603f5627d2b29b42b0f29', '108a05dc9ebfc6c834ddf9981fd4fa75', '6f3b979437c10e46fffe625cf382d475', 'f7eb6656d136fcc10c2723e8431bab13', '2019-08-08 12:57:25'),
(24, '94da9a6b20379d14a98352cbd901d773', '2b9b2117f92603f5627d2b29b42b0f29', '108a05dc9ebfc6c834ddf9981fd4fa75', '6f3b979437c10e46fffe625cf382d475', 'cf998d5ed0572f513089f07dd0a20fba', '2019-08-08 12:58:33'),
(25, 'dd4b6a22ccff7c604ba7b99af15a74d5', '108a05dc9ebfc6c834ddf9981fd4fa75', '108a05dc9ebfc6c834ddf9981fd4fa75', '12ff1a2cc4b1b7d4ee12bf6f28de4a01', 'cf998d5ed0572f513089f07dd0a20fba', '2019-08-08 12:58:48'),
(26, '180cb84ee8688a73d955484d4a93f550', '2b9b2117f92603f5627d2b29b42b0f29', '108a05dc9ebfc6c834ddf9981fd4fa75', '12ff1a2cc4b1b7d4ee12bf6f28de4a01', '1efdba7540eea3134744c29245cac83a', '2019-08-10 22:00:28'),
(28, '3fa594f80d4ae97179c9b01ab680ac56', '2b9b2117f92603f5627d2b29b42b0f29', 'd3d1335b3d663ea4f8de61b24aef8c66', 'bec75d85ff0b512ccf1af8233805ceea', '1efdba7540eea3134744c29245cac83a', '2019-08-10 22:01:13');

-- --------------------------------------------------------

--
-- Table structure for table `users_sessions`
--

CREATE TABLE `users_sessions` (
  `id` int(5) NOT NULL,
  `session_cript` varchar(50) NOT NULL,
  `user_crypt` varchar(50) NOT NULL,
  `session_end` tinyint(1) NOT NULL DEFAULT '0',
  `session_order` int(10) NOT NULL,
  `CT` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users_sessions`
--

INSERT INTO `users_sessions` (`id`, `session_cript`, `user_crypt`, `session_end`, `session_order`, `CT`) VALUES
(1, '4b723cd212f24aab413b063391f7e5cc', 'e57a5362324ac149b823c7d1ca2d1d68', 0, 1, '2019-08-08 10:58:02'),
(2, '7d7edf276808e59a69942521706f4781', 'e57a5362324ac149b823c7d1ca2d1d68', 0, 1, '2019-08-08 11:05:48'),
(3, '983cd942035b12afa8588a0feecba398', 'e57a5362324ac149b823c7d1ca2d1d68', 0, 1, '2019-08-08 12:06:33'),
(4, 'cdce210dea7d43719d149399e163c08d', '65be60e70fe932600d8bc3d60b25fecb', 0, 1, '2019-08-08 12:16:01'),
(5, '70769086078e9559c81684f86f6e5d37', 'd45c56d93bb4a34a0041733722237b70', 0, 1, '2019-08-08 12:18:21'),
(6, 'a6bec9347253cd73f3e4d6e653ca69e9', 'b923b4d1fd2b59e446c5794ae4072b10', 0, 1, '2019-08-08 12:22:36'),
(7, '01ddaaaeeebc3b4536f22306b5aee626', 'b1eff1f944d5a86a45d7e23b3e00382f', 0, 1, '2019-08-08 12:24:57'),
(8, '332df8e6d8d76c441709e021e69277a7', 'bfaa26b90d5ad10522913f19ba1b92cb', 0, 1, '2019-08-08 12:26:45'),
(9, '0b49a17fbba35ebf5a8e965f83fd3553', '3a382ffc43b1f44adcb21b56118b5707', 0, 1, '2019-08-08 12:28:09'),
(10, 'e8fd9d30503f5dea571c34d73c849e6b', 'f2ad454aad7acd65c59ef7d8710b4dc5', 0, 1, '2019-08-08 12:33:04'),
(11, 'a1ad4ba27bc8f216dfa63ed2855f0cda', 'bf9471ec86526d1fcd8ed44df71517e1', 0, 1, '2019-08-08 12:35:50'),
(12, 'fe14a74f261061855982375faaab4638', '3b3454742def3f41702067b3de8a5af5', 0, 1, '2019-08-08 12:37:40'),
(13, 'ae639229928d87428cbe9128a7fd8bee', 'ac3b662780845676c3f90b78d7512968', 0, 1, '2019-08-08 12:42:42'),
(14, '33f880c8305118c9af337cda37eb28d7', '1c7d20a92de5e634123fcdcb54fc0f35', 0, 1, '2019-08-08 12:43:30'),
(15, 'f7eb6656d136fcc10c2723e8431bab13', '80d00c83c0af69835b4015904710acbc', 0, 1, '2019-08-08 12:57:18'),
(16, 'cf998d5ed0572f513089f07dd0a20fba', '3953c5d5afd410a82df57835d137ae26', 0, 1, '2019-08-08 12:58:28'),
(17, '1efdba7540eea3134744c29245cac83a', 'c89898a23dbae671122c4e5da368e07d', 0, 1, '2019-08-10 22:00:22');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `forms_elements`
--
ALTER TABLE `forms_elements`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sf_answers`
--
ALTER TABLE `sf_answers`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `crypt` (`crypt`);

--
-- Indexes for table `sf_elements_types`
--
ALTER TABLE `sf_elements_types`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sf_messages`
--
ALTER TABLE `sf_messages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sf_questions`
--
ALTER TABLE `sf_questions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `crypt` (`crypt`);

--
-- Indexes for table `sf_surveys`
--
ALTER TABLE `sf_surveys`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `simple_forms`
--
ALTER TABLE `simple_forms`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `crypt` (`crypt`);

--
-- Indexes for table `simple_forms_elements`
--
ALTER TABLE `simple_forms_elements`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `crypt` (`crypt`);

--
-- Indexes for table `simple_form_user_saved_data`
--
ALTER TABLE `simple_form_user_saved_data`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `form_session` (`simple_form_crypt`,`user_session_crypt`,`element_crypt`);

--
-- Indexes for table `smart_form_users`
--
ALTER TABLE `smart_form_users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `user_crypt` (`user_crypt`),
  ADD UNIQUE KEY `user_phone` (`user_phone`);

--
-- Indexes for table `smart_user_answers`
--
ALTER TABLE `smart_user_answers`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `wnswer_uniq` (`form_crypt`,`question_crypt`,`session_crypt`);

--
-- Indexes for table `users_sessions`
--
ALTER TABLE `users_sessions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `session_cript` (`session_cript`,`user_crypt`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `forms_elements`
--
ALTER TABLE `forms_elements`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `sf_answers`
--
ALTER TABLE `sf_answers`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT for table `sf_elements_types`
--
ALTER TABLE `sf_elements_types`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT for table `sf_messages`
--
ALTER TABLE `sf_messages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `sf_questions`
--
ALTER TABLE `sf_questions`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `sf_surveys`
--
ALTER TABLE `sf_surveys`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `simple_forms`
--
ALTER TABLE `simple_forms`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;
--
-- AUTO_INCREMENT for table `simple_forms_elements`
--
ALTER TABLE `simple_forms_elements`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=158;
--
-- AUTO_INCREMENT for table `simple_form_user_saved_data`
--
ALTER TABLE `simple_form_user_saved_data`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;
--
-- AUTO_INCREMENT for table `smart_form_users`
--
ALTER TABLE `smart_form_users`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;
--
-- AUTO_INCREMENT for table `smart_user_answers`
--
ALTER TABLE `smart_user_answers`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;
--
-- AUTO_INCREMENT for table `users_sessions`
--
ALTER TABLE `users_sessions`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
