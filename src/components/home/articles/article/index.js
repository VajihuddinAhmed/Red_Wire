import React from 'react';
import {View, ScrollView, ActivityIndicator, StyleSheet} from 'react-native';
import {Image} from 'react-native-elements';
import ContentShow from '../../../../utils/contentShow';
import {useRoute} from '@react-navigation/native';

const ArticleScreen = () => {
  const {params} = useRoute();

  return (
    <ScrollView>
      <View>
        <Image
          source={{uri: params.postData.image}}
          style={styles.image}
          PlaceholderContent={<ActivityIndicator />}
        />
        <ContentShow params={params} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 250,
  },
});

export default ArticleScreen;
