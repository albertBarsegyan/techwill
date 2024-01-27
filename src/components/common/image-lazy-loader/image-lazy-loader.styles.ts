import { ImgLoadState } from "./image-lazy-loader.tsx";

interface ImageStyleProps {
  loadState: ImgLoadState;
}

export const imageLoaderUseStyles = ({ loadState }: ImageStyleProps) => ({
  image: {
    filter: `blur(${loadState === ImgLoadState.Loading ? 10 : 0}px) opacity(${
      loadState === ImgLoadState.Loading ? 0 : 100
    }%)`,
    transition: "0.3s linear",
  },
});
