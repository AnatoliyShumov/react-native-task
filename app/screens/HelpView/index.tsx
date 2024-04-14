import React, {useState, useRef} from 'react';
import {View, Text, TouchableOpacity, Animated, StyleSheet} from 'react-native';

const ExpandableListItem = ({title, children}) => {
  const [expanded, setExpanded] = useState(false);
  const animationController = useRef(new Animated.Value(0)).current;

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
      </TouchableOpacity>
      <Animated.View style={[styles.bodyContainer, {height: bodyHeight}]}>
        {expanded && (
          <View>
            <Text style={styles.bodyText}>{children}</Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Support</Text>
            </TouchableOpacity>
          </View>
        )}
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: '#4F4F4F', // Dark gray color, adjust as needed
    overflow: 'hidden',
    marginBottom: 10,
    borderRadius: 10,
  },
  titleContainer: {
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

// Usage within your main component
const YourMainComponent = () => {
  return (
    <View style={{flex: 1, padding: 20, backgroundColor: '#2B2B2B'}}>

      {/* Dark background */}
      <ExpandableListItem title="The table broke">
        If your table has broken during a match, please contact support.
      </ExpandableListItem>
      <ExpandableListItem title="The net fell">
        For issues with the net, please review the setup instructions.
      </ExpandableListItem>
      {/* Add more list items as needed */}
    </View>
  );
};

export default YourMainComponent;
