import React from 'react'
import PropTypes from 'prop-types'

import { StyleSheet, View, TextInput } from 'react-native'

export default class CommentInput extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    placeholder: PropTypes.string
  }

  static defaultProps = {
    placeholder: ''
  }

  state = {
    text: ''
  }

  handleChangeText = text => this.setState({ text })
  handleSubmitEditing = () => {
    const { text } = this.state
    const { onSubmit } = this.props

    if (!text) return

    onSubmit(text)

    this.setState({ text: '' })
  }

  render() {
    const { text } = this.state
    const { placeholder } = this.props

    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          value={text}
          onChangeText={this.handleChangeText}
          onSubmitEditing={this.handleSubmitEditing}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'rgba(0,0,0,0.1)',
    paddingHorizontal: 20,
    height: 60
  },
  input: {
    flex: 1
  }
})
