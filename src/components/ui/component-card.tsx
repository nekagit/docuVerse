import React from "react";

import { AspectRatio } from "@/registry/new-york/ui/aspect-ratio";
import { cn } from "../../../src/lib/utils";

export function ComponentCard({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <AspectRatio ratio={1 / 1} asChild>
      <div
        className={cn(
          "flex items-center justify-center rounded-md border p-8",
          className
        )}
        {...props}
      />
    </AspectRatio>
  );
}
