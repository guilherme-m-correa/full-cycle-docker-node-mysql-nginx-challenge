# Full Cycle Docker Node + MySQL + Nginx Challenge

This is a challenge developed by Guilherme Corrêa on the course Full Cycle.

## Requirements

- [x] When a user accesses the browser in localhost:8080 the request must be proxied by nginx to the node server running on port 3000
- [x] The node server must be able to connect to the MySQL database running on port 3306 and give the response: `<h1>Full Cycle Rocks!</h1> + List of people from the database`

## Running

1. Clone this repository
2. Run `docker-compose up -d`
3. Access http://localhost:8080 in your browser
