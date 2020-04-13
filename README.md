
## JAVASCRIPT REST API

## Install
``` $ npm install express ```
``` $ npm install body-parser ```
``` $ npm install ejs ```
``` $  npm install mongoose ```

## Task2. Javascript REST API Example
Implement an application in javascript which provides a REST API with endpoints for
searching, creating and deleting “server” objects:

## GET servers. Should return all the servers if no parameters are passed. When
server-id is passed as a parameter - return a single server or 404 if there’s no
such a server.

GETTING ALL THE ARTICLES

![](https://github.com/Ramiyashree/Hunger-stay-internship/blob/master/images/first.png.png)

GETTING SPECIFIC ID ARTICLE
![](https://github.com/Ramiyashree/Hunger_Stay_Internship/blob/master/images/Screenshot%20(126).png)


## PUT a server. The server object is passed as a JSON-encoded message body.
Here’s an example:
{
“name”: ”my centos”,
“id”: “123”,
“Language”:” java”,
“Framework”:” Django”
}

REPLACING AN ARTICLE
![](https://github.com/Ramiyashree/Hunger_Stay_Internship/blob/master/images/Screenshot%20(128).png)

## DELETE a server. The parameter is a server ID.

DELETING SPECIFIC ARTICLE
![](https://github.com/Ramiyashree/Hunger_Stay_Internship/blob/master/images/Screenshot%20(129).png)
## GET (find) servers by name. The parameter is a string. Must check if a server
name contains this string and return one or more servers found. Return 404 if
nothing is found.
“Server” objects should be stored in a MongoDB database.
Be sure that you can show how your application responds to requests using postman,
curl or any other HTTP client

GETTING SPECIFIC USERNAME ARTICLE
![](https://github.com/Ramiyashree/Hunger_Stay_Internship/blob/master/images/Screenshot%20(127).png)
