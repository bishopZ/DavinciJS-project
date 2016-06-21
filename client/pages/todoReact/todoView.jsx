
import React, { PropTypes } from 'react';

var TodoItem = React.createClass({
  propTypes: {
    data: PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      completed: PropTypes.bool,
      isEditing: PropTypes.bool
    }),
    controller: PropTypes.object
  },
  render: function(){
    var todo = this.props.data;

    var title = <div className="col-sm-10" onClick={this.titleClick}>{todo.title}</div>;
    if (todo.isEditing) {
      title = <div className="col-sm-10"><input type="text" className="form-control title-edit-input" value="{todo.title}" onKeypress={this.editKeypress}></input></div>;
    }

    return (
      <div>
        <div className="col-sm-1">
          <input type="checkbox" checked={todo.completed} onChange={this.handleComplete}></input>
        </div>
        {title}
        <div className="col-sm-1">
          <button type="button" aria-label="Close" onClick={this.handleClose}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      </div>
    );
  },
  handleComplete: function(){
    this.props.controller.model.itemCompleted(this.props.data.id, !this.props.data.completed);
  },
  handleClose: function(){
    // remove todo
  },
  titleClick: function(){
    this.props.controller.model.startEditing(this.props.data.id);
  },
  editKeypress: function(){
    // if esc stop editing
    // if return confirm edit
  }
});

module.exports = TodoItem;
