export default function Contact() {
  return (
    <div>
      {/* Header Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-blue-100">
            Let's Start a Conversation About Your Technology Needs
          </p>
        </div>
      </section>

      {/* Contact Details Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              <p className="text-lg text-gray-600 mb-8">
                Have a question or ready to start your digital transformation journey?
                Contact us and our team will get back to you soon.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Office Address</h3>
                  <p className="text-gray-600">
                    Meydan Grandstand, 6th Floor<br />
                    Meydan Road, Nad Al Sheba<br />
                    Dubai, U.A.E.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Phone</h3>
                  <p className="text-gray-600">+971 522978972</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Email</h3>
                  <p className="text-gray-600">
                    General Inquiries: info@cloudium.ink<br />
                    Careers: info@cloudium.ink
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Business Hours</h3>
                  <p className="text-gray-600">
                    Monday to Friday<br />
                    10:00 AM to 6:00 PM (GST)
                  </p>
                </div>
              </div>
            </div>

            {/* Static Message Box */}
            <div>
              <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">We're Here to Help</h3>
                <p className="text-gray-600 leading-relaxed">
                  Whether you're exploring new digital solutions, looking for expert guidance,
                  or simply want more information about our services, our team is always ready
                  to assist you. Reach out through phone, email, or visit our office during business hours.
                </p>
                <p className="text-gray-600 mt-4">
                  We pride ourselves on fast communication and dedicated support.
                  Expect a response within 24 hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-0">
        <div className="w-full h-96">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.537555958744!2d55.31036087537973!3d25.17233577772614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69d2d6a5b5c9%3A0x4d55c6e2c6d49e60!2sMeydan%20Grandstand!5e0!3m2!1sen!2sae!4v1650000000000!5m2!1sen!2sae"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Cloudium TechWorks Office Location"
          />
        </div>
      </section>
    </div>
  );
}
