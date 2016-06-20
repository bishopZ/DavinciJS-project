var $ = require('jquery');
import Backbone from 'backbone';
import Handlebars from 'handlebars';
import todoModel from 'pages/todo/todoModel';
import TodoItemView from 'pages/todo/todoViewReact';
import React from 'react';
import ReactDOM from 'react-dom';


// Controller View

var TodoControllerView = Backbone.View.extend({
  el: '.todo-container',
  model: todoModel,
  events: {
    'click .btn-add': 'addTodoItem'
  },
  initialize: function(){
    this.model.fetch();
    this.model.on('change', this.render, this);
  },
  render: function(){
    // render the todo items
    var todos = this.model.get('todos');
    var $ul = this.$el.find('.list-group');
    $ul.html('');
    var controller = this;
    todos.forEach(function(todo){
      $ul.append('<li class="list-group-item row"></li>');
      var domTarget = $ul.children().last()[0];
      ReactDOM.render(
        <TodoItemView data={todo} controller={controller} />,
        domTarget
      );
      // var view = new TodoItemView(todo, controller);
      // $ul.append(view.$el);
    });
    
  },
  addTodoItem: function(){
    var $input = this.$el.find('.input-name');
    var newTitle = $input.val();
    if (newTitle === '') { return; }
    this.model.addItem(newTitle);
    $input.val('');
    this.render();
  },
  removeItem: function(id){
    this.model.removeItem(id);
    this.render();
  },
  itemCompleted: function(id, isCompleted){
    this.model.itemCompleted(id, isCompleted);
    this.render();
  },
  titleEdit: function(newTitle, id){
    this.model.editTitle(newTitle, id);
    this.render();
  }
});

module.exports = TodoControllerView;
