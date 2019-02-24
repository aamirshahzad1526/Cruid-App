import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography'

const styles = {
    root: {
      flexGrow: 1,
    },
  };

class Header extends Component {
  render() {
    const { classes } = this.props;


    return (
        <div className={classes.root}>
          <AppBar position="static" color="default">
            <Toolbar>
              <Typography variant="h6" color="inherit">
                Todo App
              </Typography>
            </Toolbar>
          </AppBar>
        </div>
      );
    }
}
    Header.propTypes = {
      classes: PropTypes.object.isRequired,
    };
    
    export default withStyles(styles)(Header);