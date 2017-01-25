import React from 'react';
import KanbanBoardContainer from './KanbanBoardContainer';
import ReactDOM from 'react-dom';
import './App.css';

let cardsList = [
  {
    id: 1,
    title: "Read the Book",
    description: "I should read the whole book",
    color: '#BD8D31',
    status: "in-progress",
    tasks: []
  },
  {
    id: 2,
    title: "Write some code",
    description: "Code along with the samples in the book",
    color: '#3A7E28',
    status: "todo",
    tasks: [
      {
        id: 1,
        name: "ContactList Example",
        done: true
      },
      {
        id: 2,
        name: "Kanban Example",
        done: false
      },
      {
      id: 3,
      name: "My own experiments",
      done: false
      }
    ]
  },
  {
    id: 4,
    title: "Learn React JS",
    description: "Finally Understand This shit",
    status: "in-progress",
    tasks: []
  },
  {
    id: 5,
    title: "Hit a parlay",
    description: "Let's Do it'",
    status: "waiting",
    tasks: []
  },
];

ReactDOM.render(<KanbanBoardContainer />, document.getElementById('root'));