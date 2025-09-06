function Hero() {
  return (
    <div
      className="relative bg-center bg-no-repeat bg-cover min-h-[644px]"
      style={{ backgroundImage: "url('/images/bg.jpg')" }}
    >
      <div className="flex flex-col items-center justify-center text-center gap-4 min-h-[70vh] px-4 pt-32">
        <div className="text-4xl md:text-5xl font-bold">
          Unlimited movies, TV shows and more
        </div>
        <div className="text-3xl font-bold">Starts at ₹149. Cancel anytime.</div>
        <div className="text-2xl font-bold">
          Ready to watch? Enter your email to create or restart your membership.
        </div>

        <div className="flex flex-wrap gap-3 justify-center mt-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-12 py-2 font-bold rounded border-2 border-white text-white w-[300px]"
          />
          <button className="px-5 py-2 bg-green-600 text-white text-lg font-bold rounded border border-white hover:bg-green-900 hover:scale-105 transition">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
export default Hero;
