import React, { Component } from 'react';
import {withBookstoreService} from '../hoc'

import './style.css'
const App = ({bookstoreService}) => {

    console.log(bookstoreService.getBooks())
        return(
            <div>
                Hello
            </div>
        )

}

export default withBookstoreService()(App)