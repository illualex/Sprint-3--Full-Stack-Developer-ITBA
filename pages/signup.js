import { FormProvider, useForm } from "react-hook-form";
import { Input } from "../components/input";
import Link from "next/link";
import { useRouter } from "next/router"; // Cambiar useNavigate por useRouter
import React, { useState } from "react";

export default function Signup() {
  const methods = useForm();
  const router = useRouter(); // Usar useRouter en lugar de useNavigate
  const [showButtons, setShowButtons] = useState(true);

  const onSubmit = methods.handleSubmit(async (data) => {
    console.log(data);
    alert("Se ha iniciado sesión correctamente");
    await router.push('/profile'); // Usar await para la redirección
  });

  return (
    <>
      <div className="grid place-items-center">
        <FormProvider {...methods}>
          <form
            onSubmit={onSubmit}
            noValidate
            className="text-center m-20 p-10 w-1/2 bg-neutral-400 rounded-xl"
          >
            <div className="grid">
              <Input
                label="Usuario"
                type="text"
                id="name"
                placeholder="Ingrese el usuario"
              />
              <br />
              <Input
                label="Contraseña"
                type="password"
                id="password"
                placeholder="Ingrese la contraseña"
              />
            </div>
            <div className="mt-5">
              <button
                type="submit" // Cambiar onClick por type="submit"
                className="btnRegistrarse"
              >
                Iniciar sesión
              </button>
            </div>
          </form>
        </FormProvider>
      </div>
    </>
  );
}
