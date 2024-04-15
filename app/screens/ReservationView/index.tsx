import RocketImage from '../../assets/images/components/RocketImage';
import TableImage from '../../assets/images/components/TableImage';
import TennisImage from '../../assets/images/components/TennisImage';
import React from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Task} from '../../store/tasksSlice.ts';
import ListItem from './Components/ListItem';
import {useNavigation} from '@react-navigation/native';
import Layout from '../../components/Layout';

const SliderData = [
  {
    id: '1',
    sliderData: [
      {id: 'rocket', Component: RocketImage},
      {id: 'table', Component: TableImage},
      {id: 'tennis', Component: TennisImage},
    ],
  },
  {
    id: '2',
    sliderData: [
      {id: 'table', Component: TableImage},
      {id: 'rocket', Component: RocketImage},
      {id: 'tennis', Component: TennisImage},
    ],
  },
  {
    id: '3',
    sliderData: [
      {id: 'tennis', Component: TennisImage},
      {id: 'rocket', Component: RocketImage},
      {id: 'table', Component: TableImage},
    ],
  },
];

const Reservation = () => {
  const navigation = useNavigation();
  const renderItem = ({item, index}: {item: Task; index: number}) => (
    <ListItem item={item} index={index} onPress={onCheckedHandler} />
  );

  const onCheckedHandler = (id: string) => {};
  const addNewTask = () => {
    // @ts-ignore
    navigation.navigate('ReservationDone');
  };
  const keyExtractor = (item: Task) => `task-${item.id}`;
  return (
    <Layout>
      <Text style={styles.titleGame}>All Match</Text>
      <FlatList
        data={SliderData}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        contentContainerStyle={styles.flatList}
      />
      <TouchableOpacity onPress={addNewTask} style={styles.addButton}>
        <Text style={styles.addButtonText}>Done</Text>
      </TouchableOpacity>
    </Layout>
  );
};
export default Reservation;
const styles = StyleSheet.create({
  container: {},

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
