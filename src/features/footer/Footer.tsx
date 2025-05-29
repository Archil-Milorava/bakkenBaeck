const Footer = () => {
  const offices = [
    {
      city: "Oslo",
      address: "Trondheimsveien 135",
      postal: "0570 Oslo, Norway",
    },
    {
      city: "Amsterdam",
      address: "Korte Prinsengracht 42H",
      postal: "1013 GT Amsterdam, The Netherlands",
    },
    {
      city: "Bonn",
      address: "Fürstenstrasse 2-4",
      postal: "53111 Bonn, Germany",
    },
    {
      city: "London",
      address: "23 Englefield RD",
      postal: "London N1 4JX, United Kingdom",
    },
    {
      city: "Barcelona",
      address: "C. De Pamplona 59",
      postal: "08005 Barcelona, Spain",
    },
  ];

  const contacts = [
    { label: "General", email: "hello@bakkenbaeck.com" },
    { label: "New Business", email: "partnerships@bakkenbaeck.com" },
    { label: "Press & Media", email: "press@bakkenbaeck.com" },
  ];

  return (
    <footer className="">
      <div className="px-4 mx-auto">
        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <ul className="space-y-2">
              {contacts.map((contact, index) => (
                <li key={index}>
                  <p className="text-gray-500 text-sm">{contact.label}</p>
                  <p className="hover:text-gray-300 transition-colors">
                    {contact.email}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Offices */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {offices.map((office, index) => (
                <div key={index} className="flex flex-col gap-1">
                  <p className="text-xs border border-black rounded-full max-w-20 text-center px-0.5">
                    {office.city.toLowerCase()}
                  </p>
                  <p>{office.address}</p>
                  <p className="text-sm">{office.postal}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t my-4  border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xl ">
            Built By{" "}
            <a href="https://github.com/Archil-Milorava/bakkenBaeck" target="_blank" className="text-gray-700">
              Archil Milorava
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
