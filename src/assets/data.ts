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


export const res: RootObject = [
  {
    name: 'Ideas',
    tasks: ['Some random idea',
      'This is another random idea',
      'Build an awesome idea']
  },
  {
    name: 'Research',
    tasks: [
      'Lorem Ipsum',
      'foo',
      'This was in Research column'
    ]
  },
  {
    name: 'Todo',
    tasks: [
      'Get to work',
      'Pick up groceries',
      'Go home',
      'Fall asleep'
    ]
  },
  {
    name: 'Done',
    tasks: [
      'Get up',
      'Brush teeth',
      'Take a shower',
      'Check e-mail',
      'Walk dog'
    ]
  }

]
export type RootObject = RootObjectChild[];

export interface RootObjectChild {
  name: string;
  tasks: string[];
}


