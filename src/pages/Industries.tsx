import { Building2, ShoppingCart, Factory, Heart, Rocket, ArrowRight } from 'lucide-react';

interface IndustriesProps {
  onNavigate: (page: string) => void;
}

export default function Industries({ onNavigate }: IndustriesProps) {
  return (
    <div>
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Industries We Serve</h1>
            <p className="text-xl text-blue-100">
              Sector-Specific Expertise and Tailored Solutions
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We bring deep industry knowledge and specialized solutions to help organizations
              across various sectors overcome their unique challenges and achieve digital excellence.
            </p>
          </div>

          <div className="space-y-16">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3">
                <div className="bg-blue-100 p-8 rounded-lg">
                  <Building2 size={64} className="text-blue-900 mx-auto" />
                </div>
              </div>
              <div className="md:w-2/3">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Banking & Financial Services
                </h2>
                <p className="text-lg text-gray-600 mb-4">
                  Navigate the complex landscape of financial technology with secure, compliant, and
                  innovative solutions. We help financial institutions modernize their infrastructure,
                  enhance customer experiences, and meet stringent regulatory requirements.
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Solutions:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Core banking system modernization and migration</li>
                    <li>• Digital banking and mobile payment solutions</li>
                    <li>• Regulatory compliance and risk management systems</li>
                    <li>• Fraud detection and cybersecurity implementation</li>
                    <li>• Data analytics and business intelligence platforms</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse items-center gap-8">
              <div className="md:w-1/3">
                <div className="bg-blue-100 p-8 rounded-lg">
                  <ShoppingCart size={64} className="text-blue-900 mx-auto" />
                </div>
              </div>
              <div className="md:w-2/3">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Retail & E-Commerce
                </h2>
                <p className="text-lg text-gray-600 mb-4">
                  Transform your retail operations with cutting-edge technology that enhances customer
                  experiences, optimizes inventory, and drives sales growth. From omnichannel solutions
                  to personalized shopping experiences, we help you stay competitive.
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Solutions:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• E-commerce platform development and optimization</li>
                    <li>• Omnichannel retail integration and POS systems</li>
                    <li>• Inventory management and supply chain optimization</li>
                    <li>• Customer loyalty and personalization engines</li>
                    <li>• Payment gateway integration and fraud prevention</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3">
                <div className="bg-blue-100 p-8 rounded-lg">
                  <Factory size={64} className="text-blue-900 mx-auto" />
                </div>
              </div>
              <div className="md:w-2/3">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Manufacturing & Logistics
                </h2>
                <p className="text-lg text-gray-600 mb-4">
                  Optimize operations and supply chains with Industry 4.0 technologies. We implement
                  smart manufacturing solutions, IoT integration, and advanced analytics to improve
                  efficiency, reduce costs, and enhance visibility across your operations.
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Solutions:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• ERP system implementation and integration</li>
                    <li>• IoT and smart factory solutions</li>
                    <li>• Supply chain management and tracking systems</li>
                    <li>• Predictive maintenance and quality control</li>
                    <li>• Warehouse management and automation</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse items-center gap-8">
              <div className="md:w-1/3">
                <div className="bg-blue-100 p-8 rounded-lg">
                  <Heart size={64} className="text-blue-900 mx-auto" />
                </div>
              </div>
              <div className="md:w-2/3">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Healthcare & Life Sciences
                </h2>
                <p className="text-lg text-gray-600 mb-4">
                  Deliver better patient care with secure, compliant, and integrated healthcare technology
                  solutions. We help healthcare organizations modernize their systems while maintaining
                  the highest standards of data security and regulatory compliance.
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Solutions:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Electronic health records (EHR) implementation</li>
                    <li>• Telemedicine and patient portal solutions</li>
                    <li>• HIPAA compliance and healthcare data security</li>
                    <li>• Healthcare analytics and population health management</li>
                    <li>• Medical device integration and IoT solutions</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3">
                <div className="bg-blue-100 p-8 rounded-lg">
                  <Rocket size={64} className="text-blue-900 mx-auto" />
                </div>
              </div>
              <div className="md:w-2/3">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Startups & SMEs
                </h2>
                <p className="text-lg text-gray-600 mb-4">
                  Scale your business with flexible, cost-effective technology solutions designed for
                  growth. We provide startups and small to medium enterprises with enterprise-grade
                  technology at startup-friendly pricing, helping you compete with larger players.
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Solutions:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• MVP development and rapid prototyping</li>
                    <li>• Cloud infrastructure setup and optimization</li>
                    <li>• Scalable application architecture design</li>
                    <li>• DevOps and CI/CD pipeline implementation</li>
                    <li>• Technology consulting and CTO advisory services</li>
                  </ul>
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
              Our Industry Expertise
            </h2>
            <p className="text-lg text-gray-600">
              What sets us apart in serving diverse sectors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Deep Domain Knowledge
              </h3>
              <p className="text-gray-600">
                Our team brings years of experience working with organizations in each industry,
                understanding unique workflows, challenges, and opportunities.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Regulatory Compliance
              </h3>
              <p className="text-gray-600">
                We ensure all solutions meet industry-specific regulatory requirements and
                compliance standards, from HIPAA to PCI-DSS and beyond.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Best Practices
              </h3>
              <p className="text-gray-600">
                Leverage proven methodologies and best practices from successful implementations
                across similar organizations in your industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Transform Your Industry
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how our industry-specific solutions can address your unique challenges
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"
          >
            Schedule a Consultation
            <ArrowRight size={20} className="ml-2" />
          </button>
        </div>
      </section>
    </div>
  );
}
