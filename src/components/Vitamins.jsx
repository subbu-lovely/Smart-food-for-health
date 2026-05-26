function Vitamins() {
  return (

    <section
      id="vitamins"
      className="py-24 bg-gradient-to-r from-green-50 to-blue-50 px-6"
    >

      <div className="max-w-7xl mx-auto">

        {/* TITLE */}

        <div className="text-center mb-20">

          <h1 className="text-5xl font-extrabold text-gray-800">

            Essential Vitamins

          </h1>

          <p className="text-gray-600 text-xl mt-5">

            Learn vitamins, food sources and health benefits.

          </p>

        </div>

        {/* GRID */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* VITAMIN A */}

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:-translate-y-3 duration-300">

            <img
              src="https://images.unsplash.com/photo-1447175008436-054170c2e979"
              className="h-60 w-full object-cover"
            />

            <div className="p-8">

              <h1 className="text-4xl font-bold text-orange-500 mb-5">
                Vitamin A
              </h1>

              <p className="text-gray-700 leading-7">
                Good for eye vision, skin health and immunity.
              </p>

              <div className="mt-5">

                <h2 className="font-bold text-gray-800">
                  Food Sources:
                </h2>

                <ul className="list-disc ml-5 mt-2 text-gray-600">
                  <li>Carrot</li>
                  <li>Mango</li>
                  <li>Spinach</li>
                </ul>

              </div>

            </div>

          </div>

          {/* VITAMIN B */}

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:-translate-y-3 duration-300">

            <img
              src="https://images.unsplash.com/photo-1514996937319-344454492b37"
              className="h-60 w-full object-cover"
            />

            <div className="p-8">

              <h1 className="text-4xl font-bold text-red-500 mb-5">
                Vitamin B
              </h1>

              <p className="text-gray-700 leading-7">
                Helps body energy production and brain function.
              </p>

              <div className="mt-5">

                <h2 className="font-bold text-gray-800">
                  Food Sources:
                </h2>

                <ul className="list-disc ml-5 mt-2 text-gray-600">
                  <li>Eggs</li>
                  <li>Milk</li>
                  <li>Fish</li>
                </ul>

              </div>

            </div>

          </div>

          {/* VITAMIN C */}

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:-translate-y-3 duration-300">

            <img
              src="https://images.unsplash.com/photo-1619566636858-adf3ef46400b"
              className="h-60 w-full object-cover"
            />

            <div className="p-8">

              <h1 className="text-4xl font-bold text-green-500 mb-5">
                Vitamin C
              </h1>

              <p className="text-gray-700 leading-7">
                Improves immunity and protects body cells.
              </p>

              <div className="mt-5">

                <h2 className="font-bold text-gray-800">
                  Food Sources:
                </h2>

                <ul className="list-disc ml-5 mt-2 text-gray-600">
                  <li>Orange</li>
                  <li>Lemon</li>
                  <li>Guava</li>
                </ul>

              </div>

            </div>

          </div>

          {/* VITAMIN D */}

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:-translate-y-3 duration-300">

            <img
              src="https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2"
              className="h-60 w-full object-cover"
            />

            <div className="p-8">

              <h1 className="text-4xl font-bold text-yellow-500 mb-5">
                Vitamin D
              </h1>

              <p className="text-gray-700 leading-7">
                Helps calcium absorption and strengthens bones.
              </p>

              <div className="mt-5">

                <h2 className="font-bold text-gray-800">
                  Food Sources:
                </h2>

                <ul className="list-disc ml-5 mt-2 text-gray-600">
                  <li>Fish</li>
                  <li>Milk</li>
                  <li>Egg Yolk</li>
                </ul>

              </div>

            </div>

          </div>

          {/* VITAMIN E */}

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:-translate-y-3 duration-300">

            <img
              src="https://images.unsplash.com/photo-1502741338009-cac2772e18bc"
              className="h-60 w-full object-cover"
            />

            <div className="p-8">

              <h1 className="text-4xl font-bold text-purple-500 mb-5">
                Vitamin E
              </h1>

              <p className="text-gray-700 leading-7">
                Protects skin and body cells from damage.
              </p>

              <div className="mt-5">

                <h2 className="font-bold text-gray-800">
                  Food Sources:
                </h2>

                <ul className="list-disc ml-5 mt-2 text-gray-600">
                  <li>Almonds</li>
                  <li>Avocado</li>
                  <li>Sunflower Seeds</li>
                </ul>

              </div>

            </div>

          </div>

          {/* VITAMIN K */}

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:-translate-y-3 duration-300">

            <img
              src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd"
              className="h-60 w-full object-cover"
            />

            <div className="p-8">

              <h1 className="text-4xl font-bold text-teal-500 mb-5">
                Vitamin K
              </h1>

              <p className="text-gray-700 leading-7">
                Important for blood clotting and bone health.
              </p>

              <div className="mt-5">

                <h2 className="font-bold text-gray-800">
                  Food Sources:
                </h2>

                <ul className="list-disc ml-5 mt-2 text-gray-600">
                  <li>Broccoli</li>
                  <li>Spinach</li>
                  <li>Cabbage</li>
                </ul>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Vitamins