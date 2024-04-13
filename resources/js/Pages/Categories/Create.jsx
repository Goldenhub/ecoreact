import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import { useForm, Head } from '@inertiajs/react';

export default function Index({ auth }) {
    const { data, setData, post, processing, reset, errors } = useForm({
        category: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('categories.store'), { onSuccess: () => reset() });
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Category" />

            <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
                <form onSubmit={submit}>
                    <div className="mb-5">
                        <input
                            value={data.category}
                            placeholder="Category"
                            className="block w-full border-gray-300 focus:ring-gray-300 rounded-md shadow-sm"
                            onChange={e => setData('category', e.target.value)}
                        />
                        <InputError message={errors.category} className="mt-2" />
                    </div>
                    <PrimaryButton className="mt-4" disabled={processing}>Submit</PrimaryButton>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}