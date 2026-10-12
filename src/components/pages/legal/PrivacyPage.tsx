import { COMPANY } from "./company";
import { A, H2, LegalPage, Mail, P, Tbc, UL, Val } from "./LegalPage";

export function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      heading="Privacy Policy"
      lede="How Lambs Group collects, uses and protects your personal information when you use this website or get in touch with us."
    >
      <H2>Who we are</H2>
      <P>
        This website is run by {COMPANY.tradingName}, a trading name of <Val v={COMPANY.legalName} label="registered company name" />
        {" "}(company number <Val v={COMPANY.companyNumber} label="Companies House number" />). We are the "controller" of the personal
        information described in this policy, which means we decide how and why it is used. Our registered office is{" "}
        <Val v={COMPANY.registeredOffice} label="registered office address" /> and we trade from {COMPANY.tradingAddress}. We are
        registered with the Information Commissioner's Office (ICO), registration number{" "}
        <Val v={COMPANY.icoRegistration} label="ICO registration number" />.
      </P>
      <P>
        Questions about this policy, or about how we use your information, can be sent to{" "}
        <Mail address={COMPANY.email} />{" "}
        or by post to our trading address.
      </P>

      <H2>What information we collect</H2>
      <P>We only collect information you choose to give us, plus a small amount of technical data needed to run the site securely.</P>
      <UL>
        <li><strong>Commercial enquiries</strong> (contact form): your name, company, email address, phone number, sector and the details of your project.</li>
        <li><strong>Private Works quote requests</strong>: your name, email, phone, postcode, address, the work you want, timing, any notes and any photos you upload.</li>
        <li><strong>Job applications</strong>: your name, email, phone, location, cover note and your CV, which may include employment history, qualifications and tickets.</li>
        <li><strong>Security and technical data</strong>: your IP address and basic browser details are processed when you load the site and when you submit a form, so that we can keep the site secure and block automated abuse.</li>
        <li><strong>Analytics</strong> (only if you accept them in our cookie banner): aggregate information about how pages are used, collected by Cloudflare Web Analytics. See our <A href="/cookies">Cookie Policy</A>.</li>
      </UL>
      <P>Please do not send us sensitive information such as health details or criminal records in a form unless we have specifically asked for it.</P>

      <H2>How and why we use it</H2>
      <UL>
        <li><strong>To reply to your enquiry or quote request, and to provide a quote.</strong> Lawful basis: taking steps at your request before entering into a contract, and our legitimate interest in responding to business enquiries.</li>
        <li><strong>To consider you for a job.</strong> Lawful basis: taking steps at your request to enter into an employment contract, and our legitimate interest in recruiting.</li>
        <li><strong>To keep the website secure and prevent spam and bots</strong> (including the Cloudflare Turnstile check on our forms). Lawful basis: our legitimate interest in protecting our systems and staff.</li>
        <li><strong>To understand how the site is used</strong>, only if you consent to analytics. Lawful basis: your consent, which you can withdraw at any time through "Cookie settings" in the footer.</li>
        <li><strong>To meet legal and regulatory obligations</strong>, such as health and safety or tax record-keeping, where they apply.</li>
      </UL>
      <P>We do not sell your personal information and we do not use it for automated decision-making or profiling.</P>

      <H2>Who we share it with</H2>
      <P>We only share information with organisations that help us run the website and our business, under contracts that require them to protect it:</P>
      <UL>
        <li><strong>Resend</strong> - sends the form submissions to our team by email.</li>
        <li><strong>Cloudflare</strong> - runs the service that receives form submissions and provides the Turnstile security check.</li>
        <li><strong>Our website hosting provider</strong> <Tbc>name the production host once chosen</Tbc>.</li>
        <li><strong>Our email provider</strong> (the mailboxes that receive enquiries and applications).</li>
        <li><strong>Cloudflare Web Analytics</strong>, only if you accept analytics. It reports page views, referrers and device and country information in aggregate, without cookies or local storage.</li>
      </UL>
      <P>We may also disclose information where the law requires it, or to professional advisers and insurers where necessary.</P>

      <H2>Transfers outside the UK</H2>
      <P>
        Some of the providers above process data outside the UK, including in the United States. Where that happens we rely on an
        adequacy decision, the UK International Data Transfer Agreement or the UK Addendum to the EU Standard Contractual Clauses,
        or the UK-US Data Bridge, so that your information keeps an equivalent level of protection.
      </P>

      <H2>How long we keep it</H2>
      <UL>
        <li>Enquiries and quote requests: <Tbc>retention period, e.g. 12 months after the last contact</Tbc>.</li>
        <li>Unsuccessful job applications and CVs: <Tbc>retention period, e.g. 6 months after the vacancy closes, unless you ask us to keep your CV on file longer</Tbc>.</li>
        <li>Records of work, quotes and contracts: for as long as needed to meet legal, tax and insurance requirements.</li>
        <li>Consent choice: stored in your own browser until you clear it or change it.</li>
      </UL>

      <H2>Your rights</H2>
      <P>Under UK data protection law you have the right to:</P>
      <UL>
        <li>ask for a copy of the information we hold about you;</li>
        <li>ask us to correct anything that is wrong or incomplete;</li>
        <li>ask us to delete your information, or restrict how we use it;</li>
        <li>object to us using your information based on our legitimate interests;</li>
        <li>withdraw consent at any time, where we rely on consent;</li>
        <li>ask for your information in a portable format, where this applies.</li>
      </UL>
      <P>
        To use any of these rights, email <Mail address={COMPANY.email} />.
        We will reply within one month. If you are unhappy with how we have handled your information you can complain to the
        Information Commissioner's Office at ico.org.uk or on 0303 123 1113. We'd appreciate the chance to put things right first.
      </P>

      <H2>Cookies and similar technologies</H2>
      <P>
        Our <A href="/cookies">Cookie Policy</A> explains what
        we store on your device and how to change your choices.
      </P>

      <H2>Changes to this policy</H2>
      <P>We may update this policy from time to time. The date at the top of the page shows when it was last changed.</P>
    </LegalPage>
  );
}
