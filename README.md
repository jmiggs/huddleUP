# huddleUP
## Background and Overview
HuddleUP is a single-page web and mobile application that allows users to host and sign up for sporting events 
filtered by: location, time, and type of sport. Want to play a pickup basketball game, but need players? Want to practice your tennis 
skills, but need a tennis partner? Look no further! Sign up for huddleUp! 

[Live Demo](https://huddleups.herokuapp.com/) 


![Splash Page](https://media.giphy.com/media/dyWvPAXq3tq7Q8pI2X/giphy.gif)


## Funtionality and MVP
- [X] Users authorization: sign up and log in users (including a demo login)

![User Auth](https://media.giphy.com/media/J3AUvjtaqNV4LYvEN2/giphy.gif)


- [X] Users can host events and signup for events 
- [X] Implement Google Maps API

![Hosting](https://media.giphy.com/media/Y1wHOViu6b4pB8AC2o/giphy.gif)

![Golf](https://media.giphy.com/media/S9zYwGndsnjH9aYpYf/giphy.gif)

![Unsubscribed](https://media.giphy.com/media/iJ7NfsBPFLw9NeGP8y/giphy.gif)



- [X] Users can search for events by: location, time, and type of sport

![Filter](https://media.giphy.com/media/TGW9id1IiDrKrlkVMM/giphy.gif)


- [ ] Users can create and update a profile

![Profile](https://media.giphy.com/media/horgl6EfFkPT4cBCNw/giphy.gif)

- [X] Production README

### Bonus Features 
- [ ] Users can be able to comment/chat on the sporting event page they are signed up for
- [ ] Web and mobile applicatication with responsive design
- [ ] Users can review other users who attended the same sporting event (give ratings for reliability, on-time, sportsmanship, etc.)
- [ ] Pictures of the locations

## Technologies and Challenges
### Architecture 
HuddleUP is built on MERN stack: MongoDB, Express, React, and Node.js for an easy and fast 
deployment of a full-stack web application.

### Backend
* **MongoDB**: Document-based NoSQL database that is scalable and "MERNible"
* **Express**: Web Application Framework for Node
* **Amazon Web Services (AWS)**: Cloud Computing Services

Users' informations and events will be stored as key-value pairs and within collections using MongoDB.
This will provide better read performances, easier capability to retrieve related data within a 
database query, and make it possible to update related data within a single operation.
Express allows us to write handlers to respond to HTTP verb requests for users and events and AWS 
will be used as a hosting service for our images and videos.

### Frontend
* **React**: Frontend Javascript Library
* **Node.js**: Javascript Runtime Environment 

We will be using React's frontend Javascript library for building user interfaces and Node to configure our application's server providing us with the benefit
of Javascript's asynchronicity, which will allow us to process two requests simultaneously (e.g.
a user's information and an event's information).

#### Challenges:
* Fetching data using MongoDB and organizing it for display in frontend
* Implementing AWS as an images and videos hosting service
* Implementing an effective search
* Designing a responsive web and mobile application

## Group Members and Work Breakdown
* **Backend Lead**: [Miguel Delacruz](https://github.com/jmiggs)
  * Focused on data management and the API endpoints of the application
* **Frontend Lead**: [Dorian Brown](https://github.com/DBsaiyan1321)
  * Focused on the UI and UX of the application
* **Flex**: [Bryan Linda](https://github.com/blindaa121)
  * Splits between frontend and backend based on the needs of the application
* **Flex**: [Ngoc Ly](https://github.com/ngocthily)
  * Splits between frontend and backend based on the needs of the application

## Future Features
* Make app mobile friendly
* Add events User are hosting 
