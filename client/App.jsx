
import $ from 'jquery';
import 'styles/main.scss';
import todos from 'pages/todo';
import project from 'pages/project';
import funnySquares from 'pages/funnySquares';
import header from 'components/header';

$(function(){

  header.init();

  // what page are we on?
  var url = window.location.pathname;

  // our first javascript router
  switch (url) {
    case '/pages/todo.html':
      todos.init();
    break;
    case '/':
      // init the project javascript
      // home.init();
    break;
    case '/pages/funnySquares.html':
      funnySquares.init();
    break;
  }

  // Fancy Console Message for Developers
  console.log("================================");
  console.log("================================");
  console.log("=====I am looking for a job=====");
  console.log("================================");
  console.log("============call me=============");
  console.log("================================");
  console.log("================================");

});

