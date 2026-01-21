import { motion } from "framer-motion";
import { useCountdown } from "../hooks/useCountdown";

export default function Countdown() {
  const { timeLeft, isComplete } = useCountdown("2026-02-21T00:00:00");

  return (
    <section className="pt-7 md:pt-18 mb-7 md:mb-18 bg-white text-center px-4">
      {!isComplete && timeLeft && (
        <>
          <h2 className="text-3xl md:text-4xl text-blue-600 font-serif mb-6 md:mb-8">
            Counting Down to Forever
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <motion.div
                key={unit}
                className="bg-primary rounded-xl p-9 shadow"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <p className="text-3xl md:text-4xl font-bold">
                  {String(value).padStart(2, "0")}
                </p>
                <p className="uppercase text-sm mt-2 tracking-wide">{unit}</p>
              </motion.div>
            ))}
          </div>
        </>
      )}

      {isComplete && (
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-3xl md:text-4xl font-serif mb-6">
            Congratulations on your beautiful union!
          </h2>
          <p className="text-lg leading-relaxed text-gray-700">
            May your marriage be filled with love, joy, and peace. We pray that
            God blesses your home, strengthens your bond, and guides you through
            every season of life together. Wishing you a happy and blessed
            married life.
          </p>
        </motion.div>
      )}
    </section>
  );
}
