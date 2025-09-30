import Sidebar from "../components/Sidebar";
import ProtectedRoute from "../components/ProtectedRoute";

export default function Dashboard() {
  return (
    <ProtectedRoute>
      <div className="flex min-h-screen">
        <Sidebar />
        <main className="flex-1 p-6 bg-gray-50">
          <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
          <p className="text-gray-700">Welcome to your role-based dashboard!</p>
        </main>
      </div>
    </ProtectedRoute>
  );
}
