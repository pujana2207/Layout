import React from 'react';
import {
  StyleSheet,
  Text,
  View
 } from 'react-native';
//import VolumeBalok from './SRC/Latihan/VolumeBalok';
//import LayoutRN from './src/layout/LayoutRN';
import BelajarLayout from './src/layout/BelajarLayout';
//import Header from './SRC/Cuaca/Header';
//import PrakiraanCuaca from './SRC/Cuaca/PrakiraanCuaca';

export default class App extends React.Component {

  render() {
    return (
      /*<View style={styles.containerMain}>
        <Header headerText={'prakiraan cuaca'} />
        <PrakiraanCuaca />
      </View>*/
    //  <LayoutRN />
      <BelajarLayout />
    );
  }
}
