-- 🌟 Exercise 1: DVD Rental
-- Instructions
-- Get a list of all the languages, from the language table.
SELECT * FROM language;

-- Get a list of all films joined with their languages – select the following details : film title, description, and language name.
SELECT title, description, name AS language FROM film JOIN language ON film.language_id = language.language_id;

-- Get all languages, even if there are no films in those languages – select the following details : film title, description, and language name.
SELECT title, description, name AS language_name FROM film RIGHT JOIN language ON film.language_id = language.language_id;

-- Create a new table called new_film with the following columns : id, name. Add some new films to the table.
CREATE table new_film (id SERIAL NOT NULL PRIMARY KEY, name VARCHAR(255) NOT NULL);
INSERT INTO new_film (name) VALUES ('Star Wars'), ('Scarface'), ('Avatar'), ('Cinema Paradiso'), ('Meet The Fockers');

-- Create a new table called customer_review, which will contain film reviews that customers will make.
-- Think about the DELETE constraint: if a film is deleted, its review should be automatically deleted.
-- It should have the following columns:
-- review_id – a primary key, non null, auto-increment.
-- film_id – references the new_film table. The film that is being reviewed.
-- language_id – references the language table. What language the review is in.
-- title – the title of the review.
-- score – the rating of the review (1-10).
-- review_text – the text of the review. No limit on the length.
-- last_update – when the review was last updated.

-- Add 2 movie reviews. Make sure you link them to valid objects in the other tables.

-- Delete a film that has a review from the new_film table, what happens to the customer_review table?