-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 15-11-2019 a las 06:26:58
-- Versión del servidor: 10.4.6-MariaDB
-- Versión de PHP: 7.3.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bd_witter`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comentarios`
--

CREATE TABLE `comentarios` (
  `id` int(11) NOT NULL,
  `usuario` int(11) NOT NULL,
  `witte` int(11) NOT NULL,
  `texto` varchar(256) NOT NULL,
  `fecha` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `correo` varchar(150) NOT NULL,
  `contrasena` varchar(150) NOT NULL,
  `nombre` varchar(150) NOT NULL,
  `imagen` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `correo`, `contrasena`, `nombre`, `imagen`) VALUES
(1, 'shk', '81dc9bdb52d04dc20036dbd8313ed055', 'Eliseo Loría', 'default.png'),
(4, 'shk@gmail.com', '81dc9bdb52d04dc20036dbd8313ed055', 'Eliseo Loría', 'default.png'),
(6, 'eliseo@gmail.com', '81dc9bdb52d04dc20036dbd8313ed055', 'Eliseo L', 'imagen-2019-09-17-07-08-17.jpg'),
(7, 'm@gmail.com', '81dc9bdb52d04dc20036dbd8313ed055', 'Maicol', 'imagen-2019-09-17-07-11-08.jpg'),
(8, 'mchan@gmail.com', '81dc9bdb52d04dc20036dbd8313ed055', 'Maria', 'imagen-2019-09-17-07-11-56.jpg'),
(9, 'otro@correo.com', '81dc9bdb52d04dc20036dbd8313ed055', 'Otro', 'imagen-2019-09-17-08-52-03.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `wittes`
--

CREATE TABLE `wittes` (
  `id` int(11) NOT NULL,
  `usuario` int(11) NOT NULL,
  `texto` varchar(256) NOT NULL,
  `fecha` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `wittes`
--

INSERT INTO `wittes` (`id`, `usuario`, `texto`, `fecha`) VALUES
(17, 8, 'Hola que hace con esto', '2019-09-17 08:49:07'),
(18, 8, 'esto es otro que se va a cambiar', '2019-09-17 08:49:10');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `comentarios`
--
ALTER TABLE `comentarios`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_USU_COM` (`usuario`),
  ADD KEY `FK_WIT_COM` (`witte`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `wittes`
--
ALTER TABLE `wittes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_USU_WIT` (`usuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `comentarios`
--
ALTER TABLE `comentarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `wittes`
--
ALTER TABLE `wittes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `comentarios`
--
ALTER TABLE `comentarios`
  ADD CONSTRAINT `FK_USU_COM` FOREIGN KEY (`usuario`) REFERENCES `usuarios` (`id`),
  ADD CONSTRAINT `FK_WIT_COM` FOREIGN KEY (`witte`) REFERENCES `wittes` (`id`);

--
-- Filtros para la tabla `wittes`
--
ALTER TABLE `wittes`
  ADD CONSTRAINT `FK_USU_WIT` FOREIGN KEY (`usuario`) REFERENCES `usuarios` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
