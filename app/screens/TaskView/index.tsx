import React, {useState, useRef} from 'react';
import {StyleSheet, FlatList, TextInput} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';
import {taskAdded, taskToggled} from '../../store/tasksSlice';
import {RootState} from '../../store/store';
import {Task} from '../../store/tasksSlice';

import {useTheme} from '../../theme/useTheme';
import Layout from '../../components/Layout';
// import Card from '../../components/Card';
import ListItem from './components/ListItem';
import PhotoIcoSvg from '../../assets/images/components/Rocket.tsx';

const Tasks = () => {
  const {theme} = useTheme();

  const inputRef = useRef<TextInput>(null);

  const todoList = useSelector((state: RootState) => state.todos.entities);
  // const loadingStatus = useSelector((state) => state.todos.status);
  const dispatch = useDispatch();

  const [text, setText] = useState('');

  const addNewTask = () => {
    let temp = text.trim();
    if (temp !== '') {
      dispatch(taskAdded({id: Date.now(), title: temp, done: false}));
    }
    inputRef.current?.clear();
  };

  const onCheckedHandler = (id: string) => {
    dispatch(taskToggled(id));
  };

  const renderItem = ({item, index}: {item: Task; index: number}) => (
    <ListItem item={item} index={index} onPress={onCheckedHandler} />
  );

  const keyExtractor = (item: Task) => `task-${item.id}`;

  return (
    <Layout>
      {/* Tasks Listing starts here */}
      <FlatList
        data={todoList}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        contentContainerStyle={styles.flatList}
      />
    </Layout>
  );
};

export default Tasks;

const styles = StyleSheet.create({
  activityIndicatorContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  flatList: {
    paddingHorizontal: 12,
    paddingVertical: 30,
  },
});
