import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Page from "./page";

describe("portfolio page", () => {
  it("renders the primary content landmark", () => {
    render(<Page />);

    expect(screen.getByRole("main")).toBeInTheDocument();
  });

  it("explains Xinhe's positioning in the hero", () => {
    render(<Page />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /designing systems across space, data, and technology/i,
      }),
    ).toBeInTheDocument();
    expect(screen.getByText(/product designer × full-stack developer/i)).toBeInTheDocument();
  });

  it("presents selected work in the specified order", () => {
    render(<Page />);

    const projectTitles = within(screen.getByRole("region", { name: "Selected work" }))
      .getAllByRole("heading", { level: 3 })
      .map((heading) => heading.textContent);

    expect(projectTitles).toEqual([
      "AI Career Path Recommendation Platform",
      "Envision Resilience Challenge",
      "Startup Investment Analysis",
      "UMSI Policy RAG Assistant",
    ]);
  });

  it("surfaces measurable evidence from the supplied specification", () => {
    render(<Page />);

    expect(screen.getByText(/0\.63 to 0\.80/i)).toBeInTheDocument();
    expect(screen.getByText(/41,174 valid observations/i)).toBeInTheDocument();
    expect(screen.getByText(/0\.910 ROC-AUC/i)).toBeInTheDocument();
    expect(screen.getByText(/six-module workflow/i)).toBeInTheDocument();
  });

  it("provides the requested navigation and contact actions", () => {
    render(<Page />);

    expect(screen.getByRole("link", { name: "Work" })).toHaveAttribute("href", "#work");
    expect(screen.getByRole("link", { name: "Profile" })).toHaveAttribute(
      "href",
      "#profile",
    );
    expect(screen.getByRole("link", { name: "Experience" })).toHaveAttribute(
      "href",
      "#experience",
    );
    expect(screen.getAllByRole("link", { name: /let's talk/i })[0]).toHaveAttribute(
      "href",
      "mailto:hello@xinhe.design",
    );
    expect(screen.getByText(/resume asset pending/i)).toBeInTheDocument();
  });

  it("treats hero motion as an optional, nonessential enhancement", () => {
    render(<Page />);

    const video = screen.getByTestId("hero-video");
    expect(video).toHaveAttribute("autoplay");
    expect(video).toHaveAttribute("loop");
    expect(video).toHaveAttribute("playsinline");
    expect(video).toHaveAttribute("aria-hidden", "true");
    expect(video).toHaveProperty("muted", true);
    expect(video).toHaveAttribute("poster", "/media/hero-poster.webp");
  });
});
