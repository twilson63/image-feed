import React from 'react'
import PropTypes from 'prop-types'

import { StyleSheet, View, Text, FlatList } from 'react-native'
import { getImageFromId } from '../utils/api'
import Card from './Card'

const keyExtractor = ({ id }) => id.toString()

export default class CardList extends React.Component {
  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        author: PropTypes.string.isRequired
      })
    ).isRequired
  }
  render() {
    const { items } = this.props
    return (
      <FlatList
        data={items}
        renderItem={this.renderItem}
        keyExtractor={keyExtractor}
      />
    )
  }
  renderItem = ({ item: { id, author } }) => {
    return <Card fullname={author} image={{ uri: getImageFromId(id) }} />
  }
}

const styles = StyleSheet.create({})
