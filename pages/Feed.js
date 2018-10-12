import React from 'react'
import PropTypes from 'prop-types'

import {
  ActivityIndicator,
  Text,
  SafeAreaView,
  ViewPropTypes
} from 'react-native'

import { fetchImages } from '../utils/api'
import CardList from '../components/CardList'

export default class Feed extends React.Component {
  static propTypes = {
    style: ViewPropTypes.style
  }
  static defaultProps = {
    style: null
  }

  state = {
    loading: true,
    items: []
  }

  async componentDidMount() {
    try {
      const items = await fetchImages()

      this.setState({
        loading: false,
        items
      })
    } catch (e) {
      this.setState({
        loading: false,
        error: true
      })
    }
  }

  render() {
    const { style } = this.props
    const { loading, items, error } = this.state

    if (loading) {
      return <ActivityIndicator size="large" />
    }

    if (error) {
      return <Text>Error...</Text>
    }

    return (
      <SafeAreaView style={style}>
        <CardList items={items} />
      </SafeAreaView>
    )
  }
}
