import { Link } from '@inertiajs/react';
export default function Card({ title, slug, category, img }) {
    return (
        <Link href={route('tools', slug)}>
            <div className='bg-[#EEF5FF] overflow-hidden rounded-md shadow-[0_4px_8px_0_rgb(0,0,0,.05)]'>
                <div className='group flex gap-10 md:gap-4 items-center py-2 px-4 md:translate-y-[1%] md:hover:translate-y-0 transition ease-in-out duration-300 delay-150'>
                    <img className='w-10 h-10 md:w-20 md:h-20' src={img} alt="" role="presentation" />
                    <div>
                        <p className='truncate text-md text-[#176B87]/80'>{title}</p>
                        <h4 className='mb-2 md:mb-5 text-sm font-bold text-[#176B87]'>{category.charAt(0).toUpperCase() + category.slice(1)}</h4>
                        <span className='text-[#176B87] hidden md:block text-sm opacity-100 md:opacity-0 md:group-hover:opacity-100 transition ease-in-out delay-100'>View details</span>
                    </div>
                </div>
            </div>
        </Link>
    )
}