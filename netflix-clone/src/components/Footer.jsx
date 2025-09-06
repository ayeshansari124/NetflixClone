function Footer() {
  const links = [
    "FAQ",
    "Investor Relations",
    "Privacy",
    "Speed Test",
    "Help Centre",
    "Jobs",
    "Cookie Preferences",
    "Legal Notices",
    "Account",
    "Ways to Watch",
    "Corporate Information",
    "Only on Netflix",
    "Media Centre",
    "Terms of Use",
    "Contact Us",
  ];

  return (
    <footer className="w-[90vw] mx-auto">
      <div className="text-xl font-semibold">
        Questions? Call 000-800-919-1743
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-6 text-base">
        {links.map((link, idx) => (
          <a
            key={idx}
            href="#"
            className="hover:underline cursor-pointer"
          >
            {link}
          </a>
        ))}
      </div>

      <div className="h-[20vh] flex items-center justify-center text-center mt-6">
        <p className="text-lg font-bold">
          &copy; 2025 Netflix India. Built with ❤️ by Netflix India. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
