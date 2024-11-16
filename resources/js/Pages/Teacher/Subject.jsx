import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import TableSubject from '@/Components/TableSubject';

function Subjects({ user, subjects }) {
    console.log(user);
  return (
    <AuthenticatedLayout 
    user={user}
    header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
    >
        <Head title="Preguntas" />
    <div>
       <h2 className='text-2xl font-medium text-center'>Lista de Cursos</h2>

    <TableSubject subjects={ subjects } />
    </div>
    </AuthenticatedLayout>
  )
}

export default Subjects
