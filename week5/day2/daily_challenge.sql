--In this exercise we will be using the actors table from todays lesson.

--1. Count how many actors are in the table.
SELECT COUNT(actor_id)
FROM actors;
--2. Try to add a new actor with some blank fields. What do you think the outcome will be ?
INSERT INTO actors (first_name, last_name)
VALUES ('Samuel L', 'Jackson');
--The outcome is an error, since all the columns are set to be be NULL, which means for each record, 
--all the columns must have a value.