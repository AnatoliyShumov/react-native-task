import React, {useRef, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Animated,
  Modal,
} from 'react-native';

import Layout from '../../components/Layout.tsx';

import TableImage from '../../assets/images/img.png';
import Swiper from 'react-native-swiper';
import {swiperData} from './utils.ts';
import SwipperLeft from '../../assets/images/components/SwipperLeft.tsx';
import SwipperRigth from '../../assets/images/components/SwipperRigth.tsx';
import {useNavigation} from '@react-navigation/native';

const TaskCreate = () => {
  const [ballAnimation] = useState(new Animated.Value(0)); // Initial value for ball position
  const ballOpacity = useRef(new Animated.Value(0)).current;
  const [isModalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
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
    setTimeout(() => setModalVisible(true), 1500);
  };

  const handleCloseModal = () => {
    setModalVisible(!isModalVisible);
    setTimeout(() => navigation.navigate('TableDone'), 300);
  };

  return (
    <Layout>
      <Text style={styles.titleGame}>All Match</Text>
      <View style={styles.centeredView}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={isModalVisible}
          onRequestClose={() => {
            setModalVisible(!isModalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.titleGame}>Impact Radius</Text>
              <Swiper
                style={styles.wrapperSwiper}
                showsButtons
                loop={false}
                showsPagination={false}
                nextButton={<SwipperRigth />}
                prevButton={<SwipperLeft />}>
                {swiperData.map((element, index) => (
                  <View key={index} testID={element + 2} style={styles.slide1}>
                    <Text style={styles.swipperText}>{element}</Text>
                  </View>
                ))}
              </Swiper>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={handleCloseModal}>
                <Text style={styles.closeButtonText}>Done</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>

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
  wrapperSwiper: {},
  swipperText: {
    marginTop: 10,
    fontSize: 48,
    fontWeight: 'bold',
    color: 'white',
  },

  buttonText: {
    fontSize: 50,
    color: 'red', // Here you can set your desired color for the arrows
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    height: '60%',
    margin: 20,
    backgroundColor: '#4D5265',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
  },
  openButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  closeButton: {
    alignSelf: 'stretch',
    backgroundColor: '#FF6347',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginTop: 15,
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
  swiper: {
    height: 200, // Set the height for the swiper
    width: '100%', // Set the width for the swiper
    alignItems: 'center',
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#000',
    fontSize: 24,
    fontWeight: 'bold',
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
});
