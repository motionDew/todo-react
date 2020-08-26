import React, { Component } from 'react';

class Header extends Component {
    // state = {  }
    
    render() { 
        return ( 
            <nav class="navbar navbar-light bg-light">
                <form class="form-inline">
                    <input class="form-control mr-sm-2" type="search" placeholder="A fancy future todo!" aria-label="newTodo"/>
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Add</button>
                </form>
            </nav>
         );
    }
}
 
export default Header;