CREATE TABLE `usuarios` (
    `id` int PRIMARY KEY AUTO_INCREMENT NOT NULL,
  `email` varchar(255) NOT NULL,
  `senha` varchar(50) NOT NULL,
  `idade` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


INSERT INTO `usuarios` (`id`, `email`, `senha`, `idade`) VALUES
('1', 'euler.ferreira19@gmail.com', 'senhaForte123', '40'),
('2', 'igor.junior@gmail.com', 'senhaBemForte123', '10'),
('3', 'adriano.ferreira19@gmail.com', 'senhaModerada2030', '50');

-- exemplo do banco de dados da correção 

COMMIT;
