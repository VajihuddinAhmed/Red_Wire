import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {Card} from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux';
import {getArticles, getMoreArticles} from '../../../store/actions';

const HomeScreen = ({navigation}) => {
  const [loadingMore, setLoadingMore] = useState(false);
  const dispatch = useDispatch();
  const articles = useSelector(state => state.articles);

  useEffect(() => {
    dispatch(getArticles());
  }, [dispatch]);

  const renderCard = () =>
    articles.posts.map(item => (
      <TouchableOpacity
        key={item.id}
        onPress={() =>
          navigation.navigate('Article_screen', {
            id: item.id,
            postData: item,
          })
        }>
        <Card>
          <Card.Title style={styles.cardTitle}>
            <Text>{item.title}</Text>
          </Card.Title>
          <Card.Divider />
          <Text style={styles.cardText}>{item.excerpt}</Text>
        </Card>
      </TouchableOpacity>
    ));

  const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
    const paddingToBottom = 50;
    return (
      layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom
    );
  };

  return (
    <ScrollView
      onScroll={({nativeEvent}) => {
        if (isCloseToBottom(nativeEvent)) {
          if (!loadingMore) {
            setLoadingMore(true);
            dispatch(getMoreArticles(articles)).then(() => {
              setLoadingMore(false);
            });
          }
        }
      }}
      scrollEventThrottle={400}>
      {articles && articles.posts ? renderCard() : null}
      {loadingMore ? (
        <View style={styles.loadingMoreIndicator}>
          <ActivityIndicator color="black" />
        </View>
      ) : null}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  cardTitle: {
    fontSize: 20,
    textAlign: 'center',
  },
  cardText: {
    marginBottom: 10,
    marginTop: 10,
  },
  loadingMoreIndicator: {
    marginBottom: 50,
    marginTop: 50,
  },
});

export default HomeScreen;
