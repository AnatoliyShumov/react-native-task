import {StyleSheet, View} from 'react-native';
import React, {useCallback, useState} from 'react';
import {ImagePickerHeader} from '../../components/ImagePickerHeader';
import {ImagePickerModal} from '../../components/ImagePickerModal';
import * as ImagePicker from 'react-native-image-picker';
import {AvatarCircle} from '../../components/AvatarCircle';

interface UserScreenProps {
  handleChoiseUrlImage?: (url: string) => void;
  size?: number;
  avatarName?: string;
  containerStyles?: object;
  textStyles?: object;
  avatarUrl?: string;
}
const UserScreen: React.FC<UserScreenProps> = ({
  handleChoiseUrlImage = () => {},
  size = 50,
  avatarName = '',
  containerStyles = {},
  textStyles = {},
  avatarUrl = '',
}) => {
  const [pickerResponse, setPickerResponse] = useState(null);
  const [visible, setVisible] = useState(false);

  const handleImagePicked = useCallback(
    response => {
      setPickerResponse(response);
      const uri = response?.assets && response.assets[0].uri;
      if (uri) {
        handleChoiseUrlImage(uri); // Call the callback with the new image URI
      }
    },
    [handleChoiseUrlImage],
  );

  const onImageLibraryPress = useCallback(() => {
    const options = {
      selectionLimit: 1,
      mediaType: 'photo',
      includeBase64: false,
    };
    ImagePicker.launchImageLibrary(options, handleImagePicked);
  }, [handleImagePicked]);

  const onCameraPress = useCallback(() => {
    const options = {
      saveToPhotos: true,
      mediaType: 'photo',
      includeBase64: false,
    };
    ImagePicker.launchCamera(options, handleImagePicked);
  }, [handleImagePicked]);

  const uri = pickerResponse?.assets && pickerResponse.assets[0].uri;

  return (
    <>
      {/*<ImagePickerHeader />*/}
      <AvatarCircle
        url={uri || avatarUrl}
        size={size}
        defaultImage={false}
        borderWidth={2}
        name={avatarName}
        borderColor="rgba(110, 91, 125, 1)"
        onPress={() => setVisible(true)}
        containerStyles={containerStyles}
        textStyles={textStyles}
      />
      <ImagePickerModal
        isVisible={visible}
        onCameraPress={onCameraPress}
        onClose={() => setVisible(false)}
        onImageLibraryPress={onImageLibraryPress}
      />
    </>
  );
};

export default UserScreen;

const styles = StyleSheet.create({});
