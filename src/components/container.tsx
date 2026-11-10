import type { HTMLAttributes } from "react";

type ContainerSize = "wide" | "narrow" | "full";

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  size?: ContainerSize;
};

const widths: Record<ContainerSize, string> = {
  wide: "max-w-7xl",
  narrow: "max-w-4xl",
  full: "max-w-none",
};

export function Container({
  size = "wide",
  className = "",
  children,
  ...props
}: ContainerProps) {
  return (
    <div
      className={["mx-auto w-full px-5 sm:px-8 lg:px-10", widths[size], className]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {children}
    </div>
  );
}