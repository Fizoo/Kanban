import {Column} from "../app/models/column-model";
import {Board} from "../app/models/board-model";

export const data: Board = new Board('Test Board', [
  new Column('Ideas', [
    'Some random idea',
    'This is another random idea',
    'Build an awesome idea'
  ]),
  new Column('Research', [
    'Lorem Ipsum',
    'foo',
    'This was in Research column'
  ]),
  new Column('Todo', [
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep']),
  new Column('Done', [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog'])
])
