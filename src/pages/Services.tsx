import { Code, Globe, Shield, Headphones, Target, CheckCircle, ArrowRight } from 'lucide-react';

interface ServicesProps {
  onNavigate: (page: string) => void;
}

export default function Services({ onNavigate }: ServicesProps) {
  return (
    <div>
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
            <p className="text-xl text-blue-100">
              Comprehensive IT Solutions Tailored to Your Business Needs
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3">
                <div className="bg-blue-100 p-8 rounded-lg">
                  <Code size={64} className="text-blue-900 mx-auto" />
                </div>
              </div>
              <div className="md:w-2/3">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  IT Consulting & Digital Transformation
                </h2>
                <p className="text-lg text-gray-600 mb-4">
                  Navigate the complexities of digital transformation with strategic guidance from our
                  experienced consultants. We help you modernize your technology infrastructure, optimize
                  processes, and implement innovative solutions that drive business growth.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start">
                    <CheckCircle size={20} className="text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">Technology strategy and roadmap development</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle size={20} className="text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">Enterprise architecture design and optimization</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle size={20} className="text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">Cloud migration and modernization</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle size={20} className="text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">Business process automation and optimization</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <div className="flex flex-col md:flex-row-reverse items-center gap-8">
              <div className="md:w-1/3">
                <div className="bg-blue-100 p-8 rounded-lg">
                  <Globe size={64} className="text-blue-900 mx-auto" />
                </div>
              </div>
              <div className="md:w-2/3">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Software Development & Integration
                </h2>
                <p className="text-lg text-gray-600 mb-4">
                  Build custom software solutions tailored to your unique business requirements. Our
                  experienced development team creates robust, scalable applications and ensures seamless
                  integration with your existing systems.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start">
                    <CheckCircle size={20} className="text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">Custom application development (web, mobile, enterprise)</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle size={20} className="text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">API development and integration services</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle size={20} className="text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">Legacy system modernization and migration</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle size={20} className="text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">Third-party software integration and customization</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3">
                <div className="bg-blue-100 p-8 rounded-lg">
                  <Shield size={64} className="text-blue-900 mx-auto" />
                </div>
              </div>
              <div className="md:w-2/3">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Managed IT Services
                </h2>
                <p className="text-lg text-gray-600 mb-4">
                  Focus on your core business while we handle your IT infrastructure. Our managed services
                  provide proactive monitoring, maintenance, and support to ensure your systems run smoothly
                  and securely around the clock.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start">
                    <CheckCircle size={20} className="text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">24/7 infrastructure monitoring and support</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle size={20} className="text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">Cloud infrastructure management (AWS, Azure, GCP)</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle size={20} className="text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">Security management and compliance monitoring</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle size={20} className="text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">Backup, disaster recovery, and business continuity</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <div className="flex flex-col md:flex-row-reverse items-center gap-8">
              <div className="md:w-1/3">
                <div className="bg-blue-100 p-8 rounded-lg">
                  <Headphones size={64} className="text-blue-900 mx-auto" />
                </div>
              </div>
              <div className="md:w-2/3">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Call Centre & Customer Support Solutions
                </h2>
                <p className="text-lg text-gray-600 mb-4">
                  Enhance customer experience with modern call center solutions and support services.
                  We implement technology and processes that help you deliver exceptional customer service
                  efficiently and cost-effectively.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start">
                    <CheckCircle size={20} className="text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">Cloud-based call center platform implementation</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle size={20} className="text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">Omnichannel customer engagement solutions</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle size={20} className="text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">CRM integration and customer data management</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle size={20} className="text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">Analytics and performance monitoring dashboards</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3">
                <div className="bg-blue-100 p-8 rounded-lg">
                  <Target size={64} className="text-blue-900 mx-auto" />
                </div>
              </div>
              <div className="md:w-2/3">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Sector-Focused Solutions
                </h2>
                <p className="text-lg text-gray-600 mb-4">
                  Leverage our deep industry expertise to implement solutions designed specifically for
                  your sector. We understand the unique challenges and regulatory requirements of different
                  industries and deliver tailored solutions that address them effectively.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start">
                    <CheckCircle size={20} className="text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">Banking and financial services compliance and security</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle size={20} className="text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">Retail and e-commerce digital transformation</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle size={20} className="text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">Healthcare systems integration and data security</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle size={20} className="text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">Manufacturing and logistics optimization</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Approach
            </h2>
            <p className="text-lg text-gray-600">
              How we deliver exceptional results for our clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-900 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Discovery</h3>
              <p className="text-gray-600">
                Understand your business, challenges, and objectives
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-900 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Strategy</h3>
              <p className="text-gray-600">
                Develop tailored solutions and implementation roadmap
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-900 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Execution</h3>
              <p className="text-gray-600">
                Implement solutions with agile methodology and best practices
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-900 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Support</h3>
              <p className="text-gray-600">
                Provide ongoing optimization and support for long-term success
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how our services can help transform your business
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"
          >
            Contact Us Today
            <ArrowRight size={20} className="ml-2" />
          </button>
        </div>
      </section>
    </div>
  );
}
