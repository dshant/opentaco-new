import { motion } from "framer-motion";
import { Github } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1] as const,
      delay: i * 0.08,
    },
  }),
};

const features = [
  {
    label: "PR Automation",
    desc: "Auto-plan on PR, apply on merge. PR-level locking prevents conflicts. Configurable approval gates.",
  },
  {
    label: "State Management",
    desc: "Versioned state with RBAC, cross-account support, and one-click rollback.",
  },
  {
    label: "Drift Detection",
    desc: "Scheduled scans detect infrastructure drift. Auto-creates issues in GitHub, Jira, Linear, or Slack.",
  },
  {
    label: "Remote Runs",
    desc: "Execute Terraform commands remotely via TFE protocol. Logs stream back to your terminal or CI.",
  },
  {
    label: "Self-Hosted",
    desc: "Run it on your infra. Open source. No vendor lock-in. Your secrets stay yours.",
  },
];

import architectureImg from "@/assets/architecture.png";
import logoUber from "@/assets/logos/uber.png";
import logoDecathlon from "@/assets/logos/decathlon.png";
import logoHardrock from "@/assets/logos/hardrock.png";
import logoTigris from "@/assets/logos/tigris.png";
import logoHpe from "@/assets/logos/hpe.png";
import logoCheckatrade from "@/assets/logos/checkatrade.png";
import logoUrbn from "@/assets/logos/urbn.png";

const logos = [
  { src: logoUber, alt: "Uber" },
  { src: logoDecathlon, alt: "Decathlon" },
  { src: logoHardrock, alt: "Hard Rock" },
  { src: logoTigris, alt: "Tigris" },
  { src: logoHpe, alt: "HP Enterprise" },
  { src: logoCheckatrade, alt: "Checkatrade" },
  { src: logoUrbn, alt: "URBN" },
];

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <nav className="mx-auto flex max-w-[994px] items-center justify-between px-10 py-6 max-sm:px-5">
        <span
          className="glitch-logo font-mono text-[15px] font-medium tracking-tight text-foreground"
          data-text="opentaco"
        >
          <a
            href="/"
            className="font-display text-lg font-medium tracking-tight text-foreground logo-ai-hover cursor-pointer no-underline"
            data-text="digger"
          >
            digger
          </a>{" "}
          / opentaco
        </span>
        <div className="flex gap-6">
          <a
            href="https://docs.opentaco.dev"
            className="font-sans text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            docs
          </a>
          <a
            href="https://github.com/diggerhq/digger"
            className="flex items-center gap-1.5 font-sans text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <Github size={16} />
            github
          </a>
        </div>
      </nav>

      {/* Main */}
      <main className="mx-auto max-w-[994px] px-10 pb-16 pt-20 max-sm:px-5 max-sm:pb-20 max-sm:pt-12">
        <motion.h1
          className="font-serif text-[clamp(42px,6vw,64px)] leading-[1.15] tracking-[-1.5px] text-foreground mb-20"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
        >
          Terraform automation that feels invisible.
        </motion.h1>

        <motion.div
          className="font-serif text-[clamp(28px,4vw,38px)] leading-[1.35] tracking-[-0.8px] text-foreground mb-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
        >
          OpenTaco is a CI/CD orchestrator purpose-built for Terraform.
        </motion.div>

        <Divider i={2} />

        <motion.div
          className="mb-14 space-y-7"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={3}
        >
          <p className="text-[17px] leading-[1.75] tracking-[-0.1px] text-foreground">
            Raise a PR and OpenTaco runs{" "}
            <em className="font-serif not-italic text-[19px] italic">
              terraform plan
            </em>{" "}
            automatically, posting the output as a comment. Approve and merge,
            it applies. State is versioned with rollback built in. Drift is
            detected on a schedule and filed as issues in GitHub.
          </p>
          <p className="text-[17px] leading-[1.75] tracking-[-0.1px] text-foreground">
            Terraform runs natively in your CI. Your cloud credentials never
            leave your environment. No third-party compute, no secrets shared
            with a SaaS.
          </p>
        </motion.div>

        {/* Feature list */}
        <motion.ul
          className="my-14 list-none"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={4}
        >
          {features.map((f, idx) => (
            <li
              key={idx}
              className="flex gap-5 border-b border-border-light py-5 first:border-t max-sm:flex-col max-sm:gap-1"
            >
              <span className="min-w-[160px] shrink-0 font-mono text-[13px] font-medium text-foreground max-sm:min-w-0">
                {f.label}
              </span>
              <span className="text-[15px] leading-[1.6] text-lighter">
                {f.desc}
              </span>
            </li>
          ))}
        </motion.ul>

        <Divider i={5} />

        <motion.div
          className="my-14 space-y-7"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={6}
        >
          <p className="text-[17px] leading-[1.75] tracking-[-0.1px] text-foreground">
            Most teams don't need Terraform Cloud. They need their existing CI
            to understand Terraform, to know what a plan is, what a state lock
            means, when to apply, and when to wait.
          </p>
          <p className="text-[17px] leading-[1.75] tracking-[-0.1px] text-foreground">
            OpenTaco gives your CI that understanding.
          </p>
        </motion.div>

        <Divider i={8} />

        {/* Architecture diagram */}
        <motion.div
          className="my-14"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={9}
        >
          <img
            src={architectureImg}
            alt="OpenTaco architecture diagram"
            className="w-full rounded-lg border border-border-light"
          />
        </motion.div>

        <motion.div
          className="font-serif text-[clamp(28px,4vw,38px)] leading-[1.35] tracking-[-0.8px] text-foreground"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={10}
        >
          Your CI already runs your code. Let it run your infrastructure too.
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-8 pt-0"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={11}
        >
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://docs.opentaco.dev"
              className="inline-block rounded-md border border-primary bg-primary px-7 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-foreground/90"
            >
              Get started
            </a>
            <a
              href="https://github.com/diggerhq/digger"
              className="inline-block rounded-md border border-border px-7 py-3 text-sm font-medium text-foreground transition-colors hover:border-foreground"
            >
              View on GitHub
            </a>
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="mx-auto flex max-w-[994px] items-center justify-between border-t border-border-light px-10 py-10 max-sm:px-5 max-sm:py-8">
        <span
          className="glitch-logo font-mono text-[13px] text-faint"
          data-text="© 2026 opentaco"
        >
          © 2026 opentaco by{" "}
          <span className="underline">
            <a
              href="/"
              data-text="digger"
            >
              digger
            </a>
          </span>
        </span>
        <div className="flex gap-4">
          <a
            href="https://docs.opentaco.dev"
            className="font-mono text-[13px] text-faint transition-colors hover:text-foreground"
          >
            docs
          </a>
          <a
            href="https://github.com/diggerhq/digger"
            className="flex items-center gap-1.5 font-mono text-[13px] text-faint transition-colors hover:text-foreground"
          >
            <Github size={14} />
            github
          </a>
        </div>
      </footer>
    </div>
  );
};

const Divider = ({ i }: { i: number }) => (
  <motion.div
    className="my-14 h-px w-12 bg-border"
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    custom={i}
  />
);

export default LandingPage;
