import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Card} from 'react-native-elements';

const HomeScreen = ({navigation}) => {
  const renderCard = () => (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('Article_screen', {
          id: '12345',
          postData: {title: 'asasasa', content: ''},
        })
      }>
      <Card>
        <Card.Title style={styles.cardTitle}>
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
        </Card.Title>
        <Card.Divider />
        <Text style={styles.cardText}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit.
        </Text>
      </Card>
    </TouchableOpacity>
  );
  return (
    <ScrollView>
      {renderCard()}
      {renderCard()}
      {renderCard()}
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
});

export default HomeScreen;
