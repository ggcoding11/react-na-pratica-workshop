import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProdutoCard from '../components/ProdutoCard'

const HomePage = () => {
    const [produtos, setProdutos] = useState(null)
    const [loading, setLoading] = useState(true)

    const fetchData = async () => {
        try {
            const response = await axios.get("https://dummyjson.com/products?limit=12")

            setProdutos(response.data.products)

            setLoading(false)
        } catch (error) {
            console.log("Ocorreu um erro: ", error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])


    return (
        <div>{loading ? <span className="loading loading-spinner loading-xl"></span> : <>
            <div className='flex justify-center flex-wrap gap-4'>
                {produtos.map((produto) => (
                    <ProdutoCard titulo={produto.title} descricao={produto.description} preco={produto.price} imagem={produto.thumbnail} />
                ))}
            </div>

        </>}</div>
    )
}

export default HomePage