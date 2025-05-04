import { type JSX } from "react";

import { Code } from "../Code/Code";
import { Card } from "../Card/Card";
// absolute-ish import for demonstration purposes
import { Button } from "@repo/ui/src/components/Button/Button";

export function Composition(): JSX.Element {
  return (
    <>
      <Code>some content</Code>
      <Card title="card-title" href="#">
        some content
      </Card>
      <Button appName="appName">test</Button>
    </>
  );
}
