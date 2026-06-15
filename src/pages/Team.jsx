import TeamList from "../components/TeamList";
import PageHeader from "../components/PageHeader";

export default function Team() {
  return (
    <section>
      <div>
        <PageHeader title="Team" />
        <TeamList />
      </div>
    </section>
  );
}
