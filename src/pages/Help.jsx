//Import Dataset
import contactData from "../data/contactData";
// Import components
import PageHeader from "../components/PageHeader";

export default function Help() {
  return (
    <section>
      <div>
        <PageHeader title="Help" />

        <p>Find answers to common questions.</p>
        <br />

        <article>
          <p>
            Company name: <strong>{contactData.CompanyName}</strong>
          </p>
          <p>
            Phone number: <strong>{contactData.phoneNumber}</strong>
          </p>
          <p>
            Mail address: <strong>{contactData.mailAddress}</strong>
          </p>

          <a href={contactData.linkedIn}>LinkedIn account</a>
        </article>
      </div>
    </section>
  );
}
