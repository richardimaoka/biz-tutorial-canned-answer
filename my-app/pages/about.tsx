import { useState } from "react";

interface FoldedConsoleResultProps {
  isOpen: boolean;
  result: string;
}

const FoldedConsoleResult = ({
  isOpen,
  result,
}: FoldedConsoleResultProps): JSX.Element =>
  isOpen ? (
    <div>
      <pre style={{ backgroundColor: "#000000d1", padding: "4px" }}>
        <code style={{ color: "white" }}>{result}</code>
      </pre>
    </div>
  ) : (
    <></>
  );

export default function About() {
  const [isOpen, setOpen] = useState(false);

  const onclick = () => {
    setOpen(!isOpen);
  };

  const command = `docker pull nginx`;

  const result = `Using default tag: latest
latest: Pulling from library/nginx
a603fa5e3b41: Pull complete
c39e1cda007e: Pull complete
90cfefba34d7: Pull complete
a38226fb7aba: Pull complete
62583498bae6: Pull complete
9802a2cfdb8d: Pull complete
Digest: sha256:e209ac2f37c70c1e0e9873a5f7231e91dcd83fdf1178d8ed36c2ec09974210ba
Status: Downloaded newer image for nginx:latest
docker.io/library/nginx:latest`;

  return (
    <div style={{ width: "800px" }}>
      <pre style={{ backgroundColor: "#000000d1", padding: "4px" }}>
        <code style={{ color: "white" }}>{command}</code>
      </pre>
      <button onClick={onclick}>result</button>
      <FoldedConsoleResult isOpen={isOpen} result={result} />
    </div>
  );
}
