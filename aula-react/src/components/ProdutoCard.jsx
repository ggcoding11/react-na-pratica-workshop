import React from 'react'

const ProdutoCard = ({ titulo = "Vazio", preco = "Sem preço", descricao = "Sem descrição", imagem }) => {

    const comprarProduto = () => {
        alert(`Produto ${titulo} comprado! Seja feliz!`)
    }

    return (
        <div className="card bg-base-100 w-80 sm:w-96 shadow-sm">
            <figure>
                <img
                    src={imagem}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{titulo}</h2>
                <p>{descricao}</p>
                <p>{preco}</p>
                <div className="card-actions justify-end">
                    <button onClick={comprarProduto} className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    )
}

export default ProdutoCard