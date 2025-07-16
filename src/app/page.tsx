import Image from 'next/image';
import Link from 'next/link';
import Layout from './component/Layout';

export default function Home() {
  return (
    <>
      <Layout>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#e0ecf8] via-[#f8f9fb] to-white px-6 py-20 rounded-2xl">
          <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">
            {/* Left Content */}
            <div className="text-center md:text-left max-w-xl flex flex-col items-center">
              <h1 className="text-5xl font-extrabold text-[#243c74] leading-tight">
                Diamond Beauty
              </h1>
              <h2 className="text-2xl font-semibold text-[#5271a3] mt-2">
                Your Beauty, Our Passion
              </h2>
              <p className="mt-4 text-[#405d86]">
                Discover elegance and confidence with our expert beauty treatments. Feel radiant every day.
              </p>
              <Link
                href="/services"
                className="inline-block mt-8 bg-[#5271a3] text-white px-6 py-3 rounded-full shadow hover:bg-[#3d5b91] transition"
              >
                Book Now
              </Link>
            </div>

            {/* Right Image */}
            <div className="w-full md:w-1/2">
              <Image
                src="/girl.png"
                alt="Beauty Salon Hero"
                width={500}
                height={500}
                className="rounded-xl shadow-lg object-cover w-full h-auto"
              />
            </div>
          </div>
        </section> 


        {/* About Section */}
        <section id="about" className="py-16 px-6 bg-white text-center">
          <h2 className="text-3xl font-semibold text-blue-700">About Us</h2>
          <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
            At Diamond Beauty Parlour, we bring out the beauty that shines from within. With over a decade of experience, we offer top-tier services in bridal makeup, hair styling, and skincare — all tailored to make you feel your absolute best.
          </p>
        </section>

      
        {/* Services Section */}
        <section id="services" className="bg-[#e0ecf8] py-15 px-6 rounded-2xl">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-[#243c74] mb-4">Our Services</h2>
            <p className="text-[#405d86] mb-10 max-w-2xl mx-auto text-lg">
              Discover our range of personalized beauty services designed to enhance your natural glow.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                'Bridal Makeup',
                'Hair Styling',
                'Facials',
                'Manicure & Pedicure',
                'Party Makeup',
                'Skin Treatments'
              ].map((service, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition text-left">
                  <h3 className="text-xl font-semibold text-[#243c74] mb-2">{service}</h3>
                  <p className="text-[#405d86] text-sm">
                    Experience our expert {service.toLowerCase()} to enhance your natural beauty.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* Gallery Section */}
        <section id="gallery" className="py-16 px-6 bg-white">
          <h2 className="text-3xl font-semibold text-blue-700 text-center mb-10">Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {[1, 2, 3, 4].map((img) => (
              <div key={img} className="overflow-hidden rounded-xl">
                <Image
                  src={`/images/gallery${img}.jpg`}
                  alt={`Gallery image ${img}`}
                  width={300}
                  height={300}
                  className="object-cover w-full h-full hover:scale-105 transition-transform"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 px-6 bg-blue-100 text-center">
          <h2 className="text-3xl font-semibold text-blue-700">Get in Touch</h2>
          <p className="mt-4 text-gray-700">Book your appointment or ask a question — we’d love to hear from you!</p>
          <form className="mt-8 max-w-xl mx-auto space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
            />
            <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition">
              Send Message
            </button>
          </form>
        </section>

        
      </Layout>
    </>
  );
}
