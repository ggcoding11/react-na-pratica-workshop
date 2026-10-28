import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

//username: 'emilys',
//password: 'emilyspass'

const LoginPage = () => {
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const login = async (e) => {
        e.preventDefault()

        try {
            const credenciais = {
                username: username,
                password: password
            }

            const response = await axios.post("https://dummyjson.com/auth/login", credenciais);

            alert("Acesso permitido!")

            navigate("/home")

            console.log(response)
        } catch(error) {
            console.log("Ocorreu um erro: ", error)

            if (error.status === 400) {
                alert("Login inválido!")
            }
        }
    }


    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="flex flex-col gap-4 border border-neutral-400 rounded-xl p-4 w-full max-w-2xl">

                <div className="flex flex-col items-center">
                    <img className="w-50" src="https://upload.wikimedia.org/wikipedia/commons/a/a3/Novo_renner.png?utm_source=pt.wikipedia.org&utm_campaign=index&utm_content=original" alt="logo-renner" />

                    <p className="font-semibold">A sua loja favorita de produtos</p>
                </div>

                <div className="flex flex-col gap-4">
                    <form onSubmit={login}>
                        <fieldset className="fieldset">
                            <label className="label" htmlFor="username">Username</label>
                            <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" id="username" className="input w-full" placeholder="Username" />
                        </fieldset>

                        <fieldset className="fieldset">
                            <label className="label" htmlFor="password">Password</label>
                            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" id="password" className="input w-full" placeholder="Password" />
                        </fieldset>

                        <button className="w-full btn btn-info">Login</button>
                    </form>

                </div>

            </div>
        </div>
    )
}

export default LoginPage