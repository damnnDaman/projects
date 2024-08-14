import React, {useEffect} from "react";
// The Autocomplete component allows you to implement an input field
// that provides place predictions as the user types, based on the Google Maps Places API.
import { Autocomplete } from "@react-google-maps/api";

// AppBar: A component that provides a top navigation bar commonly used for placing headers, navigation menus, and branding elements.
// Toolbar: A component used within AppBar to align and position its child components, such as icons or text.
// Typography: A component used for displaying text with Material Design styling. It provides a way to handle text styles like headings, paragraphs, and captions.
// InputBase: A component that provides a low-level input element styled according to Material Design principles. It can be used as a base for creating custom input fields.
// Box: A utility component used for layout and styling. It acts as a wrapper for other components and can be used to apply CSS properties like margin, padding, and display.
import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import useStyles from './styles.js'


const Header = ({ onPlaceChanged, onLoad }) => {
    const classes = useStyles();

    return (
        <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Typography variant="h5" className={classes.title}>
            Travel Advisor
          </Typography>
          <Box display="flex">
            <Typography variant="h6" className={classes.title}>
              Explore new places
            </Typography>
            <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase placeholder="Search…" classes={{ root: classes.inputRoot, input: classes.inputInput }} />
              </div>
            </Autocomplete>
          </Box>
        </Toolbar>
      </AppBar>
    );
};

export default Header;
