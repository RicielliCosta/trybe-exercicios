import React from "react";

class Pokemon extends React.Component {
    render() {

        const {name, type, averageWeight, image} = this.props.pokemon;
        const {value, measurementUnit} = averageWeight;

        return (
            <div>
                <p><strong>NOME:</strong> { name } </p>
                <p><strong>TIPO:</strong> { type } </p>
                <p><strong>PESO:</strong> { value } { measurementUnit } </p>
                <img src= { image } />
            </div>
        );
    }
}

export default Pokemon;
