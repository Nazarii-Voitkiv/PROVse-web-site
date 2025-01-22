'use client';

import Link from 'next/link';

const Navbar = () => {
  return (
    <header className="fixed w-full top-0 z-50 bg-white border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Логотип */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-blue-600">
                PRO<span className="text-green-500">Все</span>
                <span className="text-blue-500 ml-2 text-xl font-semibold">Сила</span>
              </span>
            </Link>
          </div>

          {/* Основне меню */}
          <div className="hidden lg:flex items-center space-x-10">
            {/* Всі пункти меню */}
            {['Послуги', 'Про нас', 'Замовити послугу', 'Контакти'].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-gray-600 hover:text-blue-600 font-medium tracking-wide 
                          transition-colors duration-200"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Контакти та CTA */}
          <div className="hidden lg:flex items-center space-x-8">
            <a 
              href={`tel:${process.env.NEXT_PUBLIC_PHONE_NUMBER}`}
              className="text-gray-600 hover:text-blue-600 font-medium tracking-wide 
                          transition-colors duration-200"
            >
              {process.env.NEXT_PUBLIC_PHONE_DISPLAY}
            </a>
            <button 
              className="bg-green-500 text-white px-6 py-2.5 rounded-lg font-semibold 
                         hover:bg-green-600 transition-all duration-200 shadow-sm 
                         hover:shadow-md transform hover:-translate-y-0.5"
            >
              Зателефонувати вам?
            </button>
          </div>

          {/* Мобільне меню (бургер) */}
          <div className="lg:hidden flex items-center">
            <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 
                             hover:text-blue-600 hover:bg-gray-50 transition-all duration-200">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
