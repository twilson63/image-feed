import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

export default function NavigationBar({ title, leftText, onPressLeftText }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.leftText} onPress={onPressLeftText}>
        <Text>{leftText}</Text>
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

NavigationBar.propTypes = {
  title: PropTypes.string,
  leftText: PropTypes.string,
  onPressLeftText: PropTypes.func
}

NavigationBar.defaultProps = {
  title: '',
  leftText: '',
  onPressLeftText: () => {}
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'rgba(0,0,0,0.01)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontWeight: '500'
  },
  leftText: {
    position: 'absolute',
    left: 20,
    top: 0,
    bottom: 0,
    justifyContent: 'center'
  }
})
