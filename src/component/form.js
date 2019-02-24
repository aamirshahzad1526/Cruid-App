import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import './form.css'

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
    },
});

const currencies = [
    {
        value: 'USD',
        label: '$',
    },
    {
        value: 'EUR',
        label: '€',
    },
    {
        value: 'BTC',
        label: '฿',
    },
    {
        value: 'JPY',
        label: '¥',
    },
];

class Form extends React.Component {
    state = {
        name: 'Cat in the Hat',
        age: '',
        multiline: 'Controlled',
        currency: 'EUR',
    };

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    };

    render() {
        const { classes } = this.props;

        return (
            <Paper className='container' elevation={1}>

                <form className={classes.container}>

                    <TextField
                        id="standard-full-width"
                        label="Product Name"
                        style={{ margin: 8 }}
                        placeholder="Name"
                        helperText=""
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                  <TextField
                        id="standard-full-width"
                        label="Product Name"
                        style={{ margin: 8 }}
                        placeholder="Name"
                        helperText=""
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                      <TextField
                        id="standard-full-width"
                        label="Product Name"
                        style={{ margin: 8 }}
                        placeholder="Name"
                        helperText=""
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />

                
                <Button variant="contained" color="primary" className={classes.button}>
        Submit
      </Button>

                </form>
            </Paper>
        );
    }
}


Form.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Form);
