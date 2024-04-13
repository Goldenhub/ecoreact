export default function PrimaryButton({ className = '', disabled, children, ...props }) {
    return (
        <button
            {...props}
            className={
                `inline-flex items-center px-4 py-2 bg-[#EEF5FF] border border-transparent rounded-md font-semibold text-xs text-[#176B87] uppercase tracking-widest hover:bg-[#176B87] hover:text-[#EEF5FF] hover:border-[#EEF5FF] transition ease-in-out duration-150 ${
                    disabled && 'opacity-25'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
