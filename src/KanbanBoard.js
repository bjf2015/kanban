import React, { Component, PropTypes } from 'react';
import List from './List';

class KanbanBoard extends Component {
render(){
 return (
  <div className="app">
    <List id='todo' taskCallbacks={this.props.taskCallbacks} title="To Do" cards={
    this.props.cards.filter((card) => card.status === "todo")
    } />

    <List id='in-progress' taskCallbacks={this.props.taskCallbacks} title="In Progress" cards={
    this.props.cards.filter((card) => card.status === "in-progress")
    } />

    <List id='done' taskCallbacks={this.props.taskCallbacks} title='Done' cards={
    this.props.cards.filter((card) => card.status === "done")
    } />

    <List id='waiting' taskCallbacks={this.props.taskCallbacks} title="Waiting" cards={
    this.props.cards.filter((card) => card.status === "waiting")
    } />

  </div>
 );
 }
}

KanbanBoard.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object),
  taskCallbacks: PropTypes.object,
};
export default KanbanBoard;