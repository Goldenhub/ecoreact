import React from 'react';
import { Link, Head, router, useForm } from '@inertiajs/react';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import Header from '@/Components/Header';
import Footer from '@/Components/Footer';


export default function Create() {
    const { data, setData, post, processing, reset, errors } = useForm({
        name: '',
        url: '',
        reason: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('request.store'), { onSuccess: () => reset() });
    };

    return (
        <>
            <Head title="Request a tool" />
            <div className="bg-[#EEF5FF]">
                <div className="relative min-h-screen flex flex-col justify-start selection:bg-[#176B87] selection:text-[#EEF5FF]">
                    <div className="relative">
                    <Header />
                        <main className='bg-[#176B87] selection:bg-[#EEF5FF] selection:text-[#176B87]'>
                            <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
                                <h1 className='text-xl font-bold text-[#EEF5FF]'>Request a tool</h1>
                                <p className='text-md mb-5 text-[#EEF5FF]/80'>Fill the form below to request a new tool</p>
                                <form onSubmit={submit}>
                                    <div className='mb-5'>
                                        <input
                                            value={data.name}
                                            placeholder="What's the name of the tool?"
                                            className="block w-full border-gray-300 focus:border-gray-300 focus:ring-gray-300 rounded-md shadow-sm"
                                            onChange={e => setData('name', e.target.value)}
                                        />
                                        <InputError message={errors.name} className="mt-2" />
                                    </div>
                                    <div className='mb-5'>
                                        <input
                                            value={data.url}
                                            placeholder="URL to tool eg. https://example.com"
                                            className="block w-full border-gray-300 focus:border-gray-300 focus:ring-gray-300 rounded-md shadow-sm"
                                            onChange={e => setData('url', e.target.value)}
                                        />
                                        <InputError message={errors.url} className="mt-2" />
                                    </div>
                                    <div className='mb-5'>
                                        <textarea
                                            value={data.reason}
                                            placeholder="What is the functionalities?"
                                            className="block w-full border-gray-300 focus:border-gray-300 focus:ring-gray-300 rounded-md shadow-sm"
                                            onChange={e => setData('reason', e.target.value)}
                                        />
                                        <InputError message={errors.reason} className="mt-2" />
                                    </div>
                                    <PrimaryButton className="mt-4" disabled={processing}>Submit</PrimaryButton>
                                </form>
                            </div>
                        </main>
                        <Footer />
                    </div>
                </div>
            </div>
        </>
    );
}