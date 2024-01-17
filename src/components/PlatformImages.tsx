interface PlatformImagesInputDataModel {
  platforms: string[];
}
function PlatformImages(data: PlatformImagesInputDataModel) {
  return (
    <div className={"flex gap-4"}>
      {data.platforms.map((platform: string) => (
        <img
          key={platform}
          src={`./${platform}.svg`}
          className={"size-7"}
          alt={platform}
        />
      ))}
    </div>
  );

  // return platformImages.length > 0 ? <>{platformImages}</> : null;
}

export default PlatformImages;
