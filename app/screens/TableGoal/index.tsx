import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

import Layout from '../../components/Layout.tsx';
import Goal from '../../assets/images/components/Goal.tsx';
import {useNavigation} from '@react-navigation/native';

const TaskCreate = () => {
  const navigation = useNavigation();

  const events = ['Goal', 'Miss', 'Save', 'Hit', 'Out'];

  const handlePress = () => {
    navigation.navigate('TableView');
  };

  const getRandomEvent = () => {
    const randomIndex = Math.floor(Math.random() * events.length);
    return events[randomIndex];
  };

  const [currentEvent, setCurrentEvent] = useState(getRandomEvent);

  useEffect(() => {
    setCurrentEvent(getRandomEvent());
  }, []);

  return (
    <Layout>
      {/* Tasks Listing starts here */}
      <View style={styles.centerContainer}>
        <Goal />
        <Text style={styles.titleGame}>{currentEvent}</Text>
      </View>
      <TouchableOpacity onPress={handlePress} style={styles.addButton}>
        <Text style={styles.addButtonText}>Back</Text>
      </TouchableOpacity>
    </Layout>
  );
};

export default TaskCreate;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  titleGame: {
    fontSize: 36,
    fontWeight: '700',
    color: 'white',
    marginTop: 10,
    alignSelf: 'center',
  },
  centerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
