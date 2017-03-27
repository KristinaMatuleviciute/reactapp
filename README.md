
# Assignment 1 - ReactJS app

- __Lead Maintainer:__ [Kristina Matuleviciute][Lead]

## Overview
Simple app with [ReactJS] - for client side, [Webpack] for module bundle and [Expressjs] for server side.
3 views: Home page, Table with friends' contacts information and add, delete functions, Picture gallery as a slide show. This application is responsive, all views are availble in smaller screens.


 + Feature 1 - Home page with image and text.
 + Feature 2 - Slide-show of pictures , with manual control and auto play .
 + Feature 3 - Table, displaying friends details: name, surname, email, phone number with add and delete functions, data is saving to user.json file.
 + Feature 4 - Responsive navigation.

## Installation requirements

## Install

To install the app locally, simply clone the repo,

```
git clone https://github.com/KristinaMatuleviciute/reactapp.git
cd reactapp
```

Next, install and build via npm,

```
npm install
```

## Running

To build app run:

```
npm run build
```

To start Express server run:

```
npm run start
```

Which will start on port [3010].

Or you can start React server instead of npm run start just run:

```
npm run start-react-server
```

Which will start on port [8080].

Also you can watch the files for changes and automatically rebuild the sources running this command in a different terminal window:

```
npm run watch
```

## App Component Design

## UI Design

### Home Page
![][image1]

### Picture Gallery
![][image2]

### Contacts table
![][image3]

## Routing in client side :
Using react-router
+ Route path='index' name='index' component={Index} - displays Homepage
+ Route path='gallery' name='gallery' component={Gallery} - displays view of Picture Galerry
+ Route path='table' name='table' component={ContactTable}- displays view of Contact Table

## Routing between server side and client side:
+ /submit - submits friend's details on form submition to users.json file.
+ /getlist - gets details of all friends from server side users.json file to front end table.
+ /delete/:id - deletes friend's details by id from users.json file.


## Independent learning.

I implemmented Webpack for module bunduling and Experessjs for server side. For navigation between Reactjs components I used react-router.  As well I implemented npm module react-slick for slide show, which has auto play and manual control . I created a table with add and delete functions with ajax calls between server side and client side and all entries is saved in user.json file in server side. For ui features: responsve navigation, table, buttons I am using react-bootsrap.

## License

Copyright (c) 2017, Kristina Matuleviciute. Licensed under [MIT].


[image1]:./client/assets/img/homepage.jpg
[image2]:./client/assets/img/galerry.jpg
[image3]:./client/assets/img/table.jpg
[Lead]: https://github.com/KristinaMatuleviciute
[3010]: http://localhost:3010/
[8080]: http://localhost:8080/
[mit]: ./LICENSE
[ReactJS]: https://facebook.github.io/react/
[Webpack]: https://webpack.github.io/
[Expressjs]: https://expressjs.com/
