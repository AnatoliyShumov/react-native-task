import * as React from 'react';
import {StyleSheet, Text, Pressable, View} from 'react-native';
import {useTheme} from '../../../../theme/useTheme';
import Card from '../Card';
import {ThemeContextInterface} from '../../../../theme/useTheme';
import {AvatarCircle} from '../../../../components/AvatarCircle';
import {extractDateTimePart} from '../../utils.ts';
import Location from '../../../../assets/images/components/Location';
import {TaskType} from '../../../../store/tasksSlice.ts';

interface ListItemType {
  item: TaskType;
  index?: number;
  onPress: (arg0: string) => void;
}

const ListItem = ({item, onPress}: ListItemType): JSX.Element => {
  const {theme}: Partial<ThemeContextInterface> = useTheme();

  return (
    <Card style={[styles.card]}>
      <Pressable
        // style={[{opacity: item.done ? 0.8 : 1}]}
        // accessibilityLabel={
        //   item.done ? 'Tap to uncheck from list' : 'Tap to check from list'
        // }
        accessibilityHint="Toggles task done and undone"
        accessibilityRole="radio"
        // accessibilityState={{checked: item.done}}
        onPress={() => onPress(item.id)}>
        <View style={styles.containerItem}>
          <View style={styles.avatarContainer}>
            <AvatarCircle
              url={item.avatarOne}
              size={50}
              borderWidth={2}
              name={' '}
              borderColor="rgba(110, 91, 125, 1)"
              containerStyles={styles.avatarStyles}
            />
            <Text style={styles.avatarName}>{item.teamNameOne}</Text>
          </View>
          <View>
            <View style={styles.timeContainer}>
              <View style={styles.timeContainerInner}>
                <Text style={styles.timeOne}>
                  {extractDateTimePart(item.timeCreated, 'hourMinute')}
                </Text>
                <Text style={styles.timeSecond}>
                  {extractDateTimePart(item.timeCreated, 'period')}
                </Text>
              </View>
              <View />
              <Text style={styles.timeThird}>
                {extractDateTimePart(item.timeCreated, 'date')}
              </Text>
            </View>
            <View style={styles.locationContainer}>
              <Location />
              <Text style={styles.locationText}>{item.locationMatch}</Text>
            </View>
          </View>
          <View style={styles.avatarContainer}>
            <AvatarCircle
              url={item.avatarSecond}
              size={50}
              borderWidth={2}
              name={' '}
              borderColor="rgba(110, 91, 125, 1)"
              containerStyles={styles.avatarStyles}
            />
            <Text style={styles.avatarName}>{item.teamNameSecond}</Text>
          </View>
          <View />
        </View>
      </Pressable>
    </Card>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  card: {
    marginBottom: 10,
    backgroundColor: '#4D5265',
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    color: '#4d505b',
  },
  containerItem: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  avatarContainer: {
    flex: 1,
    alignItems: 'center',
  },
  avatarStyles: {
    backgroundColor: '#DADADA',
  },
  avatarName: {
    fontSize: 10,
    color: 'white',
  },
  timeContainer: {
    alignItems: 'center',
    borderLeftWidth: 1,
    borderLeftColor: '#595E72',
    borderRightWidth: 1,
    borderRightColor: '#595E72',
    paddingLeft: 10,
    paddingRight: 10,
  },
  timeContainerInner: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  timeOne: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
  },
  timeSecond: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FE734C',
    paddingLeft: 5,
  },
  timeThird: {
    fontSize: 10,
    fontWeight: '600',
    color: '#DADADA',
    paddingTop: 10,
  },
  locationContainer: {
    flexDirection: 'row',
    marginTop: 15,
  },
  locationText: {
    fontWeight: '600',
    fontSize: 10,
    color: 'white',
    paddingLeft: 5,
    minWidth: 140,
  },
});
