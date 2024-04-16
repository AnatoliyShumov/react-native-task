import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {Formik} from 'formik';

import {taskAdded} from '../../store/tasksSlice';

import Layout from '../../components/Layout.tsx';
import CameraView from '../../components/CameraPicker';
import VsImage from '../../assets/images/components/Vs.tsx';
import * as yup from 'yup';
import uuid from 'react-native-uuid';
import {useNavigation} from '@react-navigation/native';

const validationSchema = yup.object().shape({
  avatarOne: yup.string().min(1, 'Іs required'),
  avatarSecond: yup.string().min(1, 'Іs required'),
  teamNameOne: yup.string().required('Іs required').min(1, 'Іs required'),
  teamNameSecond: yup.string().required('Іs required').min(1, 'Іs required'),
  teamGoalOne: yup.string().required('Іs required').min(1, 'Іs required'),
  teamGoalSecond: yup.string().required('Іs required').min(1, 'Іs required'),
  dataMatch: yup.string().required('Іs required').min(10, 'Іs required'),
  locationMatch: yup.string().required('Іs required').min(1, 'Іs required'),
});

const TaskCreate = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleOnSubmit = values => {
    if (values) {
      // Parse the date from values.dataMatch
      const dateParts = values.dataMatch.split('/'); // Assuming the format is DD/MM/YYYY
      const year = dateParts[2];
      const month = dateParts[1] - 1; // Month is 0-indexed in JavaScript Date
      const day = dateParts[0];

      const dateObject = new Date(year, month, day);

      // Options for date formatting
      const dateOptions = {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      };

      // Format the date portion of the string
      const dateString = dateObject.toLocaleDateString('en-US', dateOptions);

      // Generate a random time
      const randomHour = Math.floor(Math.random() * 12) + 1; // Random hour 1-12
      const randomMinute = Math.floor(Math.random() * 60); // Random minute 0-59
      const amPm = Math.random() > 0.5 ? 'AM' : 'PM';

      // Format the time string, ensuring two digits for minutes
      const timeString = `${randomHour}:${randomMinute
        .toString()
        .padStart(2, '0')} ${amPm}`;

      // Combine the date and time strings
      const timeCreated = `${timeString}, ${dateString}`;

      dispatch(
        taskAdded({
          ...values,
          id: uuid.v4(),
          timeCreated,
        }),
      );
      navigation.navigate('CreateTaskDone');
      console.log(values);
    }
  };

  return (
    <Layout>
      <Formik
        validationSchema={validationSchema}
        validateOnChange={false}
        validateOnBlur={false}
        initialValues={{
          avatarOne: '',
          avatarSecond: '',
          teamNameOne: '',
          teamNameSecond: '',
          teamGoalOne: '',
          teamGoalSecond: '',
          dataMatch: '',
          locationMatch: '',
        }}
        onSubmit={handleOnSubmit}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => {
          const handleDateChange = text => {
            // Remove all non-digits characters
            let formattedText = String(text || '');
            formattedText = text.replace(/[^\d]/g, '');

            // Add slashes
            if (formattedText.length > 2) {
              formattedText =
                formattedText.substring(0, 2) +
                '/' +
                formattedText.substring(2);
            }
            if (formattedText.length > 5) {
              formattedText =
                formattedText.substring(0, 5) +
                '/' +
                formattedText.substring(5);
            }

            handleChange('dataMatch')(formattedText);
          };
          return (
            <KeyboardAvoidingView
              behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
              style={styles.container}>
              <ScrollView
                style={styles.formContainer}
                contentContainerStyle={styles.contentContainer}>
                <Text style={styles.titleGame}>Add Game</Text>
                <View style={styles.imageWrapper}>
                  <View style={styles.imageInner}>
                    <Text style={styles.titleImage}>Team 1</Text>
                    <CameraView
                      handleChoiseUrlImage={handleChange('avatarOne')}
                      avatarName={'Edit'}
                      containerStyles={{backgroundColor: '#DADADA'}}
                      textStyles={{
                        fontSizes: 16,
                        color: '#FE734C',
                        fontWeight: 700,
                      }}
                      size={100}
                    />
                    {touched.avatarOne && errors.avatarOne && (
                      <Text style={styles.errorText}>{errors.avatarOne}</Text>
                    )}
                  </View>
                  <VsImage />
                  <View style={styles.imageInner}>
                    <Text style={styles.titleImage}>Team 2</Text>
                    <CameraView
                      handleChoiseUrlImage={handleChange('avatarSecond')}
                      avatarName={'Edit'}
                      containerStyles={{backgroundColor: '#DADADA'}}
                      textStyles={{
                        fontSizes: 16,
                        color: '#FE734C',
                        fontWeight: 700,
                      }}
                      size={100}
                    />
                    {touched.avatarSecond && errors.avatarSecond && (
                      <Text style={styles.errorText}>
                        {errors.avatarSecond}
                      </Text>
                    )}
                  </View>
                </View>
                <View style={styles.inputRow}>
                  <View style={styles.inputContainer}>
                    <TextInput
                      style={[
                        styles.input,
                        touched.teamNameOne && errors.teamNameOne
                          ? styles.inputError
                          : null,
                      ]}
                      onChangeText={handleChange('teamNameOne')}
                      onBlur={handleBlur('teamNameOne')}
                      value={values.teamNameOne}
                      placeholder="Team name"
                      placeholderTextColor="#FFFFFF90"
                    />
                    {touched.teamNameOne && errors.teamNameOne && (
                      <Text style={styles.errorText}>{errors.teamNameOne}</Text>
                    )}
                  </View>
                  <View style={styles.inputContainer}>
                    <TextInput
                      style={[
                        styles.input,
                        styles.inputRowTextEnd,
                        touched.teamNameSecond && errors.teamNameSecond
                          ? styles.inputError
                          : null,
                      ]}
                      onChangeText={handleChange('teamNameSecond')}
                      onBlur={handleBlur('teamNameSecond')}
                      value={values.teamNameSecond}
                      placeholder="Team name"
                      placeholderTextColor="#FFFFFF90"
                    />
                    {touched.teamNameSecond && errors.teamNameSecond && (
                      <Text style={styles.errorText}>
                        {errors.teamNameSecond}
                      </Text>
                    )}
                  </View>
                </View>
                <View style={styles.inputRow}>
                  <View style={styles.inputContainer}>
                    <TextInput
                      style={[
                        styles.input,
                        touched.teamGoalOne && errors.teamGoalOne
                          ? styles.inputError
                          : null,
                      ]}
                      onChangeText={handleChange('teamGoalOne')}
                      onBlur={handleBlur('teamGoalOne')}
                      value={values.teamGoalOne}
                      placeholder="Team goal"
                      placeholderTextColor="#FFFFFF90"
                    />
                    {touched.teamGoalOne && errors.teamGoalOne && (
                      <Text style={styles.errorText}>{errors.teamGoalOne}</Text>
                    )}
                  </View>
                  <View style={styles.inputContainer}>
                    <TextInput
                      style={[
                        styles.input,
                        styles.inputRowTextEnd,
                        touched.teamGoalSecond && errors.teamGoalSecond
                          ? styles.inputError
                          : null,
                      ]}
                      onChangeText={handleChange('teamGoalSecond')}
                      onBlur={handleBlur('teamGoalSecond')}
                      value={values.teamGoalSecond}
                      placeholder="Team goal"
                      placeholderTextColor="#FFFFFF90"
                    />
                    {touched.teamGoalSecond && errors.teamGoalSecond && (
                      <Text style={styles.errorText}>
                        {errors.teamGoalSecond}
                      </Text>
                    )}
                  </View>
                </View>
                <View style={styles.inputContainerWide}>
                  <TextInput
                    style={[
                      styles.inputWide,
                      touched.dataMatch && errors.dataMatch
                        ? styles.inputError
                        : null,
                    ]}
                    onChangeText={handleDateChange}
                    value={values.dataMatch}
                    placeholder="DD/MM/YYYY"
                    maxLength={10}
                    keyboardType="numeric"
                    placeholderTextColor="#FFFFFF90"
                  />
                  {touched.dataMatch && errors.dataMatch && (
                    <Text style={styles.errorText}>{errors.dataMatch}</Text>
                  )}
                </View>
                <View style={styles.inputContainerWide}>
                  <TextInput
                    style={[
                      styles.inputWide,
                      touched.locationMatch && errors.locationMatch
                        ? styles.inputError
                        : null,
                    ]}
                    onChangeText={handleChange('locationMatch')}
                    onBlur={handleBlur('locationMatch')}
                    value={values.locationMatch}
                    placeholder="Location match"
                    placeholderTextColor="#FFFFFF90"
                  />
                  {touched.locationMatch && errors.locationMatch && (
                    <Text style={styles.errorText}>{errors.locationMatch}</Text>
                  )}
                </View>
              </ScrollView>

              <TouchableOpacity onPress={handleSubmit} style={styles.addButton}>
                <Text style={styles.addButtonText}>Add</Text>
              </TouchableOpacity>
            </KeyboardAvoidingView>
          );
        }}
      </Formik>
    </Layout>
  );
};

