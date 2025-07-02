// import { HeroBanner } from './components/shared/navbar/banner/HeroBanner'
import { Navbar } from './components/shared/navbar/Navbar'
import { HomePage } from './pages/Home/Home'
import { HeroBanner } from './components/shared/banner/HeroBanner'
import './App.css'
function App() {

  return (
    <div className='flex-col bg-white w-full min-h'>
        <Navbar />
        <HeroBanner />
        <main className='w-full h-[100dvh]'>
          <HomePage />
        </main>
    </div>
  )
}

export default App
