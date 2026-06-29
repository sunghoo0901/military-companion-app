import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Send, Sparkles } from "lucide-react";

export const Route = createFileRoute("/companion")({
  head: () => ({
    meta: [
      { title: "Companion — Military Companion" },
      { name: "description", content: "Ask anything about military life. Get clear, trusted guidance." },
      { property: "og:title", content: "Companion — Military Companion" },
      { property: "og:description", content: "Ask anything about military life. Get clear, trusted guidance." },
    ],
  }),
  component: CompanionPage,
});

const suggestions = [
  "How do I calculate my remaining leave days?",
  "What's required for promotion to Corporal?",
  "Which banks offer the best military savings rate?",
  "When can I start preparing for discharge?",
];

function CompanionPage() {
  return (
    <div className="flex min-h-[calc(100vh-5rem)] flex-col">
      <PageHeader
        eyebrow="Your Companion"
        title="Ask me anything"
        description="Like a knowledgeable senior — I'll tell you what's verified and what depends on your unit."
      />

      <section className="flex-1 px-5">
        <Card className="bg-muted/50">
          <CardContent className="flex items-start gap-3 p-4">
            <span className="rounded-full bg-primary/10 p-2 text-primary">
              <Sparkles className="size-4" />
            </span>
            <p className="text-sm leading-relaxed text-foreground">
              Hi — I'm your Companion. I can help explain regulations, recommend
              your next step, or surface opportunities you might be missing.
              What's on your mind today?
            </p>
          </CardContent>
        </Card>

        <h2 className="mt-6 mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Try asking
        </h2>
        <div className="space-y-2">
          {suggestions.map((s) => (
            <button
              key={s}
              type="button"
              className="w-full rounded-xl border border-border bg-card px-4 py-3 text-left text-sm text-foreground transition-colors hover:bg-accent"
            >
              {s}
            </button>
          ))}
        </div>
      </section>

      <form
        className="sticky bottom-20 mx-5 mt-6 flex gap-2 rounded-full border border-border bg-background p-1.5 shadow-sm"
        onSubmit={(e) => e.preventDefault()}
      >
        <Input
          placeholder="Ask your Companion..."
          className="border-0 bg-transparent shadow-none focus-visible:ring-0"
        />
        <Button type="submit" size="icon" className="rounded-full">
          <Send className="size-4" />
        </Button>
      </form>
    </div>
  );
}