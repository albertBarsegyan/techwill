import { RegexConstants } from "../constants/regex-constants.ts";

export const ValidImages = ["png", "jpg", "jpeg"];
const MegabytesToBytes = 1_048_576;

export const imageValidation = (file: File, imageMaxSizeInMb: number) => {
  const fileExtensionExec = RegexConstants.FileExtension.exec(file?.name);
  const fileExtension = fileExtensionExec?.[1];

  const fileSizeInMb = Math.round(Number(file?.size / MegabytesToBytes));
  const isValidType = ValidImages.includes(String(fileExtension).toLowerCase());
  const isLessThanValidSize = fileSizeInMb < imageMaxSizeInMb;

  return isLessThanValidSize && isValidType;
};

export const imageSourceNormalizer = (img: File | string | null) => {
  if (!img) return null;

  return img instanceof File ? URL.createObjectURL(img) : img;
};

export const fileToBase64 = (file: File | null): Promise<null | string> =>
  new Promise((resolve, reject) => {
    if (!file) {
      resolve(null);
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
  });
