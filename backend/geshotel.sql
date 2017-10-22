-- phpMyAdmin SQL Dump
-- version 3.3.9
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Oct 20, 2017 at 12:15 PM
-- Server version: 5.5.8
-- PHP Version: 5.3.5

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `geshotel`
--

-- --------------------------------------------------------

--
-- Table structure for table `categorie`
--

CREATE TABLE IF NOT EXISTS `categorie` (
  `id_categorie` int(11) NOT NULL AUTO_INCREMENT,
  `libelle_categorie` varchar(250) DEFAULT NULL,
  `tarif` double DEFAULT NULL,
  PRIMARY KEY (`id_categorie`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `categorie`
--

INSERT INTO `categorie` (`id_categorie`, `libelle_categorie`, `tarif`) VALUES
(1, 'V.I.P', 100),
(2, 'SUITE', 80),
(3, 'PRESIDENTIELLE', 200);

-- --------------------------------------------------------

--
-- Table structure for table `chambre`
--

CREATE TABLE IF NOT EXISTS `chambre` (
  `id_chambre` int(11) NOT NULL AUTO_INCREMENT,
  `libelle_chambre` varchar(25) DEFAULT NULL,
  `niveau_chambre` int(25) DEFAULT NULL,
  `etat_chambre` varchar(10) NOT NULL DEFAULT 'false',
  `nombreLits_chambre` decimal(10,0) DEFAULT NULL,
  `telephone_chambre` varchar(25) DEFAULT NULL,
  `id_categorie` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_chambre`),
  UNIQUE KEY `libelle_chambre` (`libelle_chambre`),
  KEY `id_categorie` (`id_categorie`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `chambre`
--

INSERT INTO `chambre` (`id_chambre`, `libelle_chambre`, `niveau_chambre`, `etat_chambre`, `nombreLits_chambre`, `telephone_chambre`, `id_categorie`) VALUES
(1, 'SUITE/CH1', 1, 'false', '1', '+243816862543', 2),
(2, 'VIP/CH1', 2, 'false', '2', '+243894652123', 1),
(3, 'PRESIDENTIELLE/CH1', 3, 'false', '2', '+243852365987', 3);

-- --------------------------------------------------------

--
-- Table structure for table `client`
--

CREATE TABLE IF NOT EXISTS `client` (
  `id_client` int(11) NOT NULL AUTO_INCREMENT,
  `nom_client` varchar(25) DEFAULT NULL,
  `prenom_client` varchar(25) DEFAULT NULL,
  `sexe_client` char(1) DEFAULT NULL,
  `adressePhysique_client` varchar(25) DEFAULT NULL,
  `email_client` varchar(25) DEFAULT NULL,
  `dateArrivee_client` date DEFAULT NULL,
  `dateDepart_client` date DEFAULT NULL,
  `dateNaissance_client` date DEFAULT NULL,
  `fonction_client` varchar(25) DEFAULT NULL,
  `telephone_employe` decimal(10,0) DEFAULT NULL,
  `villeProvenance_client` varchar(25) DEFAULT NULL,
  `numMat_employe` varchar(25) DEFAULT NULL,
  PRIMARY KEY (`id_client`),
  KEY `FK_Client_numMat_employe` (`numMat_employe`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

--
-- Dumping data for table `client`
--


-- --------------------------------------------------------

--
-- Table structure for table `departement`
--

CREATE TABLE IF NOT EXISTS `departement` (
  `id_departement` int(11) NOT NULL AUTO_INCREMENT,
  `nom_departement` varchar(25) DEFAULT NULL,
  PRIMARY KEY (`id_departement`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=7 ;

--
-- Dumping data for table `departement`
--

INSERT INTO `departement` (`id_departement`, `nom_departement`) VALUES
(1, 'INFORMATIQUE'),
(2, 'ACCEUIL'),
(3, 'RESTAURATION'),
(4, 'CUISINE'),
(5, 'BILLANDERIE'),
(6, 'HOTELLERIE');

-- --------------------------------------------------------

--
-- Table structure for table `employe`
--

CREATE TABLE IF NOT EXISTS `employe` (
  `numMat_employe` varchar(25) NOT NULL,
  `nom_employe` varchar(25) DEFAULT NULL,
  `prenom_employe` varchar(25) DEFAULT NULL,
  `etatCivil_employe` varchar(25) DEFAULT NULL,
  `sexe_employe` char(25) DEFAULT NULL,
  `adressePhysique_employe` varchar(25) DEFAULT NULL,
  `dateNaissance_employe` date DEFAULT NULL,
  `email_employe` varchar(25) DEFAULT NULL,
  `telephone_employe` varchar(25) DEFAULT NULL,
  `id_departement` int(11) DEFAULT NULL,
  PRIMARY KEY (`numMat_employe`),
  KEY `FK_Employe_id_departement` (`id_departement`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `employe`
--

INSERT INTO `employe` (`numMat_employe`, `nom_employe`, `prenom_employe`, `etatCivil_employe`, `sexe_employe`, `adressePhysique_employe`, `dateNaissance_employe`, `email_employe`, `telephone_employe`, `id_departement`) VALUES
('GHK001', 'MAPWATA', 'GAEL', 'CELIBATAIRE', 'M', 'LEMBA TERMINUS', '2000-10-20', 'gaelmapwata@gmail.com', '+243856321954', 1),
('GHK002', 'VAMBI', 'VOLDY', 'CELIBATAIRE', 'M', '20, AV KUNTUALA Q/10 C/N''', '2000-10-17', 'voldyvambi@gmail.com', '+243859387383', 2);

-- --------------------------------------------------------

--
-- Table structure for table `paiement`
--

CREATE TABLE IF NOT EXISTS `paiement` (
  `id_paiement` int(11) NOT NULL AUTO_INCREMENT,
  `type_paiement` varchar(25) DEFAULT NULL,
  `date_paiement` date DEFAULT NULL,
  `montantPaye` double DEFAULT NULL,
  `id_client` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_paiement`),
  KEY `FK_Paiement_id_client` (`id_client`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

--
-- Dumping data for table `paiement`
--


-- --------------------------------------------------------

--
-- Table structure for table `reservation`
--

CREATE TABLE IF NOT EXISTS `reservation` (
  `date_reservation` date DEFAULT NULL,
  `dateExpiration_reservation` date DEFAULT NULL,
  `id_client` int(11) NOT NULL,
  `id_chambre` int(11) NOT NULL,
  PRIMARY KEY (`id_client`,`id_chambre`),
  KEY `FK_Reservation_id_chambre` (`id_chambre`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `reservation`
--


--
-- Constraints for dumped tables
--

--
-- Constraints for table `chambre`
--
ALTER TABLE `chambre`
  ADD CONSTRAINT `chambre_ibfk_1` FOREIGN KEY (`id_categorie`) REFERENCES `categorie` (`id_categorie`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `client`
--
ALTER TABLE `client`
  ADD CONSTRAINT `FK_Client_numMat_employe` FOREIGN KEY (`numMat_employe`) REFERENCES `employe` (`numMat_employe`);

--
-- Constraints for table `employe`
--
ALTER TABLE `employe`
  ADD CONSTRAINT `FK_Employe_id_departement` FOREIGN KEY (`id_departement`) REFERENCES `departement` (`id_departement`);

--
-- Constraints for table `paiement`
--
ALTER TABLE `paiement`
  ADD CONSTRAINT `FK_Paiement_id_client` FOREIGN KEY (`id_client`) REFERENCES `client` (`id_client`);

--
-- Constraints for table `reservation`
--
ALTER TABLE `reservation`
  ADD CONSTRAINT `FK_Reservation_id_chambre` FOREIGN KEY (`id_chambre`) REFERENCES `chambre` (`id_chambre`),
  ADD CONSTRAINT `FK_Reservation_id_client` FOREIGN KEY (`id_client`) REFERENCES `client` (`id_client`);
