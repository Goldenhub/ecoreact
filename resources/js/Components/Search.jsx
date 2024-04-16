import { Link } from '@inertiajs/react';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits, Configure } from 'react-instantsearch';

const searchClient = algoliasearch('5EA6VVHYFG', '41977d52e4901e7164e2145daa661863');


function Hit({ hit }) {
    return (
        <Link className="flex items-center justify-start gap-10 p-1 bg-white border border-gray-200 hover:bg-gray-100" href={route('tools', hit.slug)}>
            <img className="w-5 h-5 md:w-20 md:h-20" src={`https://res.cloudinary.com/dy4jriewl/image/upload/ecoreact/${hit.slug}.png`} alt={hit.title} />
            <div>
                <h3 className='text-sm md:text-lg font-bold text-[#176B87]'>{hit.title}</h3>
                <p className='text-xs md:text-md text-[#176B87]/80'>{hit.category}</p>
            </div>
        </Link>
    );
}




export default function Search() {

    return (
        <section className='relative flex justify-center mb-20 z-10'>
            {/* <label className="relative block w-2/3 md:w-1/2">
                <span className="sr-only">Search</span>
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#00000050" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                </span>
                <input className="placeholder:text-slate-400 block bg-white w-full rounded-md py-2 pl-9 pr-3 h-[56px] shadow-[0_2px_10px_0_rgba(23,107,135,.3)] border-none focus:outline-none sm:text-8" autoComplete='none' placeholder="Search for a react tool" type="search" name="search" />
            </label> */}
            <InstantSearch searchClient={searchClient} indexName="tools_index" insights>
                <Configure hitsPerPage={6} />
                <SearchBox
                    queryHook={(query, search) => {
                        if (query === '') return;
                        search(query);
                    }}
                    classNames={{
                        input: 'placeholder:text-slate-400 block bg-white w-full rounded-md py-2 pl-9 pr-3 h-[56px] shadow-[0_2px_10px_0_rgba(23,107,135,.3)] border-none focus:outline-none sm:text-8',
                        submit: 'hidden',
                        reset: 'hidden',
                        root: 'relative block w-full py-0 px-2 md:w-1/2',
                    }}
                    placeholder="Search for a react tool"
                />
                <Hits hitComponent={Hit} classNames={{
                    root: 'absolute top-full w-full md:w-1/2 p-2 left-1/2 -translate-x-1/2',
                    item: 'w-full bg-red-500',
                }} />
            </InstantSearch>
        </section>
    )
}