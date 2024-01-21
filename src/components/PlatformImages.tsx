interface PlatformImagesInputDataModel {
  platforms: string[];
}
interface PlatformImagesInputModel {
  data: PlatformImagesInputDataModel;
}
function PlatformImages(data: PlatformImagesInputModel) {
  return (
    <div className={"flex gap-4"}>
      {data.data.platforms.map((platform: string) => (
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
