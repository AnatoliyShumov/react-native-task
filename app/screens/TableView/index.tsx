import React, {useRef, useState, useCallback} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Animated,
} from 'react-native';

import Layout from '../../components/Layout.tsx';
import {ModalComponent} from '../../components/ModalComponent';

import TableImage from '../../assets/images/img.png';
import Swiper from 'react-native-swiper';
import {swiperData} from './utils.ts';

const TaskCreate = () => {
  const [ballAnimation] = useState(new Animated.Value(0)); // Initial value for ball position
  const ballOpacity = useRef(new Animated.Value(0)).current;
  const [visible, setModalVisible] = useState<boolean>(false);

  const addNewTask = () => {
    // @ts-ignore
    // navigation.navigate('TasksCreate');
  };
  const handleTablePress = () => {
    // Reset the ball position
    ballAnimation.setValue(0);
    ballOpacity.setValue(1);

    // Start the sequence of animations
    Animated.sequence([
      // First, the ball appears and moves up
      Animated.timing(ballAnimation, {
        toValue: -100, // Move ball up
        duration: 300,
        useNativeDriver: true,
      }),
      // Then, it falls down with a bounce effect
      Animated.timing(ballAnimation, {
        toValue: 0, // Ball comes back down
        duration: 500,
        useNativeDriver: true,
      }),
      // Fade out the ball at the end of the bounce
      Animated.timing(ballOpacity, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const renderContentModal = useCallback(() => {
    return (
      <View>
        <Text style={styles.titleGame}>Impact Radius</Text>
        <Swiper
          style={styles.wrapperSwiper}
          showsButtons
          loop={false}
          showsPagination={false}>
          {swiperData.map((element, index) => (
            <View key={index} testID={element + 2} style={styles.slide1}>
              <Text style={styles.swipperText}>{element}</Text>
            </View>
          ))}
        </Swiper>
      </View>
    );
  }, [swiperData]);

  return (
    <Layout>
      <Text style={styles.titleGame}>All Match</Text>
      <ModalComponent
        headerText={'Регистрация в турнире'}
        modalVisible={visible}
        setModalVisible={setModalVisible}
        // children={}
        minHeigth={'60%'}
        withBlur
      />
      <TouchableOpacity onPress={handleTablePress}>
        <View style={styles.imageContainer}>
          <Image
            source={TableImage}
            style={styles.tableImage}
            resizeMode="cover"
          />
          <Animated.View
            style={[
              styles.ball,
              {
                transform: [{translateY: ballAnimation}],
                opacity: ballOpacity,
              },
            ]}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleTablePress} style={styles.addButton}>
        <Text style={styles.addButtonText}>Drop</Text>
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
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignSelf: 'center',
    width: '100%', // Set the container to 100% of the screen's width
    alignItems: 'center', // Center the image in the container
  },
  tableImage: {
    width: '90%', // Set image width to fill the container
    height: undefined, // Height will be calculated based on the aspect ratio
    aspectRatio: 430 / 504, // Replace with your image's aspect ratio
  },
  tableContainer: {
    width: '100%', // Assuming the table container takes the full width of the screen
    height: 300, // Adjust the height as needed for your table
    backgroundColor: '#eaeaea', // Temporary background color to see the container
  },
  ball: {
    position: 'absolute',
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapperSwiper: {
    backgroundColor: 'red',
    width: 100,
    height: 100
  },
  swipperText: {
    fontSize: 16,
    color: 'white',
  },
});
