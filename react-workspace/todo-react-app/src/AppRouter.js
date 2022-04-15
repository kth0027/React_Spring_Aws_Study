import React, { Component } from 'react';
import "./index.css";
import App from "./App";
import LoginPage from "./LoginPage";

import { BrowserRouter as BrowserRouter, Router, Switch, Route } from "react-router-dom";


import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {"Copyright © "}
            fsoftwareengineer, {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}

const AppRouter = () => {
    return (
        // <BrowserRouter>
        //     <Router>
        //         <div>
        //             <Routes>
        //                 <Route path="/login">
        //                     <LoginPage />
        //                 </Route>
        //                 <Route path="/">
        //                     <App />
        //                 </Route>
        //             </Routes>
        //         </div>
        //         <Box mt={5}>
        //             <Copyright />
        //         </Box>
        //     </Router>
        // </BrowserRouter>
        <div className='AppRouter'>
            <BrowserRouter>
                <Switch>
                    <Route path="/login">
                        <LoginPage />
                    </Route>
                    <Route path="/">
                        <App />
                    </Route>
                </Switch>
                <Box mt={5}>
                    <Copyright />
                </Box>
            </BrowserRouter> </div>


    );


}



export default AppRouter;
