import React from 'react';
import {Text, View, Button, StyleSheet, FlatList} from 'react-native';
import {useSelector} from 'react-redux';

import {RootState} from '../../store/store';
import Layout from '../../components/Layout.tsx';

const TaskCreate = () => {
  const token = useSelector((state: RootState) => state.user.token);

  const handleRefetch = () => {};

  return (
    <Layout>
      {/* Tasks Listing starts here */}
      <View>
        <Button title="GET ACC_TOKEN USING REFRESH" onPress={handleRefetch} />
        <Text>{token}</Text>
      </View>
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
});
