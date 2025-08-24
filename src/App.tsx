import { ThreeScene } from './components/ThreeScene'
import { Header } from './components/Header'
import { Dashboard } from './components/Dashboard'

function App() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Cena 3D como plano de fundo fixo */}
      <ThreeScene />

      {/* Conteúdo do Dashboard */}
      <div className="relative z-10 flex flex-col h-full">
        <Header />
        <Dashboard />
        {/* Footer pode ser adicionado aqui se necessário */}
      </div>
    </div>
  )
}

export default App