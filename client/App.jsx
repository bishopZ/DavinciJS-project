
import $ from 'jquery';
import 'styles/main.scss';
import TodoListView from 'pages/todoReact/todoListView';
import photoSearch from 'pages/photoSearch';
import funnySquares from 'pages/funnySquares';
import formsBackbone from 'pages/formsBackbone';
import header from 'components/header';

$(function(){

  header.init();

  // what page are we on?
  var url = window.location.pathname;

  // our first javascript router
  switch (url) {
    case '/pages/todo.html':
      var todoListView = new TodoListView();
    break;
    case '/':
      // init the project javascript
      // home.init();
    break;
    case '/pages/photoSearch.html':
      photoSearch.init();
    break;
    case '/pages/funnySquares.html':
      funnySquares.init();
    break;
    case '/pages/formsBackbone.html':
      formsBackbone.render();
    break;
    default: break;
  }

  // Fancy Console Message for Developers
  // console.log('================================');
  // console.log('=====I am looking for a job=====');
  // console.log('============call me=============');
  // console.log('================================');

});

