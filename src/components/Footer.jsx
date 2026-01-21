import { motion } from "framer-motion";
import logos from "../assets/logos.jpg"; // Elvionweb logo
import SocialShare from "./SocialShare";

export default function Footer({
  coupleNames = "John & Mary",
  hashtag = "#JohnAndMaryForever",
}) {
  return (
    <footer className="bg-gradient-to-r from-black via-black to-black text-white">
      <div className="max-w-6xl mx-auto px-4 py-4 pt-5 flex flex-col items-center">
        {/* Heartfelt Closing Message */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-lg sm:text-xl font-serif font-semibold text-center text-accent"
        >
          With love, faith & gratitude <br /> {coupleNames}
        </motion.p>

        {/* Wedding Hashtag */}
        <p className="text-sm sm:text-base opacity-90 text-center">{hashtag}</p>

        {/* Divider */}
        <div className="my-1.5 h-px bg-white/50 w-full max-w-md" />

        {/* Social Share Buttons */}
        <SocialShare message={`🎉 Celebrating ${coupleNames}'s big day! 💖`} />

        {/* Builder Credit */}
        <p className="mt-3 text-xs sm:text-sm opacity-90 flex items-center justify-center gap-2">
          <img
            src={logos}
            alt="Elvionweb Logo"
            className="w-8 h-8 object-contain"
          />
          Built by{" "}
          <a
            href="https://www.elvionweb.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-cyan-300 underline underline-offset-4 hover:opacity-100 transition-opacity"
          >
            Elvionweb
          </a>
        </p>

        {/* Copyright */}
        <p className="mt-1 text-xs opacity-90 text-center">
          © {new Date().getFullYear()} {coupleNames} Wedding Website
        </p>
      </div>
    </footer>
  );
}