export default TaskCreate;

const styles = StyleSheet.create({
  keyboardView: {
    flex: 1,
    width: '100%',
  },
  formContainer: {
    flex: 1,
    width: '100%',
  },
  contentContainer: {
    paddingBottom: 70,
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  inputContainer: {
    width: '50%',
    marginBottom: 10,
    flexDirection: 'column',
  },
  input: {
    backgroundColor: '#4D5265', // Dark background for the input
    borderRadius: 20,
    color: 'white', // Text color
    fontSize: 16,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginHorizontal: 5, // Add some space between the inputs
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginVertical: 2,
    marginLeft: 10,
  },
  inputRowTextEnd: {
    textAlign: 'right',
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
  inputError: {
    borderWidth: 1,
    borderColor: 'red', // Червоний колір для помилки
  },
  inputError: {
    borderWidth: 1,
    borderColor: 'red', // Червоний колір для помилки
  },
  imageWrapper: {
    width: '85%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  imageInner: {
    alignItems: 'center',
  },
  titleGame: {
    fontSize: 36,
    fontWeight: '700',
    color: 'white',
    marginTop: 30,
    marginBottom: 20,
  },
  titleImage: {
    fontSize: 14,
    fontWeight: '400',
    color: 'white',
    marginBottom: 5,
  },
});
