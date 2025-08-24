export const Header = () => {
  return (
    <header className="w-full p-4 border-b border-cyan-500/30 backdrop-blur-sm">
      <div className="flex items-center justify-between text-sm">
        <div className="font-bold text-primary-glow">[A.A.M. OS] - SYSTEM OVERVIEW</div>
        <div>STATUS: <span className="text-green-400">ONLINE</span></div>
        <div>NODE_ID: AAM-42</div>
      </div>
    </header>
  )
}