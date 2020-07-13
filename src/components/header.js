import { Link } from "gatsby"
import React from "react"

const Header = () => (
  <header>
    <div className="container">
    <div className="inner-header">
    <div className="logo">
        <Link to="/">PENFOLD DESIGN</Link>
      </div>
      <div className="navigation">
        <nav>
          <Link to="/about">About</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/contact" >Contact</Link>
        </nav>
      </div>
    </div>
    </div>
  </header>
)


export default Header
