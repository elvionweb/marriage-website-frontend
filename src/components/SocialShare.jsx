import { motion } from "framer-motion";
import {
  FaWhatsapp,
  FaFacebookF,
  FaXTwitter,
  FaTiktok,
  FaLink,
} from "react-icons/fa6";

export default function SocialShare({
  message = "🙏 By God's grace, John & Mary are getting married. Love is in the air! Join us in celebrating John & Mary’s love, faith, and forever.💍✨💖🤍",
}) {
  const url = encodeURIComponent(window.location.href);
  const text = encodeURIComponent(message);

  const socials = [
    {
      name: "WhatsApp",
      href: `https://wa.me/?text=${text}%20${url}`,
      icon: <FaWhatsapp />,
      bg: "bg-green-500",
    },
    {
      name: "Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      icon: <FaFacebookF />,
      bg: "bg-blue-600",
    },
    {
      name: "X",
      href: `https://twitter.com/intent/tweet?text=${text}&url=${url}`,
      icon: <FaXTwitter />,
      bg: "bg-black",
    },
    {
      name: "TikTok",
      href: `https://www.tiktok.com`,
      icon: <FaTiktok />,
      bg: "bg-pink-600",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mt-4"
    >
      <p className="text-sm sm:text-base mb-4 opacity-90">Share this joy 💕</p>

      <div className="flex justify-center gap-4">
        {socials.map((social) => (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.name}
            className={`${social.bg} text-white w-11 h-11 sm:w-12 sm:h-12
              rounded-full flex items-center justify-center
              shadow-md hover:scale-110 transition-transform`}
          >
            <span className="text-xl sm:text-2xl">{social.icon}</span>
          </a>
        ))}

        {/* Copy Link Button (important for TikTok users) */}
        <button
          onClick={() => navigator.clipboard.writeText(window.location.href)}
          aria-label="Copy link"
          className="bg-gray-800 text-white w-11 h-11 sm:w-12 sm:h-12
            rounded-full flex items-center justify-center
            shadow-md hover:scale-110 transition-transform"
        >
          <FaLink className="text-xl sm:text-2xl" />
        </button>
      </div>
    </motion.div>
  );
}
