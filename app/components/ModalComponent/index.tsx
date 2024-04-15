import React, {FC, memo, ReactElement, ReactNode} from 'react';
import {View, Text, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import Modal from 'react-native-modal';
import {styles} from './styles';
import CloseIcon from '../../assets/images/components/CloseIcon.tsx';
import {BlurView} from '@react-native-community/blur';

interface Props {
  modalVisible: boolean;
  setModalVisible: Function;
  headerText?: string;
  children?: ReactElement | undefined;
  minHeigth?: string | number;
  maxHeigth?: string | number;
  headerContent?: ReactNode;
  withBlur?: boolean;
  withLine?: boolean;
  backdropOpacity?: number;
  onModalHide?: any;
  isHeader?: boolean;
}

export const ModalComponent: FC<Props> = memo(
  ({
    modalVisible,
    setModalVisible,
    headerText,
    headerContent,
    children,
    minHeigth,
    maxHeigth,
    withBlur,
    withLine = true,
    backdropOpacity = 0,
    onModalHide = () => {},
    isHeader = false,
  }) => {
    return (
      <>
        <Modal
          animationIn={'fadeInUp'}
          animationOut={'fadeOutDown'}
          isVisible={modalVisible}
          backdropOpacity={backdropOpacity}
          onModalHide={onModalHide}>
          <KeyboardAvoidingView
            behavior={'padding'}
            style={{
              ...styles.modalView,
              minHeight: minHeigth ? minHeigth : '80%',
              maxHeight: maxHeigth ? maxHeigth : '100%',
            }}>
            {isHeader ? (
              <View
                style={{
                  ...styles.headerContainer,
                  borderBottomWidth: withLine ? 1 : 0,
                }}>
                {headerContent ? (
                  headerContent
                ) : (
                  <Text style={styles.headerText}>{headerText}</Text>
                )}

                <TouchableOpacity
                  onPress={() => setModalVisible(!modalVisible)}>
                  <CloseIcon />
                </TouchableOpacity>
              </View>
            ) : null}
            {children}
          </KeyboardAvoidingView>
        </Modal>
        {withBlur && modalVisible ? (
          <BlurView
            style={styles.absolute}
            blurType="dark"
            blurAmount={10}
            reducedTransparencyFallbackColor="dark"
          />
        ) : (
          <></>
        )}
      </>
    );
  },
);
