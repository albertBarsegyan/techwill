export const ErrorMessage = {
  default: () => "Something went wrong",
  ImageTypeError: () => "Choose on of types JPG, WEBP or PNG",
  ImageSizeError: () => "Very big image",
  NameValidCharacters: () =>
    "Only letters, numbers (0-9), period (.), apostrophe (’), hyphen (-), and spaces allowed.",
  NameRequired: () => "Name is required",
  ShowcaseNameCharsCount: (charsCount: number) =>
    `Showcase Name must be at most ${charsCount} characters`,
};

export const InternalErrorMessage = {
  NavigationButton: () => "Use one of [buttonSettings] or [linkSettings] props",
  Dropdown: () => "Use one of dropdown variants",
};
