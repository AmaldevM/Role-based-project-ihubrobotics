import { useQuery } from "@tanstack/react-query";
import { getMenuByRole } from "../api/menu";
import { useAuth } from "../hooks/useAuth";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  LogOut,
  Home,
  Settings,
  Users,
  FileText,
  BarChart3,
  Shield,
  Loader2,
} from "lucide-react";
import { cn } from "@/lib/utils";

// Map menu items to icons
const menuIcons: { [key: string]: React.ElementType } = {
  dashboard: Home,
  home: Home,
  overview: BarChart3,
  users: Users,
  settings: Settings,
  profile: Users,
  reports: FileText,
  analytics: BarChart3,
  admin: Shield,
};

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

  const getIconForMenuItem = (item: string) => {
    const lowerItem = item.toLowerCase();
    for (const [key, Icon] of Object.entries(menuIcons)) {
      if (lowerItem.includes(key)) {
        return Icon;
      }
    }
    return Home; // Default icon
  };

  if (isLoading) {
    return (
      <div className="w-64 bg-sidebar h-screen flex items-center justify-center">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Loader2 className="h-4 w-4 animate-spin" />
          Loading menu...
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="w-64 bg-sidebar h-screen flex items-center justify-center">
        <div className="text-center text-destructive p-4">
          <p className="text-sm">Failed to load menu</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-64 bg-sidebar h-screen flex flex-col border-r border-sidebar-border">
      {/* Header */}
      <div className="p-6 border-b border-sidebar-border">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <Shield className="w-4 h-4 text-primary-foreground" />
          </div>
          <div>
            <h1 className="font-semibold text-lg">Dashboard</h1>
            <p className="text-xs text-muted-foreground capitalize">{role}</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <ScrollArea className="flex-1 p-4">
        <nav className="space-y-2">
          {menu?.map((item, index) => {
            const IconComponent = getIconForMenuItem(item);
            return (
              <Button
                key={index}
                variant="ghost"
                className={cn(
                  "w-full justify-start gap-3 h-10 text-sm font-normal",
                  "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                )}
              >
                <IconComponent className="h-4 w-4" />
                <span className="capitalize">{item}</span>
              </Button>
            );
          })}
        </nav>
      </ScrollArea>

      {/* Footer */}
      <div className="p-4 border-t border-sidebar-border">
        <Button
          variant="outline"
          className="w-full justify-start gap-3 text-destructive hover:text-destructive hover:bg-destructive/10"
          onClick={logout}
        >
          <LogOut className="h-4 w-4" />
          Logout
        </Button>
      </div>
    </div>
  );
}
