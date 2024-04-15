import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Formik} from 'formik';
import {useDispatch, useSelector} from 'react-redux';

import {RootState} from '../../store/store';
import Layout from '../../components/Layout.tsx';
import CameraView from '../../components/CameraPicker';
import {updateUser} from '../../store/userSlice';
import {ModalComponent} from '../../components/ModalComponent';

const SettingView = () => {
  const [isVisibleModal, setVisibleModal] = useState<boolean>(false);
  const dispatch = useDispatch();

  const handleOnSubmit = values => {
    if (values) {
      dispatch(updateUser({...values}));
    }
  };

  const userData = useSelector((state: RootState) => state.user);

  const handleCloseModal = values => {
    setVisibleModal(false);
  };
  const renderContent = () => {
    return (
      <View>
        <Text style={styles.titleGame}>Status</Text>
        <View style={styles.rowStatus}>
          <Text style={styles.textStatus}>Win</Text>
          <Text style={styles.textNumber}>1</Text>
        </View>
        <View style={styles.rowStatus}>
          <Text style={styles.textStatus}>Draw</Text>
          <Text style={styles.textNumber}>2</Text>
        </View>
        <View style={styles.rowStatus}>
          <Text style={styles.textStatus}>Losses</Text>
          <Text style={styles.textNumber}>3</Text>
        </View>
        <TouchableOpacity
          onPress={handleCloseModal}
          style={[styles.addButton, styles.exitModalButton]}>
          <Text style={styles.addButtonText}>Exit</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <Layout>
      <Text style={styles.titleGame}>Profile</Text>
      <Formik
        // validationSchema={validationSchema}
        validateOnChange={false}
        validateOnBlur={false}
        initialValues={{
          username: userData.username,
          password: userData.password,
          avatarUser: userData.avatarUser,
        }}
        onSubmit={handleOnSubmit}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}>
            <View style={styles.photoWrapper}>
              <ModalComponent
                minHeigth={'40%'}
                headerText={''}
                modalVisible={isVisibleModal}
                setModalVisible={setVisibleModal}
                withBlur
                maxHeigth={'80%'}
                backdropOpacity={0.5}
                withLine={false}>
                {renderContent()}
              </ModalComponent>
              <CameraView
                handleChoiseUrlImage={handleChange('avatarUser')}
                avatarName={'Edit'}
                containerStyles={{backgroundColor: '#DADADA'}}
                avatarUrl={values.avatarUser}
                textStyles={{
                  fontSizes: 16,
                  color: '#FE734C',
                  fontWeight: 700,
                }}
                size={100}
              />
            </View>
            <View style={styles.inputContainerWide}>
              <TextInput
                style={[
                  styles.inputWide,
                  touched.username && errors.username
                    ? styles.inputError
                    : null,
                ]}
                onChangeText={handleChange('username')}
                onBlur={handleBlur('username')}
                value={values.username}
                placeholder="Username"
                placeholderTextColor="#FFFFFF90"
              />
              {touched.username && errors.username && (
                <Text style={styles.errorText}>{errors.username}</Text>
              )}
            </View>
            <View style={styles.inputContainerWide}>
              <TextInput
                style={[
                  styles.inputWide,
                  touched.password && errors.password
                    ? styles.inputError
                    : null,
                ]}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                placeholder="Password"
                placeholderTextColor="#FFFFFF90"
              />
              {touched.username && errors.username && (
                <Text style={styles.errorText}>{errors.username}</Text>
              )}
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                onPress={() => setVisibleModal(true)}
                style={[styles.addButton, styles.statusButton]}>
                <Text style={styles.addButtonText}>Status</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleSubmit} style={styles.addButton}>
                <Text style={styles.addButtonText}>Save</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        )}
      </Formik>
    </Layout>
  );
};

export default SettingView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  titleGame: {
    fontSize: 36,
    fontWeight: '700',
    color: 'white',
    marginTop: 30,
    marginBottom: 20,
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
  statusButton: {
    backgroundColor: '#4D5265',
  },
  addButtonText: {
    color: 'white',
    fontSize: 18,
  },
  inputContainerWide: {
    width: '90%', // Full width minus margin
  },
  inputWide: {
    backgroundColor: '#4D5265', // Dark background for the input
    borderRadius: 20,
    color: 'white', // Text color
    fontSize: 16,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 10, // Add some bottom margin
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginVertical: 2,
    marginLeft: 10,
  },
  buttonContainer: {
    marginTop: 'auto',
    width: '100%',
  },
  inputError: {
    borderWidth: 1,
    borderColor: 'red', // Червоний колір для помилки
  },
  photoWrapper: {
    marginBottom: 20,
  },

  rowStatus: {
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
  },
  textStatus: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  textNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FE734C',
  },
  exitModalButton: {
    marginTop: 30,
  },
});
