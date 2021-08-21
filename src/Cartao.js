import React from 'react'

const Cartao = ({children}) => {
    return (
        <div className={estilos.principal}>
            {children}
        </div>
    )
}

const estilos = {
    principal: "card border rounded m-2 p-2 shadow"
}

export default Cartao
