import React, { Component, Fragment } from 'react';
import { StyleSheet, ScrollView, Text, View } from 'react-native';
import { inject, observer } from 'mobx-react';
import { Header } from '../components';
import { toJS } from 'mobx';
import { Theme } from '../styles';
import {Button} from '../form';


const { colors } = Theme;

//@inject('store')
//@observer
const Home = ({ navigation }) => {

    //const { store } = this.props;
    //const data = toJS(store.appStore.data);

    return (
      <Fragment>
        <Header
          left={{
            name: 'Menü',
            action: null,
            status: true,
          }}
          center={null}
          right={null}
        />

        <View style={styles.contain}>
          <ScrollView>
      <Button onPress={()=> navigation.navigate('detail')}/>
          </ScrollView>
        </View>
      </Fragment>
    );
  }


export default Home;

const styles = StyleSheet.create({
  contain: {
    flex: 1,
    padding: 15,
  },
  title: {
    fontSize: 24,
    color: 'blue',
  },
  description: {
    fontSize: 16,
    color: 'black',
  },
});