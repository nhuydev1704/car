CREATE TABLE `category` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`image` text,
	`created_at` integer DEFAULT (strftime('%s', 'now')),
	`updated_at` integer DEFAULT (strftime('%s', 'now'))
);
--> statement-breakpoint
CREATE TABLE `product` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`price` text NOT NULL,
	`category_id` integer NOT NULL,
	`description` text,
	`attribute` text,
	`images` text,
	`created_at` integer DEFAULT (strftime('%s', 'now')),
	`updated_at` integer DEFAULT (strftime('%s', 'now')),
	FOREIGN KEY (`category_id`) REFERENCES `category`(`id`) ON UPDATE no action ON DELETE no action
);
