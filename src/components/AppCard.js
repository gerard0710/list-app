import React from 'react'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

class AppCard extends React.Component {
  render() {
    return (
      <Card className="Card" raised={true}>
        <CardContent className="CardContent">
          <Typography variant="h5" component="h2">
            Card 1
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Remove</Button>
        </CardActions>
      </Card>
    )
  }
}

export default AppCard
