import React, { Component,Fragment } from 'react';
import { View, Text,StyleSheet,ScrollView } from 'react-native';
import { Theme } from '../styles';
import { Header } from '../components';
import {Button} from '../form';


const { colors } = Theme;

const Detail = ({navigation})=>{
  return(
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
      <Text>Detail</Text>
      <Button onPress={()=>navigation.navigate('home')}/>
          </ScrollView>
        </View>
      </Fragment>
    );
  }
export default Detail;
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