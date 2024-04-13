import * as React from 'react';
import {StyleSheet, Pressable, View} from 'react-native';
import {useTheme} from '../../../../theme/useTheme';
import Card from '../Card';
import {ThemeContextInterface} from '../../../../theme/useTheme';
import {TaskType} from '../../../../store/tasksSlice.ts';
import Swiper from 'react-native-swiper';

export type TaskType = {
  Component: any;
  sliderData: any;
};

interface ListItemType {
  item: TaskType;
  index?: number;
  onPress: (arg0: string) => void;
}

const ListItem = ({item, onPress}: ListItemType): JSX.Element => {
  const {theme}: Partial<ThemeContextInterface> = useTheme();

  return (
    <Card style={[styles.card]}>
      <Swiper
        style={styles.wrapper}
        showsButtons
        loop={false}
        showsPagination={false}>
        {item.sliderData.map((element, index) => (
          <View key={index} testID={element.id} style={styles.slide1}>
            <element.Component />
          </View>
        ))}
      </Swiper>
    </Card>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  wrapper: {
    height: 150,
  },
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
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
