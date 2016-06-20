
// React View Layer
// import $ from 'jquery';
import React, { PropTypes } from 'react';

var TodoApp = React.createClass({
  propTypes: {
    data: PropTypes.shape({
      title: PropTypes.string,
      completed: PropTypes.bool,
      id: PropTypes.number      
    }),
    controller: PropTypes.object
  },
  render: function(){
    var data = this.props.data;
    return (
      <div>
        <div className="col-sm-1">
          <input className="completed-checkbox" type="checkbox" checked={data.completed} onChange={this.completeHandler}></input>
        </div>
        <div className="col-sm-10 title" onClick={this.clickHandler}>{data.title}</div>
        <div className="col-sm-10 title-edit hidden">
          <input type="text" className="form-control title-edit-input" value={data.title} onChange={this.editHandler}></input>
        </div>
        <div className="col-sm-1">
          <button type="button" className="close" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      </div>
    );
  },
  clickHandler: function(){
    debugger;
  },
  editHandler: function(){
    debugger;
  },
  completeHandler: function(){
    debugger;
  }
});

module.exports = TodoApp;

// var $ = require('jquery');
// import Backbone from 'backbone';
// import Handlebars from 'handlebars';
// import todoItemTemplate from 'templates/todoItem.html';

// // Item View

// var TodoItemView = Backbone.View.extend({
//   tagName: 'li', // el = <li class="list-group-item"></li>
//   className: 'list-group-item row',
//   events: {
//     'click .close': 'removeItem',
//     'change .completed-checkbox': 'completedClicked',
//     'click .title': 'titleClicked',
//     'keypress .title-edit-input': 'titleEditConfirm'
//   },
//   template: Handlebars.compile(todoItemTemplate),
//   initialize: function(todo, controller){
//     this.controller = controller;
//     this.data = todo;
//     this.render();
//   },
//   render: function(){
//     this.$el.html(this.template(this.data));
//     this.$title = this.$el.find('.title');
//     this.$titleEdit = this.$el.find('.title-edit');
//     this.$titleInput = this.$titleEdit.find('.title-edit-input');
//     this.$el.toggleClass('disabled', this.data.completed);
//   },
//   removeItem: function(){
//     this.controller.removeItem(this.data.id);
//   },
//   completedClicked: function(event){
//     var isChecked = $(event.target).is(':checked');
//     this.controller.itemCompleted(this.data.id, isChecked);
//   },
//   titleClicked: function(){
//     this.$title.addClass('hidden');
//     this.$titleEdit.removeClass('hidden');
//     this.$titleInput.focus();
//   },
//   titleEditConfirm: function(event){
//     // they hit the enter key
//     if (event.which === 13) {
//       var newTitle = this.$titleInput.val();
//       this.controller.titleEdit(newTitle, this.data.id);    
//     }
//   }
// });

// module.exports = TodoItemView;
