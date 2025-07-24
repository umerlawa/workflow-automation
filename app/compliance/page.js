import Link from 'next/link'

export default function Compliance() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Compliance & Data Protection</h1>
      
      <div className="prose prose-gray max-w-none">
        <p className="text-gray-600 mb-6">Last updated: {new Date().toLocaleDateString()}</p>
        
        {/* GDPR Compliance */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">GDPR Compliance</h2>
          <p className="mb-4">
            Our service is currently not GDPR compliant and we do not intend to operate in the European Economic Area (EEA) region at this time. We recommend users in the EEA region to use alternative services that meet GDPR requirements.
          </p>
        </section>

        {/* Cookie Policy */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Cookie Policy</h2>
          <p className="mb-4">
            We use cookies to improve your experience and analyze site usage. Here's how:
          </p>
          
          <div className="space-y-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-semibold text-blue-900 mb-2">Essential Cookies (Always Active)</h3>
              <p className="text-blue-800">Required for basic site functionality:</p>
              <ul className="list-disc pl-6 mt-2 text-sm text-blue-700">
                <li>Session management (keeping you logged in)</li>
                <li>Security tokens</li>
                <li>User preferences</li>
              </ul>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="font-semibold text-green-900 mb-2">Analytics Cookies (Optional)</h3>
              <p className="text-green-800">Help us improve our service:</p>
              <ul className="list-disc pl-6 mt-2 text-sm text-green-700">
                <li>Google Analytics (usage patterns)</li>
                <li>Posthog (feature usage)</li>
                <li>Performance monitoring</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-sm text-yellow-800">
              <strong>Note:</strong> You can change your cookie preferences at any time by clearing your browser data and revisiting our site.
            </p>
          </div>
        </section>

        {/* Data Security */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-semibold mb-3">Security Measures:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>End-to-end encryption for sensitive data</li>
              <li>Regular backups and disaster recovery</li>
              <li>Access controls and authentication</li>
            </ul>
          </div>
        </section>

        {/* Contact */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="mb-2">For any questions about our compliance or data practices:</p>
            <p className="text-gray-700">📧 Email: admin@reasonrail.com</p>
          </div>
        </section>
      </div>
      
      <div className="mt-12 pt-8 border-t border-gray-200">
        <Link href="/" className="text-blue-600 hover:underline">
          ← Back to Home
        </Link>
      </div>
    </div>
  )
}