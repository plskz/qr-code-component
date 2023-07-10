import QR_code from './assets/image-qr-code.png';

function App() {
  return (
    <main className='flex items-center justify-center h-screen'>
      <div className='w-10/12 max-w-[19rem] h-auto bg-white rounded-xl flex flex-col items-center justify-center p-3 text-center'>
        <img className='w-auto rounded-xl' src={QR_code} alt='qr code' />
        <div className='flex flex-col gap-3 p-3 my-2'>
          <h1 className='text-xl font-bold text-[#1F3251]'>
            Improve your front-end skills by building projects
          </h1>
          <p className='text-[15px] text-[#7B879D]'>
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
    </main>
  );
}

export default App;
