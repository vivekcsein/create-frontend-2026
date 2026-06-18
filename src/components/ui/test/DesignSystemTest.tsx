"use client";
import React from "react";
import { Button, Input, Link } from "../index";

type ShowcaseItem = {
  title: string;
  description: string;
  preview: React.ReactNode;
};

type ShowcaseSection = {
  title: string;
  description: string;
  items: ShowcaseItem[];
};

const sections: ShowcaseSection[] = [
  {
    title: "links",
    description: "Links",
    items: [
      {
        title: "Link",
        description: "Link",
        preview: <Link href="#">Link</Link>,
      },
    ],
  },
  {
    title: "Buttons",
    description: "Interactive actions used throughout the application.",
    items: [
      {
        title: "Primary Button",
        description: "Default call-to-action button.",
        preview: <Button>Continue</Button>,
      },
      {
        title: "Long Button",
        description: "Example with larger content.",
        preview: <Button>Save Changes</Button>,
      },
    ],
  },

  {
    title: "Inputs",
    description: "Collect user input in different formats.",
    items: [
      {
        title: "Default",
        description: "Standard text input.",
        preview: <Input placeholder="Type something..." />,
      },
      {
        title: "Email",
        description: "Email address input.",
        preview: <Input type="email" placeholder="john@example.com" />,
      },
      {
        title: "Password",
        description: "Password field.",
        preview: <Input type="password" placeholder="••••••••" />,
      },
      {
        title: "Disabled",
        description: "Disabled input state.",
        preview: <Input disabled placeholder="Disabled" />,
      },
    ],
  },
];

const DesignSystemTest = () => {
  const componentCount = sections.reduce((acc, section) => acc + section.items.length, 0);

  return (
    <main className="bg-background min-h-screen">
      {/* Hero */}

      <section className="relative overflow-hidden border-b">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,hsl(var(--primary)/0.10),transparent_55%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-24">
          <div className="mx-auto max-w-3xl text-center">
            <span className="bg-primary/10 text-primary rounded-full border px-4 py-1 text-xs font-semibold tracking-[0.25em] uppercase">
              Design System
            </span>

            <h1 className="mt-8 text-5xl font-bold tracking-tight sm:text-6xl">
              Component Library
            </h1>

            <p className="text-muted-foreground mx-auto mt-6 max-w-2xl text-lg leading-8">
              A collection of reusable, accessible and production-ready UI components designed for
              consistency across the application.
            </p>

            <div className="mt-12 grid grid-cols-3 gap-6">
              <div className="bg-card rounded-2xl border p-6">
                <div className="text-3xl font-bold">{componentCount}</div>
                <p className="text-muted-foreground mt-1 text-sm">Components</p>
              </div>

              <div className="bg-card rounded-2xl border p-6">
                <div className="text-3xl font-bold">{sections.length}</div>
                <p className="text-muted-foreground mt-1 text-sm">Categories</p>
              </div>

              <div className="bg-card rounded-2xl border p-6">
                <div className="text-3xl font-bold">✓</div>
                <p className="text-muted-foreground mt-1 text-sm">Theme Ready</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}

      <div className="mx-auto max-w-7xl space-y-24 px-6 py-20">
        {sections.map((section) => (
          <section key={section.title} className="space-y-10">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">{section.title}</h2>

              <p className="text-muted-foreground mt-2 max-w-2xl">{section.description}</p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {section.items.map((item) => (
                <article
                  key={item.title}
                  className="bg-card group hover:border-primary/30 overflow-hidden rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="border-b p-6">
                    <h3 className="font-semibold">{item.title}</h3>

                    <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="p-8">
                    <div className="bg-muted/40 flex min-h-60 items-center justify-center rounded-xl border p-6">
                      {item.preview}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
};

export default DesignSystemTest;
