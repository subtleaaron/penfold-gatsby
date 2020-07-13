import React from 'react';
import { Link } from 'gatsby';

import '../styles/style.scss'
import Header from "../components/header"

const Layout =({children}) => (
    <React.Fragment>
        <header className="header"><Header /></header>
        <main className="content">{children}</main>
    </React.Fragment>
)

export default Layout;