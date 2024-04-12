import React from 'react';
import {
  Text,
  View,
  Button,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {useSelector} from 'react-redux';
import {Formik} from 'formik';

import {RootState} from '../../store/store';
import Layout from '../../components/Layout.tsx';
import {AvatarCircle} from '../../components/AvatarCircle';

const TaskCreate = () => {
  const token = useSelector((state: RootState) => state.user.token);

  const handleOnSubmit = values => {
    console.log(values);
  };

  return (
    <Layout>
      <Formik
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
        }) => (
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}>
            <View>
              <AvatarCircle
                url={values.avatarOne}
                size={50}
                defaultImage={true}
                borderWidth={2}
                name={' '}
                borderColor="rgba(110, 91, 125, 1)"
                // onPress={() => ()}
                // containerStyles={styles.avatarStyles}
              />
            </View>
            <View style={styles.inputRow}>
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
            </View>
            <View style={styles.inputRow}>
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
            </View>
            <TextInput
              style={[
                styles.inputWide,
                touched.dataMatch && errors.dataMatch
                  ? styles.inputError
                  : null,
              ]}
              onChangeText={handleChange('dataMatch')}
              onBlur={handleBlur('dataMatch')}
              value={values.dataMatch}
              placeholder="Data match"
              placeholderTextColor="#FFFFFF90"
            />
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
            <TouchableOpacity onPress={handleSubmit} style={styles.addButton}>
              <Text style={styles.addButtonText}>Add</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        )}
      </Formik>
    </Layout>
  );
};

export default TaskCreate;

const styles = StyleSheet.create({
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
  input: {
    backgroundColor: '#4D5265', // Dark background for the input
    borderRadius: 20,
    color: 'white', // Text color
    fontSize: 16,
    paddingHorizontal: 15,
    paddingVertical: 10,
    width: '45%', // To ensure inputs don't touch on smaller screens
    marginHorizontal: 5, // Add some space between the inputs
  },
  inputRowTextEnd: {
    textAlign: 'right',
  },
  inputWide: {
    backgroundColor: '#4D5265', // Dark background for the input
    borderRadius: 20,
    color: 'white', // Text color
    fontSize: 16,
    paddingHorizontal: 15,
    paddingVertical: 10,
    width: '90%', // Full width minus margin
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
});
