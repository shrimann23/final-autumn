export function DefaultButton({ children, style }) {
    return (
      <button
        className={`inline font-medium bg-transparent border rounded-full md:px-4 px-3.5 md:py-2 py-1.5 md:text-base text-sm transition-colors ${style}`}
      >
        {children}
      </button>
    );
}