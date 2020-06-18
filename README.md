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

#### MongoDB and Express

Here is an example of a route to fetch an event from MongoDB:

```javascript
// ./api/activities.js

// get activity by ID
router.get('/:id', (req, res) => {
  Activity.findById(req.params.id)
    .then(activity => res.json(activity)) 
    .catch(err =>
        res.status(404).json({ noactivityfound: 'No Activity found with that ID' })
    );
});
```
The frontend will make a GET request to this specific route, using `/api/activities/:id`, with the `:id` being the identifier for the target event.

The `router` is configured via **Express.js** with our MongoDB, and so when the GET route above is hit, the request is then sent over to MongoDB to retrieve the target information.

Then we simply return the result of that request in json, for the frontend to store in Redux State and use accordingly! Here's what that result looks like in the Redux State:

```javascript
data:
 date: "2020-06-16T19:35:14.092Z"
 day: "2020-06-05"
 description: ""
 host: "5ebc6a478029cd4c5881d5e9"
 lat: 40.933584
 lng: -73.7623571
 location: "1 Washington Square, Larchmont, NY 10538, USA"
 numplayersneed: 3
 participants: ["5ebc6a478029cd4c5881d5e9"]
 sport: "basketball"
 time: "9:30AM"
 title: "Shoot some hoops"
...
...
```

The frontend now has access to information for the target event and can render that information!

### Frontend
* **React**: Frontend Javascript Library
* **Node.js**: Javascript Runtime Environment
* **Google Maps API**

We will be using React's frontend Javascript library for building user interfaces and Node to configure our application's server providing us with the benefit
of Javascript's asynchronicity, which will allow us to process two requests simultaneously (e.g.
a user's information and an event's information).

#### Google Maps API

One of the fun parts of building this project was including a Google Maps into the application. One functionality of Google Maps in our application is displaying map markers for all events of a certain sport type, and allowing the user to filter those events by: **location (the current area displayed on the map), time, and by date.**

Here's an example of what that looks like:

![GoogleMaps1](https://i.imgur.com/GRNg0JQ.gif)

As you can see from above, the events are being filtered by the  **location (the current area displayed on the map), time, and by date**, as stated previously!

To make this work, first the Google Map must be configured in our component. As soon as the component mounts, this function is invoked:

```javascript
  componentDidMount() {
    const mapOptions = {
      center: { lat: 37.798887, lng: -122.401373 }, 
      zoom: 11
    };
    // puts map on the page
    const map = this.refs.map;
    this.map = new google.maps.Map(map, mapOptions);

    // create class MapMarker that helps place markers on the map
    this.mapMarker = new MapMarker(this.map);
    this.mapMarker.updateMarkers(this.props.activities);

    // activate event handlers exclusive to the map
    this.registerListeners();
  }
```

The `mapOptions` constant sets the default properties of the new map. It will zoom in at level 11 and, it's center will be configured at those latitude and longtitude coordinates. That is actually the center of San Francisco!

The `map` constant creates a refernce to this div within the component's render function:

```javascript
  <div className="map-this" ref="map">
    Map
  </div>
```
Then this line of code `new google.maps.Map(map, mapOptions)` instantiates a new Google Map into the component.
Finally, we register event listeners for the map. Here's what that function looks like:

```javascript
  registerListeners() {

    // when the map on the page is idle, the callback fx is invoked.
    // the call back grabs the maps current idle bounds, and formats it in a way that the updateFilter function
    // can use to send to the backend.
    
    google.maps.event.addListener(this.map, 'idle', () => {
      const { north, south, east, west } = this.map.getBounds().toJSON();
      const bounds = {
        northEast: { lat: north, lng: east },
        southWest: { lat: south, lng: west } 
      };
      
     // These promises update the ui slice of state with bounds as filters
     // and then uses those filters to grab the locations that satisfy the filters

     const p1 = new Promise( (resolve, reject)=> {
       this.props.updateFilter('bounds', bounds);
       ...
     })

     const p2 = new Promise( (resolve, reject) => {
       this.props.fetchActivitiesFiltered()
     })

     p1.then(()=> p2)
      
    });
  }
 ```
As seen in the Backend section, each event has latitude and longtitude coordinates. With this configuration, latitude and longtitude filters are being set that will be used to find events within those filters!

Some notes; the `updateFilter()` and `fetchActivitiesFiltered()` are wrapped in promises to ensure that the **filters are updated within state FIRST**, and THEN the fetch of activities happens.

The filters for time and date work very similarly with a function containing:
```javascript
  const p1 = new Promise( (resolve, reject) => {
    updateFilter(filter, [e.currentTarget.value]);
    resolve()
  })
  const p2 = new Promise( (resolve, reject) => {
    fetchActivitiesFiltered()
    resolve()
  })

  p1.then(() => p2)
```

The `filter` and `e.currentTarget.value` is passed in dynamically depending on what the user clicks, The process of saving those filters in state and consequently fetching activities by those filters occurs!


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

