interface NavigateExternalProps {
  url: string;
}

export function NavigateExternal({ url }: NavigateExternalProps) {
  window.location.href = url;
  return null;
}
