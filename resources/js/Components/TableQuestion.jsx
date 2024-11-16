import React from 'react'

function TableQuestion({questions}) {
  return (

    <div className="overflow-x-auto p-10">


<div className="mb-4">
        <a
          href="/create/question" // Aquí la URL para la página de creación de preguntas
          className="inline-block rounded bg-green-500 px-4 py-2 text-xs font-medium text-white hover:bg-green-700"
        >
          Crear nueva pregunta
        </a>
      </div>


        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
            <thead className="ltr:text-left rtl:text-right">
                <tr>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Pregunta</th>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Curso</th>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Respuesta</th>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Creacion</th>
        
                    <th className="px-4 py-2"></th>
                </tr>
            </thead>

    <tbody className="divide-y divide-gray-200">
        
        {
         questions.map((question)=> (
            <tr key={question.id}>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{question.question_text}</td>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
            {question.subject_id ? question.subject.subject_name : 'Sin descripción'}</td>

                <td className="whitespace-nowrap px-4 py-2 text-gray-700">{question.answer_value}</td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">{question.created_at}</td>
                
                
                
                
                <td className="whitespace-nowrap px-4 py-2">


                    {/* FALTA EDIT Y BORRAR */}
                <a
                    href={`/edit/question/${question.id}`}
                    className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                >
                    Edit
                </a>
                </td>
                <td className="whitespace-nowrap px-4 py-2">
                <a
                    href={`/delete/question/${question.id}`}
                    className="inline-block rounded bg-red-500 px-4 py-2 text-xs font-medium text-white hover:bg-red-700"
                >
                    Delete
                </a>
                </td>
            </tr>
        ))}
      
      
    </tbody>
  </table>
</div>
  )
}

export default TableQuestion