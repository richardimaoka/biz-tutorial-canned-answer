import Link from "next/link";
import { useState } from "react";
import { ConsoleCommand } from "../components/ConsoleCommand";
import { ConsoleResult } from "../components/ConsoleResult";

export default function Page1() {
  const [isOpen1, setOpen1] = useState(false);
  const [isOpen2, setOpen2] = useState(false);
  const [isOpen3, setOpen3] = useState(false);

  const onclick1 = () => {
    setOpen1(!isOpen1);
  };
  const onclick2 = () => {
    setOpen2(!isOpen2);
  };
  const onclick3 = () => {
    setOpen3(!isOpen3);
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
      <img
        width="600px"
        src="https://docs.docker.com/engine/images/architecture.svg"
      />
      <ConsoleCommand command={command} />
      <div style={{ display: "flex" }}>
        <button onClick={onclick1}>result</button>
      </div>
      {isOpen1 && <ConsoleResult result={result} />}

      <div>
        <Link href="./page2">
          <button type="button">next</button>
        </Link>
      </div>
    </div>
  );
}
