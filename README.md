
# Workout Tracker
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) 

## Table of contents

1. [Description](#description)

2. [Install Guide](#install)

3. [Usage](#usage)

4. [license](#license)

5. [Screenshots](#screenshots)

6. [URL](#urls)
        
<div id="description"/>
        
## Description
```
A workout App that helps users to view, create and track daily workouts.
```
        
<div id="install"/>
        
## Installation Instruction
```
NodeJS for server side run time environment, express for handling api and html routes, and mongoose which is a ODM(Object Data Modeling) for MongoDB and Node JS.
```
        
<div id="usage"/>
        
## Usage

* When the app starts off, it shows the summary of the last workout, if any
* If not, you can start off with a new workout and associated exercises. 

* A new workout has one of more exercises. 
* The exercise is Resistance type or Cardio with each having few properties for the user to enter, like type of the exercise, durations, reps, etc. 
* After adding an exercise, the user can continue adding more exercises to the workout or click complete workout, which will show the summary of that workout. 
* There is also a dashboard menu option which will show the stats of the 7 days of workout.
     
<div id="license"/>
        
## License
```
MIT
```

<div id="credits"/>
        
## Credits

* Keiren Anthony - Pointed to right resources for Mongo Atlas and using Mongoose Virtuals for deriving cumulative of fields.
* Sammantha Sassenick - Helped with clarifying doubts on a route and Model
* Niel McKenzie - helped with Mongo Atlas collection setup


<div id="screenshots"/>
        
## Screenshots    
1) Last Workout Summary while loading home page:

![Screen #1](/public/Assets/Screenshot_Last_Workout_Summary.PNG)

2) Resistance Workout Form:

![Screen #2](/public/Assets/Screenshot_Resistance_Type_Exercise.PNG)

3) Cardio Workout Form:

![Screen #3](/public/Assets/Screenshot_Cardio_Type_Exercise.PNG)

4) Workout Dashboard:

![Screen #4](/public/Assets/Screenshot_Dashboard.PNG)
       
<div id="urls"/>
        
## URLS:

GitHub Repository: https://github.com/meenaambalam/Workout_Tracker

Application URL: https://ur-workout-tracker.herokuapp.com/
