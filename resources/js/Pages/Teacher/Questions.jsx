import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Table from '@/Components/Table';
import { Head } from '@inertiajs/react';
import TableQuestion from '@/Components/TableQuestion';

function Questions({ user, questions }) {
    console.log(user);
  return (
    <AuthenticatedLayout 
    user={user}
    header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
    >
        <Head title="Preguntas" />
    <div>
       <h2 className='text-2xl font-medium text-center'>Lista de preguntas</h2>

    <TableQuestion questions={ questions } />
    </div>
    </AuthenticatedLayout>
  )
}

export default Questions
