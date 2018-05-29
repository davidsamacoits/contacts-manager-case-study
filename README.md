# Contacts Manager Case Study 👥

## Introduction

With this case study I intented to showcase some of my skills and knowledge by building a contacts management app in a couple days. Therefore, some of my technological choices aren't the most simple nor the most optimized ones. 

(https://github.com/davidsamacoits/contacts-manager-case-study/blob/master/screenshot.png "Screenshot")

Some of the packages I used for this project :
* [React](https://github.com/facebook/react)
* [Redux](https://github.com/reduxjs/react-redux)
* [React Router](https://github.com/ReactTraining/react-router)
* [Redux Saga](https://github.com/redux-saga/redux-saga)
* [Node Sass Chokidar](https://github.com/michaelwayman/node-sass-chokidar) 
* [JSON server](https://github.com/typicode/json-server)

## Roadmap

✅ Create git repo and README.md  
✅ Set up work environment  
✅ Set up mock server  
✅ Build JSON mocks  
✅ Set up app boilerplate  
✅ Install and add packages to the app  
✅ Add a CSS Preprocessor (SASS)  
✅ Design a lovely UI  
✅ Create components (directory, cards, detail...)  
✅ Set up directory page    
✅ Create panel for creation and edition   
✅ Add fiters (A-Z, Z-A and search by last name)    
✅ Delete contact    
✅ Add contact    
✅️ Edit contact    
✅️ Write some unit tests  
✅ Add animations and transitions  
✅️ Adding notifications boxes 

## Mock server

Because I wanted to implement *“real”* network calls, I decided to use the (very) handy [json-server](https://github.com/typicode/json-server) to mock my REST API. You'll need to run it locally before starting your app. See the [Run the app](#run-the-app) section down below for more details about instructions to run the app.

The server is returning a JSON array and each contact object looks like this :

```json 
{
  id: "U77cba987a43cb0f0e82",
  firstName: "Adam",
  lastName: "Brodowski",
  jobTitle: "QA",
  phoneHome: "975-235-5323",
  phoneWork: "235-566-1385",
  email: "adam@brodowski.com",
  picture: "https://tinyfac.es/data/avatars/FBEBF655-4886-455A-A4A4-D62B77DD419B.jpeg"
}
```

## Run the app

You'll need to follow those steps in order to run the app on your computer (assuming you already have npm installed) :
1. Clone this repo on your computer
2. Install [json-server](https://github.com/typicode/json-server) globally using npm   
```bash
$ npm i -g json-server
```
3. Go into the `server` folder
4. Start the mock server
```bash
$ json-server contacts.json --port 3004
```
5. Open a new terminal and run
```bash
$ npm i && npm start
```
6. Enjoy! 😎

## Tests

I wrote a couple tests, you can run them using 
```bash
$ npm run test
```

## What's next

Some features could be optimized.

For instance, input fields should display whether the content is valid or not instead of having only one generic big error message.

All sagas, reducers, components and helpers should be tested to ensure everything is working as intended, even after modifications.

Currently this app isn't very optimized for mobile devices. Working with `media queries` should help having a better render on smartphones & tablets.