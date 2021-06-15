import {articlesCollection, firebase, usersCollection} from '../../firebase';

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

    return {isAuth: true, user: userProfile};
  } catch (e) {
    return {error: e.message};
  }
};

export const loginUser = async ({email, password}) => {
  try {
    const response = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);

    const userProfile = await usersCollection.doc(response.user.uid).get();
    const data = userProfile.data();

    return {isAuth: true, user: data};
  } catch (e) {
    return {error: e.message};
  }
};

export const autoSignIn = () =>
  new Promise((resolve, reject) => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        usersCollection
          .doc(user.uid)
          .get()
          .then(snapshot => {
            resolve({isAuth: true, user: snapshot.data()});
          });
      } else {
        resolve({isAuth: false, user: []});
      }
    });
  });

export const logoutUser = () => firebase.auth().signOut();

export const updateUserData = async (values, user) => {
  try {
    const collection = usersCollection.doc(user.uid);
    await collection.update(values);

    const newUpdatedData = {
      ...user,
      ...values,
    };
    return {user: newUpdatedData, error: null};
  } catch (error) {
    return {user: user, error: error};
  }
};

export const getArticles = async () => {
  try {
    const response = await articlesCollection
      .where('public', '==', 1)
      .orderBy('createdAt')
      .limit(3)
      .get();

    const lastPostVisible = response.docs[response.docs.length - 1];
    const articles = response.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));

    return {posts: articles, lastPostVisible: lastPostVisible};
  } catch (e) {
    console.log(e);
    return e;
  }
};

export const getMoreArticles = async articles => {
  let posts = [...articles.posts];
  let lastPostVisible = articles.lastPostVisible;
  try {
    if (lastPostVisible) {
      const response = await articlesCollection
        .where('public', '==', 1)
        .orderBy('createdAt')
        .startAfter(lastPostVisible)
        .limit(1)
        .get();

      lastPostVisible = response.docs[response.docs.length - 1];
      const newArticles = response.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      return {posts: [...articles.posts, ...newArticles], lastPostVisible};
    }
    return {posts, lastPostVisible};
  } catch (e) {
    console.log(e);
    return {posts, lastPostVisible};
  }
};
