import { Link } from "@tanstack/react-router";
import { Home, Map, Gift, MessageCircle, Briefcase, User } from "lucide-react";

const items = [
  { to: "/", label: "Home", icon: Home, exact: true },
  { to: "/journey", label: "Journey", icon: Map },
  { to: "/benefits", label: "Benefits", icon: Gift },
  { to: "/companion", label: "Companion", icon: MessageCircle },
  { to: "/career", label: "Career", icon: Briefcase },
  { to: "/profile", label: "Profile", icon: User },
] as const;

export function BottomNav() {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 mx-auto w-full max-w-md border-t border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <ul className="grid grid-cols-6">
        {items.map(({ to, label, icon: Icon, exact }) => (
          <li key={to}>
            <Link
              to={to}
              activeOptions={{ exact: !!exact }}
              activeProps={{ className: "text-primary" }}
              inactiveProps={{ className: "text-muted-foreground" }}
              className="flex h-16 flex-col items-center justify-center gap-1 text-[10px] font-medium transition-colors"
            >
              <Icon className="size-5" />
              <span>{label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}