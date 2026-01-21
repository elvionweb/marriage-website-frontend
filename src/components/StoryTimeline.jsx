import { motion } from "framer-motion";

export default function StoryTimeline() {
  const milestones = [
    {
      date: "Met in 2018",
      text: "John and Mary first met in the most unexpected way, yet it felt instantly familiar. What began as a simple encounter quickly grew into meaningful conversations and a friendship neither of them wanted to let go of.",
    },
    {
      date: "First Date 2019",
      text: "Their first date was filled with laughter, long talks, and an undeniable connection. From that moment, it became clear that this was more than just a date it was the beginning of something special.",
    },
    {
      date: "Propose in 2023",
      text: "With love, intention, and a heart full of certainty, John asked Mary to spend forever with him. It was a beautiful “yes,” marking the start of a new chapter built on love, faith, and commitment.",
    },
    {
      date: "Getting Married in 2026",
      text: "On 21 February 2026, surrounded by family, friends, and by God's grace, John and Mary joyfully say “I do,” celebrating a love story written with purpose and sealed with forever.",
    },
  ];

  return (
    <section className="bg-primary py-6 md:py-12 px-4">
      <h2 className="text-3xl md:text-4xl font-serif text-center text-blue-600 mb-2 md:mb-10">
        Our Story
      </h2>

      <div className="max-w-6xl mx-auto grid gap-2 md:gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {milestones.map((milestone, i) => (
          <motion.div
            key={i}
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <p className="text-xl text-blue-600 font-medium mt-2">
              {milestone.date}
            </p>

            <p className="text-sm sm:text-base leading-relaxed">
              {milestone.text}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
