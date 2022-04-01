import React, { useCallback, useContext, useEffect, useState } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { Image } from 'react-native-elements';
import SimpsonsContext from '../../store/simpsonsContext';
import { Text } from 'react-native-elements';

const SimpsonDetail = ({ route }) => {
  const id = route?.params?.id;
  const { simpsons } = useContext(SimpsonsContext);
  const [selectedSimpsons, setSelectedSimpsons] = useState();

  useEffect(() => {
    const simpson = simpsons.find(item => item.id === id);
    setSelectedSimpsons(simpson);
  }, [selectedSimpsons]);
  return (
    <View style={styles.simpsonDetailContent}>
      <Image
        source={{ uri: selectedSimpsons?.avatar }}
        style={styles.simpsonDetailContentImage}
        PlaceholderContent={<ActivityIndicator />}
      />
      <Text h3Style={styles.simpsonDetailContentTitle} h3>
        {selectedSimpsons?.name || 'Name'}
      </Text>
      <Text h3Style={styles.simpsonDetailContentSubtitle} h4>
        {selectedSimpsons?.job || 'Job'}
      </Text>
      <Text style={styles.simpsonDetailContentDesc} h6>
        {selectedSimpsons?.description || 'Description'}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  simpsonDetailContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  simpsonDetailContentImage: {
    width: 220,
    height: 350,
  },
  simpsonDetailContentTitle: {
    fontWeight: 'bold',
  },
  simpsonDetailContentSubtitle: {
    color: 'gray',
  },
  simpsonDetailContentDesc: {
    textAlign: 'justify',
    padding: 15,
  },
});
export default SimpsonDetail;
