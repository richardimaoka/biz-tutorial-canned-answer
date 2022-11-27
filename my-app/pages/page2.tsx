import Link from "next/link";
import { useState } from "react";
import { ConsoleCommand } from "../components/ConsoleCommand";
import { ConsoleResult } from "../components/ConsoleResult";
import { YouTubeVideo } from "../components/YouTubeVideo";

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

  const result = `{
  "Cmd": [
      "nginx",
      "-g",
      "daemon off;"
  ],
  "Image": "sha256:60dafcaed78a384237ed956c07eed39793b5f8862195323929417177e3ee9fa7",
  "Volumes": null,
  "WorkingDir": "",
  "Entrypoint": [
      "/docker-entrypoint.sh"
  ],
}`;

  return (
    <div style={{ width: "800px" }}>
      <img
        width="600px"
        src="https://docs.docker.com/engine/images/architecture.svg"
      />
      <ConsoleCommand command={"docker inspect nginx"} />
      <div style={{ display: "flex" }}>
        <button onClick={onclick1}>result</button>
      </div>
      {isOpen1 && <ConsoleResult result={result} />}
      <button onClick={onclick3}>commands to see what happened</button>
      {isOpen3 && (
        <>
          <ConsoleCommand command="docker images nginx # images with REPOSITORY=nginx" />
          <ConsoleCommand command="docker inspect nginx" />
          <ConsoleCommand command="docker run --rm nginx" />
        </>
      )}
      <div>
        <Link href="./page1">
          <button type="button">prev</button>
        </Link>
        <Link href="./page2">
          <button type="button">next</button>
        </Link>
      </div>
    </div>
  );
}
