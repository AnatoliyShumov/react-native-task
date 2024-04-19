import React, {useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Layout from '../../components/Layout';
import {useDispatch, useSelector} from 'react-redux';
import {fetchRandomPhotos} from '../../store/userSlice.ts';
import {RootState} from '../../store/store.ts';

const ImageList = ({navigation}) => {
  const dispatch = useDispatch();
  const images = useSelector(
    (state: RootState) => state.user.randomPhotos.photos,
  );

  useEffect(() => {
    dispatch(fetchRandomPhotos(10));
  }, [dispatch]);

  return (
    <Layout>
      <View style={styles.container}>
        <FlatList
          data={images}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <TouchableOpacity
              style={styles.item}
              onPress={() =>
                navigation.navigate('ImageView', {photoId: item.id})
              }>
              <Image source={{uri: item.urls.small}} style={styles.image} />
              <View style={styles.textContainer}>
                <Text style={styles.description}>
                  {item.description || 'No description'}
                </Text>
                <Text style={styles.author}>By {item.user.name}</Text>
              </View>
            </TouchableOpacity>
          )}
          numColumns={2}
          columnWrapperStyle={styles.columnWrapper}
        />
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  item: {
    flex: 1,
    flexDirection: 'column',
    margin: 5,
    backgroundColor: '#1E1E1E',
    borderRadius: 8,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 8,
  },
  textContainer: {
    padding: 10,
    alignItems: 'center',
  },
  description: {
    color: '#FFFFFF',
    fontSize: 16,
    textAlign: 'center',
  },
  author: {
    color: '#BDBDBD',
    fontSize: 14,
    marginTop: 4,
    textAlign: 'center',
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
});

export default ImageList;
