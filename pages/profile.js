import Link from 'next/link';
import React, { useState } from 'react';
import Head from 'next/head';

export default function Profile() {
    return (
        <>
            <Head>
                <title>BCIB - Cuenta</title>
                <meta
                    name="description"
                    content="Cuenta dentro de Banco Capital ITBA"
                />
                <meta
                    name="robots"
                    content="noindex, nofollow"
                />
            </Head>
            <div className="pb-10">
                <div>
                    <h1 className="mt-5 mb-12 text-3xl text-center">Bienvenido, Alejandro! </h1>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 m-20">
                    <div class="bg-gray-300 rounded-lg shadow-md p-4">
                        <h2 class="text-xl font-semibold">Cuenta</h2>
                        <p class="text-gray-600">454-875454/2</p>
                        <div class="pt-2">
                            <p class="font-bold text-2xl">$ 100.000</p>
                            <p class="font-bold text-2xl">U$S 1.000</p>
                        </div>
                    </div>
                    <div class="bg-blue-300 rounded-lg shadow-md p-4">
                        <h2 class="text-xl font-semibold">Tarjeta Visa</h2>
                        <p class="text-gray-600">Termina en: 7807</p>
                        <p class="pt-2">Ultimos consumos:</p>
                        <div class="pt-2">
                            <p class="font-bold text-2xl">$ 5200,65</p>
                            <p class="font-bold text-2xl">U$S 0,0</p>
                        </div>
                    </div>
                    <div class="bg-orange-300 rounded-lg shadow-md p-4">
                        <h2 class="text-xl font-semibold">Tarjeta Mastercard</h2>
                        <p class="text-gray-600">Termina en: 4825</p>
                        <p class="pt-2">Ultimos consumos:</p>
                        <div class="pt-2">
                            <p class="font-bold text-2xl">$ 7566,41</p>
                            <p class="font-bold text-2xl">U$S 15,0</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
