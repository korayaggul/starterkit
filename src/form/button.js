import React from 'react';
import { StyleSheet } from 'react-native';
import { Button as ButtonElement } from 'react-native-elements';
import PropTypes from 'prop-types';
import { Theme } from '../styles';

const { colors } = Theme;

const Button = (props) => {
  const { style, type, title, onPress, textStyle, loading, disabled } = props;

  const buttonStyle = `${type}ButtonStyle`;
  const titleStyle = `${type}TitleStyle`;
  const loadingStyle = `${type}Loading`;

  return (
    <ButtonElement
      onPress={onPress}
      activeOpacity={0.8}
      loading={loading}
      disabled={disabled}
      loadingProps={styles[loadingStyle]}
      buttonStyle={[styles[buttonStyle], style]}
      titleStyle={[styles[titleStyle], styles.title, textStyle]}
      title={title}
    />
  );
};

Button.propTypes = {
  style: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  textStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  title: PropTypes.string,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  type: PropTypes.oneOf(['outline', 'primary', 'secondary', 'light', 'dark']),
  onPress: PropTypes.func,
};

Button.defaultProps = {
  style: null,
  textStyle: null,
  title: null,
  loading: false,
  disabled: false,
  type: 'primary',
  onPress: null,
};

export default Button;

const styles = StyleSheet.create({
  title: {
    fontSize: 14,
  },
  outlineLoading: {
    color: colors.primary,
  },
  outlineButtonStyle: {
    backgroundColor: colors.white,
    borderColor: colors.primary,
    borderWidth: 1,
    borderRadius: 5,
  },
  outlineTitleStyle: {
    color: colors.primary,
    paddingHorizontal: 15,
  },
  primaryLoading: {
    color: colors.primary,
  },
  primaryButtonStyle: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
    borderWidth: 1,
    borderRadius: 5,
    minWidth: 150,
  },
  primaryTitleStyle: {
    color: colors.white,
    paddingHorizontal: 15,
  },
  secondaryLoading: {
    color: colors.white,
  },
  secondaryButtonStyle: {
    backgroundColor: colors.secondary,
    borderColor: colors.secondary,
    borderWidth: 1,
    borderRadius: 5,
  },
  secondaryTitleStyle: {
    color: colors.white,
    paddingHorizontal: 15,
  },
  lightButtonStyle: {
    backgroundColor: colors.white,
    borderColor: colors.primary,
    borderWidth: 1,
    borderRadius: 5,
  },
  lightTitleStyle: {
    color: colors.primary,
    paddingHorizontal: 15,
  },
  lightLoading: {
    color: colors.primary,
  },
  darkButtonStyle: {
    backgroundColor: colors.icon,
    borderColor: colors.icon,
    borderWidth: 1,
    borderRadius: 5,
  },
  darkTitleStyle: {
    color: colors.white,
    paddingHorizontal: 15,
  },
  darkLoading: {
    color: colors.white,
  },
});
