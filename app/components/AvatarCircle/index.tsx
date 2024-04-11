import React, {ReactNode} from 'react';
import {Pressable, StyleProp, Text, View, ViewStyle} from 'react-native';
import FastImage from 'react-native-fast-image';
import PhotoIcoSvg from '../../assets/images/svg/PhotoIcoSvg.tsx';
import styles from './styles';

interface IAvatarCircleProps {
  size?: number;
  borderColor?: string;
  url?: string;
  containerStyles?: StyleProp<ViewStyle>;
  imageStyles?: any;
  defaultImage?: boolean;
  name?: string;
  borderWidth?: number;
  onPress?: () => void;
  editable?: boolean;
  iconComponent?: ReactNode;
  onIconPress?: any;
}

export const AvatarCircle = React.memo(
  ({
    borderColor = 'green',
    size = 30,
    avatarNameSize = 13,
    url,
    containerStyles = {},
    imageStyles = {},
    defaultImage,
    name,
    borderWidth = 4,
    onPress = () => {},
    editable = false,
    iconComponent,
    onIconPress = () => {},
  }: IAvatarCircleProps) => {
    return (
      <View>
        <Pressable
          style={{
            ...styles.avatarWrapper,
            width: size - borderWidth * 1.5,
            height: size - borderWidth * 1.5,
            borderColor,
            borderWidth: borderWidth,
            ...(containerStyles as Object),
          }}
          onPress={onPress}>
          {defaultImage ? (
            <Text style={{...styles.avatarText, fontSize: avatarNameSize}}>
              {name && (name.length >= 2 ? name.slice(0, 2) : name[0])}
            </Text>
          ) : (
            <FastImage
              style={{
                width: size - borderWidth * 3, // border offser
                height: size - borderWidth * 3, // border offser
                borderRadius: 100,
                ...imageStyles,
              }}
              source={{
                uri: url,
                priority: FastImage.priority.normal,
              }}
              resizeMode={FastImage.resizeMode.stretch}
            />
          )}
          {editable ? (
            <View style={styles.editableWrapper}>
              <PhotoIcoSvg />
            </View>
          ) : (
            <></>
          )}
        </Pressable>
        {iconComponent ? (
          <Pressable style={styles.iconWrapper} onPress={onIconPress}>
            {iconComponent}
          </Pressable>
        ) : (
          <></>
        )}
      </View>
    );
  },
);
