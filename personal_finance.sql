CREATE TABLE `users` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `full_name` varchar(100) NOT NULL,
  `email` varchar(50) UNIQUE NOT NULL,
  `user_name` varchar(20) NOT NULL,
  `password` varchar(30) NOT NULL,
  `created_at` timestamp DEFAULT "now()",
  `avatar` varchar(255)
);

CREATE TABLE `expenses` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `spent_date` timestamp NOT NULL,
  `description` varchar(100) NOT NULL,
  `amount` decimal(10, 2) NOT NULL,
  `necessary_spent` integer NOT NULL DEFAULT 1,
  `user_id` integer,
  `category_id` integer
);

CREATE TABLE `category_expense` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `type` varchar(20) NOT NULL,
  `created_at` timestamp DEFAULT "now()",
  `updated_at` timestamp DEFAULT "now()",
  `status` integer NOT NULL DEFAULT 1
);

CREATE TABLE `saving_goal` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `goal_name` varchar(50) NOT NULL,
  `type_goal` varchar(50) NOT NULL,
  `monthly_savings` decimal(10, 2) NOT NULL,
  `goal_saving` integer NOT NULL DEFAULT 1,
  `user_id` integer
);

ALTER TABLE `expenses` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

ALTER TABLE `expenses` ADD FOREIGN KEY (`category_id`) REFERENCES `category_expense` (`id`);

ALTER TABLE `saving_goal` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
