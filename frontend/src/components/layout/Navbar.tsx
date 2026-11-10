import { useState } from "react";
import { Link } from "react-router-dom";
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { label: "Features", href: "#features" },
    { label: "How it works", href: "#how-it-works" },
    { label: "Showcase", href: "#showcase" },
    { label: "About", href: "#about" },
  ];
  return (
    <nav className='relative z-20 border-b border-gray-100 bg-white'>
      <div className='mx-auto flex min-h-16 w-full items-center justify-between gap-4 px-5 sm:px-8 lg:px-10'>
        <a href='#' className='flex shrink-0 items-center gap-3'>
          <span className='relative flex h-10 w-10 -rotate-6 items-center justify-center rounded-xl bg-[#6753DB] text-white shadow-sm'>
            <svg
              viewBox='0 0 40 40'
              className='h-8 w-8 rotate-6'
              fill='white'
              aria-hidden='true'
            >
              <path
                d='M20 5 L21.8 10.5 L26 12 L21.8 13.5 L20 19 L18.2 13.5 L14 12 L18.2 10.5 Z'
                fill='none'
                stroke='white'
                strokeWidth='1.3'
                strokeLinejoin='round'
              />
              <path d='M10 21 L11.5 25 L15 26.5 L11.5 28 L10 32 L8.5 28 L5 26.5 L8.5 25 Z' />
              <path d='M28 21 L29.5 25 L33 26.5 L29.5 28 L28 32 L26.5 28 L23 26.5 L26.5 25 Z' />
            </svg>
          </span>
          <span className='text-3xl font-bold leading-none tracking-tight text-[#19182A]'>
            Folio<span className='text-[#6753DB]'>.</span>
          </span>
        </a>
        <div className='hidden items-center gap-8 lg:flex xl:gap-10 '>
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className='whitespace-nowrap text-xs text-gray-500 transition hover:text-violet-600'
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className='hidden shrink-0 items-center gap-6 sm:flex'>
          <Link
            to='/login'
            className='whitespace-nowrap text-xs text-[#1F1D32] transition hover:text-violet-600'
          >
            Log in
          </Link>
          <Link
            to='/register'
            onClick={() => setIsMenuOpen(false)}
            className='mt-1 rounded-lg border border-[#1F1D32] px-4 py-3 text-center text-sm font-medium text-[#1F1D32] transition hover:bg-violet-50'
          >
            Sign up
          </Link>
          <Link
            to='/my-portfolio'
            className='flex items-center gap-2 whitespace-nowrap rounded-lg bg-[#1F1D32] px-3 py-2.5 text-xs font-medium text-white transition hover:bg-violet-700 sm:px-4'
          >
            Build your portfolio
            <span>→</span>
          </Link>
        </div>
        <button
          type='button'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          className='flex h-10 w-10 items-center justify-center rounded-lg text-2xl text-[#201D2E] transition hover:bg-gray-100 sm:hidden'
        >
          {isMenuOpen ? "×" : "☰"}
        </button>
      </div>
      {isMenuOpen && (
        <div className='border-t border-gray-100 bg-white px-4 py-4 shadow-lg sm:hidden'>
          <div className='flex flex-col gap-1 '>
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className='rounded-lg px-3 py-3 text-sm text-gray-600 transition hover:bg-violet-50 hover:text-violet-700'
              >
                {link.label}
              </a>
            ))}

            <Link
              to='/login'
              onClick={() => setIsMenuOpen(false)}
              className='mt-2 rounded-lg px-3 py-3 text-center text-sm text-[#1F1D32] hover:bg-violet-50 hover:text-violet-600'
            >
              Log in
            </Link>
            <Link
              to='/register'
              className='whitespace-nowrap rounded-lg border border-[#1F1D32] px-3 py-2.5 text-xs font-medium text-[#1F1D32] transition hover:bg-violet-50 sm:px-4'
            >
              Sign up
            </Link>
            <Link
              to='/my-portfolio'
              onClick={() => setIsMenuOpen(false)}
              className='mt-1 flex items-center justify-center gap-2 rounded-lg bg-[#1F1D32] px-4 py-3 text-sm font-medium text-white transition hover:bg-violet-700'
            >
              Build your portfolio →
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
export default Navbar;
