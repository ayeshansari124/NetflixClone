function PreFooter() {
  return (
    <div className="min-h-[30vh] flex flex-col justify-center items-center gap-4 text-center">
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
  );
}

export default PreFooter;
