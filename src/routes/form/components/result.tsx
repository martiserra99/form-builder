import { Card } from "@radix-ui/themes";

import { Value } from "formity";

interface ResultProps {
  result: Value;
}

export default function Result({ result }: ResultProps) {
  return (
    <Card size="3" variant="surface" className="w-full max-w-[420px]">
      <pre>{JSON.stringify(result, null, 2)}</pre>
    </Card>
  );
}
