import pageHeader from "../components/PageHeader";
import ActivityFeed from "../components/ActivityFeed";

export default function Activity() {
  return (
    <div>
      <pageHeader title="Activity" />
      <ActivityFeed />
    </div>
  );
}
