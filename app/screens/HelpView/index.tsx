import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  StyleSheet,
  ScrollView,
} from 'react-native';
import ArrowDown from '../../assets/images/components/ArrowDown.tsx';
import ArrowLeft from '../../assets/images/components/ArrowLeft.tsx';
import Layout from '../../components/Layout.tsx';
import {useNavigation} from '@react-navigation/native';

const ExpandableListItem = ({title, children}) => {
  const [expanded, setExpanded] = useState(false);
  const animationController = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();

  const toggleItem = () => {
    const finalValue = expanded ? 0 : 1;
    setExpanded(!expanded);

    Animated.timing(animationController, {
      duration: 300,
      toValue: finalValue,
      useNativeDriver: false,
    }).start();
  };

  const bodyHeight = animationController.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 100], // Adjust this value to the height of the content
  });

  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity onPress={toggleItem} style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
        {expanded ? <ArrowDown /> : <ArrowLeft />}
      </TouchableOpacity>
      <Animated.View style={[styles.bodyContainer, {height: bodyHeight}]}>
        {expanded && (
          <View>
            <Text style={styles.bodyText}>{children}</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('HelpDone')}>
              <Text style={styles.buttonText}>Support</Text>
            </TouchableOpacity>
          </View>
        )}
      </Animated.View>
    </View>
  );
};

// Usage within your main component
const YourMainComponent = () => {
  return (
    <Layout>
      <Text style={styles.titleGame}>All Match</Text>
      <ScrollView style={styles.container}>
        <ExpandableListItem title="The table broke">
          If your table has broken during a match, please contact support.
        </ExpandableListItem>
        <ExpandableListItem title="The net fell">
          For issues with the net, please review the setup instructions.
        </ExpandableListItem>
        <ExpandableListItem title="The rubber band came off the racket">
          Make sure to secure the rubber band properly before the game starts.
        </ExpandableListItem>
        <ExpandableListItem title="The ball cracked">
          A cracked ball cannot be used in official games. Replace it
          immediately.
        </ExpandableListItem>
        <ExpandableListItem title="Call the judge">
          If you need to dispute a play or call, contact the judge on the floor.
        </ExpandableListItem>
        {/* Add more items as needed */}
      </ScrollView>
    </Layout>
  );
};

export default YourMainComponent;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },
  titleGame: {
    fontSize: 36,
    fontWeight: '700',
    color: 'white',
    marginTop: 30,
    alignSelf: 'center',
    marginBottom: 15,
  },
  itemContainer: {
    backgroundColor: '#4F4F4F', // Dark gray color, adjust as needed
    overflow: 'hidden',
    marginBottom: 10,
    borderRadius: 10,
  },
  titleContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: '#333', // Slightly darker gray, adjust as needed
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
  },
  bodyContainer: {
    padding: 15,
    backgroundColor: '#4F4F4F', // Same as itemContainer's background
  },
  bodyText: {
    color: 'white',
  },
  button: {
    backgroundColor: '#FF6F61', // Example button color, adjust as needed
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignSelf: 'flex-start',
    marginTop: 10,
    borderRadius: 20,
  },
  buttonText: {
    color: 'white',
  },
});

export default YourMainComponent;
