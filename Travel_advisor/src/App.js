import React from "react";
import { CssBaseline, Grid } from '@mui/material';

import Header from "./components/Header/Header";
import List from "./components/List/List";
import PlaceDetails from "./components/PlaceDetails/PlaceDetails";
import Map from "./components/Map/Map";


// this is all the dependencies i have installed for this project 
//npm i @material-ui/core @material-ui/icons @material-ui/lab @react-google-maps/api axios google-map-react

const App = () =>  {
    return (
        <div>
            <CssBaseline></CssBaseline>
            
            <Header></Header> 
            <Grid container spacing={3} style = {{width: '100%'}} // we are doing inline style so it needs to be a OBJECT
                >
                
                    <Grid item xs = {12} md = {4}>
                        <List></List>
                    </Grid>
                    <Grid item xs = {12} md = {4}>
                        <Map></Map>
                    </Grid>

                    </Grid>
           
            </div>
    )
}

export default App;