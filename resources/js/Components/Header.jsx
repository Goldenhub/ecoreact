import { Link } from '@inertiajs/react';

export default function Header() {

    return (
        <header>
            <nav className="grid grid-cols-2 items-center gap-2 py-10 mx-auto max-w-2xl px-6 lg:max-w-7xl mb-20">
                <div className="flex lg:justify-start text-[#176B87] font-extrabold">
                    <Link href={route('index')}>
                        ECOREACT
                    </Link>
                </div>
                {!route().current('request.create') ?
                    <div className="-mx-3 flex flex-1 justify-end">
                        <Link href={route("request.create")} className="rounded-md px-3 py-2 text-[#176B87] ring-1 ring-[#176B87] transition hover:text-[#EEF5FF] hover:bg-[#176B87]"
                        >
                            Request new tool
                        </Link>
                    </div> :
                    <div className="-mx-3 flex flex-1 justify-end">
                        <Link href={route("index")} className="rounded-md px-3 py-2 text-[#176B87] ring-1 ring-[#176B87] transition hover:text-[#EEF5FF] hover:bg-[#176B87]"
                        >
                            Buy me coffee
                        </Link>
                    </div>
                }
            </nav>
        </header>
    )
}