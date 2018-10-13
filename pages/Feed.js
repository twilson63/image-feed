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
    style: ViewPropTypes.style,
    commentsForItem: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.string))
      .isRequired,
    onPressComments: PropTypes.func.isRequired
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
    const { style, commentsForItem, onPressComments } = this.props
    const { loading, items, error } = this.state

    if (loading) {
      return <ActivityIndicator size="large" />
    }

    if (error) {
      return <Text>Error...</Text>
    }

    return (
      <SafeAreaView style={style}>
        <CardList
          items={items}
          commentsForItem={commentsForItem}
          onPressComments={onPressComments}
        />
      </SafeAreaView>
    )
  }
}
