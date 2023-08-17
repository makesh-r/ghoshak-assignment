import React from 'react';
import "./Main.css";

import SearchComponent from './SearchComponent/SearchComponent';
import ResultComponent from './ResultComponent/ResultComponent';

const Main = () => {

    return (
        <div className="main">
            <SearchComponent />

            <div className="main__body">

                <ResultComponent />

            </div>
        </div>
    )
}

export default Main