--SELECT LEFT is alternative to SUBSTRING

-- SELECT NAME, LEFT (OCCUPATION, 1) AS OCC FROM OCCUPATIONS;
SELECT CONCAT(NAME,CONCAT('(',SUBSTRING(OCCUPATION, 1, 1),')')) 
FROM OCCUPATIONS ORDER BY NAME ASC;

SELECT 'There are a total of', COUNT(OCCUPATION) AS COUNT, CONCAT(LOWER(OCCUPATION),'s.') AS OCC
FROM OCCUPATIONS GROUP BY OCCUPATION ORDER BY COUNT ASC, OCC ASC;

-- OUTPUT: using concat to add the () around 
-- the first letter of the occupation (substring or left)
/**
Priyanka(P) 
Samantha(A) 
There are a total of 3 doctors. 
There are a total of 4 actors.
*/