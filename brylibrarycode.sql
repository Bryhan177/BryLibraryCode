-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 17-08-2024 a las 00:32:06
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `brylibrarycode`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `libros`
--

CREATE TABLE `libros` (
  `id` int(11) NOT NULL,
  `titulo` varchar(255) NOT NULL,
  `autor` varchar(255) NOT NULL,
  `genero` varchar(255) NOT NULL,
  `precio` float NOT NULL,
  `cantidad` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `imagen` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `libros`
--

INSERT INTO `libros` (`id`, `titulo`, `autor`, `genero`, `precio`, `cantidad`, `createdAt`, `updatedAt`, `imagen`) VALUES
(1, 'Conversaciones con Dios 4', 'Donal Walsch', 'Espiritual', 40, 6, '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL),
(2, 'Bryhan', 'Stif Cordoba', 'Amor', 100000, 2, '2024-08-15 21:02:56', '2024-08-15 21:02:56', NULL),
(4, 'Hollaaaaaaa', 'Mario Mendoza', 'terror', 50, 8, '2024-08-15 21:03:57', '2024-08-15 21:03:57', NULL),
(5, 'funcional', 'Mario Mendoza', 'terror', 50, 8, '2024-08-15 21:20:14', '2024-08-15 21:20:14', NULL),
(7, 'funcional1.1', 'Mario Mendoza', 'terror', 50, 8, '2024-08-15 21:31:28', '2024-08-15 21:31:28', NULL),
(8, 'funcional1.2', 'Mario Mendoza', 'terror', 50, 8, '2024-08-15 21:33:01', '2024-08-15 21:33:01', NULL),
(9, ' Alejandra Moreno Renteria', 'Alejandra', 'Pasion', 100000, 5, '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL),
(10, 'Conversaciones con Dios', 'Donal', 'Uni', 2, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL),
(11, 'funcional1.4', 'Mario Mendoza', 'terror', 50, 8, '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL),
(13, 'Conversaciones con Dios 3', 'Donal', 'Espiritual', 50000, 3, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '1723827337434.jpeg'),
(14, 'Conversaciones con Dios 2', 'Donal Walsch', 'Espiritual', 50000, 2, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '1723827446024.jfif'),
(15, 'Diaario del sol', 'Bryhan', 'Drama', 80000, 89, '2024-08-16 22:25:03', '2024-08-16 22:25:03', '1723847103069.jpeg'),
(16, 'Diaario del sol', 'Bryhan', 'Drama', 80000, 89, '2024-08-16 22:28:14', '2024-08-16 22:28:14', '1723847294480.jpeg'),
(17, 'Diaario del sol', 'Bryhan', 'Drama', 80000, 89, '2024-08-16 22:29:29', '2024-08-16 22:29:29', '1723847369514.jpeg'),
(18, 'Bad Boys', 'Bryhan', 'Drama', 80000, 89, '2024-08-16 22:31:02', '2024-08-16 22:31:02', '1723847462108.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `correo` varchar(255) NOT NULL,
  `contraseña` varchar(255) NOT NULL,
  `rol` enum('Administrador','Estudiante') NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `nombre`, `correo`, `contraseña`, `rol`, `createdAt`, `updatedAt`) VALUES
(1, 'Bryhan', 'bryhan@gmail.com', '$2b$10$Pq0M37DU6VGL08wIldZe.eR86CjYFoYrDqGE5AmU3tMmufKPJ06yG', 'Administrador', '2024-08-16 20:17:37', '2024-08-16 20:17:37'),
(2, 'trabajo', 'trabajo@gmail.com', '$2b$10$En.ztJfsQ9KP/bQoEXrOpu97TBAVfh8rRjSuOkdr8ZNLA7D4mgpkW', 'Estudiante', '2024-08-16 20:19:35', '2024-08-16 20:19:35'),
(3, 'Alejandra', 'Alejandra@gmail.com', '$2b$10$FouGvaT8KcWibDZvOb6MVeZb4nhe1pAgTWakjs/pOGiNU6FgtxzA2', 'Administrador', '2024-08-16 20:31:55', '2024-08-16 20:31:55'),
(4, 'Graciela', 'graciela@gmail.com', '$2b$10$EXGXZ.MJwpkqWJd9nDeBOOsDbIJZIgM1a.WttHbqRmHAcMYfYFtZu', 'Estudiante', '2024-08-16 20:41:46', '2024-08-16 20:41:46'),
(5, 'Diego Cortex', 'diego@gmail.com', '$2b$10$YVE0dCE0qHiCBRPxydLHOO23KGbiqJqJp/HjytFTmtaSh061odEAa', 'Administrador', '2024-08-16 20:46:36', '2024-08-16 20:46:36'),
(7, 'Isabella', 'isa@gmail.com', '$2b$10$eCIXimN3TNDyuCOkyvyh7OI1NxtPV9IOfbGko8jt0WsliXZ2EO1wW', 'Estudiante', '2024-08-16 20:55:04', '2024-08-16 20:55:04'),
(8, 'prueba', 'prueba@gmail.com', '$2b$10$rs1tC5YkEZPCPjyiMx.SZueI95293zu5sBA/mfgPedEN05hxd/lRK', 'Administrador', '2024-08-16 21:04:21', '2024-08-16 21:04:21'),
(9, 'Addy', 'addy@gmail.com', '$2b$10$IMixi1OFcc3Gs/16U4aZUO90LNlNyaesEFzclCkCNUwckMuEJO/T6', 'Administrador', '2024-08-16 21:41:05', '2024-08-16 21:41:05');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `libros`
--
ALTER TABLE `libros`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `correo` (`correo`),
  ADD UNIQUE KEY `correo_2` (`correo`),
  ADD UNIQUE KEY `correo_3` (`correo`),
  ADD UNIQUE KEY `correo_4` (`correo`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `libros`
--
ALTER TABLE `libros`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
