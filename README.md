# Contacts Manager Case Study 👥

## Introduction

Simple contacts manager application case study

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
✅ Add fiters (A-Z, Z-A and search by name)    
✅ Delete contact    
⬜️ Add contact    
⬜️ Edit contact    
⬜️ Write unit tests  
⬜️ Add animations and transitions  
⬜️ Handle unavailable API

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