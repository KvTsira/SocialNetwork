# Social Network API


# User Story
* AS A social media startup
* I WANT an API for my social network that uses a NoSQL database
* SO THAT my website can handle large amounts of unstructured data

# Acceptance Criteria
* GIVEN a social network API
* WHEN I enter the command to invoke the application
* THEN my server is started and the Mongoose models are synced to the MongoDB database
* WHEN I open API GET routes in Insomnia for users and thoughts
* THEN the data for each of these routes is displayed in a formatted JSON
* WHEN I test API POST, PUT, and DELETE routes in Insomnia
* THEN I am able to successfully create, update, and delete users and thoughts in my database
* WHEN I test API POST and DELETE routes in Insomnia
* THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list

 ## Description

This is a set of API for a social network that uses a MongoDB database so that the website can handle large amounts of unstructured data, Express.js for routing, Mongoose ODM

## Table of Contents

  * [Installation](#installation)

  * [License](#license)

  * [Contributors](#contributors)

  * [Questions](#questions)


  ## Installtion
  This repo is not to be deployed, if you wanted to, you could by doing the following:

* Download the repo files from the link below
* You must have mongoDB installed
* Run the following at the command line
* - npm init -y
* - npm install express
* - npm install mongoose
* - npm start
* Open Insomnia to test API routes


  ## License
  This app is licensed under the MIT license.

  ## Contributors
  Contributors: Tsira [(@KvTsira)](https://github.com/KvTsira)

  ## Questions 
  Please contact tsira at kvtsira@gmail.com if there are any questions about this challenge. 
