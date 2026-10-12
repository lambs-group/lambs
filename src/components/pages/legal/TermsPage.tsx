import { COMPANY } from "./company";
import { A, H2, LegalPage, Mail, P, UL, Val } from "./LegalPage";

export function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      heading="Website Terms of Use"
      lede="The terms that apply when you use the Lambs Group website."
    >
      <H2>About these terms</H2>
      <P>
        This website is operated by {COMPANY.tradingName}, a trading name of <Val v={COMPANY.legalName} label="registered company name" />
        {" "}(company number <Val v={COMPANY.companyNumber} label="Companies House number" />), registered office{" "}
        <Val v={COMPANY.registeredOffice} label="registered office address" />. By using the site you agree to these terms. If you
        don't agree, please don't use it.
      </P>
      <P>These terms cover use of the website only. Any work we carry out for you is governed by a separate quotation, contract or terms of engagement.</P>

      <H2>Using the site</H2>
      <UL>
        <li>You may view and print pages for your own use or to assess our services.</li>
        <li>You must not misuse the site, including by attempting to gain unauthorised access, introducing malicious code, or sending automated or abusive submissions through our forms.</li>
        <li>You must give accurate details when you contact us.</li>
      </UL>

      <H2>Our content</H2>
      <P>
        The text, images, logos and design on this site belong to {COMPANY.tradingName} or our licensors and are protected by
        copyright and other intellectual property rights. Client and accreditation logos belong to their respective owners and are
        shown to identify work we have done or standards we hold. You may not copy, reproduce or reuse our content without our
        written permission.
      </P>

      <H2>Accuracy of information</H2>
      <P>
        We take care to keep the site accurate and up to date, but it is provided for general information. Descriptions of services,
        project figures and accreditations may change, and nothing on the site is a quotation or an offer to supply services. Prices
        and availability are confirmed only in a written quote.
      </P>

      <H2>Links to other sites</H2>
      <P>Where we link to other websites we do so for convenience. We don't control them and aren't responsible for their content or privacy practices.</P>

      <H2>Our responsibility</H2>
      <P>
        We provide the website "as is". We don't promise it will always be available or error-free. Nothing in these terms limits or
        excludes our liability for death or personal injury caused by our negligence, for fraud or fraudulent misrepresentation, or for
        anything else that can't be limited or excluded by law. Subject to that, we are not liable for any loss arising from your use
        of, or inability to use, the website, or from relying on its content.
      </P>

      <H2>Privacy and cookies</H2>
      <P>
        How we use personal information is explained in our <A href="/privacy">Privacy Policy</A>{" "}
        and <A href="/cookies">Cookie Policy</A>.
      </P>

      <H2>Changes and governing law</H2>
      <P>
        We may update these terms from time to time; the version on this page is the one that applies. These terms, and any dispute
        arising from them, are governed by the law of England and Wales, and the courts of England and Wales have exclusive
        jurisdiction.
      </P>

      <H2>Contact</H2>
      <P>
        {COMPANY.tradingName}, {COMPANY.tradingAddress}. Email{" "}
        <Mail address={COMPANY.email} />, phone {COMPANY.phone}.
      </P>
    </LegalPage>
  );
}
