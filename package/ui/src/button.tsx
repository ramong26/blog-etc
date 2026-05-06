import * as React from "react";

// import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";

import { cn } from "./lib/cn";

// TODO: shadcn/ui 그대로 가져올 것 현재 글로벌 css가 없어 색상이 적용되지 않음. shadcn으로 그대로 가져오자 아님 여기다 바로 설치하도록 ㄱㄱ
function Button({
  children,
  className,
  asChild = false,
  type = "button",
  ...props
}: React.ComponentProps<"button"> & {
  asChild?: boolean;
}) {
  const Comp = asChild ? Slot.Root : "button";

  return (
    <Comp
      type={type}
      className={cn(
        "px-4 py-2 rounded-lg font-medium transition-colors",
        className,
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}

export { Button };
