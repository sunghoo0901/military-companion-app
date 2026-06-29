import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Landmark, Train, Utensils, Film, GraduationCap, Plane } from "lucide-react";

export const Route = createFileRoute("/benefits")({
  head: () => ({
    meta: [
      { title: "Benefits — Military Companion" },
      { name: "description", content: "Financial programs, discounts, and opportunities tailored to active-duty soldiers." },
      { property: "og:title", content: "Benefits — Military Companion" },
      { property: "og:description", content: "Financial programs, discounts, and opportunities tailored to active-duty soldiers." },
    ],
  }),
  component: BenefitsPage,
});

const categories = [
  { icon: Landmark, label: "Banking", count: 12 },
  { icon: Train, label: "Transport", count: 8 },
  { icon: Utensils, label: "Restaurants", count: 24 },
  { icon: Film, label: "Entertainment", count: 15 },
  { icon: GraduationCap, label: "Education", count: 9 },
  { icon: Plane, label: "Travel", count: 6 },
];

const featured = [
  {
    title: "Military savings account — 5.0% APY",
    provider: "KB Kookmin Bank",
    tag: "Financial",
    description: "Exclusive rate for active-duty soldiers, up to ₩500,000 per month.",
  },
  {
    title: "Free intercity bus on weekends",
    provider: "Korea Express Bus",
    tag: "Transport",
    description: "Show your military ID for select routes between major cities.",
  },
  {
    title: "50% off CGV movie tickets",
    provider: "CGV",
    tag: "Entertainment",
    description: "Valid every day with your military ID.",
  },
];

function BenefitsPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Opportunities"
        title="Made for you"
        description="Programs and discounts you've earned through your service."
      />

      <section className="px-5">
        <div className="grid grid-cols-3 gap-3">
          {categories.map(({ icon: Icon, label, count }) => (
            <button
              key={label}
              type="button"
              className="flex flex-col items-center gap-2 rounded-xl border border-border bg-card p-3 text-center transition-colors hover:bg-accent"
            >
              <span className="rounded-full bg-primary/10 p-2 text-primary">
                <Icon className="size-5" />
              </span>
              <span className="text-xs font-medium text-foreground">{label}</span>
              <span className="text-[10px] text-muted-foreground">{count} offers</span>
            </button>
          ))}
        </div>
      </section>

      <section className="mt-6 px-5">
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Recommended for you
        </h2>
        <div className="space-y-3">
          {featured.map((f) => (
            <Card key={f.title}>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">{f.tag}</Badge>
                  <CardDescription>{f.provider}</CardDescription>
                </div>
                <CardTitle className="text-base font-semibold leading-snug">
                  {f.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{f.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}