function Navbar() {
  return (
    <nav className="flex justify-between items-center w-[90vw] mx-auto py-4 fixed z-50">
      <div className="h-9 z-10">
        <img src="/images/logo.png" alt="Netflix Logo" className="h-full" />
      </div>
      <div className="flex gap-3 z-10">
        <button className="px-4 py-2 bg-red-700 text-white font-bold border border-white rounded hover:bg-red-900 hover:scale-105 transition">
          English
        </button>
        <button className="px-4 py-2 bg-green-600 text-white font-bold border border-white rounded hover:bg-green-900 hover:scale-105 transition">
          Sign In
        </button>
      </div>
    </nav>
  );
}
export default Navbar;
