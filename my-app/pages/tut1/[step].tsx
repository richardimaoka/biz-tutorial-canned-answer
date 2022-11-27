import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "node:querystring";

interface Props {
  type: "command";
  command: string;
  result: string;
}

interface Params extends ParsedUrlQuery {
  step: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { step: "step1" } }],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  return {
    props: {
      type: "command",
      command: `mkdir tutorial-docker-cmd-entrypoint
cd tutorial-docker-cmd-entrypoint`,
      result: `Using default tag: latest
latest: Pulling from library/nginx
a603fa5e3b41: Pull complete
c39e1cda007e: Pull complete
90cfefba34d7: Pull complete
a38226fb7aba: Pull complete
62583498bae6: Pull complete
9802a2cfdb8d: Pull complete
Digest: sha256:e209ac2f37c70c1e0e9873a5f7231e91dcd83fdf1178d8ed36c2ec09974210ba
Status: Downloaded newer image for nginx:latest
docker.io/library/nginx:latest`,
    },
  };
};

const TutorialStep = ({ type, command, result }: Props) => {
  const router = useRouter();
  const { pid } = router.query;

  return (
    <p>
      Post: {type}: {command}: {result}
    </p>
  );
};
export default TutorialStep;
