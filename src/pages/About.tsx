import { Target, Eye, Award, CheckCircle, User } from 'lucide-react';

interface AboutProps {
  onNavigate: (page: string) => void;
}

export default function About({ onNavigate }: AboutProps) {
  return (
    <div>
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
            <p className="text-xl text-blue-100">
              Leading IT Consulting and Digital Transformation Partner
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Who We Are
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              Cloudium TechWorks is a premier IT consulting firm specializing in digital transformation,
              software development, and managed IT services. We help businesses navigate the complexities
              of modern technology and unlock their full potential through innovative solutions.
            </p>
            <p className="text-lg text-gray-600">
              With a global presence and local expertise, we serve clients across diverse industries,
              delivering tailored solutions that drive growth, efficiency, and competitive advantage.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Target size={32} className="text-blue-900 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-600">
                To empower organizations with cutting-edge technology solutions that transform operations,
                enhance customer experiences, and create sustainable competitive advantages in the digital age.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Eye size={32} className="text-blue-900 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-600">
                To be the trusted global partner for businesses seeking innovative IT solutions, recognized
                for our expertise, reliability, and commitment to driving digital excellence across industries.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Us
            </h2>
            <p className="text-lg text-gray-600">
              What sets Cloudium TechWorks apart
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-start">
              <CheckCircle size={24} className="text-blue-600 mr-3 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Industry Expertise</h3>
                <p className="text-gray-600">
                  Deep knowledge across banking, retail, healthcare, manufacturing, and more
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <CheckCircle size={24} className="text-blue-600 mr-3 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Proven Track Record</h3>
                <p className="text-gray-600">
                  Successfully delivered complex projects for businesses of all sizes
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <CheckCircle size={24} className="text-blue-600 mr-3 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Agile Methodology</h3>
                <p className="text-gray-600">
                  Flexible and iterative approach ensuring rapid delivery and adaptability
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <CheckCircle size={24} className="text-blue-600 mr-3 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">24/7 Support</h3>
                <p className="text-gray-600">
                  Round-the-clock technical support and monitoring for peace of mind
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <CheckCircle size={24} className="text-blue-600 mr-3 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Security First</h3>
                <p className="text-gray-600">
                  Enterprise-grade security measures and compliance with industry standards
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <CheckCircle size={24} className="text-blue-600 mr-3 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Cost Effective</h3>
                <p className="text-gray-600">
                  Optimized solutions that maximize ROI and reduce operational costs
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Leadership
            </h2>
            <p className="text-lg text-gray-600">
              Meet the visionary behind Cloudium TechWorks
            </p>
          </div>

          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gradient-to-br from-blue-900 to-blue-700 h-48 flex items-center justify-center">
                <User size={80} className="text-white" />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Sameer Nowal</h3>
                <p className="text-blue-600 font-semibold mb-4">Director</p>
                <p className="text-gray-600 mb-4">
                  With over 15 years of experience in IT consulting and digital transformation,
                  Sameer leads Cloudium TechWorks with a vision to deliver innovative technology
                  solutions that drive business success.
                </p>
                <p className="text-gray-600">
                  His expertise spans strategic technology planning, enterprise architecture,
                  and large-scale digital transformation initiatives across multiple industries
                  and geographies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Global Presence
            </h2>
            <p className="text-lg text-blue-100 mb-8">
              Serving clients across multiple continents with local expertise and global best practices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            <div className="text-center">
              <Award size={40} className="mx-auto mb-3" />
              <h4 className="font-semibold text-lg">Singapore</h4>
              <p className="text-sm text-blue-100">Asia-Pacific Hub</p>
            </div>
            <div className="text-center">
              <Award size={40} className="mx-auto mb-3" />
              <h4 className="font-semibold text-lg">Hong Kong</h4>
              <p className="text-sm text-blue-100">Regional Center</p>
            </div>
            <div className="text-center">
              <Award size={40} className="mx-auto mb-3" />
              <h4 className="font-semibold text-lg">United States</h4>
              <p className="text-sm text-blue-100">Americas Operations</p>
            </div>
            <div className="text-center">
              <Award size={40} className="mx-auto mb-3" />
              <h4 className="font-semibold text-lg">India</h4>
              <p className="text-sm text-blue-100">Development Center</p>
            </div>
            <div className="text-center">
              <Award size={40} className="mx-auto mb-3" />
              <h4 className="font-semibold text-lg">Middle East</h4>
              <p className="text-sm text-blue-100">Dubai Headquarters</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Partner With Us
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Ready to transform your business with innovative IT solutions? Let's start the conversation.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
          >
            Get In Touch
          </button>
        </div>
      </section>
    </div>
  );
}
