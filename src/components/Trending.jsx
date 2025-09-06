function Trending() {
  const trendingMovies = [
    { src: "/images/1.webp", alt: "Chhaava" },
    { src: "/images/2.webp", alt: "Pushpa" },
    { src: "/images/3.webp", alt: "Jewel Thief" },
    { src: "/images/4.webp", alt: "Deva" },
    { src: "/images/5.webp", alt: "Court" },
  ];

  return (
    <section className="w-[90vw] mx-auto">
      <h2 className="text-2xl md:text-3xl font-light p-5">Trending Now</h2>
      <div className="flex flex-wrap justify-center items-center gap-5">
        {trendingMovies.map((movie, idx) => (
          <img
            key={idx}
            src={movie.src}
            alt={movie.alt}
            className="w-48 hover:scale-110 hover:border-2 hover:border-white transition-transform duration-300"
          />
        ))}
      </div>
    </section>
  );
}

export default Trending;
