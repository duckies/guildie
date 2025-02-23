"use client";

import { cn } from "@lemonade-stand/ui";
import { ChevronDownIcon } from "lucide-react";
import { AnimatePresence, type Transition, type Variants, motion } from "motion/react";
import { type ReactNode, useCallback, useMemo, useState } from "react";
import { Link } from "../Link";
import { WarcraftIcon } from "../warcraft-icon";

type MechanicProps = {
  name: string;
  id: number;
  caption?: string;
  pill?: string;
  children: ReactNode;
};

const variants = {
  collapsed: {
    opacity: 0,
    height: 0,
  },
  expanded: {
    height: "auto",
    display: "block",
    opacity: 1,
  },
} satisfies Variants;

const transition = {
  duration: 0.25,
  height: "auto",
  ease: [0.04, 0.62, 0.23, 0.98],
} satisfies Transition;

export function Mechanic({ id, name, caption, pill, children }: MechanicProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = useCallback(() => setIsOpen(!isOpen), [isOpen]);

  const MemoizedWarcraftIcon = useMemo(
    () => (
      <WarcraftIcon
        className="shadow-xl [box-shadow:0_0_0_1px_rgb(250_214_122)]"
        id={id}
        size={45}
      />
    ),
    [id],
  );

  return (
    <div
      className="group relative my-4 max-w-none rounded-lg bg-muted shadow-lg"
      data-state={isOpen ? "open" : "closed"}
    >
      <div
        className="not-prose flex gap-4 rounded-md p-4 hover:cursor-pointer"
        onClick={toggle}
        onKeyDown={(e) => e.key === "Enter" && toggle()}
      >
        <div className="flex shrink-0 items-center rounded-md animate-in fade-in">
          <Link href={`https://wowhead.com/spell=${id}`} variant="plain">
            {MemoizedWarcraftIcon}
          </Link>
        </div>
        <div className="flex grow flex-col justify-evenly font-medium">
          <div className="text-xl leading-6">{name}</div>
          {caption && <span className="text-sm text-primary/90">{caption}</span>}
        </div>

        <div className={cn("flex items-center mr-2")}>
          <ChevronDownIcon className="h-7 w-5 transition-transform duration-300 group-data-[state=open]:rotate-180" />
        </div>
      </div>

      <div className="px-5">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            initial={false}
            animate={isOpen ? "expanded" : "collapsed"}
            variants={variants}
            transition={transition}
            className={cn("relative overflow-hidden border-t border-border")}
            aria-expanded={isOpen}
          >
            <div className="pt-4 pb-5 prose">{children}</div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
