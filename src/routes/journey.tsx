import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Circle, Clock } from "lucide-react";

export const Route = createFileRoute("/journey")({
  head: () => ({
    meta: [
      { title: "Journey — Military Companion" },
      { name: "description", content: "Your full military service timeline — from enlistment to discharge." },
      { property: "og:title", content: "Journey — Military Companion" },
      { property: "og:description", content: "Your full military service timeline — from enlistment to discharge." },
    ],
  }),
  component: JourneyPage,
});

const milestones = [
  { title: "Enlistment", date: "Oct 14, 2025", status: "done" as const },
  { title: "Basic Training Complete", date: "Nov 25, 2025", status: "done" as const },
  { title: "Unit Assignment", date: "Dec 02, 2025", status: "done" as const },
  { title: "Promotion to Private First Class", date: "Mar 14, 2026", status: "done" as const },
  { title: "Promotion to Corporal", date: "Aug 15, 2026", status: "current" as const },
  { title: "First Long Leave", date: "Sep 2026", status: "upcoming" as const },
  { title: "Promotion to Sergeant", date: "Apr 2027", status: "upcoming" as const },
  { title: "Discharge", date: "Feb 12, 2027", status: "upcoming" as const },
];

function StatusIcon({ status }: { status: "done" | "current" | "upcoming" }) {
  if (status === "done") return <CheckCircle2 className="size-5 text-primary" />;
  if (status === "current") return <Clock className="size-5 text-primary" />;
  return <Circle className="size-5 text-muted-foreground" />;
}

function JourneyPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Your Journey"
        title="From enlistment to discharge"
        description="Every step of your service in one calm, clear timeline."
      />

      <section className="px-5">
        <Card>
          <CardHeader className="pb-3">
            <CardDescription>Current Stage</CardDescription>
            <CardTitle className="text-lg">Active Service · Private First Class</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              You're settled into your unit and building toward your next promotion.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="mt-6 px-5">
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Service Timeline
        </h2>
        <ol className="relative space-y-4 border-l border-border pl-6">
          {milestones.map((m) => (
            <li key={m.title} className="relative">
              <span className="absolute -left-[34px] top-0 flex size-6 items-center justify-center rounded-full bg-background">
                <StatusIcon status={m.status} />
              </span>
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-medium text-foreground">{m.title}</p>
                  <p className="text-xs text-muted-foreground">{m.date}</p>
                </div>
                {m.status === "current" ? (
                  <Badge variant="secondary">Next up</Badge>
                ) : null}
              </div>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}