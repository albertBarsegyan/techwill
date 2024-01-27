export const setBodyOverflowHidden = (isHidden: boolean) => {
  const element = document.body;

  if (isHidden) {
    if (element) element.classList.add("hidden");
    document.documentElement.classList.add("hidden-html");
  } else {
    if (element) element.classList.remove("hidden");
    document.documentElement.classList.remove("hidden-html");
  }
};

export const checkIsMobile = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
};
