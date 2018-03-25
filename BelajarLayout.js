import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class BelajarLayout extends React.Component {
  render() {
    return (
      <View style={styles.containerMain}>
        <View style={styles.box1}>
          <Text style={styles.text1}>Pendidikan Teknik Informatika</Text>
        </View>
        <View style={styles.box2}>
          <Text style={styles.text2}>Slider</Text>
        </View>

        <View style={styles.box3}>
          <View style={styles.box31}>
            <View style={styles.box32}>
              <Text style={styles.text2}>1</Text>
            </View>
            <View style={styles.box32}>
              <Text style={styles.text2}>2</Text>
            </View>
            <View style={styles.box32}>
              <Text style={styles.text2}>3</Text>
            </View>
            <View style={styles.box32}>
              <Text style={styles.text2}>4</Text>
            </View>
          </View>

          <View style={styles.box31}>
            <View style={styles.box32}>
              <Text style={styles.text2}>5</Text>
            </View>
            <View style={styles.box32}>
              <Text style={styles.text2}>6</Text>
            </View>
            <View style={styles.box32}>
              <Text style={styles.text2}>7</Text>
            </View>
            <View style={styles.box32}>
              <Text style={styles.text2}>8</Text>
            </View>
          </View>
        </View>

        <View style={styles.box4}>
          <Text style={styles.text4}>#JaenKuliahdiPTI</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: '#F44336',
    flex: 1,
    flexDirection: 'column'
  },
  box1: {
    justifyContent : 'center',
    flex: 1,
    backgroundColor: '#F44336',
    alignItems : 'center',
  },
  box2: {
    justifyContent : 'center',
    flex: 3,
    backgroundColor: '#E57373',
    alignItems : 'center',
  },
  box3: {
    flex: 2,
    backgroundColor: '#EF5350',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10
  },
  box4: {
    justifyContent : 'center',
    flex: 1,
    backgroundColor: '#E53935',
    alignItems : 'center',
  },
  box31: {
    flex: 2,
    backgroundColor: '#FF5252',
    flexDirection: 'row',
  },

  box32: {
    flex: 2,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 30,
    marginLeft: 30,
    marginRight: 30,
  },
  text1 : {
    fontSize : 30,
    color : 'white'
  },
  text2 : {
    fontSize : 30,
    color : 'black'
  },
  text3 : {
    fontSize : 30,
    color : 'white'
  },
  text4 : {
    fontSize : 30,
    color : 'white'
  },
});
