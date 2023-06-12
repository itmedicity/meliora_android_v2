import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context'
import AppNav from './src/navigation/AppNav';

export default function App() {
  return (
    <SafeAreaProvider>
      <AppNav />
    </SafeAreaProvider>
  );
}