import { Link, Head, router } from '@inertiajs/react';
import Card from '@/Components/Card';
import EmptyCard from '@/Components/EmptyCard';
import Header from '@/Components/Header';
import Search from '@/Components/Search';
import Footer from '@/Components/Footer';
import { Transition } from '@headlessui/react';
import { useState, Fragment } from 'react';

export default function Category({ categories, category, tools, date }) {
    console.log(typeof tools)
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <Head title='Category' />
            <div className="bg-[#EEF5FF]">
                <div className="relative min-h-screen flex flex-col justify-start selection:bg-[#176B87] selection:text-[#EEF5FF]">
                    <div className="relative">
                        <Header />
                        <main className="mt-6">
                            <section className='text-center mb-10'>
                                <h1 className='text-4xl font-extrabold mb-4 text-[#176B87]'>{category.charAt(0).toUpperCase() + category.slice(1)} tools</h1>
                                <p className='text-xl text-[#176B87]'>Search and discover your favourite React tools</p>
                            </section>
                            <Search />
                            <section className='bg-[#176B87] selection:bg-[#EEF5FF] selection:text-[#176B87]'>
                                <div className='flex justify-between max-w-2xl py-6 lg:max-w-7xl mx-auto px-4'>
                                    <aside className='w-1/4 hidden md:block'>
                                        <h3 className='text-xl text-[#EEF5FF] font-bold mb-5'>Categories</h3>
                                        <ul>
                                            <li className='mb-3'>
                                                <Link href={route('index')} className={route().current('index') ? 'text-[#B4D4FF] hover:text-[#B4D4FF] underline underline-offset-4' : 'hover:text-[#B4D4FF] text-[#86B6F6]'}>
                                                    Latest
                                                </Link>
                                            </li>
                                            <li className='mb-3'>
                                                <Link href={route('category', 'all')} className={route().current('category', 'all') ? 'text-[#B4D4FF] hover:text-[#B4D4FF] underline underline-offset-4' : 'hover:text-[#B4D4FF] text-[#86B6F6]'}>
                                                    All
                                                </Link>
                                            </li>
                                            {categories.filter((category) => category.category.toLowerCase() !== 'latest').map((category) => (
                                                <li key={category.id} className='mb-3'>
                                                    <Link href={route('category', `${category.category.toLowerCase().replaceAll(' ', '-')}`)} className={route().current('category', `${category.category.toLowerCase().replaceAll(' ', '-')}`) ? 'text-[#B4D4FF] hover:text-[#B4D4FF] underline underline-offset-4' : 'hover:text-[#B4D4FF] text-[#86B6F6]'}>
                                                        {category.category.charAt(0).toUpperCase() + category.category.slice(1)}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </aside>
                                    <div className='w-full md:w-3/4'>
                                        <div className='md:hidden'>
                                            <button onClick={() => setIsOpen(true)} className='bg-[#EEF5FF] mb-5 p-2 rounded-md text-[#176B87] font-bold '>Categories</button>
                                        </div>
                                        <Transition show={isOpen} as={Fragment}>
                                            <Transition.Child
                                                as={Fragment}
                                                enter="ease-out duration-300"
                                                enterFrom="opacity-0"
                                                enterTo="opacity-100"
                                                leave="ease-in duration-200"
                                                leaveFrom="opacity-100"
                                                leaveTo="opacity-0"
                                            >
                                                <aside className='md:hidden fixed top-0 left-0 p-4 bg-black/90 w-full h-full'>
                                                    <div className='flex justify-end mb-5'>
                                                        <button onClick={() => setIsOpen(false)} className=''>
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="grey" className="w-6 h-6">
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                    <ul>
                                                        <li className='mb-3'>
                                                            <Link href={route('index')} className={route().current('index') ? 'text-[#B4D4FF] hover:text-[#B4D4FF] underline underline-offset-4' : 'hover:text-[#B4D4FF] text-[#86B6F6]'}>
                                                                Latest
                                                            </Link>
                                                        </li>
                                                        <li className='mb-3'>
                                                            <Link href={route('category', 'all')} className={route().current('category', 'all') ? 'text-[#B4D4FF] hover:text-[#B4D4FF] underline underline-offset-4' : 'hover:text-[#B4D4FF] text-[#86B6F6]'}>
                                                                All
                                                            </Link>
                                                        </li>
                                                        {categories.filter((category) => category.category.toLowerCase() !== 'latest').map((category) => (
                                                            <li key={category.id} className='mb-3'>
                                                                <Link href={route('category', `${category.category.toLowerCase().replaceAll(' ', '-')}`)} className={route().current('category', `${category.category.toLowerCase().replaceAll(' ', '-')}`) ? 'text-[#B4D4FF] hover:text-[#B4D4FF] underline underline-offset-4' : 'hover:text-[#B4D4FF] text-[#86B6F6]'}>
                                                                    {category.category.charAt(0).toUpperCase() + category.category.slice(1)}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </aside>
                                            </Transition.Child>
                                        </Transition>
                                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                                            {
                                                tools.length ?
                                                    tools.map((tool) => (
                                                        <Card key={tool.id} img={`https://res.cloudinary.com/dy4jriewl/image/upload/ecoreact/${tool.iconTitle}.png`} loading="lazy" category={tool.category} title={tool.title} slug={tool.slug} />
                                                    ))
                                                    :
                                                    <EmptyCard img='https://res.cloudinary.com/dy4jriewl/image/upload/ecoreact/emptyicon.svg' loading="lazy" category={category.charAt(0).toUpperCase() + category.slice(1)} title="No tool here" />
                                            }
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </main>

                        <Footer date={date} />
                    </div>
                </div>
            </div>
        </>
    );
}