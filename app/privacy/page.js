'use client'

import Link from 'next/link'

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Title & Dates */}
      <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
      <p><strong>Effective Date:</strong> 07/24/2025</p>
      <p className="mb-8"><strong>Last Updated:</strong> 07/24/2025</p>

      {/* 1. Introduction */}
      <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
      <p>
        Mohenara LLC (“Reason Rail”) (“we,” “our,” or “us”) operates an AI-powered workflow
        automation platform (the “Service”) that helps small and medium businesses automate
        repetitive tasks through natural language commands and artificial intelligence.
      </p>
      <p className="mb-4">
        This Privacy Policy explains how we collect, use, disclose, and safeguard your information
        when you use our Service, particularly when integrating with third-party services like
        Google Workspace, Microsoft 365, and other business applications.
      </p>
      <p>
        This service is currently available only to non-EEA residents. By using our platform, you
        confirm you are not located within the European Economic Area.
      </p>
      <p className="mt-4 mb-8 font-semibold">
        By using our Service, you consent to the data practices described in this policy.
      </p>

      {/* 2. Information We Collect */}
      <h2 className="text-2xl font-semibold mt-8 mb-4">2. Information We Collect</h2>

      {/* 2.1 */}
      <h3 className="text-xl font-medium mt-6 mb-2">2.1 Information You Provide Directly</h3>
      <ul className="list-disc list-inside mb-6">
        <li><strong>Account Information:</strong> Name, email address, company name, billing information</li>
        <li><strong>Workflow Descriptions:</strong> Natural language descriptions of business processes you want to automate</li>
        <li><strong>Configuration Data:</strong> Settings, preferences, and custom workflow parameters</li>
        <li><strong>Communication Data:</strong> Support tickets, feedback, and correspondence with our team</li>
      </ul>

      {/* 2.2 */}
      <h3 className="text-xl font-medium mt-6 mb-2">2.2 Information Collected Through Third-Party Integrations</h3>
      <p className="mb-4">
        When you connect third-party services to enable workflow automation, we may access:
      </p>
      <h4 className="font-medium mt-2">Google Services Integration:</h4>
      <ul className="list-disc list-inside mb-4">
        <li><strong>Gmail:</strong> Email content, metadata, labels, and attachments (only for configured workflows)</li>
        <li><strong>Google Drive:</strong> File names, content, folder structure, and sharing permissions</li>
        <li><strong>Google Calendar:</strong> Event details, attendees, and scheduling information</li>
        <li><strong>Google Sheets:</strong> Spreadsheet data and formulas (for data processing workflows)</li>
      </ul>
      <h4 className="font-medium mt-2">Other Integrations:</h4>
      <ul className="list-disc list-inside mb-8">
        <li><strong>Accounting Software:</strong> Invoice data, client information, financial records</li>
        <li><strong>Communication Tools:</strong> Message content, contact lists, conversation histories</li>
        <li><strong>Document Management:</strong> File contents, metadata, version histories</li>
      </ul>

      {/* 2.3 */}
      <h3 className="text-xl font-medium mt-6 mb-2">2.3 Automatically Collected Information</h3>
      <ul className="list-disc list-inside mb-6">
        <li><strong>Usage Data:</strong> How you interact with our Service, feature usage, workflow execution logs</li>
        <li><strong>Technical Data:</strong> IP address, browser type, device information, operating system</li>
        <li><strong>Performance Data:</strong> Workflow execution times, error rates, system performance metrics</li>
        <li><strong>Analytics Data:</strong> User behavior patterns, feature adoption, engagement metrics</li>
      </ul>

      {/* 2.4 */}
      <h3 className="text-xl font-medium mt-6 mb-2">2.4 Cookies and Tracking Technologies</h3>
      <p className="mb-2">We use the following cookies and similar technologies:</p>
      <h4 className="font-medium mt-2">Essential Cookies (Required):</h4>
      <ul className="list-disc list-inside mb-4">
        <li><strong>Authentication:</strong> Session tokens, login state (expires after 30 days)</li>
        <li><strong>Security:</strong> CSRF protection tokens, rate limiting counters</li>
        <li><strong>Functionality:</strong> User preferences, dashboard settings, workflow configurations</li>
      </ul>
      <h4 className="font-medium mt-2">Analytics Cookies (Optional):</h4>
      <ul className="list-disc list-inside mb-4">
        <li><strong>Posthog Analytics:</strong> User behavior tracking, feature usage statistics</li>
        <li><strong>Performance Monitoring:</strong> Error tracking, page load times, API response times</li>
        <li><strong>A/B Testing:</strong> Feature experiment participation, conversion tracking</li>
      </ul>
      <p className="mb-4">
        <strong>Cookie Management:</strong> You can control cookie preferences in your browser settings. Essential cookies
        cannot be disabled without affecting Service functionality. Analytics cookies can be opted out through your account
        settings. We respect “Do Not Track” browser signals for non-essential tracking.
      </p>
      <p className="mb-8">
        <strong>Cookie Retention:</strong> Session cookies are deleted when the browser closes; persistent cookies last 30 days
        for authentication and 1 year for analytics; local storage is cleared when the account is deleted.
      </p>

      {/* 2.5 */}
      <h3 className="text-xl font-medium mt-6 mb-2">2.5 AI Processing Data</h3>
      <ul className="list-disc list-inside mb-8">
        <li><strong>Workflow Execution Logs:</strong> Records of automated tasks and their outcomes</li>
        <li><strong>AI Training Data:</strong> Anonymized patterns from successful workflows (with your consent)</li>
        <li><strong>Error Logs:</strong> Information about failed automations for debugging purposes</li>
      </ul>

      {/* 3. How We Use Your Information */}
      <h2 className="text-2xl font-semibold mt-8 mb-4">3. How We Use Your Information</h2>

      <h3 className="text-xl font-medium mt-6 mb-2">3.1 Primary Service Delivery</h3>
      <ul className="list-disc list-inside mb-4">
        <li><strong>Workflow Automation:</strong> Execute automated tasks as configured by you</li>
        <li><strong>AI Processing:</strong> Analyze your natural language descriptions to create workflows</li>
        <li><strong>Integration Management:</strong> Connect and maintain access to your third-party services</li>
        <li><strong>Data Synchronization:</strong> Keep information current across integrated platforms</li>
      </ul>

      <h3 className="text-xl font-medium mt-6 mb-2">3.2 Service Improvement</h3>
      <ul className="list-disc list-inside mb-4">
        <li><strong>Platform Enhancement:</strong> Improve AI accuracy and workflow reliability</li>
        <li><strong>Feature Development:</strong> Build new integrations and automation capabilities</li>
        <li><strong>Performance Optimization:</strong> Monitor and enhance system performance</li>
        <li><strong>Quality Assurance:</strong> Test and validate workflow executions</li>
      </ul>

      <h3 className="text-xl font-medium mt-6 mb-2">3.3 Communication and Support</h3>
      <ul className="list-disc list-inside mb-4">
        <li><strong>Customer Support:</strong> Respond to your questions and troubleshoot issues</li>
        <li><strong>Service Updates:</strong> Notify you about new features, maintenance, or policy changes</li>
        <li><strong>Billing and Account Management:</strong> Process payments and manage subscriptions</li>
        <li><strong>Security Alerts:</strong> Inform you about potential security issues or unauthorized access</li>
      </ul>

      <h3 className="text-xl font-medium mt-6 mb-2">3.4 Legal and Compliance</h3>
      <ul className="list-disc list-inside mb-8">
        <li><strong>Legal Obligations:</strong> Comply with applicable laws and regulations</li>
        <li><strong>Terms Enforcement:</strong> Ensure compliance with our Terms of Service</li>
        <li><strong>Dispute Resolution:</strong> Address legal claims or disputes</li>
        <li><strong>Audit and Compliance:</strong> Maintain records for regulatory requirements</li>
      </ul>

      {/* 4. Data Sharing and Disclosure */}
      <h2 className="text-2xl font-semibold mt-8 mb-4">4. Data Sharing and Disclosure</h2>

      <h3 className="text-xl font-medium mt-6 mb-2">4.1 We Do Not Sell Your Data</h3>
      <p className="mb-4">
        We do not sell, rent, or trade your personal information to third parties for marketing purposes.
      </p>

      <h3 className="text-xl font-medium mt-6 mb-2">4.2 Authorized Sharing</h3>
      <p className="mb-2">We may share your information only in these circumstances:</p>
      <ul className="list-disc list-inside mb-4">
        <li><strong>Third-Party Service Providers:</strong> Cloud infrastructure, AI service providers, payment processors, analytics providers</li>
        <li><strong>Business Transfers:</strong> Mergers, acquisitions, or asset sales under confidentiality agreements</li>
        <li><strong>Legal Requirements:</strong> Court orders, government requests, fraud prevention, or to protect rights and safety</li>
      </ul>

      <h3 className="text-xl font-medium mt-6 mb-2">4.3 Data Processing Agreements</h3>
      <p className="mb-4">
        All third-party service providers are bound by agreements that limit data use, require security safeguards, prohibit unauthorized sharing, and ensure compliance with privacy laws.
      </p>

      <h3 className="text-xl font-medium mt-6 mb-2">4.4 Data Minimization Practices</h3>
      <ul className="list-disc list-inside mb-4">
        <li><strong>Integration Scope Limitation:</strong> Request only necessary API permissions, audit unused permissions regularly</li>
        <li><strong>Data Collection Boundaries:</strong> Collect only fields needed for workflow execution, implement field-level encryption</li>
        <li><strong>Automated Data Minimization:</strong> Use AI to identify minimal data requirements, delete temporary data within 24 hours</li>
      </ul>

      <h3 className="text-xl font-medium mt-6 mb-2">4.5 Anonymization and Pseudonymization</h3>
      <ol className="list-decimal list-inside mb-8">
        <li>Data Classification: Separate workflow logic from personal identifiers</li>
        <li>Extraction: Isolate personal data before processing</li>
        <li>Transformation: Apply k-anonymity, differential privacy, hashing</li>
        <li>Validation: Test anonymization effectiveness</li>
        <li>Audit Trail: Log anonymization processes without storing original data</li>
      </ol>

      {/* 5. Data Security and Protection */}
      <h2 className="text-2xl font-semibold mt-8 mb-4">5. Data Security and Protection</h2>

      <h3 className="text-xl font-medium mt-6 mb-2">5.1 Security Measures</h3>
      <ul className="list-disc list-inside mb-4">
        <li><strong>Technical Safeguards:</strong> End-to-end encryption, MFA, security audits, threat detection</li>
        <li><strong>Administrative Safeguards:</strong> Employee background checks, training, incident response</li>
        <li><strong>Physical Safeguards:</strong> Secure data centers, restricted access, environmental controls</li>
      </ul>

      <h3 className="text-xl font-medium mt-6 mb-2">5.2 Data Retention</h3>
      <ul className="list-disc list-inside mb-4">
        <li><strong>Active Account Data:</strong> Retained while account is active</li>
        <li><strong>Workflow Logs:</strong> Kept for 90 days</li>
        <li><strong>Backup Data:</strong> Retained 30 days after deletion</li>
        <li><strong>Legal Hold Data:</strong> Retained as required by law</li>
      </ul>

      <h3 className="text-xl font-medium mt-6 mb-2">5.3 Data Breach Response</h3>
      <p className="mb-8">
        In the event of a data breach, we will investigate within 24 hours, notify affected users within 72 hours, report to authorities, and provide remediation steps.
      </p>

      {/* 6. Third-Party Integrations and Data Access */}
      <h2 className="text-2xl font-semibold mt-8 mb-4">6. Third-Party Integrations and Data Access</h2>

      <h3 className="text-xl font-medium mt-6 mb-2">6.1 Google Services</h3>
      <p className="mb-4">
        When you connect Google services, we request minimum permissions, access data only during execution, store data temporarily (&lt;24 hours), and do not share it without consent.
      </p>

      <h3 className="text-xl font-medium mt-6 mb-2">6.2 Other Third-Party Services</h3>
      <p className="mb-4">
        Similar principles apply: minimum necessary access, purpose-limited use, secure storage, and user control.
      </p>

      <h3 className="text-xl font-medium mt-6 mb-2">6.3 Revoking Access</h3>
      <p className="mb-8">
        You can revoke third-party access in account settings, via the third-party service’s permissions page, or by contacting support.
      </p>

      {/* 7. Your Privacy Rights and Choices */}
      <h2 className="text-2xl font-semibold mt-8 mb-4">7. Your Privacy Rights and Choices</h2>

      <h3 className="text-xl font-medium mt-6 mb-2">7.1 Access and Control</h3>
      <ul className="list-disc list-inside mb-4">
        <li><strong>Access:</strong> View personal information we hold</li>
        <li><strong>Correct:</strong> Update inaccurate or incomplete information</li>
        <li><strong>Delete:</strong> Request deletion of personal data</li>
        <li><strong>Port:</strong> Export data in machine-readable format</li>
        <li><strong>Restrict:</strong> Limit how we process your data</li>
      </ul>

      <h3 className="text-xl font-medium mt-6 mb-2">7.2 Communication Preferences</h3>
      <ul className="list-disc list-inside mb-4">
        <li>Update email preferences in account settings</li>
        <li>Unsubscribe from marketing emails</li>
        <li>Opt out of non-essential notifications</li>
        <li>Contact support to adjust frequency</li>
      </ul>

      <h3 className="text-xl font-medium mt-6 mb-2">7.3 Analytics and Tracking</h3>
      <ul className="list-disc list-inside mb-4">
        <li>Opt out of usage analytics and behavior tracking</li>
        <li>Opt out of performance monitoring (may affect service quality)</li>
        <li>Opt out of AI training data contribution</li>
        <li>Opt out of marketing-related data processing</li>
      </ul>

      <h3 className="text-xl font-medium mt-6 mb-2">7.4 Exercising Your Rights</h3>
      <p className="mb-8">
        To exercise rights, contact us at <a href="mailto:admin@reasonrail.com" className="text-blue-600 hover:underline">admin@reasonrail.com</a> with your account details, request specifics, and identity verification.
      </p>

      {/* 8. International Data Transfers */}
      <h2 className="text-2xl font-semibold mt-8 mb-4">8. International Data Transfers</h2>

      <h3 className="text-xl font-medium mt-6 mb-2">8.1 Data Processing Locations</h3>
      <p className="mb-4">
        Data is processed primarily in the United States. We do not transfer data outside the U.S. unless required for integrations.
      </p>

      <h3 className="text-xl font-medium mt-6 mb-2">8.2 Transfer Safeguards</h3>
      <ul className="list-disc list-inside mb-8">
        <li>Standard Contractual Clauses (SCCs)</li>
        <li>Adequacy decisions by relevant authorities</li>
        <li>Additional security measures as required</li>
        <li>Regular compliance monitoring and audits</li>
      </ul>

      {/* 9. Children's Privacy */}
      <h2 className="text-2xl font-semibold mt-8 mb-4">9. Children's Privacy</h2>
      <p className="mb-8">
        Our Service is not intended for children under 13 (or 16 in the EU). We do not knowingly collect information from children. If discovered, we will delete it immediately.
      </p>

      {/* 10. California Privacy Rights (CCPA) */}
      <h2 className="text-2xl font-semibold mt-8 mb-4">10. California Privacy Rights (CCPA)</h2>

      <h3 className="text-xl font-medium mt-6 mb-2">10.1 Right to Know</h3>
      <p className="mb-4">
        You can request details on categories, sources, purposes, and third-party sharing of your personal data.
      </p>

      <h3 className="text-xl font-medium mt-6 mb-2">10.2 Right to Delete</h3>
      <p className="mb-4">You can request deletion of personal data we collected about you.</p>

      <h3 className="text-xl font-medium mt-6 mb-2">10.3 Right to Non-Discrimination</h3>
      <p className="mb-4">We will not discriminate against you for exercising your CCPA rights.</p>

      <h3 className="text-xl font-medium mt-6 mb-2">10.4 How to Exercise CCPA Rights</h3>
      <p className="mb-8">
        Submit requests to <a href="mailto:admin@reasonrail.com" className="text-blue-600 hover:underline">admin@reasonrail.com</a> or call [phone number].
      </p>

      {/* 11. European Privacy Rights (GDPR) */}
      <h2 className="text-2xl font-semibold mt-8 mb-4">11. European Privacy Rights (GDPR)</h2>

      <h3 className="text-xl font-medium mt-6 mb-2">11.1 Legal Basis for Processing</h3>
      <ul className="list-disc list-inside mb-4">
        <li><strong>Contract:</strong> Provide Service as agreed</li>
        <li><strong>Legitimate Interest:</strong> Improve Service and prevent fraud</li>
        <li><strong>Consent:</strong> When you specifically agree</li>
        <li><strong>Legal Obligation:</strong> Comply with laws</li>
      </ul>

      <h3 className="text-xl font-medium mt-6 mb-2">11.2 EEA Exclusion</h3>
      <p className="mb-4">
        We currently do not serve or process data of EEA residents. If that changes, we will implement GDPR measures.
      </p>

      <h3 className="text-xl font-medium mt-6 mb-2">11.3 Supervisory Authority</h3>
      <p className="mb-8">
        You may lodge a complaint with your local data protection authority.
      </p>

      {/* 12. Updates to This Privacy Policy */}
      <h2 className="text-2xl font-semibold mt-8 mb-4">12. Updates to This Privacy Policy</h2>

      <h3 className="text-xl font-medium mt-6 mb-2">12.1 Policy Changes</h3>
      <p className="mb-4">
        We may update this policy to reflect changes in data practices, laws, features, or user feedback.
      </p>

      <h3 className="text-xl font-medium mt-6 mb-2">12.2 Notification of Changes</h3>
      <ul className="list-disc list-inside mb-4">
        <li>Email notification to your registered address</li>
        <li>Prominent in-app or website banner notices</li>
        <li>In-app notification on next login</li>
      </ul>

      <h3 className="text-xl font-medium mt-6 mb-2">12.3 Continued Use</h3>
      <p className="mb-8">
        Continued use after changes constitutes acceptance of the updated policy.
      </p>

      {/* 13. Contact Information */}
      <h2 className="text-2xl font-semibold mt-8 mb-4">13. Contact Information</h2>

      <h3 className="text-xl font-medium mt-6 mb-2">13.1 Privacy Questions</h3>
      <p className="mb-4">
        For privacy-related inquiries, email <a href="mailto:admin@reasonrail.com" className="text-blue-600 hover:underline">admin@reasonrail.com</a>.
      </p>

      <h3 className="text-xl font-medium mt-6 mb-2">13.2 Response Time</h3>
      <ul className="list-disc list-inside mb-8">
        <li>5 business days for general questions</li>
        <li>30 days for formal data requests</li>
        <li>72 hours for security-related concerns</li>
      </ul>
      <p><strong>Last Reviewed:</strong> 07/24/2025</p>
      <p className="mb-8"><strong>Next Review Date:</strong> 07/24/2026</p>
      {/* Footer */}
      <p className="italic text-sm text-gray-600">
        *This Privacy Policy is effective as of the date listed above and applies to all users of our Service.*
      </p>

      {/* Back Link */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <Link href="/" className="text-blue-600 hover:underline">
          ← Back to Home
        </Link>
      </div>
    </div>
  )
}
