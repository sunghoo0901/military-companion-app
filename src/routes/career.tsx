import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Award, FileText, Briefcase, BookOpen } from "lucide-react";

export const Route = createFileRoute("/career")({
  head: () => ({
    meta: [
      { title: "Career — Military Companion" },
      { name: "description", content: "Prepare for life after discharge with certifications, resume tools, and job opportunities." },
      { property: "og:title", content: "Career — Military Companion" },
      { property: "og:description", content: "Prepare for life after discharge with certifications, resume tools, and job opportunities." },
    ],
  }),
  component: CareerPage,
});

const tracks = [
  { icon: Award, title: "Certifications", description: "3 recommended for your goals" },
  { icon: FileText, title: "Resume", description: "Draft started · last edited 2 weeks ago" },
  { icon: Briefcase, title: "Internships & Jobs", description: "12 new openings this week" },
  { icon: BookOpen, title: "Learning", description: "Free courses available through MND" },
];

function CareerPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Looking Ahead"
        title="Prepare for what's next"
        description="Small steps during service make a big difference after discharge."
      />

      <section className="px-5">
        <Card>
          <CardHeader className="pb-3">
            <CardDescription>Career Readiness</CardDescription>
            <CardTitle className="text-3xl font-semibold">42%</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <Progress value={42} />
            <p className="text-xs text-muted-foreground">
              Complete your resume and one certification to reach 70%.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="mt-6 px-5">
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Your tracks
        </h2>
        <div className="space-y-3">
          {tracks.map(({ icon: Icon, title, description }) => (
            <Card key={title}>
              <CardContent className="flex items-center gap-4 p-4">
                <span className="rounded-full bg-primary/10 p-2.5 text-primary">
                  <Icon className="size-5" />
                </span>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-foreground">{title}</p>
                  <p className="text-xs text-muted-foreground">{description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}