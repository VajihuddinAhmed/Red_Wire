/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useCallback} from 'react';
import {View, StyleSheet} from 'react-native';
import {Button, TextInput, Title} from 'react-native-paper';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {useDispatch, useSelector} from 'react-redux';
import {updateUserData, clearAuthError} from '../../../store/actions';
import {ShowToast} from '../../../utils/tools';
import {useFocusEffect} from '@react-navigation/native';

const UserData = () => {
  const [loading, setLoading] = useState(false);
  const error = useSelector(state => state.auth.error);
  const {user} = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const submit = values => {
    setLoading(true);
    dispatch(updateUserData(values, user)).then(({payload}) => {
      setLoading(false);

      if (payload.error) {
        ShowToast('error', 'oops!!', 'Try again later', error);
      } else {
        ShowToast('success', 'Congrats', 'Successfully updated your profile');
      }
    });
  };

  useFocusEffect(
    useCallback(() => {
      return () => dispatch(clearAuthError());
    }, []),
  );

  return (
    <Formik
      enableReinitialize={true}
      initialValues={{
        name: user.name ? user.name : '',
        lastname: user.lastname ? user.lastname : '',
        age: user.age ? user.age : '',
      }}
      validationSchema={Yup.object({
        name: Yup.string().required('The name is required'),
        lastname: Yup.string().required('The lastname is required'),
        age: Yup.number().required('The age is required'),
      })}
      onSubmit={values => submit(values)}>
      {({handleChange, handleBlur, handleSubmit, values, touched, errors}) => (
        <View style={styles.textInput}>
          <Title>Personal Information</Title>
          <TextInput
            label="Name"
            mode="flat"
            onChangeText={handleChange('name')}
            onBlur={handleBlur('name')}
            error={errors.name && touched.name ? true : false}
            value={values.name}
          />
          <TextInput
            label="Lastname"
            mode="flat"
            onChangeText={handleChange('lastname')}
            onBlur={handleBlur('lastname')}
            error={errors.lastname && touched.lastname ? true : false}
            value={values.lastname}
          />
          <TextInput
            label="Age"
            mode="flat"
            onChangeText={handleChange('age')}
            onBlur={handleBlur('age')}
            error={errors.age && touched.age ? true : false}
            value={values.age}
          />
          <Button
            disabled={loading}
            loading={loading}
            mode="contained"
            onPress={handleSubmit}>
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
