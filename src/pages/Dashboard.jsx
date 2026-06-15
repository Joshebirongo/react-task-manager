import Sidebar from "../components/Sidebar";
import DashboardStats from "../components/DashboardStats";
import UserCard from "../components/UserCard";

export default function Dashboard() {
  return (
    <div>
      <Sidebar />

      <main>
        <section>
          <h1>Dashboard</h1>

          <UserCard />
        </section>
        <DashboardStats />
      </main>
    </div>
  );
}
