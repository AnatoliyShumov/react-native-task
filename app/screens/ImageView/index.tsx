import React, {useEffect} from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import {fetchPhotoById} from '../../store/userSlice.ts';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store/store.ts';
const ImageView = ({route}) => {
  const {photoId} = route.params;
  const photo = useSelector(
    (state: RootState) => state.user.photoDetails.photo,
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPhotoById(photoId));
  }, []);

  if (!photo) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <Image source={{uri: photo.urls.regular}} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default ImageView;
