import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";

export default function Index({ auth, requests }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Tools" />
            <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
                <TableComponent data={requests} />
            </div>
        </AuthenticatedLayout>
    );
}


function TableComponent({ data }) {
    return (
        <div className="overflow-x-auto">
            <Table striped>
                <TableHead>
                    <TableHeadCell>Name</TableHeadCell>
                    <TableHeadCell>URL</TableHeadCell>
                    <TableHeadCell>REASON</TableHeadCell>
                    <TableHeadCell>STATUS</TableHeadCell>
                    <TableHeadCell>
                        <span className="sr-only">Approve</span>
                    </TableHeadCell>
                </TableHead>
                <TableBody className="divide-y">
                    {data.map(item => (
                        <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                {item.name}
                            </TableCell>
                            <TableCell>{item.url}</TableCell>
                            <TableCell>{item.reason}</TableCell>
                            <TableCell>{item.status === 0 ? <span className='rounded-xl text-xs text-white px-3 py-1 bg-yellow-500'>Pending</span> : <span className='rounded-xl text-xs text-white px-3 py-1 bg-green-500'>Approved</span>}</TableCell>
                            <TableCell>
                                <button className="font-medium text-cyan-500 hover:text-cyan-600 dark:text-cyan-500">
                                    Approve
                                </button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}
