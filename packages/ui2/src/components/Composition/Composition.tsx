import { type JSX } from "react";

import { Code } from "../Code/Code";
import { Card } from "../Card/Card";
// absolute-ish import for demonstration purposes
import { Button } from "@repo/ui2/src/components/Button/Button";

export function Composition(): JSX.Element {
  return (
    <>
      <Code>@repo/ui2:Composition</Code>
      <Card title="card-title" href="#">
        some content
      </Card>
      <Button appName="appName">test</Button>
    </>
  );
}
