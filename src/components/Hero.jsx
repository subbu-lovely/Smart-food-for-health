function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen pt-32 bg-gradient-to-r from-green-50 to-orange-50 px-6 py-16"
    >

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

        {/* LEFT SIDE */}

        <div>

          <p className="text-green-600 font-bold text-lg mb-4">
            Smart Food For Health
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-gray-800">
            Healthy Food <br />
            Healthy Life
          </h1>

          <p className="text-gray-600 text-lg mt-6 leading-8">
            Discover healthy foods, vitamins, calories, nutrition benefits
            and improve your lifestyle with smart eating habits.
          </p>

          {/* SEARCH */}

          <div className="flex mt-8 bg-white rounded-2xl shadow-xl overflow-hidden w-full md:w-[500px]">

            <input
              type="text"
              placeholder="Search healthy foods..."
              className="w-full p-5 outline-none"
            />

            <button className="bg-green-600 text-white px-8 hover:bg-green-700 transition-all">
              Search
            </button>

          </div>

          {/* BUTTONS */}

          <div className="flex gap-5 mt-8">

            <button className="bg-green-600 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:scale-105 transition-all">
              Explore Foods
            </button>

            <button className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-2xl font-semibold hover:bg-green-600 hover:text-white transition-all">
              Learn More
            </button>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="relative flex justify-center">

          <div className="absolute w-[450px] h-[450px] bg-green-300 rounded-full blur-3xl opacity-30"></div>

          <img
            src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c"
            alt="Healthy Food"
            className="relative z-10 rounded-[40px] shadow-2xl w-[500px] h-[600px] object-cover"
          />

        </div>

      </div>

      {/* ================= FOOD BENEFITS SECTION ================= */}

      <div className="max-w-7xl mx-auto mt-32">

        <h1 className="text-5xl font-bold text-center text-gray-800 mb-16">
          Food Benefits For Health
        </h1>

        {/* GRID START */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* CARD 1 */}

          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-6 hover:scale-105 transition-all duration-500">

            <img
              src="https://images.unsplash.com/photo-1604908176997-125f25cc6f3d"
              className="h-60 w-full object-cover"
            />

            <div className="p-6">

              <h1 className="text-3xl font-bold text-green-600">
                Spinach Curry
              </h1>

              <p className="text-gray-600 mt-4 leading-7">
                Rich in iron and vitamins. Boosts immunity and energy.
              </p>

            </div>

          </div>

          {/* CARD 2 */}

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:-translate-y-2 duration-300">

            <img
              src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd"
              className="h-60 w-full object-cover"
            />

            <div className="p-6">

              <h1 className="text-3xl font-bold text-orange-500">
                Vegetable Salad
              </h1>

              <p className="text-gray-600 mt-4 leading-7">
                Improves digestion and helps weight control.
              </p>

            </div>

          </div>

          {/* CARD 3 */}

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:-translate-y-2 duration-300">

            <img
              src="https://images.unsplash.com/photo-1505253716362-afaea1d3d1af"
              className="h-60 w-full object-cover"
            />

            <div className="p-6">

              <h1 className="text-3xl font-bold text-yellow-500">
                Fruits Bowl
              </h1>

              <p className="text-gray-600 mt-4 leading-7">
                Natural vitamins for skin and energy.
              </p>

            </div>

          </div>

          {/* CARD 4 */}

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:-translate-y-2 duration-300">

            <img
              src="https://www.thedeliciouscrescent.com/wp-content/uploads/2023/07/Fish-Curry-7.jpg"
              className="h-60 w-full object-cover"
            />

            <div className="p-6">

              <h1 className="text-3xl font-bold text-blue-600">
                Fish Curry
              </h1>

              <p className="text-gray-600 mt-4 leading-7">
                Rich in omega-3 and protein for heart health.
              </p>

            </div>

          </div>

          {/* CARD 5 */}

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:-translate-y-2 duration-300">

            <img
              src="https://images.unsplash.com/photo-1604503468506-a8da13d82791"
              className="h-60 w-full object-cover"
            />

            <div className="p-6">

              <h1 className="text-3xl font-bold text-red-500">
                Chicken Curry
              </h1>

              <p className="text-gray-600 mt-4 leading-7">
                High protein for muscle strength and growth.
              </p>

            </div>

          </div>

          {/* CARD 6 */}

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:-translate-y-2 duration-300">

            <img
              src="https://tse2.mm.bing.net/th/id/OIP.mqcZa3QJvyaA7nkmdTvvIAHaEo?pid=Api&P=0&h=180"
              className="h-60 w-full object-cover"
            />

            <div className="p-6">

              <h1 className="text-3xl font-bold text-purple-600">
                Dry Fruits
              </h1>

              <p className="text-gray-600 mt-4 leading-7">
                Boosts brain power and immunity naturally.
              </p>

            </div>

          </div>

        </div>

        {/* GRID END */}

      </div>

    </section>
  )
}

export default Hero