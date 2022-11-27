interface YouTubeVideoProps {
  url: string;
}

export const YouTubeVideo = ({ url }: YouTubeVideoProps): JSX.Element => (
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
