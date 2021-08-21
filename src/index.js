import 'bootstrap/dist/css/bootstrap.min.css'
import faker from 'faker'

import React from 'react'
import ReactDOM from 'react-dom'
import Comentario from './Comentario'
import Cartao from './Cartao'
import ListaComentarios from './ListaComentarios'
import Feedback from './Feedback'

export const App = () => {
    const textoOK = "Aprovar"
    const textoNOK = "Não aprovar"
    const funcaoOK = () => alert ("Ok, aprovado")
    const funcaoNOK = () => alert ("Ok, não aprovado")
    const feedback = <Feedback textoOK={textoOK} textoNOK={textoNOK} funcaoOK={funcaoOK} funcaoNOK={funcaoNOK}/>
    return (


        <ListaComentarios>

            <div className="row">
                <div className="col-12">
                    <Cartao>
                        <Comentario nome={faker.name.findName()} foto={faker.internet.avatar()} texto={faker.lorem.sentences(2)} data={faker.date.recent().toLocaleTimeString()}/>
                        {feedback}
                    </Cartao>
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <Cartao>
                        <Comentario nome={faker.name.findName()} foto={faker.internet.avatar()} texto={faker.lorem.sentences(2)} data={faker.date.recent().toLocaleTimeString()}/>
                        {feedback}
                    </Cartao>
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <Cartao>
                        <Comentario nome={faker.name.findName()} foto={faker.internet.avatar()} texto={faker.lorem.sentences(2)} data={faker.date.recent().toLocaleTimeString()}/>
                        {feedback}
                    </Cartao>
                </div>
            </div>


        </ListaComentarios>

    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)
