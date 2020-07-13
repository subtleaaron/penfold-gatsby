import React from 'react'
import { useStaticQuery, graphql, Link } from "gatsby"
import img from 'gatsby-image'

const Banner =  () => {
    return(
        <div className = "banner">
            <div className="container">
                <div className="row">
                    <div className="main-text">
                        <h1>Interact with your users and grow with your own website.</h1>
                    </div>
                    <div className="main-blurb">
                        <p>Web Design/Development and Online Marketing</p>
                    </div>
                    <div className="main-cta">
                        <Link to="/portfolio">
                            View Portfolio
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    ) 
}

export default Banner