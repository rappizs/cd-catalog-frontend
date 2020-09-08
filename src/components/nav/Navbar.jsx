import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-light border mb-4">
                <ul className="navbar-nav mr-auto align-middle">
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName="active" to="/discs">
                            My Discs
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName="active" to="/artists">
                            Artists
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName="active" to="/styles">
                            Styles
                        </NavLink>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Navbar
