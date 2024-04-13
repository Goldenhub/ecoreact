export default function Search() {
    return (
        <section className='flex justify-center mb-20'>
            <label className="relative block w-2/3 md:w-1/2">
                <span className="sr-only">Search</span>
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#00000050" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                </span>
                <input className="placeholder:text-slate-400 block bg-white w-full rounded-md py-2 pl-9 pr-3 h-[56px] shadow-[0_2px_10px_0_rgba(23,107,135,.3)] border-none focus:outline-none sm:text-8" autoComplete='none' placeholder="Search for a react tool" type="search" name="search" />
            </label>
        </section>
    )
}