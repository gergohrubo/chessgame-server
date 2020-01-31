<h1 align="center">
  <b>♟️</b><br>
  <b>Chess app</b><br>
</h1>

<h4 align="center">Multiplayer chess game</h4>


### This is the backend part of my Chess app. You can view the [frontend](https://github.com/gergohrubo/chessgame-client), or checkout the [deployed version](https://chessgame-codaisseur-nadia-gergo.netlify.com/)

#### Please note that this app was put together during a hackathon, and as such its git usage is not exemplary. :slightly_smiling_face: If you want to see disciplined git usage please check out my [other portfolio project](https://github.com/gergohrubo/food-footprint-client)

## Table of contents

* [What is this project about](#what-is-this-project-about)
* [Technologies used](#technologies-used)
* [Rules implemented](#rules-implemented)
* [How to use](#how-to-use)

## What is this project about

#### The purpose of the project is to

* Practice Server Sent Events by building a turn-based multiplayer game
* Practice proper state management with React/Redux when data is received through stream
* To solve the challenge of implementing the rules of chess
* To showcase disciplined git usage

## Technologies used

* ExpressJS
* Server Sent Events
* Sequelize
* PostgreSQL
* Heroku

## Rules implemented

Rule | Is implemented?
------------ | -------------
Validations for moves | :white_check_mark:
Capturing opponent piece | :white_check_mark:
If the opponent king is in check | :white_check_mark:
Castling | :white_check_mark:
If the opponent is in check-mate | :x:
En Passant | :x:

## How to use

After signup and login you can browse through games through the homepage or create a new one.

![upload image](https://github.com/gergohrubo/chessgame-client/blob/master/src/images/screenshot1.png)

When clicking on a game you get to the game's page where you can join as black or white


![upload image](https://github.com/gergohrubo/chessgame-client/blob/master/src/images/screenshot2.png)

Enjoy playing :slightly_smiling_face:
