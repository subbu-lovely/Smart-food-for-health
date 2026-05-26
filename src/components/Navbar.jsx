function Navbar() {
  return (

    <nav className="bg-white shadow-lg fixed top-0 w-full z-50">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}

        <h1 className="text-3xl font-extrabold text-green-600 cursor-pointer">

          Smart Food-For-Health

        </h1>

        {/* MENU */}

        <ul className="hidden md:flex items-center gap-10 text-lg font-semibold text-gray-700">

          {/* HOME */}

          <a
            href="#home"
            className="hover:text-green-600 duration-300"
          >
            Home
          </a>

          {/* VITAMINS */}

          <a
            href="#vitamins"
            className="hover:text-green-600 duration-300"
          >
            Vitamins
          </a>

          {/* FOODS */}

          <a
            href="#foods"
            className="hover:text-green-600 duration-300"
          >
            Foods
          </a>

          {/* BENEFITS */}

          <a
            href="#benefits"
            className="hover:text-green-600 duration-300"
          >
            Benefits
          </a>

          {/* CONTACT */}

          <a
            href="#contact"
            className="hover:text-green-600 duration-300"
          >
            Contact
          </a>

        </ul>

        {/* BUTTON */}

        <button className="bg-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-700 duration-300">

          Explore

        </button>

      </div>

    </nav>

  )
}

export default Navbar