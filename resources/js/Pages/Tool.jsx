import { Link, Head, router } from '@inertiajs/react';
import Header from '@/Components/Header';
import Footer from '@/Components/Footer';

export default function Tool({ tool, date }) {

    return (
        <>
            <Head title="Home" />
            <div className="bg-[#EEF5FF]">
                <div className="relative min-h-screen flex flex-col justify-start selection:bg-[#176B87] selection:text-[#EEF5FF]">
                    <div className="relative">
                        <Header />

                        <main className="mt-6 pt-20">
                            <div className='bg-[#176B87] selection:bg-[#EEF5FF] selection:text-[#176B87] flex justify-around items-start gap-5 p-5'>
                                <div className='flex items-center gap-5 flex-col'>
                                    <img src={`https://res.cloudinary.com/dy4jriewl/image/upload/ecoreact/${tool.slug}.png`} width={120} alt={tool.title} />
                                    <a className='rounded-md px-3 py-2 text-[#EEF5FF] ring-1 ring-[#EEF5FF] transition hover:text-[#176B87] hover:bg-[#EEF5FF]' href={tool.link} target='_blank'>Visit website</a>
                                </div>
                                <div className=''>
                                    <h1 className='text-3xl font-extrabold mb-4 text-[#EEF5FF]'>{tool.title}</h1>
                                    <p className='text-[#EEF5FF]/80 mb-5 text-md'>{tool.description}</p>
                                    <div className='mt-10'>
                                        <img className='object-cover h-96 w-full' src={`https://res.cloudinary.com/dy4jriewl/image/upload/ecoreact/screenshot-${tool.slug}`} alt={tool.title} />
                                    </div>
                                </div>
                            </div>

                        </main>

                        <Footer date={date} />
                    </div>
                </div>
            </div>
        </>
    );
}
