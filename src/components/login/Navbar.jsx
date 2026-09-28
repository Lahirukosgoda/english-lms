function Navbar() {
  return (
    <nav className="flex items-center justify-between px-10 py-4 bg-white">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
          S
        </div>
        <span className="font-semibold text-gray-800">
          uccess <span className="text-blue-600">English</span>
        </span>
      </div>

      <div className="hidden md:flex items-center gap-8 text-sm text-gray-600">
        <a href="#" className="hover:text-blue-600">Home</a>
        <a href="#" className="hover:text-blue-600">Courses</a>
        <a href="#" className="hover:text-blue-600">About</a>
        <a href="#" className="hover:text-blue-600">Contact</a>
      </div>

      <button className="border border-blue-500 text-blue-600 text-sm font-medium px-5 py-2 rounded-full hover:bg-blue-50 transition-colors">
        Login
      </button>
    </nav>
  );
}

export default Navbar;