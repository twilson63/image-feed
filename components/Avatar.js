import React from 'react'
import { ColorPropType, StyleSheet, View, Text } from 'react-native'
import PropTypes from 'prop-types'

export default function Avatar({ size, backgroundColor, initials }) {
  const style = {
    height: size,
    width: size,
    backgroundColor,
    borderRadius: size / 2
  }

  return (
    <View style={[styles.container, style]}>
      <Text style={styles.text}>{initials}</Text>
    </View>
  )
}

Avatar.propTypes = {
  initials: PropTypes.string.isRequired,
  backgroundColor: ColorPropType.isRequired,
  size: PropTypes.number.isRequired
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: 'white'
  }
})
