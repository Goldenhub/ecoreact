export default function Footer({date}) {
    return (
        <footer className="py-10 text-center text-sm text-black dark:text-white/70">
            ecoreact &copy; {date} | built with &#10084; by <a className='underline' href="https://github.com/goldenhub">Golden</a>
        </footer>
    )
}