import { ArrowRight, Code, Shield, Zap, Users, Globe, TrendingUp } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  return (
    <div>
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Cloudium TechWorks
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-blue-100">
              Smart. Secure. Scalable.
            </p>
            <p className="text-lg md:text-xl mb-8 text-blue-50 max-w-3xl mx-auto">
              Empowering businesses with innovative IT consulting and digital transformation solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onNavigate('contact')}
                className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center"
              >
                Get Started
                <ArrowRight size={20} className="ml-2" />
              </button>
              <button
                onClick={() => onNavigate('services')}
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors"
              >
                Our Services
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Cloudium TechWorks
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We deliver cutting-edge technology solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="inline-block p-4 bg-blue-100 rounded-full mb-4">
                <Shield size={32} className="text-blue-900" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Secure Solutions</h3>
              <p className="text-gray-600">
                Enterprise-grade security and compliance measures to protect your business
              </p>
            </div>

            <div className="text-center p-6">
              <div className="inline-block p-4 bg-blue-100 rounded-full mb-4">
                <Zap size={32} className="text-blue-900" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Fast Implementation</h3>
              <p className="text-gray-600">
                Rapid deployment and integration with minimal disruption to operations
              </p>
            </div>

            <div className="text-center p-6">
              <div className="inline-block p-4 bg-blue-100 rounded-full mb-4">
                <Users size={32} className="text-blue-900" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Expert Team</h3>
              <p className="text-gray-600">
                Experienced professionals dedicated to your success
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Code size={40} className="text-blue-900 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                IT Consulting & Digital Transformation
              </h3>
              <p className="text-gray-600 mb-4">
                Strategic guidance to modernize your technology infrastructure and processes
              </p>
              <button
                onClick={() => onNavigate('services')}
                className="text-blue-600 font-medium hover:text-blue-800 flex items-center"
              >
                Learn More <ArrowRight size={16} className="ml-1" />
              </button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Globe size={40} className="text-blue-900 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Software Development & Integration
              </h3>
              <p className="text-gray-600 mb-4">
                Custom software solutions and seamless integration with existing systems
              </p>
              <button
                onClick={() => onNavigate('services')}
                className="text-blue-600 font-medium hover:text-blue-800 flex items-center"
              >
                Learn More <ArrowRight size={16} className="ml-1" />
              </button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Shield size={40} className="text-blue-900 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Managed IT Services
              </h3>
              <p className="text-gray-600 mb-4">
                24/7 monitoring, maintenance, and support for your IT infrastructure
              </p>
              <button
                onClick={() => onNavigate('services')}
                className="text-blue-600 font-medium hover:text-blue-800 flex items-center"
              >
                Learn More <ArrowRight size={16} className="ml-1" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Global Reach, Local Expertise
            </h2>
            <p className="text-lg text-blue-100">
              Serving clients across multiple continents
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            <div className="text-center">
              <TrendingUp size={32} className="mx-auto mb-2" />
              <p className="font-semibold">Singapore</p>
            </div>
            <div className="text-center">
              <TrendingUp size={32} className="mx-auto mb-2" />
              <p className="font-semibold">Hong Kong</p>
            </div>
            <div className="text-center">
              <TrendingUp size={32} className="mx-auto mb-2" />
              <p className="font-semibold">United States</p>
            </div>
            <div className="text-center">
              <TrendingUp size={32} className="mx-auto mb-2" />
              <p className="font-semibold">India</p>
            </div>
            <div className="text-center">
              <TrendingUp size={32} className="mx-auto mb-2" />
              <p className="font-semibold">Middle East</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how our IT solutions can drive your business forward
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors inline-flex items-center"
          >
            Contact Us Today
            <ArrowRight size={20} className="ml-2" />
          </button>
        </div>
      </section>
    </div>
  );
}
