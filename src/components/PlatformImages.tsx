function PlatformImages({ platforms }) {
  const platformImages = platforms.map((platform: string) => (
    <img
      key={platform}
      src={`./${platform}.svg`}
      className={"size-7"}
      alt={platform}
    />
  ));
  return platformImages.length > 0 ? <>{platformImages}</> : null;
}

export default PlatformImages;
