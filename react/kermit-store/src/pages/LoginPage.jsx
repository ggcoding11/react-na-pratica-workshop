import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

//Username: emilys
//Password: emilyspass

const LoginPage = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
  });

  const onSubmit = async (data) => {
    try {
      const response = await api.post("/auth/login", data);

      console.log(response);

      alert("Acesso permitido!");

      navigate("/home");
    } catch (error) {
      if (error.response.status === 400) {
        alert("Credenciais incorretas!");
      } else {
        alert("Ocorreu um erro ao fazer login!");
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col gap-4 w-full max-w-4xl border border-neutral-300 rounded-lg p-6">
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center">
            <img src="/kermit-icon.png" alt="kermit-store-icon" />
            <h1 className="text-2xl font-medium">Kermit Store</h1>
          </div>

          <h3 className="text-lg">A loja mais muppet do mundo!</h3>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <fieldset className="fieldset">
            <label className="label text-black text-lg" htmlFor="email">
              Usuário
            </label>
            <input
              type="text"
              id="username"
              className="input w-full"
              {...register("username", {
                required: "O usuário é obrigatório",
              })}
              placeholder="Digite o seu usuário..."
            />

            {errors.username?.message && (
              <span className="text-red-600">{errors.username.message}</span>
            )}
          </fieldset>
          <fieldset className="fieldset">
            <label className="label text-black text-lg" htmlFor="password">
              Senha
            </label>
            <input
              type="password"
              id="password"
              {...register("password", {
                required: "A senha é obrigatória",
              })}
              className="input w-full"
              placeholder="Digite a sua senha..."
            />
            {errors.password?.message && (
              <span className="text-red-600">{errors.password.message}</span>
            )}
          </fieldset>
          <button type="submit" className="btn">
            Fazer login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
