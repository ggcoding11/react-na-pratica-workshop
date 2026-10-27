import React from 'react'

const ProdutoCard = ({ titulo = "Vazio", preco = "Sem preço", descricao = "Sem descrição" }) => {

    const comprarProduto = () => {
        alert(`Produto ${titulo} comprado! Seja feliz!`)
    }

    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
                <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
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