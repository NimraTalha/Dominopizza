
import Image from 'next/image';
import Link from 'next/link'

const Header = () => {
    return (
        <header className='bg-white flex items-center justify-between p-4 shadow-md'>
            
            <Image 
                src="/images/logo.jpeg"  
                alt="Logo" 
                width={150}  
                height={150}  
                className="object-contain" 
            />
            
           
            <nav className='flex items-center space-x-8'>
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
