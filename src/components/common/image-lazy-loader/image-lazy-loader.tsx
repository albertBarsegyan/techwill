import { ForwardedRef, forwardRef, useState } from "react";
import { imageLoaderUseStyles } from "./image-lazy-loader.styles.ts";

export const enum ImgLoadState {
  Idle = "Idle",
  Loading = "Loading",
  Success = "Success",
}

interface ImageLazyLoaderProps {
  width?: number | string;
  height?: number | string;
  className?: string;
  src: string | null;
  style?: any;
  alt: string;
  crossOrigin?: "" | "anonymous" | "use-credentials";
  onLoad?: (e: React.SyntheticEvent<HTMLImageElement>) => void;
}

export const ImageLazyLoader = forwardRef(
  (
    {
      width,
      crossOrigin,
      height,
      style,
      src,
      alt,
      onLoad,
    }: ImageLazyLoaderProps,
    ref?: ForwardedRef<HTMLImageElement>
  ) => {
    const [imgData, setImgSrc] = useState({
      loadState: ImgLoadState.Loading,
    });

    const styles = imageLoaderUseStyles({
      loadState: imgData.loadState,
    });

    const handleLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
      setImgSrc({ loadState: ImgLoadState.Success });

      if (onLoad) onLoad(e);
    };

    if (src === null) return null;

    return (
      <img
        ref={ref}
        width={width}
        crossOrigin={crossOrigin}
        onLoad={handleLoad}
        height={height}
        style={{ ...styles.image, ...style }}
        src={src ?? ""}
        alt={alt}
      />
    );
  }
);

ImageLazyLoader.displayName = "ImageLazyLoader";
