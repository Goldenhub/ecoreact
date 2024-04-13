export default function EmptyCard({ category, img, title }) {
    return (

        <div className='bg-white overflow-hidden rounded-md shadow-[0_4px_8px_0_rgb(0,0,0,.05)]'>
            <div className='flex gap-10 md:gap-4 items-center py-2 px-4'>
                <img className='w-20 h-20' src={img} alt="" role="presentation" />
                <div>
                    <h4 className='text-sm font-bold text-black'>{category}</h4>
                    <p className='mb-5 truncate text-md'>{title}</p>
                </div>
            </div>
        </div>
    )
}