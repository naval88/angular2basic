-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Sep 04, 2019 at 06:47 PM
-- Server version: 5.7.27-0ubuntu0.18.04.1
-- PHP Version: 7.0.33-10+ubuntu18.04.1+deb.sury.org+1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `node_angular_basic`
--

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `id` int(11) NOT NULL,
  `author_id` int(11) NOT NULL COMMENT 'user id',
  `title` varchar(255) NOT NULL,
  `description` text,
  `image` text,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`id`, `author_id`, `title`, `description`, `image`, `created_at`, `updated_at`) VALUES
(1, 2, 'Why image loading important', 'In the above example, app.use() method mounts the express.static middleware for every request that starts with \"/images\". It will serve images from images folder for every HTTP requests that starts with \"/images\". For example, HTTP request http://localhost:5000/images/myImage.png will get myImage.png as a response. All other resources will be served from public folder. ', '1567594065589.jpeg', '2019-09-04 16:17:46', '2019-09-04 16:17:46'),
(2, 2, 'Node Js material', '    How do i send an image from flask server to a javascript display on front end?\n    Hi all, I want to design an UI page using Neo4j as database and angular js as front end, I want UI in such a way that whenever I click on node...\n    What companies are using Node.js in production in Texas?\n    How do I display image from MongoDB using Node.js?\n    How do I utilize Node.js for front-end development?\n    What is the difference between Node.js front-end and Node.js server-side?\n    What are the disadvantages of using Node.js?\n    Why should I use Node.js over PHP?\n    Have you created a project using JS or a front-end framework and Node.js?\n    Which framework should I learn: Django or Node.js? Why?\n\nRelated Questions\n\n    How can I fetch an image from database, which I store inside of my root folder to using Node.js and EJS?\n    How do you fetch and display images from MongoDB using Node.js?\n    Which library should I use for server-side image manipulation on Node.JS?\n    How is Instagram using Node.js?\n    Is Node.js scalable? Does the scalability of a node.js application depend on server size, processing power, and memory?\n    How do i send an image from flask server to a javascript display on front end?\n    Hi all, I want to design an UI page using Neo4j as database and angular js as front end, I want UI in such a way that whenever I click on node...\n    What companies are using Node.js in production in Texas?\n    How do I display image from MongoDB using Node.js?\n    How do I utilize Node.js for front-end development?\n\n', '1567594352483.png', '2019-09-04 16:22:32', '2019-09-04 16:22:32'),
(3, 2, 'Banner are cool', '    How do i send an image from flask server to a javascript display on front end?\n    Hi all, I want to design an UI page using Neo4j as database and angular js as front end, I want UI in such a way that whenever I click on node...\n    What companies are using Node.js in production in Texas?\n    How do I display image from MongoDB using Node.js?\n    How do I utilize Node.js for front-end development?\n    What is the difference between Node.js front-end and Node.js server-side?\n    What are the disadvantages of using Node.js?\n    Why should I use Node.js over PHP?\n    Have you created a project using JS or a front-end framework and Node.js?\n    Which framework should I learn: Django or Node.js? Why?\n\nRelated Questions\n\n    How can I fetch an image from database, which I store inside of my root folder to using Node.js and EJS?\n    How do you fetch and display images from MongoDB using Node.js?\n    Which library should I use for server-side image manipulation on Node.JS?\n    How is Instagram using Node.js?\n    Is Node.js scalable? Does the scalability of a node.js application depend on server size, processing power, and memory?\n    How do i send an image from flask server to a javascript display on front end?\n    Hi all, I want to design an UI page using Neo4j as database and angular js as front end, I want UI in such a way that whenever I click on node...\n    What companies are using Node.js in production in Texas?\n    How do I display image from MongoDB using Node.js?\n    How do I utilize Node.js for front-end development?\n\n', '1567594631101.jpeg', '2019-09-04 16:27:11', '2019-09-04 16:27:11');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `email` varchar(70) NOT NULL,
  `password` char(32) NOT NULL,
  `user_type` tinyint(4) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `user_type`, `created_at`, `updated_at`) VALUES
(1, 'pankaj', 'pankaj@gmail.com', 'cccfc42c20024b4d0a8ce88aeb6b5158', 1, '2019-09-02 13:02:05', '2019-09-02 13:02:05'),
(2, 'Kishor', 'sharma@gmail.com', 'cccfc42c20024b4d0a8ce88aeb6b5158', 2, '2019-09-03 12:51:41', '2019-09-03 12:51:41'),
(4, 'naval', 'naval11@gmail.com', 'cccfc42c20024b4d0a8ce88aeb6b5158', 2, '2019-09-03 15:22:47', '2019-09-03 15:22:47');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `author_id` (`author_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
