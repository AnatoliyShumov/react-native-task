import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Layout from '../../components/Layout.tsx';
import Done from '../../assets/images/components/Done.tsx';
import {useNavigation} from '@react-navigation/native';

const TaskCreate = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('HelpView');
  };

  return (
    <Layout>
      {/* Tasks Listing starts here */}
      <View style={styles.centerContainer}>
        <Done />
        <Text style={styles.titleGame}>Done</Text>
        <Text style={styles.titleGame}>Call the trainer</Text>
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
