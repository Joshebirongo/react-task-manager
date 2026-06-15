import PageHeader from "../components/PageHeader";
import NotifcationList from "../components/NotificationList";

export default function Notifcations() {
  return (
    <section>
      <div>
        <PageHeader title="Notifications" />

        <NotifcationList />
      </div>
    </section>
  );
}
