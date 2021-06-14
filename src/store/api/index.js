import {firebase, usersCollection} from '../../firebase';

export const registerUser = async ({email, password}) => {
  try {
    const response = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
    const {user} = response;
    const userProfile = {
      uid: user.uid,
      email: email,
    };
    await usersCollection.doc(user.uid).set(userProfile);

    return {isAuth: false, user: userProfile};
  } catch (e) {
    return {error: e.message};
  }
};
