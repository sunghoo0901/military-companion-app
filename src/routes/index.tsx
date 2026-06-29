import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { ArrowRight, CalendarDays, Award, Sparkles } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Home — Military Companion" },
      { name: "description", content: "Today's focus, your progress, and the opportunities that matter right now." },
      { property: "og:title", content: "Home — Military Companion" },
      { property: "og:description", content: "Today's focus, your progress, and the opportunities that matter right now." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div>
      <PageHeader
        eyebrow="Good morning, Soldier"
        title="Here's your focus today"
        description="You're 142 days into your service. Keep going — every milestone counts."
      />

      <section className="space-y-4 px-5">
        <Card>
          <CardHeader className="pb-3">
            <CardDescription>Service Progress</CardDescription>
            <CardTitle className="text-3xl font-semibold">38%</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <Progress value={38} />
            <p className="text-xs text-muted-foreground">
              228 days remaining · Discharge expected Feb 12, 2027
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-start gap-3 space-y-0">
            <div className="rounded-full bg-primary/10 p-2 text-primary">
              <Sparkles className="size-4" />
            </div>
            <div className="flex-1">
              <CardDescription>Today's Focus</CardDescription>
              <CardTitle className="mt-1 text-base font-semibold leading-snug">
                Submit your leave request for next month
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              You have 18 days available. Requests are easier to approve when
              submitted at least three weeks in advance.
            </p>
            <Button asChild size="sm" className="mt-4 w-full">
              <Link to="/journey">
                Plan my leave
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-start gap-3 space-y-0">
            <div className="rounded-full bg-primary/10 p-2 text-primary">
              <Award className="size-4" />
            </div>
            <div className="flex-1">
              <CardDescription>Next Milestone</CardDescription>
              <CardTitle className="mt-1 text-base font-semibold leading-snug">
                Promotion to Corporal in 47 days
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              You're on track. Keep an eye on the requirements checklist in your
              Journey.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-start gap-3 space-y-0">
            <div className="rounded-full bg-primary/10 p-2 text-primary">
              <CalendarDays className="size-4" />
            </div>
            <div className="flex-1">
              <CardDescription>New Opportunity</CardDescription>
              <CardTitle className="mt-1 text-base font-semibold leading-snug">
                Military savings account — 5.0% APY
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              A new partner bank just opened enrollment to active-duty soldiers.
            </p>
            <Button asChild variant="outline" size="sm" className="mt-4 w-full">
              <Link to="/benefits">
                See benefits
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
