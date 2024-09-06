import {logo} from '../assets'
const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src = {logo} alt="sumz_logo" className='w-28 object-contain'/>
        <button type='button' onClick={()=>window.open('https://github.com/Sreyanth99/concise')} className='black_btn'>Github</button>

      </nav>
      <h1 className='head_text'>
        Compress <span className='orange_gradient'>Lengthy</span> Articles into <br /><span className='green_gradient'>Bite Sized Bits</span>
      </h1>
      <h2 className='desc'>
        With Concise you can get relevant information from articles by pasting their link to obtain an easily digestable paragraph powered by AI
         
      </h2>
    </header>
  )
}

export default Hero