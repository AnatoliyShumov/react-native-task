import {createSlice} from '@reduxjs/toolkit';

export type Task = {
  id: string;
  nameAvatarOne: string;
  imageAvatarOne: string;
  nameAvatarSecond: string;
  imageAvatarSecond: string;
  timeCreated: string;
  location: string;
};

export type InitialState = {
  status: 'idle' | 'loading' | 'complete';
  entities: Task[];
};

const initialState: InitialState = {
  status: 'idle',
  entities: [
    {
      id: '1',
      nameAvatarOne: 'Team 1',
      imageAvatarOne: 'one',
      nameAvatarSecond: 'Team 1',
      imageAvatarSecond: 'one',
      timeCreated: '03:45 AM, Sat, Jan 6, 2024',
      location: 'Cleveland Browns Stadium',
    },
    {
      id: '2',
      nameAvatarOne: 'Team 1',
      imageAvatarOne: 'one',
      nameAvatarSecond: 'Team 1',
      imageAvatarSecond: 'one',
      timeCreated: '03:45 AM, Sat, Jan 6, 2024',
      location: 'Cleveland Browns Stadium',
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
