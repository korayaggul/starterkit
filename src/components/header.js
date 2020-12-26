import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { Utils } from '../utils';
import { Theme } from '../styles';

const { width } = Utils;
const { colors } = Theme;

const TAB_WIDTH = (width - 30) / 3;

export default class Header extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    const { left, center, right, style } = this.props;

    return (
      <View style={[styles.c_header, style]}>
        <View style={styles.c_header_contain}>
          {left && left.status ? (
            <TouchableOpacity
              onPress={left.action}
              hitSlop={{
                top: 15,
                left: 15,
                right: 15,
                bottom: 15,
              }}
              style={[styles.itemWidth, { justifyContent: 'flex-start' }]}
            >
              <Text style={styles.menuItem}>{left.name}</Text>
            </TouchableOpacity>
          ) : (
            <View style={styles.itemWidth} />
          )}

          {center && center.status ? (
            <TouchableOpacity
              onPress={center.action}
              hitSlop={{
                top: 15,
                left: 15,
                right: 15,
                bottom: 15,
              }}
              style={[styles.itemWidth, { justifyContent: 'center' }]}
            >
              <Text style={styles.menuItemCenter}>{center.name}</Text>
            </TouchableOpacity>
          ) : (
            
            <View>
              
              <Image
              
                style={styles.logo}
               
                source={require('../../assets/images/logo.png')}
              />
            </View>
          )}

          {right && right.status ? (
            <TouchableOpacity
              onPress={right.action}
              hitSlop={{
                top: 15,
                left: 15,
                right: 15,
                bottom: 15,
              }}
              style={[styles.itemWidth, { justifyContent: 'flex-end' }]}
            >
              <Text style={styles.menuItem}>{right.name}</Text>
            </TouchableOpacity>
          ) : (
            <View style={styles.itemWidth} />
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  c_header: {
    width,
    height: 50,
  },
  c_header_contain: {
    flex: 1,
    padding: 15,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.primary,
  },
  logo: {
    width: TAB_WIDTH,
    height: 30,
  },
  menuItem: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  menuItemCenter: {
    color: colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemWidth: {
    width: TAB_WIDTH,
    flexDirection: 'row',
  },
});