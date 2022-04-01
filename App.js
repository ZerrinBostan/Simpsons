import React from 'react';
import {SafeAreaView} from 'react-native';
import AppNavigationContainer from './navigasyon';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import { SimpsonsProvider } from './store/simpsonsContext';

const App = () => {
  Icon.loadFont();

  return (
    <SafeAreaProvider>
      <SimpsonsProvider>
        <SafeAreaView style={{flex: 1}}>
          <AppNavigationContainer />
        </SafeAreaView>
      </SimpsonsProvider>
    </SafeAreaProvider>
  );
};

export default App;
