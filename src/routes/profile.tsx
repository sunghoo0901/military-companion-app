import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Bell, Shield, Settings, LogOut, ChevronRight, User } from "lucide-react";

export const Route = createFileRoute("/profile")({
  head: () => ({
    meta: [
      { title: "Profile — Military Companion" },
      { name: "description", content: "Your military information, goals, and app preferences." },
      { property: "og:title", content: "Profile — Military Companion" },
      { property: "og:description", content: "Your military information, goals, and app preferences." },
    ],
  }),
  component: ProfilePage,
});

const sections = [
  { icon: User, label: "Military information", hint: "Branch, rank, unit" },
  { icon: Bell, label: "Notifications", hint: "Choose what reaches you" },
  { icon: Shield, label: "Privacy", hint: "Control what's stored" },
  { icon: Settings, label: "App preferences", hint: "Language, theme" },
];

function ProfilePage() {
  return (
    <div>
      <PageHeader eyebrow="You" title="Your profile" />

      <section className="px-5">
        <Card>
          <CardContent className="flex items-center gap-4 p-4">
            <Avatar className="size-14">
              <AvatarFallback className="bg-primary text-primary-foreground">
                JM
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <p className="text-base font-semibold text-foreground">Jaemin Lee</p>
              <p className="text-xs text-muted-foreground">
                Private First Class · 2nd Infantry Division
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                Enlisted Oct 14, 2025
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mt-6 px-5">
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Settings
        </h2>
        <Card>
          <ul className="divide-y divide-border">
            {sections.map(({ icon: Icon, label, hint }) => (
              <li key={label}>
                <button
                  type="button"
                  className="flex w-full items-center gap-4 px-4 py-3 text-left transition-colors hover:bg-accent"
                >
                  <span className="rounded-full bg-primary/10 p-2 text-primary">
                    <Icon className="size-4" />
                  </span>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground">{label}</p>
                    <p className="text-xs text-muted-foreground">{hint}</p>
                  </div>
                  <ChevronRight className="size-4 text-muted-foreground" />
                </button>
              </li>
            ))}
          </ul>
        </Card>
      </section>

      <section className="mt-6 px-5">
        <button
          type="button"
          className="flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-card px-4 py-3 text-sm font-medium text-destructive transition-colors hover:bg-accent"
        >
          <LogOut className="size-4" />
          Sign out
        </button>
      </section>
    </div>
  );
}