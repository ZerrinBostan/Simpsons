import React, { useState, useEffect, useCallback, useContext } from 'react';
import { SafeAreaView, FlatList, StyleSheet, StatusBar } from 'react-native';
import { ListItem, Avatar, FAB } from 'react-native-elements';
import TouchableScale from 'react-native-touchable-scale';
import Icon from 'react-native-vector-icons/Ionicons';

import SimpsonsContext from '../../store/simpsonsContext';

const keyExtractor = (item, index) => item + index.toString();

const Home = ({ navigation }) => {
  const { navigate } = navigation;
  const { deleteSimpsonData, simpsons } = useContext(SimpsonsContext);
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item, index }) => {
    const { id, avatar, name, job } = item;
    return (
      <ListItem
        Component={TouchableScale}
        tension={100}
        bottomDivider
        onPress={() =>
          navigate('SimpsonDetail', {
            id,
          })
        }>
        <Avatar
          size={70}
          rounded
          source={{ uri: avatar }}
          key={`${id}-${index}`}
          containerStyle={styles.homeAvatar}
        />
        <ListItem.Content>
          <ListItem.Title style={styles.homeListItem}>{name}</ListItem.Title>
          <ListItem.Subtitle style={{ color: '#102027' }}>{job}</ListItem.Subtitle>
        </ListItem.Content>
        <Icon
          name="trash"
          color="#d84315"
          size={30}
          onPress={() => deleteSimpsonData(id)}
        />
        <ListItem.Chevron />
      </ListItem>
    );
  };

  return (
    <SafeAreaView style={styles.homeContent}>
      <FlatList
        data={simpsons}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        extraData={selectedId}
      />
      <FAB
        color="black"
        size="large"
        style={styles.homeFab}
        onPress={() => navigate('AddNewCharacter')}
        icon={<Icon name="add-outline" size={26} color="white" />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  homeContent: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    width: '100%',
    position: 'relative',
  },
  homeFab: {
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
    marginBottom: 30,
  },
  homeAvatar: { backgroundColor: '#c8e6c9', borderStyle: 'solid' },
  homeListItem: { color: '#009688', fontWeight: 'bold', fontSize: 21 },
  title: {
    fontWeight: 'bold',
    fontSize: 32,
    textAlign: 'center',
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginTop: 15,
    marginBottom: 15,
  },
});

export default Home;
