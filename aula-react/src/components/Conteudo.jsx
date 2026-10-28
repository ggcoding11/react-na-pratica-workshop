import React, { useState } from 'react'

const Conteudo = ({ children }) => {
    


    return (
        <div className='min-h-screen flex flex-col items-center justify-center gap-4 mb-4'>
            <h1 className='text-xl sm:text-4xl font-bold py-4'>Confira o catálogo de produtos</h1>

            <div className='flex flex-wrap justify-center gap-4'>
                {children}
            </div>
        </div>
    )
}

export default Conteudo