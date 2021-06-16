import React, {useState, useEffect} from 'react';
import {View, ScrollView, ActivityIndicator, StyleSheet} from 'react-native';
import {Tile} from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux';
import {getVideos, getMoreVideos} from '../../../store/actions';

const VideosScreen = ({navigation}) => {
  const [loadingMore, setLoadingMore] = useState(false);
  const dispatch = useDispatch();
  const articles = useSelector(state => state.articles);

  useEffect(() => {
    dispatch(getVideos());
  }, [dispatch]);

  const renderVideos = () =>
    articles.videos.map(item => (
      <Tile
        key={item.id}
        imageSrc={{uri: item.image}}
        title={item.title}
        icon={{
          name: 'play-circle',
          type: 'font-awesome',
          color: '#fff',
          size: 50,
        }}
        contentContainerStyle={styles.contentContainerStyle}
        containerStyle={styles.containerStyle}
        titleStyle={styles.titleStyle}
        onPress={() =>
          navigation.navigate('Video_scrn', {
            id: item.id,
            postData: item,
          })
        }
      />
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
            dispatch(getMoreVideos(articles)).then(() => {
              setLoadingMore(false);
            });
          }
        }
      }}
      scrollEventThrottle={400}>
      <View style={styles.containerView}>
        {articles && articles.videos ? renderVideos() : null}
        {loadingMore ? (
          <View style={styles.loadingMoreIndicator}>
            <ActivityIndicator color="black" />
          </View>
        ) : null}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  containerView: {
    padding: 20,
  },
  titleStyle: {
    fontSize: 15,
  },
  containerStyle: {
    width: '100%',
    height: 250,
    marginBottom: 15,
  },
  contentContainerStyle: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#e1e8ee',
    shadowColor: 'rgba(0,0,0,0.2)',
  },
  loadingMoreIndicator: {
    marginBottom: 50,
    marginTop: 50,
  },
});

export default VideosScreen;
