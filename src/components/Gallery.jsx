import { motion } from "framer-motion";

const images = [
  "/gallery1.jpeg",
  "/gallery2.jpeg",
  "/gallery3.jpeg",
  "/gallery4.jpeg",
  "/gallery5.jpeg",
  "/gallery6.jpeg",
];

export default function Gallery() {
  return (
    <section className="pt-4 md:pt-10 bg-primary">
      <h2 className="text-3xl md:text-4xl font-serif text-center text-blue-600 mb-4 md:mb-10">
        Our Memories
      </h2>

      <div className="columns-2 md:columns-3 gap-4 px-4 md:px-20">
        {images.map((src, i) => (
          <motion.img
            key={i}
            src={src}
            alt="Wedding memory"
            className="mb-4 rounded-xl w-full object-cover cursor-pointer hover:opacity-90 transition"
            whileHover={{ scale: 1.02 }}
          />
        ))}
      </div>
    </section>
  );
}
