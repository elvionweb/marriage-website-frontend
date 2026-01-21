export default function CoupleSection() {
  return (
    <section className="pt-10 md:pt-18 px-4 pb-4 md:pb-14 md:px-24 flex flex-col md:flex-row justify-center items-center gap-12">
      <div className="flex-1 text-center">
        <img
          src="/bride.jpeg"
          alt="Bride"
          className="w-64 h-64 object-cover rounded-full mx-auto"
        />
        <h3 className="mt-4 text-blue-600 text-2xl font-serif">Mary</h3>
        <p className="mt-2">
          Mary is graceful, joyful, and full of warmth. She has a beautiful
          spirit, a gentle smile, and a deep love for family and faith. Her
          kindness and laughter light up every room, and her heart for love
          makes her a blessing to everyone around her.
        </p>
      </div>
      <div className="flex-1 text-center">
        <img
          src="/groom.jpeg"
          alt="Groom"
          className="w-64 h-64 object-cover rounded-full mx-auto"
        />
        <h3 className="mt-4 text-blue-600 text-2xl font-serif">John</h3>
        <p className="mt-2">
          John is kind-hearted, thoughtful, and full of quiet strength. He
          values faith, family, and purpose, and he believes that love is best
          shown through consistency, care, and commitment. His calm nature and
          steady heart make him a true partner and friend.
        </p>
      </div>
    </section>
  );
}
