import React, { Component } from 'react'
import PropTypes from 'prop-types';


export class Navbar extends Component 
{
    static defaultProps =
    {
        title: '    Todo List Squadra',
        icon: 'fas fa-list-ul'
    }

    static propTypes = 
    {
        title: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired
    }

    render() 
    {
        return (
            <div>
                <nav className = 'navbar navbar_color'>
                    
                    <h1>
                        <i className = {this.props.icon}></i>
                        {this.props.title}
                    </h1>
                </nav>
                
            </div>
        )
    }
}

export default Navbar
