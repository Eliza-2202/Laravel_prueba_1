import React from 'react'

function TableSubject({subjects}) {

  // Función para formatear la fecha
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Los meses empiezan en 0
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  // Función para formatear la hora
  const formatTime = (dateString) => {
    const date = new Date(dateString);
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  }


  return (

    <div className="overflow-x-auto p-10">


<div className="mb-4">
        <a
          href="/subject/create" 
          className="inline-block rounded bg-green-500 px-4 py-2 text-xs font-medium text-white hover:bg-green-700"
        >
          Crear nuevo curso
        </a>
      </div>


        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
            <thead className="ltr:text-left rtl:text-right">
                <tr>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Nombre de curso</th>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Fecha de Creacion</th>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Hora de Creacion</th>
        
                    <th className="px-4 py-2"></th>
                </tr>
            </thead>

    <tbody className="divide-y divide-gray-200">
        
        {
         subjects.map((subject)=> (
            <tr key={subject.id}>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{subject.subject_name}</td>

                <td className="whitespace-nowrap px-4 py-2 text-gray-700"> {formatDate(subject.created_at)}</td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700"> {formatTime(subject.created_at)}</td>
                
                
                {/* FALTA EDIT Y BORRAR */}
                
                <td className="whitespace-nowrap px-4 py-2">
                <a
                    href={`/edit/subject/${subject.id}`}
                    className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                >
                    Edit
                </a>
                </td>
                <td className="whitespace-nowrap px-4 py-2">
                <a
                    href={`/delete/subject/${subject.id}`}
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

export default TableSubject