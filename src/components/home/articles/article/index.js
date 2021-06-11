import React from 'react';
import {View, ScrollView, ActivityIndicator, StyleSheet} from 'react-native';
import {Image} from 'react-native-elements';
import ContentShow from '../../../../utils/contentShow';

const ArticleScreen = () => {
  return (
    <ScrollView>
      <View>
        <Image
          source={{uri: 'https://picsum.photos/200/300'}}
          style={styles.image}
          PlaceholderContent={<ActivityIndicator />}
        />
        <ContentShow />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
});

export default ArticleScreen;
