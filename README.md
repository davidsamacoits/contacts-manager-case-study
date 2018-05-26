# Contacts Manager Case Study 👥

## Introduction

Simple contacts manager application case study

## Roadmap

✅ Create git repo and README.md  
✅ Set up work environment  
✅ Set up mock server  
✅ Build JSON mocks  
⬜️ Set up app boilerplate  
⬜️ Install and add packages to the app  

## Mock server

Because I wanted to implement *“real”* network calls, I decided to use the (very) handy [json-server](https://github.com/typicode/json-server) to mock my REST API. You'll need to run it locally before starting your app. See the [Run the app](#run-the-app) section down below for more details about instructions to run the app.

## Run the app

You'll need to follow those steps in order to run the app on your computer (assuming you already have npm installed) :
1. Clone this repo on your compouter
2. Install [json-server](https://github.com/typicode/json-server) globally using npm   
```bash
npm i -g json-server
```
3. Go into the `server` folder
4. Start the mock server
```bash
json-server contacts.json --port 3004
```