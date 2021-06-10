import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {connect} from 'react-redux';
import AuthScreen from './components/auth';
import {Stack, HomeStack, VideoStack} from './routes/stacks';
import ProfileScreen from './components/user/profile/profile';
import SideDrawerCustom from './utils/customDrawer';
import {Colors} from './utils/tools';

const Drawer = createDrawerNavigator();

const MainDrawer = () => (
  <Drawer.Navigator
    drawerContent={props => <SideDrawerCustom {...props} />}
    drawerStyle={{
      backgroundColor: Colors.grey,
    }}>
    <Drawer.Screen name="Home" component={HomeStack} />
    <Drawer.Screen name="Videos" component={VideoStack} />
    <Drawer.Screen name="Profile" component={ProfileScreen} />
  </Drawer.Navigator>
);

const App = props => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {props.auth.isAuth ? (
          <>
            <Stack.Screen
              name="Main"
              component={MainDrawer}
              options={{headerShown: false}}
            />
          </>
        ) : (
          <>
            <Stack.Screen name="AuthScreen" component={AuthScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const mapStateToProps = state => ({auth: state.auth});

export default connect(mapStateToProps)(App);
