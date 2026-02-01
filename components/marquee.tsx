"use client"

import { cn } from "@/lib/utils"

interface MarqueeProps {
  children: React.ReactNode
  className?: string
  pauseOnHover?: boolean
  speed?: "slow" | "normal" | "fast"
  direction?: "left" | "right"
}

export function Marquee({
  children,
  className,
  pauseOnHover = true,
  speed = "normal",
  direction = "left",
}: MarqueeProps) {
  const speedClass = {
    slow: "animate-[marquee_100s_linear_infinite]",
    normal: "animate-[marquee_25s_linear_infinite]",
    fast: "animate-[marquee_15s_linear_infinite]",
  }

  return (
    <div
      className={cn(
        "group flex overflow-hidden bg-black text-primary-foreground",
        className
      )}
    >
      <div
        className={cn(
          "flex shrink-0 items-center gap-8",
          speedClass[speed],
          direction === "right" && "direction-reverse",
          pauseOnHover && "group-hover:paused"
        )}
      >
        {children}
        {children}
        {children}
        {children}
      </div>
      <div
        className={cn(
          "flex shrink-0 items-center gap-8",
          speedClass[speed],
          direction === "right" && "direction-reverse",
          pauseOnHover && "group-hover:paused"
        )}
        aria-hidden
      >
        {children}
        {children}
        {children}
        {children}
      </div>
    </div>
  )
}
