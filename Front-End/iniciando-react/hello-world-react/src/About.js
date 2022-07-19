import React, { Component } from "react";

const skills = ["HTML", 'CSS', 'JS', 'React']

class Rici extends Component {
    
    render() {
        return (
        <div>
            <h1>Ricielli Costa </h1>
            <p>Sou São Paulo Futebol Clube</p>
            <h2>Minhas Habilidades</h2>
            <ul>
                {skills.map((skill) => <li>{skill}</li>)}
            </ul>
        </div>
        );
    }
}

export default Rici;
