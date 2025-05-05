import { type JSX } from "react";

import { Code } from "../Code/Code";
import { Card } from "../Card/Card";
// absolute-ish import for demonstration purposes
import { Button } from "@repo/ui/src/components/Button/Button";
import { Composition as Ui2Composition } from "@repo/ui2/src/components/Composition/Composition";

export function Composition(): JSX.Element {
  return (
    <>
      <Code>@repo/ui:Composition</Code>
      <Card title="card-title" href="#">
        some content
      </Card>
      <Button appName="appName">test</Button>
      <Ui2Composition />
    </>
  );
}
