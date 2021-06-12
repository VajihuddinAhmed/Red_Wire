import React, {useState, useEffect, useCallback} from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
//import {useDispatch, useSelector} from 'react-redux';
import {Input, Button} from 'react-native-elements';
import {Colors, LogoText, ShowToast} from '../../utils/tools';

const AuthScreen = () => {
  const [formType, setFormType] = useState(true);
  const [secureEntry, setSecureEntry] = useState(true);
  const submit = values => {
    alert(values);
  };

  useEffect(() => {
    ShowToast('success', 'login successful', 'displaying account');
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <View style={styles.container}>
        <LogoText />
        <Formik
          initialValues={{email: 'vajihahmed@gmail.com', password: '098765'}}
          validationSchema={Yup.object({
            email: Yup.string()
              .email('Invalid email address')
              .required('The email is required'),
            password: Yup.string()
              .max(10, 'Must be 10 or less characters')
              .required('The password is required'),
          })}
          onSubmit={values => submit(values)}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            touched,
            errors,
          }) => (
            <>
              <Input
                placeholder="Email"
                leftIcon={{
                  type: 'antdesign',
                  name: 'mail',
                  color: Colors.white,
                }}
                inputStyle={styles.inputStyle}
                placeholderTextColor={Colors.grey}
                inputContainerStyle={styles.inputContainerStyle}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
              <Input
                placeholder="Password"
                secureTextEntry={secureEntry}
                leftIcon={{
                  type: 'antdesign',
                  name: 'lock',
                  color: Colors.white,
                }}
                rightIcon={{
                  type: 'antdesign',
                  name: secureEntry ? 'eye' : 'eyeo',
                  onPress: () => setSecureEntry(!secureEntry),
                }}
                inputStyle={styles.inputStyle}
                placeholderTextColor={Colors.grey}
                inputContainerStyle={styles.inputContainerStyle}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
              />
              <Button
                title={formType ? 'Register' : 'Login'}
                buttonStyle={styles.buttonStyle}
                titleStyle={styles.titleStyle}
              />
              <Button
                type="clear"
                title={`${
                  !formType ? 'Already Registered?' : 'Need to Sign In'
                }`}
                buttonStyle={styles.secondButtonStyle}
                titleStyle={styles.secondTitleStyle}
                onPress={() => setFormType(!formType)}
              />
            </>
          )}
        </Formik>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    backgroundColor: Colors.red,
  },
  container: {
    padding: 50,
    alignItems: 'center',
  },
  inputStyle: {
    fontSize: 15,
    color: Colors.white,
  },
  inputContainerStyle: {
    borderBottomColor: Colors.black2,
    borderBottomWidth: 3,
  },
  buttonStyle: {
    backgroundColor: Colors.black,
    marginTop: 20,
  },
  secondButtonStyle: {
    marginTop: 16,
  },
  titleStyle: {
    width: '100%',
  },
  secondTitleStyle: {
    width: '100%',
    color: Colors.white,
  },
});

export default AuthScreen;
