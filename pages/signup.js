import { FormProvider, useForm } from "react-hook-form";
import { Input } from "../components/input";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Head from "next/head";

export default function Signup() {
  const methods = useForm();
  const router = useRouter();
  const [showButtons, setShowButtons] = useState(true);

  const onSubmit = methods.handleSubmit(async (data) => {
    console.log(data);
    alert("Se ha iniciado sesión correctamente");
    await router.push('/profile'); // Usar await para la redirección
  });

  const ocultarDiv = () => {
    router.push('/pagina1?mostrarDiv=false');
  };
  const mostrarDiv = () => {
    router.push('/pagina1?mostrarDiv=true');
  };

  return (
    <>
      <Head>
        <title>BCIB - Iniciar Sesión</title>
        <meta
          name="description"
          content="Iniciar sesión en Banco Capital ITBA"
        />
        <meta
          name="robots"
          content="index, follow"
        />
      </Head>
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
                onClick={mostrarDiv}
                type="submit"
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
