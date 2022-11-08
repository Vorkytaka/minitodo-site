import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div className='flex flex-col min-h-screen'>
      <main className='w-screen mx-auto flex-1 py-8'>
        <div className='max-w-2xl mx-auto'>
          {children}
        </div>
      </main>
      <footer className='py-4 w-screen'>
        <div className='max-w-xl mx-auto px-4'>
          <p className='text-right font-thin'>&copy; 2022 miniTeam</p>
        </div>
      </footer>
    </div>
  );
}