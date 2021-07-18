import React from "react";
import "@shohamgilad/tailwind-test.styles.tailwind-styles";

export type SimpleTestProps = {
  className: string;
};

export function SimpleTest({
  className,
  children,
}: React.PropsWithChildren<SimpleTestProps>) {
  return <div className={className}>{children}</div>;
}
