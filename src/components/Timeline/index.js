import React, { Component } from 'react'
import { PropTypes as T } from 'prop-types'
import withContainer from './container'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'
import PlusOneIcon from '@material-ui/icons/PlusOneOutlined'
import ThumbUpIcon from '@material-ui/icons/ThumbUpOutlined'
import PermIdentityIcon from '@material-ui/icons/PermIdentityOutlined'
import RemoveIcon from '@material-ui/icons/Remove'
import moment from 'moment'

class Timeline extends Component {
  render () {
    const { isFacebookAuthenticated, transactions } = this.props
    let renderedComponent
    if (!isFacebookAuthenticated) {
      renderedComponent = <Typography color="textPrimary">You must be logged with Facebook to see your timeline</Typography>
    } else if (transactions.length === 0) {
      renderedComponent = <Typography color="textPrimary">No item in timeline</Typography>
    } else {
      renderedComponent = (
        <List>
          {transactions.map(({ actor, verb, object, target, time }, idx) => {
            let icon
            let action
            const formattedTime = moment(time).format('DD/MM/YYYY, h:mm:ss')
            switch (verb) {
              case 'create':
                icon = <PlusOneIcon />
                action = `${actor} created achievement ${object}`
                break
              case 'confirm':
                icon = <ThumbUpIcon />
                action = `${actor} confirmed achievement ${object}`
                break
              case 'register':
                icon = <PermIdentityIcon />
                action = `${actor} registered ${object}`
                break
              case 'withdraw':
              default:
                icon = <RemoveIcon />
                action = `${actor} withdrew achievement ${object}`
                break
            }
            return (
              <ListItem key={idx}>
                <Avatar>
                  {icon}
                </Avatar>
                <ListItemText
                  primary={`${formattedTime} - ${action}`}
                  secondary={`transaction: ${target}`}
                />
              </ListItem>
            )
          })}
        </List>
      )
    }
    return (
      <Card>
        <CardContent>
          {renderedComponent}
        </CardContent>
      </Card>
    )
  }
}

Timeline.propTypes = {
  transactions: T.array,
  isFacebookAuthenticated: T.bool.isRequired
}

export default withContainer(Timeline)