/* eslint-disable react/jsx-no-duplicate-props */
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Button, TextInput, Title} from 'react-native-paper';
import {Formik} from 'formik';
import * as Yup from 'yup';

const UserData = () => {
  const submit = values => {
    alert('submit');
  };

  return (
    <Formik
      enableReinitialize={true}
      initialValues={{
        name: '',
        lastname: '',
        age: '',
      }}
      validationSchema={Yup.object({
        name: Yup.string().required('The name is required'),
        lastname: Yup.string().required('The lastname is required'),
        age: Yup.number().required('The age is required'),
      })}
      onSubmit={values => submit(values)}>
      {({handleChange, handleBlur, handleSubmit, values, touched, errors}) => (
        <View style={styles.textInput}>
          <TextInput
            label="Name"
            value={''}
            mode="flat"
            onChangeText={handleChange('name')}
            onBlur={handleBlur('name')}
            error={errors.name && touched.name ? true : false}
            value={values.name}
          />
          <TextInput
            label="Lastname"
            value={''}
            mode="flat"
            onChangeText={handleChange('lastname')}
            onBlur={handleBlur('lastname')}
            error={errors.lastname && touched.lastname ? true : false}
            value={values.lastname}
          />
          <TextInput
            label="Age"
            value={''}
            mode="flat"
            onChangeText={handleChange('age')}
            onBlur={handleBlur('age')}
            error={errors.age && touched.age ? true : false}
            value={values.age}
          />
          <Button mode="contained" onPress={handleSubmit}>
            Submit
          </Button>
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  textInput: {
    padding: 20,
  },
});

export default UserData;
