export default function Navbar() {
  return (
    <div className="fixed top-0 z-50 w-full h-20 content-center">
        <div className="active:scale-105 hover:scale-105 transition-all duration-300 h-14 bg-[var(--bg-color)]/30 backdrop-blur-xs w-full m-4! max-w-xl rounded-full border-2 border-[var(--faded-text-color)]/30 flex items-center justify-center gap-4 px-4 text-[var(--faded-text-color)] text-lg">
        <p className="cursor-pointer active:scale-105 hover:scale-105 transition-all duration-300">Home</p>
        <p className="cursor-pointer active:scale-105 hover:scale-105 transition-all duration-300">About</p>
        <p className="cursor-pointer active:scale-105 hover:scale-105 transition-all duration-300">Projects</p>
        <p className="cursor-pointer active:scale-105 hover:scale-105 transition-all duration-300">Contact</p>
        </div>
    </div>
  )
}
