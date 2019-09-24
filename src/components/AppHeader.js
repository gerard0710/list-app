import React from 'react'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'

import AddIcon from '@material-ui/icons/Add'
import RemoveCircleOutlineTwoToneIcon from '@material-ui/icons/RemoveCircleOutlineTwoTone'

class Header extends React.Component {
  render() {
    return (
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            List App
          </Typography>
          <div className="HeaderDivider" />
          <div>
            <IconButton title="Remove All" color="inherit">
              <RemoveCircleOutlineTwoToneIcon />
            </IconButton>
            <IconButton title="Add 1" color="inherit">
              <AddIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    )
  }
}

export default Header
