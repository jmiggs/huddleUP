# huddleUP
## Background and Overview
HuddleUP is a single-page web and mobile application that allows users to host and sign up for sporting events 
filtered by: location, time, and type of sport. Want to play a pickup basketball game, but need players? Want to practice your tennis 
skills, but need a tennis partner? Look no further! Sign up for huddleUp! 

[Live Demo](https://huddleups.herokuapp.com/) 

## Funtionality and MVP
- [ ] Users authorization: sign up and log in users (including a demo login)
- [ ] Users can host events and signup for events 
- [ ] Users can search for events by: location, time, and type of sport
- [ ] Web and mobile applicatication with responsive design
- [ ] Production README

### Bonus Features 
- [ ] Users can be able to comment/chat on the sporting event page they are signed up for
- [ ] Implement Google Maps API
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

### Over The Weekend (May 9 and May 10, 2020)
Meetings at 11:30AM
- [X] Set up Git repo (Miguel)
- [X] Repo README (Ngoc)
- [X] AWS setup (Bryan and Dorian)
- [X] Mapping out frontend components and Visual (Dorian)
- [X] Splash page (Dorian)

### Week (May 11-15, 2020) -*Tentative* (Bryan and Ngoc will go where needed)
#### May 11 (Monday) - Day 1
- [X] User Authorization and Users can create and signup for events (Miguel)
- [X] Build login and signup page (Backend) (Dorian)
- [X] Build profile page (allows for editing) (Ngoc)
- [X] Create dashboard page that shows all events (Bryan)

#### May 12 (Tuesday) - Day 2
- [ ] User can edit profile and research Google Maps API (Miguel)
- [ ] Implement Amazon Web Services (AWS) (Dorian and Bryan)
- [ ] Layout page for an event (Bryan)
- [ ] Search engine and filter (Ngoc)
- [ ] Log in demo (Dorian)

#### May 13 (Wednesday) - Day 3
- [ ] User can search for event by: location, time, sporting event (Miguel and Bryan/Ngoc)
- [ ] Search in Navbar and search page (Dorian and Bryan/Ngoc)
- [ ] Push to Heroku

#### May 14 (Thursday) - Day 4
- [ ] Make app mobile friendly (Miguel and Bryan/Ngoc)
- [ ] Fix any CSS to make it responsive (Dorian and Bryan/Ngoc)

#### May 15 (Friday) - Day 5
- [ ] Seed database (Everyone)
- [ ] Finish testing and debugging (Miguel and Bryan/Ngoc)
- [ ] Complete Production README.md (Ngoc)
- [ ] Refine CSS styling and design (Dorian)

### Last weekend (May 16 and May 17, 2020)
- [ ] Finish any work that should've been done by now
- [ ] Work on bonus features
