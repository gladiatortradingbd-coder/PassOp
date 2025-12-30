import './App.css'
import Navbar from './componentes/Navbar'
import Manager from './componentes/Manager'
import Footer from './componentes/Footer'
function App() {

  return (
    <>
     <Navbar />
     <div className="min-h-screen">

     <Manager />
     </div>
     <Footer />
    </>
  )
}

export default App