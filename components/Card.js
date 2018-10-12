import React from 'react'
import PropTypes from 'prop-types'

import { StyleSheet, View, Text, Image, ActivityIndicator } from 'react-native'

import AuthorRow from './AuthorRow'

export default class Card extends React.Component {
  static propTypes = {
    fullname: PropTypes.string.isRequired,
    image: Image.propTypes.source.isRequired,
    linkText: PropTypes.string,
    onPressLinkText: PropTypes.func
  }

  static defaultProps = {
    linkText: '',
    onPressLinkText: () => {}
  }

  state = {
    loading: true
  }

  render() {
    const { fullname, linkText, onPressLinkText, image } = this.props
    const { loading } = this.state

    return (
      <View>
        <AuthorRow
          fullname={fullname}
          linkText={linkText}
          onPressLinkText={onPressLinkText}
        />
        <View style={styles.image}>
          {loading && (
            <ActivityIndicator style={StyleSheet.absoluteFill} size={'large'} />
          )}
          <Image
            style={StyleSheet.absoluteFill}
            source={image}
            onLoad={this.handleLoad}
          />
        </View>
      </View>
    )
  }

  handleLoad = () => {
    this.setState({ loading: false })
  }
}

const styles = StyleSheet.create({
  image: {
    aspectRatio: 1,
    backgroundColor: 'rgba(0,0,0,0.2)'
  }
})
