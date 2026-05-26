function Benefits() {
  return (

    <section
      id="benefits"
      className="py-24 bg-gradient-to-r from-orange-50 to-green-50 px-6"
    >

      <div className="max-w-7xl mx-auto">

        {/* TITLE */}

        <div className="text-center mb-20">

          <h1 className="text-5xl font-bold text-gray-800">

            Health Benefits

          </h1>

          <p className="text-gray-600 text-xl mt-5">

            Healthy foods help your body stay strong and active.

          </p>

        </div>

        {/* BENEFITS GRID */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* CARD 1 */}

          <div className="bg-white rounded-3xl shadow-xl p-8 hover:-translate-y-2 duration-300">

            <div className="text-6xl">
              💪
            </div>

            <h1 className="text-3xl font-bold mt-6 text-green-600">
              Strong Body
            </h1>

            <p className="text-gray-600 mt-4 leading-7">

              Healthy foods provide protein, vitamins and minerals
              that help build a strong body.

            </p>

          </div>

          {/* CARD 2 */}

          <div className="bg-white rounded-3xl shadow-xl p-8 hover:-translate-y-2 duration-300">

            <div className="text-6xl">
              ❤️
            </div>

            <h1 className="text-3xl font-bold mt-6 text-red-500">
              Healthy Heart
            </h1>

            <p className="text-gray-600 mt-4 leading-7">

              Eating vegetables and fruits helps improve heart
              health and blood circulation.

            </p>

          </div>

          {/* CARD 3 */}

          <div className="bg-white rounded-3xl shadow-xl p-8 hover:-translate-y-2 duration-300">

            <div className="text-6xl">
              🧠
            </div>

            <h1 className="text-3xl font-bold mt-6 text-blue-500">
              Sharp Brain
            </h1>

            <p className="text-gray-600 mt-4 leading-7">

              Fish, nuts and healthy foods improve memory and
              brain performance.

            </p>

          </div>

          {/* CARD 4 */}

          <div className="bg-white rounded-3xl shadow-xl p-8 hover:-translate-y-2 duration-300">

            <div className="text-6xl">
              🛡️
            </div>

            <h1 className="text-3xl font-bold mt-6 text-orange-500">
              Strong Immunity
            </h1>

            <p className="text-gray-600 mt-4 leading-7">

              Vitamins help your body fight diseases and infections.

            </p>

          </div>

          {/* CARD 5 */}

          <div className="bg-white rounded-3xl shadow-xl p-8 hover:-translate-y-2 duration-300">

            <div className="text-6xl">
              ⚡
            </div>

            <h1 className="text-3xl font-bold mt-6 text-yellow-500">
              More Energy
            </h1>

            <p className="text-gray-600 mt-4 leading-7">

              Healthy breakfast and balanced meals keep you active
              all day long.

            </p>

          </div>

          {/* CARD 6 */}

          <div className="bg-white rounded-3xl shadow-xl p-8 hover:-translate-y-2 duration-300">

            <div className="text-6xl">
              😊
            </div>

            <h1 className="text-3xl font-bold mt-6 text-pink-500">
              Happy Life
            </h1>

            <p className="text-gray-600 mt-4 leading-7">

              Good food improves mood, reduces stress and supports
              a healthy lifestyle.

            </p>

          </div>

        </div>

      </div>

    </section>

  )
}

export default Benefits