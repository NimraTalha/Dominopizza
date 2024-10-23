import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className='bg-white flex items-center justify-between p-4 shadow-md'>
            <Image 
                src="/images/logo.jpeg"  
                alt="Logo" 
                width={150}  
                height={150}  
                className="object-contain" 
            />

            <div className="flex items-center md:hidden">
                <button onClick={toggleMobileMenu} className="text-black focus:outline-none">
                    {isMobileMenuOpen ? '✖️' : '☰'}
                </button>
            </div>

            <nav className={`flex flex-col md:flex-row md:items-center md:space-x-8 ${isMobileMenuOpen ? 'block' : 'hidden'} md:block`}>
                <Link href="/menu" className='text-black font-semibold hover:text-blue-500'>Menu</Link>
                <Link href="#deals" className='text-black font-semibold hover:text-blue-500'>Deals</Link>
                <Link href="#stores" className='text-black font-semibold hover:text-blue-500'>Stores</Link>
                <Link href="#alliance" className='text-black font-semibold hover:text-blue-500'>Alliance</Link>
                
                <span className="text-black text-2xl">
                    🛒 
                </span>
                
                <Link href="#myaccount" className='text-black font-semibold hover:text-blue-500'>My Account</Link>
            </nav>
        </header>
    );
};

export default Header;
