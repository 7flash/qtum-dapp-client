import React, { Component } from 'react'
import { PropTypes as T } from 'prop-types'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import copyToClipboard from '../../services/copy-to-clipboard'
import FileCopyIcon from '@material-ui/icons/FileCopyOutlined'

class WalletCopyToClipBoardButton extends Component {
  handleCopy = () => {
    copyToClipboard(this.props.text)
  }

  render () {
    const { variant } = this.props
    if (variant === 'icon') {
      return (
        <IconButton
          onClick={this.handleCopy}
          aria-label="Copy"
          color="primary"
        >
          <FileCopyIcon />
        </IconButton>
      )
    } else {
      return (
        <Button onClick={this.handleCopy} variant="contained" color="secondary">
          Copy Address
        </Button>
      )
    }
  }
}

WalletCopyToClipBoardButton.propTypes = {
  text: T.string,
  variant: T.string
}

export default WalletCopyToClipBoardButton