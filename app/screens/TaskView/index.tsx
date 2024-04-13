import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  FlatList,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';
import {taskToggled} from '../../store/tasksSlice';
import {RootState} from '../../store/store';
import {Task} from '../../store/tasksSlice';

import Layout from '../../components/Layout';
import ListItem from './components/ListItem';
import {useNavigation} from '@react-navigation/native';

const Tasks = () => {
  const navigation = useNavigation();

  const todoList = useSelector((state: RootState) => state.todos.entities);
  // const loadingStatus = useSelector((state) => state.todos.status);
  const dispatch = useDispatch();

  const addNewTask = () => {
    // @ts-ignore
    navigation.navigate('TasksCreate');
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
      <Text style={styles.titleGame}>All Match</Text>
      <FlatList
        data={todoList}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        contentContainerStyle={styles.flatList}
      />
      <TouchableOpacity onPress={addNewTask} style={styles.addButton}>
        <Text style={styles.addButtonText}>Add</Text>
      </TouchableOpacity>
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
  titleGame: {
    fontSize: 36,
    fontWeight: '700',
    color: 'white',
    marginTop: 30,
    alignSelf: 'center',
  },
  addButton: {
    backgroundColor: '#FE734C',
    padding: 15,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    alignSelf: 'center',
    marginTop: 'auto',
    marginBottom: 20,
  },
  addButtonText: {
    color: 'white',
    fontSize: 18,
  },
});
