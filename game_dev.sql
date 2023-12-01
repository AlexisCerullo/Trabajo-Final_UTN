-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 30-11-2023 a las 23:52:03
-- Versión del servidor: 8.0.31
-- Versión de PHP: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `game_dev`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `novedades`
--

DROP TABLE IF EXISTS `novedades`;
CREATE TABLE IF NOT EXISTS `novedades` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(250) COLLATE utf8mb4_general_ci NOT NULL,
  `subtitulo` text COLLATE utf8mb4_general_ci NOT NULL,
  `cuerpo` text COLLATE utf8mb4_general_ci NOT NULL,
  `img_id` varchar(250) COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `novedades`
--

INSERT INTO `novedades` (`id`, `titulo`, `subtitulo`, `cuerpo`, `img_id`) VALUES
(21, ' Bastion: 10º aniversario', 'Un día como hoy, hace 10 años, nuestro primer juego Bastion hizo su debut en Summer of Arcade para Xbox 360.', 'El éxito inesperado de nuestro juego significó que nuestro equipo de siete (en ese momento) pudiera mantenerse unido y crear algo nuevo. ¡Y nos mantuvimos unidos, lo hicimos! Desde entonces, hemos creado Transistor, Pyre y Hades, y estamos tan emocionados como siempre de continuar y ver qué más podemos hacer.\r\n\r\nNo estaríamos aquí sin Bastion y todo el generoso apoyo que ha recibido de jugadores de todo el mundo. Gracias por jugar nuestro juego y creer en nuestro equipo.', 'o2pzsx2wp1rvf61inynp'),
(20, 'Oportunidad profesional: Ingeniero de jugabilidad', 'Buscamos un ingeniero de juego con experiencia para implementar, mejorar y mantener funciones y sistemas de juego en nuestro próximo título, Hades II.', 'Nuestro candidato ideal tiene un conocimiento profundo de los videojuegos, incluido el nuestro, y una comprensión experta de múltiples patrones de diseño de código y cómo aplicarlos a las funciones del juego, basándose en haber implementado sistemas de juego en varios títulos enviados. El candidato tiene una gran capacidad para leer y comprender las especificaciones de funciones del equipo de diseño, al mismo tiempo que hace suposiciones razonables en los casos en que no se proporcionan todos los detalles y tiene buenos instintos para pedir aclaraciones cuando sea necesario.\r\n\r\nEste es un puesto de tiempo completo que puede ser remoto o estar basado en nuestro estudio de San Francisco. Al menos cuatro de las horas de trabajo principales diarias del candidato deben coincidir entre las 9 a. m. y las 6 p. m. en la zona horaria del Pacífico.', 'xhubjzl8sncbsvfvyvvi'),
(19, 'HADES: ¡Llega a iOS a través de Netflix Games!', 'Hades, el juego de exploración de mazmorras roguelike ganador del Juego del año, llegará a dispositivos iOS, incluidos iPhone y iPad, ¡cortesía de Netflix Games!', 'Nos complace anunciar que Hades, nuestro juego de exploración de mazmorras roguelike ganador del Juego del año, llegará a dispositivos iOS, incluidos iPhone y iPad, ¡cortesía de Netflix Games! Revelada hoy en la Geeked Week \'23 de Netflix, esta es una traducción fiel de nuestro juego, que presenta toda la acción responsiva y las sorpresas disponibles en otras plataformas.\r\nTodos conocemos a Netflix como un servicio de transmisión de video de primer nivel. Además de eso, tu suscripción estándar también incluye una variedad de excelentes juegos que puedes descargar y jugar ahora mismo en dispositivos compatibles, ¡sin cargo adicional! Nos atrajo la oportunidad de presentar nuestro juego a la audiencia de Netflix y esperamos tener noticias de nuestros jugadores allí.\r\n¡Todo lo que necesitas es un dispositivo iOS compatible y una suscripción estándar a Netflix! Mientras inicias sesión en la aplicación Netflix en tu dispositivo, simplemente navega hasta la fila de juegos y busca Hades allí. Luego podrás descargar el juego y jugar todo lo que quieras.', 'lpucm1b1hgwiro1utptk');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `usuario` varchar(250) COLLATE utf8mb4_general_ci NOT NULL,
  `password` varchar(250) COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`) VALUES
(1, 'Alexis', '81dc9bdb52d04dc20036dbd8313ed055'),
(2, 'Martu', 'd93591bdf7860e1e4ee2fca799911215'),
(3, 'Flavia', '81dc9bdb52d04dc20036dbd8313ed055');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
