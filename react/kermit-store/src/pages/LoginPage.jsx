import React from "react";

const LoginPage = () => {
  const handleLogin = (e) => {
    e.preventDefault();

    alert("Login feito");
  };

  return (
    <div className="flex flex-col gap-4 w-full max-w-4xl border border-neutral-400 rounded-lg p-6">
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center">
          <img src="/kermit-icon.png" alt="kermit-store-icon" />
          <h1 className="text-2xl font-medium">Kermit Store</h1>
        </div>

        <h3 className="text-lg">A loja mais muppet do mundo!</h3>
      </div>

      <form onSubmit={handleLogin} className="flex flex-col gap-4">
        <fieldset className="fieldset">
          <label className="label text-black text-lg" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="input w-full"
            placeholder="Digite o seu email..."
            required
          />
        </fieldset>
        <fieldset className="fieldset">
          <label className="label text-black text-lg" htmlFor="password">
            Senha
          </label>
          <input
            type="password"
            id="password"
            className="input w-full"
            placeholder="Digite a sua senha..."
            required
          />
        </fieldset>
        <button type="submit" className="btn">
          Fazer login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
