import React from "react";
import { SimpleTest } from "./simple-test";
import "@shohamgilad/tailwind-test.styles.tailwind-styles";

export const SimpleTestExample = () => (
  <SimpleTest className="p-16">
    This components has a className <strong>p-16</strong> which would have an
    value of <strong>1.6rem</strong> as it was defined in the{" "}
    <strong>tailwind.config.js</strong> but it has an value of{" "}
    <strong>4rem</strong>
  </SimpleTest>
);
