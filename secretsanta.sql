-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : sam. 01 oct. 2022 à 20:21
-- Version du serveur : 8.0.27
-- Version de PHP : 8.0.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
CREATE DATABASE IF NOT EXISTS `secretsanta`;
USE `secretsanta`;
--
-- Base de données : `secretsanta`
--

-- --------------------------------------------------------

--
-- Structure de la table `events`
--

DROP TABLE IF EXISTS `events`;
CREATE TABLE IF NOT EXISTS `events` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `maxPrice` int NOT NULL,
  `startDate` date NOT NULL,
  `endDate` date NOT NULL,
  `id_owner` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_owner_users` (`id_owner`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `events`
--

INSERT INTO `events` (`id`, `name`, `maxPrice`, `startDate`, `endDate`, `id_owner`) VALUES
(2, 'Le meilleur secret santa !', 100, '2022-10-10', '2022-11-10', 5),
(3, 'Le secret santa des codeurs !', 300, '2022-10-20', '2022-11-21', 2),
(4, 'Un secret santa pas comme les autres !', 35, '2022-10-26', '2022-11-10', 3),
(5, 'Nan mais ta vue ce secret santa ?!', 500, '2022-10-17', '2022-11-24', 4),
(6, 'Un secret santa à la montagne ', 45, '2022-10-16', '2022-11-26', 2),
(7, 'Secret santa, le meilleur cadeau perd !', 15, '2022-10-18', '2022-11-25', 3);

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `pseudo` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `pseudo`) VALUES
(2, 'Mathias@liveCampus.fr', 'Livecampus2022.fr', 'Mathias'),
(3, 'Valentin@liveCampus.fr', 'Livecampus2022.fr', 'Valentin'),
(4, 'Nicolas@liveCampus.fr', 'Livecampus2022.fr', 'Nicolas'),
(5, 'Admin@liveCampus.fr', 'Livecampus2022.fr', 'Admin');

-- --------------------------------------------------------

--
-- Structure de la table `users_events`
--

DROP TABLE IF EXISTS `users_events`;
CREATE TABLE IF NOT EXISTS `users_events` (
  `id_users` int NOT NULL,
  `id_events` int NOT NULL,
  PRIMARY KEY (`id_users`,`id_events`),
  KEY `events_events_users` (`id_events`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `users_events`
--

INSERT INTO `users_events` (`id_users`, `id_events`) VALUES
(5, 2),
(2, 3),
(3, 4),
(4, 5),
(2, 6),
(3, 7);

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `events`
--
ALTER TABLE `events`
  ADD CONSTRAINT `id_owner_users` FOREIGN KEY (`id_owner`) REFERENCES `users` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Contraintes pour la table `users_events`
--
ALTER TABLE `users_events`
  ADD CONSTRAINT `events_events_users` FOREIGN KEY (`id_events`) REFERENCES `events` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `users_events_users` FOREIGN KEY (`id_users`) REFERENCES `users` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
