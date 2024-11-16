import React from 'react';
import TextInput from '@/Components/TextInput'; // Asegúrate de que el componente existe
import { useForm } from '@inertiajs/react';

export function CreateQuestion({ subjects }) {
    // Inicializamos el formulario con `useForm`
    const { data, setData, post, processing } = useForm({
        question_text: '',
        answer_value: '',
        subject_id: ''
    });

    // Función que maneja el envío del formulario
    const submit = (e) => {
        e.preventDefault();
        post(route('question.store')); // Envía los datos al servidor a través de un POST
    };

    return (
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-lg text-center">
                <h1 className="text-2xl font-bold sm:text-3xl">Crear una Nueva Pregunta</h1>
                <p className="mt-4 text-gray-500">Ingrese la información de la pregunta</p>
            </div>

            <form onSubmit={submit} className="mx-auto mb-0 mt-8 max-w-md space-y-4">
                {/* Campo de texto para pregunta */}
                <div>
                    <label htmlFor="question_text" className="sr-only">
                        Pregunta
                    </label>
                    <div>
                        <TextInput
                            className="w-full"
                            placeholder="Pregunta"
                            value={data.question_text}
                            onChange={(e) => setData('question_text', e.target.value)}
                        />
                    </div>
                </div>

                {/* Campo de texto para respuesta */}
                <div>
                    <label htmlFor="answer_value" className="sr-only">
                        Respuesta
                    </label>
                    <div>
                        <TextInput
                            className="w-full"
                            placeholder="Respuesta"
                            value={data.answer_value}
                            onChange={(e) => setData('answer_value', e.target.value)}
                        />
                    </div>
                </div>

                {/* Campo de selección para el curso */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Curso</label>
                    <select
                        value={data.subject_id}
                        onChange={(e) => setData('subject_id', e.target.value)}
                        className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring focus:ring-opacity-50"
                        required
                    >
                        <option value="" disabled>Selecciona un curso</option>
                        {subjects.map(subject => (
                            <option key={subject.id} value={subject.id}>{subject.subject_name}</option>
                        ))}
                    </select>
                </div>

                {/* Botón para enviar */}
                <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        disabled={processing}
                        className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white hover:bg-blue-700"
                    >
                        {processing ? 'Creando...' : 'Crear'}
                    </button>
                </div>
            </form>
        </div>
    );
}

export default CreateQuestion;
