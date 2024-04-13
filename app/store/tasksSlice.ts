import {createSlice} from '@reduxjs/toolkit';

export type TaskType = {
  id: string;
  avatarOne: string;
  teamNameOne: string;
  avatarSecond: string;
  teamNameSecond: string;
  dataMatch: string;
  locationMatch: string;
  teamGoalOne: string;
  teamGoalSecond: string;
  timeCreated: string;
};

export type InitialState = {
  status: 'idle' | 'loading' | 'complete';
  entities: TaskType[];
};

const initialState: InitialState = {
  status: 'idle',
  entities: [
    {
      id: '52d9c48b-79bc-46aa-a397-84f3bd9e3ba5',
      avatarOne:
        'file:///Users/anatoliyshumov/Library/Developer/CoreSimulator/Devices/F2B5AD87-C2A7-45B1-8F5C-76D7720BB487/data/Containers/Data/Application/42FD57BC-59D9-4932-8A26-3124AE7EA431/tmp/386C09D1-231E-4FFB-ADB2-E28281C2A360.jpg',
      avatarSecond: '',
      dataMatch: '2',
      locationMatch: 'Cleveland Browns Stadium',
      teamGoalOne: '1',
      teamGoalSecond: '2',
      teamNameOne: 'Team 1',
      teamNameSecond: 'Team 1',
      timeCreated: '03:45 AM, Sat, Jan 6, 2024',
    },
  ],
};

const tasksSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    taskAdded(state, action) {
      const todo = action.payload;
      state.entities.push(todo);
    },
    taskToggled(state, action) {
      const todoId = action.payload;
      const todo = state.entities.find(e => e.id === todoId);
      if (todo) {
        todo.done = !todo.done;
      }
    },
    completedTasksCleared(state) {
      state.entities = state.entities.filter(todo => !todo.done);
    },
  },
});

export const {taskAdded, taskToggled, completedTasksCleared} =
  tasksSlice.actions;

export default tasksSlice.reducer;
