-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 31, 2019 at 05:13 PM
-- Server version: 10.4.8-MariaDB
-- PHP Version: 7.3.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
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
  `CT` timestamp NOT NULL DEFAULT current_timestamp(),
  `UT` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `sf_questions`
--

INSERT INTO `sf_questions` (`id`, `crypt`, `syrvey_crypt`, `previus_question_crypt`, `previus_answer_crypt`, `question_text`, `question_next_action`, `CT`, `UT`) VALUES
(1, 'Ki9TCbfn4VnmEWqzX4Z7iMuh7GDl9P0f5', 'f1cf29afb17dff8e457bfa2f4e1b3f6a', '0', '0', 'gfhfdhf', 'end_survey', '2019-10-31 12:48:03', '2019-10-31 12:48:03');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `sf_questions`
--
ALTER TABLE `sf_questions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `crypt` (`crypt`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `sf_questions`
--
ALTER TABLE `sf_questions`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
