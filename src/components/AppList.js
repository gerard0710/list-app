import React from 'react'

import Grid from '@material-ui/core/Grid'

import AppCard from './AppCard'

class AppList extends React.Component {
  render() {
    return (
      <div>
        <Grid container className="Grid" direction="row">
          <Grid item xs={12}>
            <Grid container justify="center" spacing={4}>
              <AppCard></AppCard>
            </Grid>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default AppList
