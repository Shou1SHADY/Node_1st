

CREATE SCHEMA bms ;


-- bms.book definition

-- Drop table

-- DROP TABLE bms.book;

CREATE TABLE bms.book (
	book_id serial4 NOT NULL,
	book_title varchar(100) NOT NULL,
	book_description varchar(205) NOT NULL,
	book_author varchar(50) NOT NULL,
	book_publisher varchar(50) NOT NULL,
	store_code varchar(5) NOT NULL,
	created_on timestamp NOT NULL,
	created_by varchar(50) NOT NULL,
	book_pages int4 NULL,
	CONSTRAINT book_pkey PRIMARY KEY (book_id)
);


-- bms.store definition

-- Drop table

-- DROP TABLE bms.store;

CREATE TABLE bms.store (
	store_id serial4 NOT NULL,
	store_name varchar(100) NOT NULL,
	store_code varchar(5) NOT NULL,
	created_on timestamp NOT NULL,
	created_by varchar(50) NOT NULL,
	address varchar NOT NULL,
	CONSTRAINT store_pkey PRIMARY KEY (store_id)
);