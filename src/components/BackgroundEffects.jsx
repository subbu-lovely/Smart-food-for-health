import { motion } from "framer-motion"

function BackgroundEffects() {
  return (

    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#0f172a]">

      {/* ANIMATED GRADIENT */}

      <div className="absolute inset-0 bg-gradient-to-br from-green-900 via-black to-orange-900 opacity-90">

      </div>

      {/* GLOW EFFECT 1 */}

      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] bg-green-500 rounded-full blur-[140px] opacity-30"
      />

      {/* GLOW EFFECT 2 */}

      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
        }}
        className="absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] bg-orange-500 rounded-full blur-[140px] opacity-30"
      />

      {/* CENTER GLOW */}

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute top-[30%] left-[35%] w-[400px] h-[400px] bg-pink-500 rounded-full blur-[150px] opacity-20"
      />

      {/* GRID */}

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px]">

      </div>

      {/* FLOATING FOOD ICONS */}

      <motion.div
        animate={{
          y: [0, -30, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="absolute top-20 left-20 text-8xl"
      >
        🍎
      </motion.div>

      <motion.div
        animate={{
          y: [0, 30, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="absolute bottom-20 right-20 text-8xl"
      >
        🥗
      </motion.div>

      <motion.div
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-[40%] right-[20%] text-8xl"
      >
        🍊
      </motion.div>

      {/* SMALL PARTICLES */}

      <div className="absolute top-40 left-1/2 w-3 h-3 bg-white rounded-full animate-ping">

      </div>

      <div className="absolute top-80 left-20 w-2 h-2 bg-green-300 rounded-full animate-pulse">

      </div>

      <div className="absolute bottom-40 right-40 w-4 h-4 bg-orange-300 rounded-full animate-bounce">

      </div>

    </div>

  )
}

export default BackgroundEffects