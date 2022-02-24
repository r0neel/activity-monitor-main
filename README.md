# activity-monitor-main

<!-- badges -->
[![ISC license](https://img.shields.io/badge/License-ISC-blue.svg)](https://www.isc.org/licenses/)
[![GitHub latest commit](https://img.shields.io/github/last-commit/Ultra-Instinct-js/activity-monitor-main.svg)](https://github.com/Ultra-Instinct-js/activity-monitor-main/commit/)
[![GitHub forks](https://img.shields.io/github/forks/Ultra-Instinct-js/activity-monitor-main.svg)](https://github.com/Ultra-Instinct-js/activity-monitor-main)

Top level repository for Activity Monitor a habit tracking website using node express and MongoDB created as part of a group project week. 
For more information see the client and server repos.  

## Installation & Usage

1. Clone this repo using `git clone git@github.com:Ultra-Instinct-js/activity-monitor-main.git`
2. Enter the directory `cd activity-monitor-main`
3. Initialise submodules `git submodule init && git submodule update`
   
* `npm start` to run docker environment (client, API server, MongoDB database).
  * Client exposed at `localhost:8000`
  * API server exposed at `localhost:3000`
  * MongoDB database exposed at `localhost:27017`
* `npm stop` to stop and remove all containers and volumes.
* `npm test` to run a full integration test.

## Project Goal

Build a habit tracking website where users can make an account and create habits for themselves to track and update.

### Other requirements:

* Users should be able to choose the frequency that they want to track the habit.
* Users should be able to see that their habit is complete as well as their most recent completion streak.

## Design & Implementation

### Architecture

* [Container Level Diagram](https://cdn.discordapp.com/attachments/941414409203486751/944315580008239114/unknown.png)
* [Component Level Diagram](https://cdn.discordapp.com/attachments/941414409203486751/944315723361173544/unknown.png)

### Technologies

* Client
  * [HTML5](https://developer.mozilla.org/en-US/docs/Glossary/HTML5)
  * [Bootstrap](https://getbootstrap.com/)
* API Server
  * [Express](https://expressjs.com/)
  * [JSON Web Token](https://jwt.io/)
  * [bcrypt](https://github.com/kelektiv/node.bcrypt.js)
* Database
  * [MongoDB](https://www.mongodb.com/)

## Changelog

* Changed project name to Activity Monitor
* Added database schema for validation.
* Added .env file for environment variables.

## License

* [ISC License](https://www.isc.org/licenses/)
