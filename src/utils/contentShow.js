import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ContentShow = ({params}) => {
  return (
    <View>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{params.postData.title}</Text>
        <Text style={styles.articleContent}>
          {params.postData.content
            .replace(/<p>/g, '')
            .replace(/<\/p>/g, '\n\n')}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    padding: 10,
  },
  title: {
    fontSize: 26,
    marginBottom: 30,
    fontWeight: '300',
    color: '#444444',
  },
  articleContent: {
    fontSize: 18,
    color: '#444444',
  },
});

export default ContentShow;
