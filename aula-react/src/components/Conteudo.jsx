import React, { useState } from 'react'

const Conteudo = ({ children }) => {
    const [contador, setContador] = useState(0)

    return (
        <div className='min-h-screen flex flex-col items-center justify-center gap-4 mb-4'>
            <h1 className='text-4xl font-bold'>Esse é o conteúdo do site</h1>

            <div className='flex flex-wrap justify-center gap-4'>
                {children}
            </div>

            <span>{contador}</span>

            <button onClick={() => {
                setContador(contador + 1)
            }}>Clique em mim</button>
        </div>
    )
}

export default Conteudo