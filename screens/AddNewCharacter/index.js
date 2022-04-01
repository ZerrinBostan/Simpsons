import React, { useCallback, useContext, useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import SimpsonsContext from '../../store/simpsonsContext';
import { SafeAreaView } from 'react-native-safe-area-context';

import { TextInput } from 'react-native-gesture-handler';
import { Text, Button } from 'react-native-elements';
import * as yup from 'yup';
import { Formik } from 'formik';

const AddNewCharacter = ({ navigation }) => {
  const { updateSimpsonData } = useContext(SimpsonsContext);
  return (
    <Formik
      initialValues={{
        name: '',
        job: '',
        description: '',
        avatar: '',
      }}
      onSubmit={values => {
        updateSimpsonData(values);
        navigation.navigate('Home');
      }}
      validationSchema={yup.object().shape({
        name: yup
          .string()
          .required('Please, provide your name-surname!')
          .min(4),
        job: yup.string().required('Please, provide your job!').min(4),
        description: yup
          .string()
          .required('Please, provide your about!')
          .min(7),
        avatar: yup.string().required('Please, provide your image!').min(4),
      })}>
      {({
        values,
        handleChange,
        errors,
        setFieldTouched,
        touched,
        isValid,
        handleSubmit,
      }) => (
        <SafeAreaView style={styles.addNewCharacterContent}>
          <TextInput
            style={styles.addNewCharacterContentInput}
            onChangeText={handleChange('name')}
            onBlur={() => setFieldTouched('name')}
            value={values.name}
            placeholder="Name Surname"
          />
          {touched.name && errors.name && (
            <Text style={styles.addNewCharacterContentText}>
              {errors.name}
            </Text>
          )}
          <TextInput
            style={styles.addNewCharacterContentInput}
            onChangeText={handleChange('job')}
            onBlur={() => setFieldTouched('job')}
            value={values.job}
            placeholder="Job title"
          />
          {touched.job && errors.job && (
            <Text style={styles.addNewCharacterContentText}>
              {errors.job}
            </Text>
          )}
          <TextInput
            multiline
            numberOfLines={4}
            onChangeText={handleChange('description')}
            onBlur={() => setFieldTouched('description')}
            value={values.description}
            maxLength={500}
            style={styles.addNewCharacterContentMultilineInput}
            placeholder="About Him/Her"
            editable
          />
          {touched.description && errors.description && (
            <Text style={styles.addNewCharacterContentText}>
              {errors.description}
            </Text>
          )}
          <TextInput
            style={styles.addNewCharacterContentInput}
            onChangeText={handleChange('avatar')}
            onBlur={() => setFieldTouched('avatar')}
            value={values.avatar}
            placeholder="Image Link"
          />
          {touched.avatar && errors.avatar && (
            <Text style={styles.addNewCharacterContentText}>
              {errors.avatar}
            </Text>
          )}
          <Button
            title="Add to Simpson"
            onPress={handleSubmit}
            disabled={!isValid}
          />
        </SafeAreaView>
      )}
    </Formik>
  );
};
const styles = StyleSheet.create({
  addNewCharacterContent: {
    flex: 1,
    padding: 15,
    backgroundColor: '#eceff1',
  },
  addNewCharacterContentInput: {
    marginBottom: 15,
    borderWidth: 2,
    padding: 10,
    borderRadius: 3,
    borderColor: '#babdbe',
  },
  addNewCharacterContentMultilineInput: {
    marginBottom: 15,
    borderWidth: 2,
    padding: 10,
    minHeight: 100,
    borderRadius: 3,
    borderColor: '#babdbe',
  },
  addNewCharacterContentText: {
    fontSize: 12,
    color: '#FF0D10',
    marginBottom: 15,
  },
});
export default AddNewCharacter;
