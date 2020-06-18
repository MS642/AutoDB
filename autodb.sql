-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 18, 2020 at 08:28 AM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `autodb`
--

-- --------------------------------------------------------

--
-- Table structure for table `accident`
--

CREATE TABLE `accident` (
  `Accident_ID` int(11) NOT NULL,
  `Damage_Cost` double NOT NULL,
  `Description` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `accident`
--

INSERT INTO `accident` (`Accident_ID`, `Damage_Cost`, `Description`) VALUES
(1, 5000, 'front bumper, lights, paint job destroyed in 1500 Fraser Street'),
(2, 150, 'minor crash, paint job needed'),
(3, 50000, 'crashed into a department store and mcdonalds while DUI, car is a classic impala 67 '),
(4, 1450, 'left front door scratched by juvenile delinquents'),
(5, 2500, 'mining accident'),
(6, 60000, 'car exploded'),
(7, 75221, 'driver was cooking in his car');

-- --------------------------------------------------------

--
-- Table structure for table `applied_policies`
--

CREATE TABLE `applied_policies` (
  `Policy_ID` int(10) NOT NULL,
  `Plan_ID` int(10) NOT NULL,
  `Description` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `applied_policies`
--

INSERT INTO `applied_policies` (`Policy_ID`, `Plan_ID`, `Description`) VALUES
(1, 5, 'no late payments'),
(2, 5, 'max 1 person only'),
(3, 1, 'no surprise charges'),
(4, 2, 'max 3 claims per 10 years'),
(5, 4, 'must be a member with at least 500 loyalty points');

-- --------------------------------------------------------

--
-- Table structure for table `business`
--

CREATE TABLE `business` (
  `Customer_ID` int(10) NOT NULL,
  `Operating_License` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `business`
--

INSERT INTO `business` (`Customer_ID`, `Operating_License`) VALUES
(6, 45877538),
(7, 13451531);

-- --------------------------------------------------------

--
-- Table structure for table `company_has_customer`
--

CREATE TABLE `company_has_customer` (
  `Company_ID` int(10) NOT NULL,
  `Customer_ID` int(10) NOT NULL,
  `Loyalty_Points` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `company_has_customer`
--

INSERT INTO `company_has_customer` (`Company_ID`, `Customer_ID`, `Loyalty_Points`) VALUES
(1, 3, 1400),
(1, 6, 7800),
(2, 1, 110),
(3, 4, 550),
(5, 2, 2500),
(5, 5, 600),
(5, 7, 122000);

-- --------------------------------------------------------

--
-- Table structure for table `coverage`
--

CREATE TABLE `coverage` (
  `Monthly_Cost` double NOT NULL,
  `Total_Liability_Covered` double NOT NULL,
  `Collision Coverage` double NOT NULL,
  `Comprehensive_Coverage` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `coverage`
--

INSERT INTO `coverage` (`Monthly_Cost`, `Total_Liability_Covered`, `Collision Coverage`, `Comprehensive_Coverage`) VALUES
(300, 100, 100, 100),
(400, 150, 150, 100),
(500, 300, 100, 100),
(600, 1555, 200, 4555),
(1000, 800, 100, 100);

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

CREATE TABLE `customer` (
  `Customer_ID` int(10) NOT NULL,
  `Name` varchar(80) NOT NULL,
  `Billing_Address` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `customer`
--

INSERT INTO `customer` (`Customer_ID`, `Name`, `Billing_Address`) VALUES
(1, 'Robert Strong', '215 Totoro Street'),
(2, 'Eugene Krabs', '255 Bikini Drive'),
(3, 'Edgar Wright', '567 Nirvana Street'),
(4, 'Sandy Cheeks', '425 Toledo Drive'),
(5, 'Rick Star', '543 Sunrise Ave'),
(6, 'Delivery Inc.', '251 Alberini Drive'),
(7, 'Super Rentals Vancouver', '544 Cambie Street');

-- --------------------------------------------------------

--
-- Table structure for table `customer_owns_vehicle`
--

CREATE TABLE `customer_owns_vehicle` (
  `Vehicle_VIN` int(11) NOT NULL,
  `Model` varchar(30) NOT NULL,
  `Color` varchar(30) NOT NULL,
  `Year` int(11) NOT NULL,
  `Customer_ID` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `customer_owns_vehicle`
--

INSERT INTO `customer_owns_vehicle` (`Vehicle_VIN`, `Model`, `Color`, `Year`, `Customer_ID`) VALUES
(123456, 'Lexus GS', 'White', 2015, 3),
(445652, 'Ford F150', 'White', 2019, 1),
(555444, 'Mercedes E850', 'Black', 2018, 7),
(987654, 'Jeep', 'Red', 1995, 4),
(2161616, 'Ford Mustang', 'Red', 1967, 5),
(2656961, 'Ford Focus', 'Silver', 2011, 5),
(3216515, 'Toyota Supra', 'Black', 2009, 2),
(7878454, 'Toyota Prius', 'Blue', 2015, 4);

-- --------------------------------------------------------

--
-- Table structure for table `driver`
--

CREATE TABLE `driver` (
  `License_ID` int(10) NOT NULL,
  `Name` varchar(60) NOT NULL,
  `Years_Experience` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `driver`
--

INSERT INTO `driver` (`License_ID`, `Name`, `Years_Experience`) VALUES
(131321, 'Rick Star', 7),
(326162, 'Timothy Bors', 12),
(532326, 'Eugene Krabs', 26),
(562185, 'Robert Strong', 4),
(598653, 'Bruce Wui', 2),
(721020, 'Juan Carlos', 14);

-- --------------------------------------------------------

--
-- Table structure for table `drives`
--

CREATE TABLE `drives` (
  `Vehicle_VIN` int(10) NOT NULL,
  `License_ID` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `drives`
--

INSERT INTO `drives` (`Vehicle_VIN`, `License_ID`) VALUES
(555444, 598653),
(555444, 721020),
(2656961, 532326),
(3216515, 131321),
(7878454, 562185);

-- --------------------------------------------------------

--
-- Table structure for table `employees`
--

CREATE TABLE `employees` (
  `Employee_ID` int(11) NOT NULL,
  `Company_ID` int(11) NOT NULL,
  `Job_ID` int(11) NOT NULL,
  `Name` varchar(60) NOT NULL,
  `Address` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `employees`
--

INSERT INTO `employees` (`Employee_ID`, `Company_ID`, `Job_ID`, `Name`, `Address`) VALUES
(1, 1, 4, 'Bruce Wui', '355 Sunset Ave'),
(2, 1, 2, 'Dylan Smokes', '555 Holy Ave'),
(3, 5, 9, 'Bobo Haha', '343 Scenic Drive'),
(4, 5, 10, 'Martinez Smith', '99th Coriander Avenue'),
(5, 1, 2, 'Melissa Tjia', '20th Rose Ave');

-- --------------------------------------------------------

--
-- Table structure for table `hospital`
--

CREATE TABLE `hospital` (
  `Hospital_Name` varchar(60) NOT NULL,
  `Address` varchar(80) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `hospital`
--

INSERT INTO `hospital` (`Hospital_Name`, `Address`) VALUES
('North Cross Hospital', '22th Evenstan Ave'),
('Robin\'s General Hospital', 'East Romano Drive'),
('St Peter\'s Hospital', '15th Peterson Street'),
('UBC Hospital', '101 University Drive'),
('Vancouver General Hospital', 'West 10th Broadway');

-- --------------------------------------------------------

--
-- Table structure for table `hospitalized`
--

CREATE TABLE `hospitalized` (
  `Accident_ID` int(11) NOT NULL,
  `Hospital_Name` varchar(60) NOT NULL,
  `Room_Number` int(11) NOT NULL,
  `Bill` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `hospitalized`
--

INSERT INTO `hospitalized` (`Accident_ID`, `Hospital_Name`, `Room_Number`, `Bill`) VALUES
(1, 'UBC Hospital', 359, 15000),
(2, 'Vancouver General Hospital', 111, 10),
(3, 'St Peter\'s Hospital', 255, 225990),
(5, 'North Cross Hospital', 112, 56200),
(6, 'Vancouver General Hospital', 255, 1800000),
(7, 'Robin\'s General Hospital', 564, 2515980);

-- --------------------------------------------------------

--
-- Table structure for table `individual`
--

CREATE TABLE `individual` (
  `Customer_ID` int(10) NOT NULL,
  `Age` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `individual`
--

INSERT INTO `individual` (`Customer_ID`, `Age`) VALUES
(1, 25),
(2, 55),
(3, 21),
(4, 26),
(5, 30);

-- --------------------------------------------------------

--
-- Table structure for table `insurance_company`
--

CREATE TABLE `insurance_company` (
  `Company_ID` int(11) NOT NULL,
  `Company_Name` varchar(80) NOT NULL,
  `No_Employees` int(10) NOT NULL,
  `No_Customers` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `insurance_company`
--

INSERT INTO `insurance_company` (`Company_ID`, `Company_Name`, `No_Employees`, `No_Customers`) VALUES
(1, 'Max\'s Auto Insurance Company', 20, 602),
(2, 'Richmond Auto-Insurance ', 58, 1222),
(3, 'Cooler Save Auto', 2, 11),
(4, 'Definitely Not a Shell Company For Money Laundering', 598, 17552),
(5, 'PP 2000 Online Auto-Insurance Company', 78, 45228);

-- --------------------------------------------------------

--
-- Table structure for table `investigated_by`
--

CREATE TABLE `investigated_by` (
  `Badge_#` int(11) NOT NULL,
  `Accident_ID` int(11) NOT NULL,
  `Name` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `investigated_by`
--

INSERT INTO `investigated_by` (`Badge_#`, `Accident_ID`, `Name`) VALUES
(11778, 5, 'Anthony Anthony'),
(12213, 2, 'Ratna Kapoor'),
(72534, 3, 'Anthony Anthony'),
(78886, 4, 'John Wilkes'),
(888975, 7, 'James Lao');

-- --------------------------------------------------------

--
-- Table structure for table `jobs`
--

CREATE TABLE `jobs` (
  `Job_ID` int(11) NOT NULL,
  `Company_ID` int(11) NOT NULL,
  `Job Name` varchar(60) NOT NULL,
  `Salary` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `jobs`
--

INSERT INTO `jobs` (`Job_ID`, `Company_ID`, `Job Name`, `Salary`) VALUES
(1, 1, 'Regional Manager', 55000),
(2, 1, 'Janitor', 26600),
(3, 1, 'Desk Clerk', 42000),
(4, 1, 'Customer Service Agent', 39425),
(5, 2, 'Team Lead', 66500),
(6, 2, 'Janitor', 33250),
(7, 2, 'General Manager', 48650),
(8, 4, 'CEO', 100000),
(9, 5, 'UI/UX Designer', 77400),
(10, 5, 'Web Developer', 78000),
(11, 5, 'Project Team Lead', 95000),
(12, 5, 'Chief Accountant', 85000);

-- --------------------------------------------------------

--
-- Table structure for table `plan_details`
--

CREATE TABLE `plan_details` (
  `Plan_ID` int(10) NOT NULL,
  `Company_ID` int(10) NOT NULL,
  `Plan_Name` varchar(60) NOT NULL,
  `Monthly Cost` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `plan_details`
--

INSERT INTO `plan_details` (`Plan_ID`, `Company_ID`, `Plan_Name`, `Monthly Cost`) VALUES
(1, 3, 'Mid-Safety Save', 400),
(2, 2, 'Premium Economy', 500),
(3, 1, 'All Inclusive', 1000),
(4, 1, 'Max Safety', 1000),
(5, 5, '100% Insured', 1000),
(6, 3, 'Save Safe Saves', 300);

-- --------------------------------------------------------

--
-- Table structure for table `vehicle_insured_with_plan_id`
--

CREATE TABLE `vehicle_insured_with_plan_id` (
  `Vehicle_VIN` int(10) NOT NULL,
  `Plan_ID` int(10) NOT NULL,
  `Date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `vehicle_insured_with_plan_id`
--

INSERT INTO `vehicle_insured_with_plan_id` (`Vehicle_VIN`, `Plan_ID`, `Date`) VALUES
(123456, 3, '2020-04-27'),
(555444, 6, '2020-02-12'),
(987654, 1, '2020-05-06'),
(2161616, 5, '2020-01-05'),
(2656961, 5, '2019-01-21'),
(7878454, 5, '2019-11-04');

-- --------------------------------------------------------

--
-- Table structure for table `vehicle_involved_in_accident`
--

CREATE TABLE `vehicle_involved_in_accident` (
  `Vehicle_VIN` int(11) NOT NULL,
  `Accident_ID` int(11) NOT NULL,
  `Date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `vehicle_involved_in_accident`
--

INSERT INTO `vehicle_involved_in_accident` (`Vehicle_VIN`, `Accident_ID`, `Date`) VALUES
(555444, 6, '2020-06-16'),
(987654, 5, '2020-06-03'),
(2161616, 2, '2020-06-02'),
(2656961, 1, '2020-03-13'),
(3216515, 3, '2020-05-07'),
(7878454, 7, '2020-05-26');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `accident`
--
ALTER TABLE `accident`
  ADD PRIMARY KEY (`Accident_ID`);

--
-- Indexes for table `applied_policies`
--
ALTER TABLE `applied_policies`
  ADD PRIMARY KEY (`Policy_ID`,`Plan_ID`),
  ADD KEY `Plan_ID` (`Plan_ID`);

--
-- Indexes for table `business`
--
ALTER TABLE `business`
  ADD PRIMARY KEY (`Customer_ID`,`Operating_License`);

--
-- Indexes for table `company_has_customer`
--
ALTER TABLE `company_has_customer`
  ADD PRIMARY KEY (`Company_ID`,`Customer_ID`),
  ADD KEY `Customer_ID` (`Customer_ID`);

--
-- Indexes for table `coverage`
--
ALTER TABLE `coverage`
  ADD PRIMARY KEY (`Monthly_Cost`);

--
-- Indexes for table `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`Customer_ID`);

--
-- Indexes for table `customer_owns_vehicle`
--
ALTER TABLE `customer_owns_vehicle`
  ADD PRIMARY KEY (`Vehicle_VIN`),
  ADD KEY `Customer_ID` (`Customer_ID`);

--
-- Indexes for table `driver`
--
ALTER TABLE `driver`
  ADD PRIMARY KEY (`License_ID`);

--
-- Indexes for table `drives`
--
ALTER TABLE `drives`
  ADD PRIMARY KEY (`Vehicle_VIN`,`License_ID`),
  ADD KEY `License_ID` (`License_ID`);

--
-- Indexes for table `employees`
--
ALTER TABLE `employees`
  ADD PRIMARY KEY (`Employee_ID`,`Company_ID`,`Job_ID`),
  ADD KEY `Company_ID` (`Company_ID`),
  ADD KEY `Job_ID` (`Job_ID`);

--
-- Indexes for table `hospital`
--
ALTER TABLE `hospital`
  ADD PRIMARY KEY (`Hospital_Name`);

--
-- Indexes for table `hospitalized`
--
ALTER TABLE `hospitalized`
  ADD PRIMARY KEY (`Accident_ID`,`Hospital_Name`),
  ADD KEY `Hospital_Name` (`Hospital_Name`);

--
-- Indexes for table `individual`
--
ALTER TABLE `individual`
  ADD PRIMARY KEY (`Customer_ID`);

--
-- Indexes for table `insurance_company`
--
ALTER TABLE `insurance_company`
  ADD PRIMARY KEY (`Company_ID`);

--
-- Indexes for table `investigated_by`
--
ALTER TABLE `investigated_by`
  ADD PRIMARY KEY (`Badge_#`,`Accident_ID`),
  ADD KEY `Accident_ID` (`Accident_ID`);

--
-- Indexes for table `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`Job_ID`,`Company_ID`),
  ADD KEY `Company_ID` (`Company_ID`);

--
-- Indexes for table `plan_details`
--
ALTER TABLE `plan_details`
  ADD PRIMARY KEY (`Plan_ID`),
  ADD KEY `Company_ID` (`Company_ID`),
  ADD KEY `Monthly Cost` (`Monthly Cost`);

--
-- Indexes for table `vehicle_insured_with_plan_id`
--
ALTER TABLE `vehicle_insured_with_plan_id`
  ADD PRIMARY KEY (`Vehicle_VIN`,`Plan_ID`),
  ADD KEY `Plan_ID` (`Plan_ID`);

--
-- Indexes for table `vehicle_involved_in_accident`
--
ALTER TABLE `vehicle_involved_in_accident`
  ADD PRIMARY KEY (`Vehicle_VIN`,`Accident_ID`),
  ADD KEY `Accident_ID` (`Accident_ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `accident`
--
ALTER TABLE `accident`
  MODIFY `Accident_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `applied_policies`
--
ALTER TABLE `applied_policies`
  MODIFY `Policy_ID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `customer`
--
ALTER TABLE `customer`
  MODIFY `Customer_ID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `employees`
--
ALTER TABLE `employees`
  MODIFY `Employee_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `insurance_company`
--
ALTER TABLE `insurance_company`
  MODIFY `Company_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `Job_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `plan_details`
--
ALTER TABLE `plan_details`
  MODIFY `Plan_ID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `applied_policies`
--
ALTER TABLE `applied_policies`
  ADD CONSTRAINT `applied_policies_ibfk_1` FOREIGN KEY (`Plan_ID`) REFERENCES `plan_details` (`Plan_ID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `business`
--
ALTER TABLE `business`
  ADD CONSTRAINT `business_ibfk_1` FOREIGN KEY (`Customer_ID`) REFERENCES `customer` (`Customer_ID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `company_has_customer`
--
ALTER TABLE `company_has_customer`
  ADD CONSTRAINT `company_has_customer_ibfk_1` FOREIGN KEY (`Company_ID`) REFERENCES `insurance_company` (`Company_ID`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `company_has_customer_ibfk_2` FOREIGN KEY (`Customer_ID`) REFERENCES `customer` (`Customer_ID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `customer_owns_vehicle`
--
ALTER TABLE `customer_owns_vehicle`
  ADD CONSTRAINT `customer_owns_vehicle_ibfk_1` FOREIGN KEY (`Customer_ID`) REFERENCES `customer` (`Customer_ID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `drives`
--
ALTER TABLE `drives`
  ADD CONSTRAINT `drives_ibfk_1` FOREIGN KEY (`Vehicle_VIN`) REFERENCES `customer_owns_vehicle` (`Vehicle_VIN`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `drives_ibfk_2` FOREIGN KEY (`License_ID`) REFERENCES `driver` (`License_ID`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Constraints for table `employees`
--
ALTER TABLE `employees`
  ADD CONSTRAINT `employees_ibfk_1` FOREIGN KEY (`Company_ID`) REFERENCES `insurance_company` (`Company_ID`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `employees_ibfk_2` FOREIGN KEY (`Job_ID`) REFERENCES `jobs` (`Job_ID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `hospitalized`
--
ALTER TABLE `hospitalized`
  ADD CONSTRAINT `hospitalized_ibfk_1` FOREIGN KEY (`Accident_ID`) REFERENCES `accident` (`Accident_ID`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `hospitalized_ibfk_2` FOREIGN KEY (`Hospital_Name`) REFERENCES `hospital` (`Hospital_Name`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `individual`
--
ALTER TABLE `individual`
  ADD CONSTRAINT `individual_ibfk_1` FOREIGN KEY (`Customer_ID`) REFERENCES `customer` (`Customer_ID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `investigated_by`
--
ALTER TABLE `investigated_by`
  ADD CONSTRAINT `investigated_by_ibfk_1` FOREIGN KEY (`Accident_ID`) REFERENCES `accident` (`Accident_ID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `jobs`
--
ALTER TABLE `jobs`
  ADD CONSTRAINT `jobs_ibfk_1` FOREIGN KEY (`Company_ID`) REFERENCES `insurance_company` (`Company_ID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `plan_details`
--
ALTER TABLE `plan_details`
  ADD CONSTRAINT `plan_details_ibfk_1` FOREIGN KEY (`Company_ID`) REFERENCES `insurance_company` (`Company_ID`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `plan_details_ibfk_2` FOREIGN KEY (`Monthly Cost`) REFERENCES `coverage` (`Monthly_Cost`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `vehicle_insured_with_plan_id`
--
ALTER TABLE `vehicle_insured_with_plan_id`
  ADD CONSTRAINT `vehicle_insured_with_plan_id_ibfk_1` FOREIGN KEY (`Vehicle_VIn`) REFERENCES `customer_owns_vehicle` (`Vehicle_VIN`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `vehicle_insured_with_plan_id_ibfk_2` FOREIGN KEY (`Plan_ID`) REFERENCES `plan_details` (`Plan_ID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `vehicle_involved_in_accident`
--
ALTER TABLE `vehicle_involved_in_accident`
  ADD CONSTRAINT `vehicle_involved_in_accident_ibfk_1` FOREIGN KEY (`Vehicle_VIN`) REFERENCES `customer_owns_vehicle` (`Vehicle_VIN`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `vehicle_involved_in_accident_ibfk_2` FOREIGN KEY (`Accident_ID`) REFERENCES `accident` (`Accident_ID`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
