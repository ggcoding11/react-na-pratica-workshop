import React, { useEffect, useState } from 'react'

const Login = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const trocarValor = (e) => {
        e.preventDefault()
        
        if (name != "Pedro") {
            setName("Pedro")
        } else {
            setName("João")
        }
    }

    useEffect(() => {
        console.log("O name trocou de valor")
    }, [name])

    return (
        <div>
            <form onSubmit={trocarValor}>
                <fieldset className="fieldset">
                    <label className="label" htmlFor="name">Name</label>
                    <input value={name} onChange={(e) => setName(e.target.value)} type="text" id="name" className="input" placeholder="Name" />
                </fieldset>

                <fieldset className="fieldset">
                    <label className="label" htmlFor="password">Password</label>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" id="password" className="input" placeholder="Password" />
                </fieldset>

                <button type='submit' className='btn'>Fazer login</button>
            </form>
        </div>
    )
}

export default Login