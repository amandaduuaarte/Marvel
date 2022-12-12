import React from 'react';
import {StatusBar} from 'react-native';
import AppProvider from './hooks';
import {Routes} from './routes';

function App() {
  return (
    <AppProvider>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Routes />
    </AppProvider>
  );
}

export default App;
