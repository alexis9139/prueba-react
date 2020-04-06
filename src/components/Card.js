import React from 'react'
import excerciseImg from './Images/imagen.jpg' //importamos la imagen
import './styles/Card.css'//importamos los estilos
import 'bootstrap/dist/css/bootstrap.css'
class Card extends React.Component {

    render() {//renderiza lo que definimos dentro de la funcion
        return (
            <div className="card mx-auto Fitness-Card">
                <div className="card-body">
                    <div className="row center">
                        <div className="col-6">
                            <img src={excerciseImg} width="80px" className="float-right" />
                        </div>
                        <div className="col-6 Fitness-Card-Info">
                            <h1>Titulo imagen</h1>
                            <p>Lorem imsupts</p>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Card