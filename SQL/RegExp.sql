-- city names that do not end in vowels
SELECT DISTINCT CITY FROM STATION WHERE CITY NOT RLIKE '[aeiou]$'

-- city names that do not start with vowels
SELECT DISTINCT CITY FROM STATION WHERE CITY NOT RLIKE '^[aeiou]';

SELECT DISTINCT CITY FROM STATION WHERE CITY NOT RLIKE '[aeiou]$' OR CITY NOT RLIKE '^[aeiou]';