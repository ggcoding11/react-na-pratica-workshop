import React, { useEffect, useState } from 'react'
import Cabecalho from './Cabecalho'
import Conteudo from './Conteudo'
import Rodape from './Rodape'
import ProdutoCard from './ProdutoCard'
import Login from './Login'
import axios from "axios"

const Layout = ({children}) => {
    return (
        <div className="min-h-screen flex flex-col">
            <Cabecalho />
            <Conteudo>
                {children}
            </Conteudo>
            <Rodape />
        </div>
    )
}

export default Layout