import Link from 'next/link';

export default function TermsOfService() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>
      <div className="prose prose-gray max-w-none">
        <p className="text-gray-600 mb-6">
          <strong>Effective Date:</strong> 07/25/2025<br />
          <strong>Last Updated:</strong> 07/25/2025
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4" id="agreement-to-terms">
          1. Agreement to Terms
        </h2>
        <p>
          By accessing or using Mohenara LLC (Reason Rail) AI workflow automation platform (the "Service"), 
          you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of these 
          terms, you may not access the Service.
        </p>
        <p className="font-semibold">
          These Terms constitute a legally binding agreement between you and Mohenara LLC.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4" id="description-of-service">
          2. Description of Service
        </h2>
        
        <h3 className="text-xl font-semibold mt-6 mb-3">2.1 Platform Overview</h3>
        <p>Our Service provides AI-powered workflow automation that:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Converts natural language descriptions into executable business workflows</li>
          <li>Integrates with third-party applications (Google Workspace, accounting software, etc.)</li>
          <li>Executes automated tasks based on your configurations</li>
          <li>Provides monitoring, logging, and error handling for automated processes</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">2.2 AI-Powered Features</h3>
        <p>The Service uses artificial intelligence to:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Parse and interpret natural language workflow descriptions</li>
          <li>Extract relevant data from connected applications</li>
          <li>Make decisions within configured parameters</li>
          <li>Optimize workflow performance over time</li>
          <li>Generate reports and analytics on automation effectiveness</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">2.3 Service Availability</h3>
        <ul className="list-disc pl-6 mb-4">
          <li><strong>Uptime Target:</strong> 99.5% availability (excluding scheduled maintenance)</li>
          <li><strong>Scheduled Maintenance:</strong> Announced 48 hours in advance when possible</li>
          <li><strong>Emergency Maintenance:</strong> May occur without advance notice for security issues</li>
          <li><strong>Service Credits:</strong> Available for extended outages as described in Section 12</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4" id="user-accounts">
          3. User Accounts and Registration
        </h2>

        <h3 className="text-xl font-semibold mt-6 mb-3">3.1 Account Creation</h3>
        <p>To use the Service, you must:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Provide accurate and complete registration information</li>
          <li>Maintain the security of your account credentials</li>
          <li>Accept responsibility for all activities under your account</li>
          <li>Notify us immediately of any unauthorized access</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">3.2 Account Responsibilities</h3>
        <p>You are responsible for:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Keeping your contact information current</li>
          <li>Maintaining strong, unique passwords</li>
          <li>Enabling two-factor authentication when available</li>
          <li>Monitoring your account for suspicious activity</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">3.3 Account Termination</h3>
        <p>We may terminate accounts that:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Violate these Terms of Service</li>
          <li>Engage in fraudulent or illegal activities</li>
          <li>Create security risks for other users</li>
          <li>Remain inactive for more than 12 months (with 30-day notice)</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4" id="acceptable-use">
          4. Acceptable Use Policy
        </h2>

        <h3 className="text-xl font-semibold mt-6 mb-3">4.1 Permitted Uses</h3>
        <p>You may use the Service to:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Automate legitimate business processes</li>
          <li>Process data you own or have authorization to process</li>
          <li>Create workflows that comply with applicable laws and regulations</li>
          <li>Integrate with third-party services you have authorized access to</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">4.2 Prohibited Uses</h3>
        <p>You may not use the Service to:</p>
        
        <h4 className="text-lg font-semibold mt-4 mb-2">Illegal or Harmful Activities:</h4>
        <ul className="list-disc pl-6 mb-4">
          <li>Violate any applicable laws, regulations, or third-party rights</li>
          <li>Engage in fraudulent, deceptive, or misleading practices</li>
          <li>Process data without proper authorization or consent</li>
          <li>Create workflows that facilitate illegal activities</li>
        </ul>

        <h4 className="text-lg font-semibold mt-4 mb-2">Technical Abuse:</h4>
        <ul className="list-disc pl-6 mb-4">
          <li>Attempt to reverse engineer, decompile, or extract source code</li>
          <li>Use automated tools to access the Service beyond normal usage</li>
          <li>Interfere with or disrupt the Service's infrastructure</li>
          <li>Attempt to gain unauthorized access to other users' accounts or data</li>
        </ul>

        <h4 className="text-lg font-semibold mt-4 mb-2">Content Violations:</h4>
        <ul className="list-disc pl-6 mb-4">
          <li>Process or transmit malicious code, viruses, or harmful content</li>
          <li>Create workflows that violate third-party terms of service</li>
          <li>Automate spam, harassment, or unwanted communications</li>
          <li>Process content that infringes intellectual property rights</li>
        </ul>

        <h4 className="text-lg font-semibold mt-4 mb-2">Data Misuse:</h4>
        <ul className="list-disc pl-6 mb-4">
          <li>Share or sell access to other users' data</li>
          <li>Use the Service to collect personal information without consent</li>
          <li>Create workflows that violate privacy laws or regulations</li>
          <li>Process sensitive data without appropriate safeguards</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">4.3 Compliance Monitoring</h3>
        <p>We reserve the right to:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Monitor Service usage for compliance with these Terms</li>
          <li>Investigate suspected violations and request explanations</li>
          <li>Temporarily suspend Service access during investigations</li>
          <li>Report illegal activities to appropriate authorities</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4" id="third-party-integrations">
          5. Third-Party Integrations
        </h2>

        <h3 className="text-xl font-semibold mt-6 mb-3">5.1 Integration Authorization</h3>
        <p>When connecting third-party services:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>You grant us necessary permissions to access your data for workflow execution</li>
          <li>You confirm you have authority to authorize such access</li>
          <li>You remain responsible for compliance with third-party terms of service</li>
          <li>You can revoke access at any time through your account settings</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">5.2 Third-Party Service Changes</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>We are not responsible for changes to third-party APIs or services</li>
          <li>Workflow functionality may be affected by third-party service modifications</li>
          <li>We will make reasonable efforts to adapt to third-party changes</li>
          <li>Some integrations may become unavailable due to third-party decisions</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">5.3 Data Processing Across Integrations</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>Data flows between integrated services only as configured in your workflows</li>
          <li>We do not share your data between different customers' integrations</li>
          <li>Cross-platform data processing follows the principle of least privilege</li>
          <li>You can monitor and control data flows through your dashboard</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4" id="ai-automated-decision-making">
          6. AI and Automated Decision-Making
        </h2>

        <h3 className="text-xl font-semibold mt-6 mb-3">6.1 AI Limitations and Disclaimers</h3>
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
          <p className="font-semibold">Important Notice:</p>
          <p>Our AI systems are sophisticated but not infallible. You acknowledge that:</p>
        </div>
        <ul className="list-disc pl-6 mb-4">
          <li><strong>AI Interpretation:</strong> Natural language processing may misinterpret complex instructions</li>
          <li><strong>Data Accuracy:</strong> AI extraction and processing may contain errors</li>
          <li><strong>Decision Quality:</strong> Automated decisions should be reviewed for critical business processes</li>
          <li><strong>Learning Limitations:</strong> AI models may not understand all context or nuances</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3" id="section-6-2">
          6.2 Human Oversight Requirements
        </h3>
        <p>For workflows involving:</p>
        <ul className="list-disc pl-6 mb-4">
          <li><strong>Financial transactions above $500</strong> (per transaction or cumulative daily amount)</li>
          <li><strong>Legal document processing</strong> (contracts, filings, client communications)</li>
          <li><strong>Healthcare or personal data</strong> (patient records, PHI, medical communications)</li>
          <li><strong>Regulatory compliance activities</strong> (tax filings, regulatory reports, audit documentation)</li>
        </ul>

        <p className="font-semibold mb-4">You must implement appropriate human review and approval processes, including:</p>

        <h4 className="text-lg font-semibold mt-4 mb-2">Required Safeguards by Category:</h4>
        <ul className="list-disc pl-6 mb-4">
          <li><strong>Financial:</strong> Dual approval for transactions &gt;$500, daily transaction limits, audit trails</li>
          <li><strong>Legal:</strong> Attorney review of generated documents, client communication approval, deadline confirmations</li>
          <li><strong>Healthcare:</strong> Licensed practitioner approval, PHI access logging, patient consent verification</li>
          <li><strong>Compliance:</strong> Subject matter expert review, regulatory requirement checklists, filing confirmations</li>
        </ul>

        <h4 className="text-lg font-semibold mt-4 mb-2">Technical Implementation Requirements:</h4>
        <ul className="list-disc pl-6 mb-4">
          <li>Configure LangGraph workflows with mandatory human-in-the-loop nodes for high-risk operations</li>
          <li>Set up approval queues in your dashboard with clear escalation procedures</li>
          <li>Implement timeout mechanisms (workflows pause until human approval within 24 hours)</li>
          <li>Maintain decision audit trails with timestamps and approver identification</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">6.3 AI Model Accountability and Version Control</h3>
        
        <h4 className="text-lg font-semibold mt-4 mb-2">Model Version Management:</h4>
        <ul className="list-disc pl-6 mb-4">
          <li>We use specific versions of AI models (Claude Sonnet 4, GPT-4o-mini) with documented capabilities and limitations</li>
          <li>Model versions are frozen for production workflows to ensure consistent behavior</li>
          <li>Any model updates require 30-day advance notice and optional workflow re-testing</li>
          <li>You can request to maintain previous model versions for critical workflows (additional fees may apply)</li>
        </ul>

        <h4 className="text-lg font-semibold mt-4 mb-2">AI Performance Standards:</h4>
        <ul className="list-disc pl-6 mb-4">
          <li><strong>Accuracy Target:</strong> 90% for structured data extraction workflows</li>
          <li><strong>Response Time:</strong> &lt;30 seconds for standard workflow executions</li>
          <li><strong>Availability:</strong> AI processing available 99.5% of time (same as overall Service SLA)</li>
          <li><strong>Error Handling:</strong> Automatic fallback to human review queues when AI confidence &lt;80%</li>
        </ul>

        <h4 className="text-lg font-semibold mt-4 mb-2">Technical Architecture Transparency:</h4>
        <p>Our Service uses the following core technologies:</p>
        <ul className="list-disc pl-6 mb-4">
          <li><strong>LangGraph:</strong> AI workflow orchestration and state management with built-in human-in-the-loop capabilities</li>
          <li><strong>Temporal:</strong> Long-running process management, scheduled tasks, and reliability infrastructure</li>
          <li><strong>Claude API & GPT-4o-mini:</strong> Natural language processing and content generation</li>
          <li><strong>Integration APIs:</strong> Direct connections to Google, Microsoft, QuickBooks, and other business services</li>
        </ul>

        <h4 className="text-lg font-semibold mt-4 mb-2">AI Decision Auditability:</h4>
        <ul className="list-disc pl-6 mb-4">
          <li>All AI decisions logged with confidence scores and reasoning chains</li>
          <li>Workflow execution paths traceable through LangGraph state transitions</li>
          <li>Model input/output samples retained for 90 days for debugging purposes</li>
          <li>Regular AI performance reports available in your dashboard</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">6.4 Liability for AI Decisions</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>You retain full responsibility for automated actions taken by your workflows</li>
          <li>We provide tools for monitoring and controlling AI behavior, but cannot guarantee perfect accuracy</li>
          <li>You should implement appropriate safeguards and review processes for critical workflows</li>
          <li>Our liability for AI errors is limited as described in Section 10</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">6.5 Industry-Specific Compliance</h3>

        <h4 className="text-lg font-semibold mt-4 mb-2">Legal Industry Compliance:</h4>
        <ul className="list-disc pl-6 mb-4">
          <li><strong>Attorney-Client Privilege:</strong> Workflows maintain confidentiality protections required by legal ethics rules</li>
          <li><strong>Document Retention:</strong> Legal document processing follows jurisdiction-specific retention requirements</li>
          <li><strong>Bar Association Rules:</strong> Service design considers ABA Model Rules of Professional Conduct</li>
          <li><strong>E-Discovery Compliance:</strong> Audit trails and data preservation meet litigation hold requirements</li>
        </ul>

        <h4 className="text-lg font-semibold mt-4 mb-2">Healthcare Industry Compliance (HIPAA):</h4>
        <p>When processing Protected Health Information (PHI):</p>
        <ul className="list-disc pl-6 mb-4">
          <li><strong>Business Associate Agreement (BAA):</strong> Required before processing any PHI</li>
          <li><strong>Minimum Necessary Standard:</strong> Workflows configured to access only PHI required for specific functions</li>
          <li><strong>Security Safeguards:</strong> Enhanced encryption and access controls for PHI processing</li>
          <li><strong>Breach Notification:</strong> HIPAA-compliant breach notification procedures within required timeframes</li>
        </ul>

        <h4 className="text-lg font-semibold mt-4 mb-2">BAA Provisions for Healthcare Clients:</h4>
        <p>If you process PHI, a separate Business Associate Agreement must be executed covering:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Permitted uses and disclosures of PHI</li>
          <li>Safeguards to prevent unauthorized use or disclosure</li>
          <li>Subcontractor agreements with cloud providers and AI service providers</li>
          <li>Individual rights support (access, amendment, accounting of disclosures)</li>
          <li>Breach notification and incident response procedures</li>
        </ul>

        <h4 className="text-lg font-semibold mt-4 mb-2">Financial Services Compliance:</h4>
        <ul className="list-disc pl-6 mb-4">
          <li><strong>SOX Compliance:</strong> Audit trails and controls for publicly traded company workflows</li>
          <li><strong>PCI DSS:</strong> Credit card data processing (if applicable) follows payment card industry standards</li>
          <li><strong>Banking Regulations:</strong> Workflows involving financial institutions consider relevant federal and state banking laws</li>
        </ul>

        <h4 className="text-lg font-semibold mt-4 mb-2">General Regulatory Framework:</h4>
        <ul className="list-disc pl-6 mb-4">
          <li>Regular compliance assessments for regulated industries</li>
          <li>Documentation of workflow controls and safeguards</li>
          <li>Industry-specific training for customer success team</li>
          <li>Coordination with client compliance officers for workflow design</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4" id="data-ownership-privacy">
          7. Data Ownership and Privacy
        </h2>

        <h3 className="text-xl font-semibold mt-6 mb-3">7.1 Your Data Ownership</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>You retain ownership of all data you input into the Service</li>
          <li>We do not claim ownership of your business data, documents, or information</li>
          <li>You grant us limited rights to process your data solely for providing the Service</li>
          <li>Your data ownership rights survive termination of your account</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">7.2 Our Data Rights</h3>
        <p>We own:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>The Service software, algorithms, and intellectual property</li>
          <li>Anonymized analytics and usage patterns (not tied to your identity)</li>
          <li>System logs and performance metrics</li>
          <li>Improvements to our Service derived from general usage patterns</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">7.3 Data Processing and Privacy</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>All data processing is governed by our Privacy Policy</li>
          <li>We implement appropriate technical and organizational security measures</li>
          <li>Data processing agreements are in place with all third-party service providers</li>
          <li>You can request data portability or deletion as described in our Privacy Policy</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">7.4 Data Retention and Deletion</h3>
        
        <h4 className="text-lg font-semibold mt-4 mb-2">Data Retention Periods (aligned with operational requirements):</h4>
        <ul className="list-disc pl-6 mb-4">
          <li><strong>Active Account Data:</strong> Retained while your account is active and for legitimate business purposes</li>
          <li><strong>Workflow Execution Logs:</strong> Kept for 90 days for debugging, compliance, and audit purposes</li>
          <li><strong>AI Model Decision Records:</strong> 90 days for accuracy monitoring and improvement</li>
          <li><strong>Integration API Logs:</strong> 90 days for troubleshooting and security monitoring</li>
          <li><strong>Backup Data:</strong> Maintained for 30 days after primary deletion for recovery purposes</li>
          <li><strong>Legal Hold:</strong> Some data may be retained longer if required by law or legal proceedings</li>
        </ul>

        <h4 className="text-lg font-semibold mt-4 mb-2">Industry-Specific Retention:</h4>
        <ul className="list-disc pl-6 mb-4">
          <li><strong>Legal Workflows:</strong> Extended retention available to meet jurisdiction-specific requirements</li>
          <li><strong>Healthcare (PHI):</strong> Retention periods follow HIPAA and state medical record laws</li>
          <li><strong>Financial Services:</strong> Enhanced retention for audit and regulatory compliance</li>
        </ul>

        <h4 className="text-lg font-semibold mt-4 mb-2">Data Deletion Process:</h4>
        <ul className="list-disc pl-6 mb-4">
          <li><strong>User-Initiated:</strong> Immediate deletion request processing with 30-day verification period</li>
          <li><strong>Automatic:</strong> Expired data automatically purged according to retention schedule</li>
          <li><strong>Secure Deletion:</strong> Multi-pass overwriting and cryptographic key destruction</li>
          <li><strong>Verification:</strong> Deletion completion certificates available upon request</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4" id="intellectual-property">
          8. Intellectual Property Rights
        </h2>

        <h3 className="text-xl font-semibold mt-6 mb-3">8.1 Service Ownership</h3>
        <p>The Service and all related intellectual property are owned by Mohenara LLC, including:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Software code, algorithms, and AI models</li>
          <li>User interface designs and documentation</li>
          <li>Trademarks, logos, and branding materials</li>
          <li>Patents and trade secrets related to our technology</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">8.2 License to Use Service</h3>
        <p>We grant you a limited, non-exclusive, non-transferable license to:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Access and use the Service according to these Terms</li>
          <li>Create and execute workflows for your business purposes</li>
          <li>Access our documentation and support materials</li>
          <li>Use our APIs within the scope of your subscription</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">8.3 User-Generated Content</h3>
        <p>For workflows, configurations, and content you create:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>You retain ownership of your original creative expression</li>
          <li>You grant us rights to host, process, and execute your workflows</li>
          <li>We may use anonymized workflow patterns for Service improvement</li>
          <li>You represent that your content does not infringe others' intellectual property</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">8.4 Feedback and Suggestions</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>Feedback you provide about the Service becomes our property</li>
          <li>We may use suggestions to improve the Service without compensation</li>
          <li>You waive any claims to intellectual property in feedback provided</li>
          <li>This does not affect your ownership of underlying business data or processes</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4" id="fees-payment">
          9. Fees and Payment Terms
        </h2>

        <h3 className="text-xl font-semibold mt-6 mb-3">9.1 Subscription Plans</h3>
        <ul className="list-disc pl-6 mb-4">
          <li><strong>Free Plan:</strong> Limited workflows and executions as specified on our website</li>
          <li><strong>Paid Plans:</strong> Various tiers with different features and usage limits</li>
          <li><strong>Enterprise Plans:</strong> Custom pricing for large organizations</li>
          <li><strong>All pricing is stated in USD and excludes applicable taxes</strong></li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">9.2 Billing and Payment</h3>
        <ul className="list-disc pl-6 mb-4">
          <li><strong>Billing Cycle:</strong> Monthly or annual as selected</li>
          <li><strong>Payment Methods:</strong> Credit card, bank transfer (for enterprise plans)</li>
          <li><strong>Automatic Renewal:</strong> Subscriptions renew automatically unless cancelled</li>
          <li><strong>Failed Payments:</strong> Service may be suspended after 7-day grace period</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">9.3 Refunds and Cancellations</h3>
        <ul className="list-disc pl-6 mb-4">
          <li><strong>Free Trial:</strong> Cancel anytime during trial period without charge</li>
          <li><strong>Monthly Plans:</strong> No refunds, but you can cancel before next billing cycle</li>
          <li><strong>Annual Plans:</strong> Pro-rated refunds available within 30 days of initial purchase</li>
          <li><strong>Enterprise Plans:</strong> Refund terms specified in individual agreements</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">9.4 Price Changes</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>We may change subscription prices with 30 days' advance notice</li>
          <li>Existing subscribers can continue at current rates through their billing cycle</li>
          <li>Price increases take effect at the next renewal period</li>
          <li>You may cancel if you disagree with price changes</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">9.5 Usage-Based Charges</h3>
        <p>Some features may incur additional charges based on:</p>
        <ul className="list-disc pl-6 mb-4">
          <li><strong>API Calls:</strong> Charges for high-volume integrations</li>
          <li><strong>AI Processing:</strong> Costs for complex workflow analysis</li>
          <li><strong>Storage:</strong> Fees for data retention beyond standard limits</li>
          <li><strong>Support:</strong> Premium support services</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4" id="warranties-disclaimers">
          10. Warranties and Disclaimers
        </h2>

        <h3 className="text-xl font-semibold mt-6 mb-3">10.1 Service Warranties</h3>
        <p>We warrant that the Service will:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Substantially conform to the functionality described in our documentation</li>
          <li>Be provided with reasonable care and skill</li>
          <li>Meet our published uptime targets under normal operating conditions</li>
          <li>Be free from material defects that significantly impair functionality</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">10.2 Disclaimers</h3>
        <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
          <p className="font-bold">THE SERVICE IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND.</p>
        </div>
        <p>We specifically disclaim:</p>
        <ul className="list-disc pl-6 mb-4">
          <li><strong>Accuracy Warranties:</strong> AI and automated processes may contain errors</li>
          <li><strong>Completeness Warranties:</strong> Workflows may not handle all edge cases</li>
          <li><strong>Third-Party Integration Warranties:</strong> External services may change or become unavailable</li>
          <li><strong>Business Outcome Warranties:</strong> Results depend on your configuration and data quality</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">10.3 AI-Specific Disclaimers</h3>
        <p>Regarding AI and machine learning features:</p>
        <ul className="list-disc pl-6 mb-4">
          <li><strong>No Guarantee of Accuracy:</strong> AI interpretations may be incorrect</li>
          <li><strong>Learning Limitations:</strong> AI may not understand all contexts or nuances</li>
          <li><strong>Bias Potential:</strong> AI models may reflect biases in training data</li>
          <li><strong>Evolution Notice:</strong> AI capabilities and behavior may change over time</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4" id="limitation-of-liability">
          11. Limitation of Liability
        </h2>

        <h3 className="text-xl font-semibold mt-6 mb-3">11.1 Liability Caps</h3>
        <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
          <p className="font-bold">TO THE MAXIMUM EXTENT PERMITTED BY LAW:</p>
        </div>
        <p>Our total liability for any claims related to the Service is limited to:</p>
        <ul className="list-disc pl-6 mb-4">
          <li><strong>Free Plans:</strong> $100 total</li>
          <li><strong>Paid Plans:</strong> Amount paid by you in the 12 months preceding the claim</li>
          <li><strong>Enterprise Plans:</strong> As specified in individual agreements</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">11.2 Excluded Damages</h3>
        <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
          <p className="font-bold">WE ARE NOT LIABLE FOR:</p>
        </div>
        <ul className="list-disc pl-6 mb-4">
          <li>Indirect, incidental, punitive, or consequential damages</li>
          <li>Lost profits, revenue, or business opportunities</li>
          <li>Data loss or corruption (beyond our standard backup restoration)</li>
          <li>Third-party claims arising from your use of integrated services</li>
          <li>Damages caused by AI errors or misinterpretations</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">11.3 AI-Related Liability Limitations</h3>
        <p>For damages related to AI or automated decision-making:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>We are not liable for business decisions made based on AI recommendations</li>
          <li>Our liability is limited to the direct cost of correcting erroneous automated actions</li>
          <li>You are responsible for implementing appropriate human oversight and safeguards</li>
          <li>Claims must be reported within 30 days of discovery</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">11.4 Force Majeure</h3>
        <p>We are not liable for delays or failures due to:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Natural disasters, pandemics, or acts of God</li>
          <li>Government actions, war, or terrorism</li>
          <li>Third-party service outages or failures</li>
          <li>Internet infrastructure problems beyond our control</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4" id="service-level-agreement">
          12. Service Level Agreement (SLA)
        </h2>

        <h3 className="text-xl font-semibold mt-6 mb-3">12.1 Uptime Commitment</h3>
        <ul className="list-disc pl-6 mb-4">
          <li><strong>Target Uptime:</strong> 99.5% monthly uptime for paid plans</li>
          <li><strong>Measurement:</strong> Based on our monitoring systems</li>
          <li><strong>Exclusions:</strong> Scheduled maintenance, force majeure events, user-caused issues</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">12.2 Service Credits</h3>
        <p>If we fail to meet uptime targets:</p>
        <ul className="list-disc pl-6 mb-4">
          <li><strong>99.0-99.49% uptime:</strong> 10% monthly fee credit</li>
          <li><strong>95.0-98.99% uptime:</strong> 25% monthly fee credit</li>
          <li><strong>Below 95.0% uptime:</strong> 50% monthly fee credit</li>
        </ul>

        <h4 className="text-lg font-semibold mt-4 mb-2">AI Performance Service Credits:</h4>
        <p>If AI accuracy falls below committed levels:</p>
        <ul className="list-disc pl-6 mb-4">
          <li><strong>85-89% accuracy:</strong> 5% monthly fee credit</li>
          <li><strong>80-84% accuracy:</strong> 10% monthly fee credit</li>
          <li><strong>Below 80% accuracy:</strong> 25% monthly fee credit</li>
        </ul>

        <h4 className="text-lg font-semibold mt-4 mb-2">Performance Measurement:</h4>
        <ul className="list-disc pl-6 mb-4">
          <li><strong>Uptime:</strong> Measured by external monitoring service (99.5% monthly target)</li>
          <li><strong>AI Accuracy:</strong> Based on workflow success rate and user feedback (90% target)</li>
          <li><strong>Response Time:</strong> API response times &lt;30 seconds for 95% of requests</li>
          <li><strong>Integration Reliability:</strong> Third-party API success rate &gt;98%</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">12.3 Credit Claims Process</h3>
        <p>To claim service credits:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Report issues within 30 days of occurrence</li>
          <li>Provide reasonable details about the impact</li>
          <li>Credits are applied to future billing cycles</li>
          <li>Credits are your sole remedy for uptime failures</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4" id="indemnification">
          13. Indemnification
        </h2>

        <h3 className="text-xl font-semibold mt-6 mb-3">13.1 Your Indemnification Obligations</h3>
        <p>You agree to indemnify and hold us harmless from claims arising from:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Your violation of these Terms or applicable laws</li>
          <li>Your unauthorized use of third-party services or data</li>
          <li>Content you submit that infringes others' rights</li>
          <li>Automated actions taken by your configured workflows</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">13.2 Our Indemnification Obligations</h3>
        <p>We will indemnify you against claims that our Service infringes third-party intellectual property rights, provided:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>You notify us promptly of any claims</li>
          <li>You give us control of the defense and settlement</li>
          <li>You provide reasonable cooperation in the defense</li>
          <li>The claim relates to unmodified use of our Service</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">13.3 Indemnification Process</h3>
        <p>For all indemnification claims:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Notify the indemnifying party within 30 days</li>
          <li>Provide reasonable cooperation in defense</li>
          <li>Do not settle claims without written consent</li>
          <li>Indemnification is subject to the liability limits in Section 11</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4" id="termination">
          14. Termination
        </h2>

        <h3 className="text-xl font-semibold mt-6 mb-3">14.1 Termination by You</h3>
        <p>You may terminate your account:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>At any time through your account settings</li>
          <li>By cancelling your subscription before the next billing cycle</li>
          <li>By providing written notice for enterprise agreements</li>
          <li>Termination takes effect at the end of your current billing period</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">14.2 Termination by Us</h3>
        <p>We may terminate your account for:</p>
        <ul className="list-disc pl-6 mb-4">
          <li><strong>Cause:</strong> Violation of Terms, non-payment, illegal activities</li>
          <li><strong>Convenience:</strong> With 30 days' notice (paid plans), immediate (free plans)</li>
          <li><strong>Business Reasons:</strong> Discontinuation of Service with 90 days' notice</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">14.3 Effect of Termination</h3>
        <p>Upon termination:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Your access to the Service will cease</li>
          <li>Your data will be available for download for 30 days</li>
          <li>Recurring billing will stop (no refunds unless specified)</li>
          <li>Surviving provisions (IP rights, indemnification) remain in effect</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">14.4 Data Export and Deletion</h3>
        
        <h4 className="text-lg font-semibold mt-4 mb-2">Export Period and Process:</h4>
        <ul className="list-disc pl-6 mb-4">
          <li><strong>Export Window:</strong> 30 days to download your data after account termination</li>
          <li><strong>Export Formats:</strong> JSON, CSV, PDF for different data types</li>
          <li><strong>Workflow Definitions:</strong> LangGraph workflow configurations exportable for migration</li>
          <li><strong>Integration Data:</strong> Connection settings and API configurations (excluding credentials)</li>
        </ul>

        <h4 className="text-lg font-semibold mt-4 mb-2">Data Deletion Timeline:</h4>
        <ul className="list-disc pl-6 mb-4">
          <li><strong>Primary Data:</strong> Deleted immediately upon account termination request</li>
          <li><strong>Workflow Logs:</strong> 90-day retention for compliance, then permanent deletion</li>
          <li><strong>Backup Systems:</strong> 30-day retention after primary deletion for recovery</li>
          <li><strong>Legal Holds:</strong> Some data may be retained longer if required by law</li>
          <li><strong>Third-Party Services:</strong> Your connected service data remains under those services' control</li>
        </ul>

        <h4 className="text-lg font-semibold mt-4 mb-2">Verification and Certification:</h4>
        <ul className="list-disc pl-6 mb-4">
          <li><strong>Deletion Certificates:</strong> Available upon request for compliance documentation</li>
          <li><strong>Audit Trails:</strong> Deletion process logged for regulatory requirements</li>
          <li><strong>Industry-Specific:</strong> Extended procedures for legal and healthcare data</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4" id="dispute-resolution">
          15. Dispute Resolution
        </h2>

        <h3 className="text-xl font-semibold mt-6 mb-3">15.1 Informal Resolution</h3>
        <p>Before formal legal action:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Contact our support team to discuss the issue</li>
          <li>Provide detailed description of the problem</li>
          <li>Allow 30 days for us to investigate and respond</li>
          <li>Engage in good faith efforts to resolve the dispute</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">15.2 Binding Arbitration</h3>
        <p><strong>For US users, disputes will be resolved through binding arbitration:</strong></p>
        <ul className="list-disc pl-6 mb-4">
          <li><strong>Arbitration Provider:</strong> American Arbitration Association (AAA)</li>
          <li><strong>Rules:</strong> AAA Commercial Arbitration Rules</li>
          <li><strong>Location:</strong> Wyoming, US</li>
          <li><strong>Language:</strong> English</li>
          <li><strong>Costs:</strong> Each party pays their own costs unless otherwise awarded</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">15.3 Class Action Waiver</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>All disputes must be brought individually</li>
          <li>You waive the right to participate in class actions</li>
          <li>No consolidation with other parties' claims</li>
          <li>This waiver is severable from other provisions</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">15.4 Exceptions to Arbitration</h3>
        <p>The following may be brought in court:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Intellectual property disputes</li>
          <li>Small claims court matters (under jurisdictional limits)</li>
          <li>Injunctive relief for immediate harm</li>
          <li>Disputes about the validity of this arbitration clause</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4" id="general-provisions">
          16. General Provisions
        </h2>

        <h3 className="text-xl font-semibold mt-6 mb-3">16.1 Governing Law</h3>
        <p>These Terms are governed by:</p>
        <ul className="list-disc pl-6 mb-4">
          <li><strong>Primary Jurisdiction:</strong> Wyoming, US</li>
          <li><strong>Federal Law:</strong> Where applicable for US users</li>
          <li><strong>International:</strong> Hague Convention for cross-border disputes</li>
          <li><strong>Conflict of Laws:</strong> Excluded to extent permitted</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">16.2 Entire Agreement</h3>
        <p>These Terms, together with our Privacy Policy:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Constitute the complete agreement between us</li>
          <li>Supersede all prior agreements and understandings</li>
          <li>May not be modified except in writing</li>
          <li>Prevail over conflicting terms in other documents</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">16.3 Severability</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>If any provision is found unenforceable, others remain in effect</li>
          <li>Unenforceable provisions will be modified to the minimum extent necessary</li>
          <li>The overall intent and structure of the Terms will be preserved</li>
          <li>No waiver of any provision unless explicitly stated in writing</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">16.4 Assignment</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>You may not assign these Terms without our written consent</li>
          <li>We may assign these Terms in connection with business transfers</li>
          <li>Assignment includes mergers, acquisitions, and asset sales</li>
          <li>These Terms bind successors and permitted assigns</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">16.5 Updates to Terms</h3>
        <p>We may update these Terms:</p>
        <ul className="list-disc pl-6 mb-4">
          <li><strong>Material Changes:</strong> 30 days' advance notice via email</li>
          <li><strong>Minor Changes:</strong> Posted on website with effective date</li>
          <li><strong>Continued Use:</strong> Constitutes acceptance of updated Terms</li>
          <li><strong>Disagreement:</strong> You may terminate your account before changes take effect</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">16.6 Contact Information</h3>
        <p>For questions about these Terms:</p>
        <ul className="list-disc pl-6 mb-4">
          <li><strong>Email:</strong> admin@reasonrail.com</li>
          <li><strong>Response Time:</strong> Within 5 business days for inquiries</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">16.7 Survival</h3>
        <p>The following provisions survive termination:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Intellectual Property Rights (Section 8)</li>
          <li>Limitation of Liability (Section 11)</li>
          <li>Indemnification (Section 13)</li>
          <li>Dispute Resolution (Section 15)</li>
          <li>General Provisions (Section 16)</li>
        </ul>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-600 mb-4">
            <strong>Effective Date:</strong> 07/25/2025<br />
            <strong>Document Version:</strong> 1.0<br />
            <strong>Last Review:</strong> 07/25/2025
          </p>
          <p className="text-center text-sm text-gray-500 italic">
            By using our Service, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
          </p>
        </div>
      </div>
      
      <div className="mt-12 pt-8 border-t border-gray-200">
        <Link href="/" className="text-blue-600 hover:underline">
          ← Back to Home
        </Link>
      </div>
    </div>
  )
}