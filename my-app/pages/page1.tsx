import Link from "next/link";
import { FunctionComponent, ReactNode, useState } from "react";

interface ConsoleCommancProps {
  command: string;
}

const ConsoleCommand = ({ command }: ConsoleCommancProps) => (
  <div>
    <pre style={{ backgroundColor: "#000000d1", padding: "4px" }}>
      <code style={{ color: "white" }}>{command}</code>
    </pre>
  </div>
);

interface ConsoleResultProps {
  result: string;
}

const ConsoleResult = ({ result }: ConsoleResultProps) => (
  <div>
    <pre style={{ backgroundColor: "#000000d1", padding: "4px" }}>
      <code style={{ color: "white" }}>{result}</code>
    </pre>
  </div>
);

interface YouTubeVideoProps {
  url: string;
}

const YouTubeVideo = ({ url }: YouTubeVideoProps): JSX.Element => (
  <div>
    <iframe
      width="720"
      height="315"
      src={url}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
);

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
        <button onClick={onclick2}>video</button>
      </div>
      {isOpen1 && <ConsoleResult result={result} />}
      {isOpen2 && (
        <YouTubeVideo url={"https://www.youtube.com/embed/8ZXU198rL6Q"} />
      )}
      <button onClick={onclick3}>commands to see what happened</button>
      {isOpen3 && (
        <>
          <ConsoleCommand command="docker images nginx # images with REPOSITORY=nginx" />
          <ConsoleCommand command="docker inspect nginx" />
          <ConsoleCommand command="docker run --rm nginx" />
        </>
      )}
      <Link href="./page2">
        <button type="button">next</button>
      </Link>
    </div>
  );
}
