import Head from "next/head";

export default function Home() {
    return (
        <div className='mx-auto'>
          <Head>
            <title>miniTodo</title>
          </Head>
          <img
            src="/images/icon.svg"
            width="144"
            height="144"
            className='mx-auto select-none'
            alt='Логотип'/>
          <h3 className="mx-auto text-4xl text-center font-medium cursor-default select-none">miniTodo</h3>
          <h5 className='mx-auto text-2xl text-center cursor-default select-none'>Простой список дел</h5>
    
          <p className='text-2xl text-center mt-6 font-thin'>Начните по-настоящему организованную жизнь.<br/>Это просто!</p>
    
          <div className='flex justify-center mt-8'>
            <a href='https://play.google.com/store/apps/details?id=tk.vrk.minitodo' target='_blank' rel="noopener noreferrer">
              <button className="bg-[#03A9F4] hover:bg-blue-400 text-white py-4 px-8 rounded-lg mx-auto shadow hover:shadow-none">
                <img src='/images/android-icon.svg' className="inline-block mr-4" alt=''/>
                miniTodo для <b>Android</b>
              </button>
            </a>
          </div>
        </div>
      );
}
