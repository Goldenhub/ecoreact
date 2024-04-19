import { Head } from '@inertiajs/react';
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
                            <div className='bg-[#176B87] selection:bg-[#EEF5FF] selection:text-[#176B87] flex justify-around items-start gap-10 md:gap-5 p-5 flex-col md:flex-row'>
                                <div className='flex items-center md:items-start gap-5 flex-col w-full md:w-1/4'>
                                    <img src={`https://res.cloudinary.com/dy4jriewl/image/upload/ecoreact/${tool.slug}.png`} width={120} alt={tool.title} />
                                    <a className='rounded-md px-3 py-2 text-[#EEF5FF] ring-1 ring-[#EEF5FF] transition hover:text-[#176B87] hover:bg-[#EEF5FF]' href={tool.link} target='_blank'>Visit website</a>
                                </div>
                                <div className='w-full md:w-3/4'>
                                    <h1 className='text-3xl font-extrabold mb-4 text-[#EEF5FF] text-center md:text-start'>{tool.title}</h1>
                                    <p className='text-[#EEF5FF]/80 mb-5 text-md text-center md:text-start'>{tool.description}</p>
                                    <div className='mt-10 flex items-start'>
                                        <img className='object-scale-down md:object-contain md:h-96' src={`https://res.cloudinary.com/dy4jriewl/image/upload/ecoreact/screenshot-${tool.slug}`} alt={tool.title} />
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
