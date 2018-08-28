import React from 'react';
import Header from '../Components/Header_footer/Header';

const Layout = (props) => {
    return (
        <div>
            <Header/>
            {props.children}
            Footer goes here

        </div>
    );
};

export default Layout;