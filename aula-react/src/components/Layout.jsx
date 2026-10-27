import React from 'react'
import Cabecalho from './Cabecalho'
import Conteudo from './Conteudo'
import Rodape from './Rodape'
import ProdutoCard from './ProdutoCard'

const Layout = () => {
    const login = (e) => {
        e.preventDefault()

        alert("O login foi bem sucedido!")
    }

    return (
        <div className="min-h-screen flex flex-col">
            <Cabecalho />
            <Conteudo>
                <div className="flex flex-col gap-4 w-full">
                    <form onSubmit={login}>
                        <fieldset className="fieldset">
                            <label className="label" htmlFor="name">Name</label>
                            <input type="text" id="name" className="input" placeholder="Name" />
                        </fieldset>

                        <fieldset className="fieldset">
                            <label className="label" htmlFor="password">Password</label>
                            <input type="password" id="password" className="input" placeholder="Password" />
                        </fieldset>

                        <button type="submit" className="btn btn-info w-full">Enviar dados</button>
                    </form>
                </div>
            </Conteudo>
            <Rodape />
        </div>
    )
}

export default Layout