import React, { Component } from 'react';

class Navegacion extends Component{
    
    render(){
        return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand text-withe" href="#">{ this.props.titulo } <span className="badge badge-pill badge-light ml-2">{ this.props.cantidad}</span></a>
        </nav>
        );
    };

}

export default Navegacion;