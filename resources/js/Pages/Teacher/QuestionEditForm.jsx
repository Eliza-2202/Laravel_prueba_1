import TextInput from '@/Components/TextInput';
import React from 'react';
import { useForm } from '@inertiajs/react';

function EditQuestion({ question, subjects }) {
    const { data, setData, put, processing, errors } = useForm({
        id: question.id,
        question_text: question.question_text,
        answer_value: question.answer_value,
        subject_id: question.subject_id,
    });

    const submit = (e) => {
        e.preventDefault();
        put(route('question.update', question.id)); // Usamos 'put' y le pasamos el ID de la pregunta
    };

    return (
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-lg text-center">
                <h1 className="text-2xl font-bold sm:text-3xl">Editar Pregunta</h1>
                <p className="mt-4 text-gray-500">Modifica la información de la pregunta</p>
            </div>

            <form onSubmit={submit} className="mx-auto mb-0 mt-8 max-w-md space-y-4">
                {/* Campo oculto para el ID */}
                <input
                    type="hidden"
                    value={data.id}
                    onChange={(e) => setData('id', e.target.value)}
                />

                {/* Campo de texto para la pregunta */}
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

                {/* Campo de texto para la respuesta */}
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
                <div>
                    <label htmlFor="subject_id" className="sr-only">
                        Curso
                    </label>
                    <div>
                        <select
                            value={data.subject_id}
                            onChange={(e) => setData('subject_id', e.target.value)}
                            className="w-full mt-1 px-4 py-2 border rounded-md"
                            required
                        >
                            <option value="" disabled>Selecciona un curso</option>
                            {subjects.map((subject) => (
                                <option key={subject.id} value={subject.id}>
                                    {subject.subject_name}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Botón para enviar */}
                <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        disabled={processing}
                        className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
                    >
                        {processing ? 'Guardando...' : 'Guardar Cambios'}
                    </button>
                </div>
            </form>
        </div>
    );
}

export default EditQuestion;
