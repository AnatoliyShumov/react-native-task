import React, {ReactNode} from 'react';
import {
  Pressable,
  StyleProp,
  Text,
  View,
  ViewStyle,
  ImageBackground,
} from 'react-native';
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
  textStyles?: object;
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
    textStyles = {},
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
          {defaultImage || (name && !url) ? (
            <Text
              style={{
                ...styles.avatarText,
                fontSize: avatarNameSize,
                ...textStyles,
              }}>
              {name}
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
              // onError={e => console.log(e.nativeEvent.error)}
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
