import type { ReactNode } from "react";

export function PageHeader({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <header className="px-5 pt-8 pb-4">
      {eyebrow ? (
        <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          {eyebrow}
        </p>
      ) : null}
      <h1 className="mt-1 text-2xl font-semibold tracking-tight text-foreground">
        {title}
      </h1>
      {description ? (
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
      ) : null}
      {children}
    </header>
  );
}