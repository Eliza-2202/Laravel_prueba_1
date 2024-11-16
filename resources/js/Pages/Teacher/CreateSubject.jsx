import React from 'react';
import TextInput from '@/Components/TextInput'; // Asegúrate de que el componente existe
import { useForm } from '@inertiajs/react';

export function CreateSubject() {
    // Inicializamos el formulario con `useForm`
    const { data, setData, post, processing } = useForm({
        subject_name: '' // Campo para el nombre del curso o tema
    });

    // Función que maneja el envío del formulario
    const submit = (e) => {
        e.preventDefault();
        post(route('subject.store')); // Envía los datos al servidor a través de un POST
    };

    return (
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-lg text-center">
                <h1 className="text-2xl font-bold sm:text-3xl">Crear un Nuevo Curso</h1>
                <p className="mt-4 text-gray-500">Ingrese el nombre del curso</p>
            </div>

            <form onSubmit={submit} className="mx-auto mb-0 mt-8 max-w-md space-y-4">
                <div>
                    <label htmlFor="subject_name" className="sr-only">
                        Nombre del curso
                    </label>
                    <div>
                        <TextInput
                            className="w-full"
                            placeholder="Nombre del curso"
                            value={data.subject_name} // Enlazamos el valor al estado de `data`
                            onChange={(e) => setData('subject_name', e.target.value)} // Actualizamos el valor
                        />
                    </div>
                </div>

                <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white hover:bg-blue-700"
                    >
                        Crear
                    </button>
                </div>
            </form>
        </div>
    );
}

export default CreateSubject;
