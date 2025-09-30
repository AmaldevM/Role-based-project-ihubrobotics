import { useQuery } from "@tanstack/react-query";
import { getMenuByRole } from "../api/menu";
import { useAuth } from "../hooks/useAuth";

export default function Sidebar() {
  const { getRole, logout } = useAuth();
  const role = getRole() || "";

  const {
    data: menu,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["menu", role],
    queryFn: () => getMenuByRole(role),
    enabled: !!role, 
  });

  if (isLoading) return <div className="p-4">Loading menu...</div>;
  if (isError)
    return <div className="p-4 text-red-500">Failed to load menu.</div>;

  return (
    <div className="w-64 bg-gray-100 h-screen p-4 flex flex-col justify-between">
      <div>
        <h2 className="text-xl font-bold mb-4">Menu</h2>
        <ul>
          {menu?.map((item, index) => (
            <li
              key={index}
              className="mb-2 hover:bg-gray-200 p-2 rounded cursor-pointer"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      <button
        onClick={logout}
        className="bg-red-500 text-white px-4 py-2 rounded mt-4 hover:bg-red-600 transition"
      >
        Logout
      </button>
    </div>
  );
}
