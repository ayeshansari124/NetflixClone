function FAQ() {
  const faqs = [
    "What is Netflix?",
    "How much does Netflix cost?",
    "Where can I watch?",
    "How do I cancel?",
    "What can I watch on Netflix?",
    "Is Netflix good for kids?",
  ];

  return (
    <section className="w-[90vw] mx-auto px-4 md:px-0">
      <h2 className="text-2xl md:text-3xl font-light p-5">
        Frequently Asked Questions
      </h2>
      <div className="flex flex-col gap-4">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className="bg-neutral-800 text-lg text-center rounded-md py-4 px-4 hover:bg-neutral-700 transition w-[95%] md:w-[60vw] mx-auto"
          >
            {faq}
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;
