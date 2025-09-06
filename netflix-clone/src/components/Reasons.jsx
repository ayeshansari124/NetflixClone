function Reasons() {
  const reasons = [
    {
      title: "Enjoy on your TV",
      description:
        "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
    },
    {
      title: "Download your shows to watch offline",
      description:
        "Save your favourites easily and always have something to watch.",
    },
    {
      title: "Watch everywhere",
      description:
        "Stream unlimited movies and TV shows on your phone, tablet, laptop and TV.",
    },
    {
      title: "Create profiles for kids",
      description:
        "Send kids on adventures with their favourite characters in a space made just for them — free with your membership.",
    },
  ];

  return (
    <section className="w-[90vw] mx-auto">
      <h2 className="text-2xl md:text-3xl font-light p-5">More Reasons To Join</h2>
      <div className="flex flex-wrap justify-center gap-8 py-5">
        {reasons.map((reason, idx) => (
          <div
            key={idx}
            className="bg-purple-950 p-5 rounded-xl shadow-inner w-64 text-center transition-transform duration-300 hover:scale-105"
          >
            <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
            <p className="text-lg">{reason.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Reasons;
