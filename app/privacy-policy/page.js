import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const metadata = {
  title: "Privacy Policy - Alaqa",
  description: "Read our privacy policy to understand how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block mb-4">
              <span className="text-sm font-bold uppercase tracking-widest px-4 py-2 rounded-full" style={{ backgroundColor: "#6B1C95", color: "white" }}>
                Privacy Policy
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Privacy <span style={{ color: "#6B1C95" }}>Policy</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Last updated: March 2024
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="space-y-8 text-gray-700 leading-relaxed">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">1. Introduction</h2>
                <p>
                  Alaqa ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
                <p className="mb-3">We may collect information about you in a variety of ways. The information we may collect includes:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Personal Data:</strong> Name, email address, phone number, mailing address, and other contact information you voluntarily provide.</li>
                  <li><strong>Usage Data:</strong> Information about how you access and use our website, including your IP address, browser type, pages visited, and time spent on pages.</li>
                  <li><strong>Cookies:</strong> We use cookies and similar tracking technologies to track activity on our website and hold certain information.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
                <p className="mb-3">We use the information we collect for various purposes, including:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>To provide, maintain, and improve our services</li>
                  <li>To process your requests and transactions</li>
                  <li>To send you promotional materials and newsletters (with your consent)</li>
                  <li>To respond to your comments, questions, and requests</li>
                  <li>To monitor and analyze usage patterns and trends</li>
                  <li>To detect, prevent, and address technical issues</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">4. Information Sharing and Disclosure</h2>
                <p className="mb-3">We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Service Providers:</strong> We may share information with third-party service providers who perform services on our behalf.</li>
                  <li><strong>Legal Requirements:</strong> We may disclose your information if required by law or in response to valid requests by public authorities.</li>
                  <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale, your information may be transferred.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">5. Data Security</h2>
                <p>
                  We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">6. Your Rights</h2>
                <p className="mb-3">Depending on your location, you may have the following rights regarding your personal information:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>The right to access and receive a copy of your personal data</li>
                  <li>The right to rectify inaccurate or incomplete data</li>
                  <li>The right to erasure ("right to be forgotten")</li>
                  <li>The right to restrict processing of your personal data</li>
                  <li>The right to data portability</li>
                  <li>The right to object to processing</li>
                  <li>The right to withdraw consent at any time</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">7. Cookies and Tracking Technologies</h2>
                <p>
                  We use cookies and similar tracking technologies to track activity on our website and store certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">8. Third-Party Links</h2>
                <p>
                  Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these third-party sites. We encourage you to read the privacy policies of any third-party sites you visit.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">9. Children's Privacy</h2>
                <p>
                  Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">10. Changes to This Privacy Policy</h2>
                <p>
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">11. Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <p className="mb-2"><strong>Email:</strong> privacy@alaqa.com</p>
                  <p className="mb-2"><strong>Phone:</strong> +1 (555) 123-4567</p>
                  <p><strong>Address:</strong> New York, USA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

