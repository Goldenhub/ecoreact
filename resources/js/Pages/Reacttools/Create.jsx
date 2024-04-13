import React from 'react';
import InputError from '@/Components/InputError';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import PrimaryButton from '@/Components/PrimaryButton';
import { useForm, Head } from '@inertiajs/react';

export default function Create({ auth, categories }) {
    console.log(Array.isArray(categories))
    const { data, setData, post, processing, reset, errors } = useForm({
        title: '',
        slug: '',
        link: '',
        category: '',
        iconTitle: '',
        screenshotTitle: '',
        description: ''
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('tool.store'), { onSuccess: () => reset() });
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Tools" />

            <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
                <form onSubmit={submit}>
                    <div className='mb-5'>
                        <input
                            value={data.title}
                            placeholder="Title"
                            className="block w-full border-gray-300 focus:border-gray-300 focus:ring-gray-300 rounded-md shadow-sm"
                            onChange={e => setData('title', e.target.value)}
                        />
                        <InputError message={errors.title} className="mt-2" />
                    </div>
                    <div className='mb-5'>
                        <input
                            value={data.slug}
                            placeholder="Slug"
                            className="block w-full border-gray-300 focus:border-gray-300 focus:ring-gray-300 rounded-md shadow-sm"
                            onChange={e => setData('slug', e.target.value)}
                        />
                        <InputError message={errors.slug} className="mt-2" />
                    </div>
                    <div className='mb-5'>
                        <input
                            value={data.link}
                            placeholder="https://example.com"
                            className="block w-full border-gray-300 focus:border-gray-300 focus:ring-gray-300 rounded-md shadow-sm"
                            onChange={e => setData('link', e.target.value)}
                        />
                        <InputError message={errors.link} className="mt-2" />
                    </div>
                    <div className='mb-5'>
                        <select
                            value={data.category}
                            className="block w-full border-gray-300 focus:border-gray-300 focus:ring-gray-300 rounded-md shadow-sm"
                            onChange={e => setData('category', e.target.value)}
                        >
                            <option value="" disabled>Select category</option>
                            {categories.map((category) => (
                                <option key={category.id} value={category.category}>{category.category.charAt(0).toUpperCase() + category.category.slice(1)}</option>
                            ))}
                        </select>
                        <InputError message={errors.category} className="mt-2" />
                    </div>
                    <div className='mb-5'>
                        <input
                            value={data.iconTitle}
                            placeholder="Icon title"
                            className="block w-full border-gray-300 focus:border-gray-300 focus:ring-gray-300 rounded-md shadow-sm"
                            onChange={e => setData('iconTitle', e.target.value)}
                        />
                        <InputError message={errors.iconTitle} className="mt-2" />
                    </div>
                    <div className='mb-5'>
                        <input
                            value={data.screenshotTitle}
                            placeholder="Screenshot title"
                            className="block w-full border-gray-300 focus:border-gray-300 focus:ring-gray-300 rounded-md shadow-sm"
                            onChange={e => setData('screenshotTitle', e.target.value)}
                        />
                        <InputError message={errors.screenshotTitle} className="mt-2" />
                    </div>
                    <div className='mb-5'>
                        <textarea
                            value={data.description}
                            placeholder="Description"
                            className="block w-full border-gray-300 focus:border-gray-300 focus:ring-gray-300 rounded-md shadow-sm"
                            onChange={e => setData('description', e.target.value)}
                        />
                        <InputError message={errors.description} className="mt-2" />
                    </div>
                    <PrimaryButton className="mt-4" disabled={processing}>Submit</PrimaryButton>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}