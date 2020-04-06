import React from 'react'
import excerciseImg from './Images/imagen.jpg' //importamos la imagen
class Card extends React.Component {

    render() {//renderiza lo que definimos dentro de la funcion
        return (
            <div>
                <div>
                    <div>
                        <img src={excerciseImg} width="80px" />
                    </div>
                    <div>
                        <h1>Titulo imagen</h1>
                        <p>Lorem imsupts</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card