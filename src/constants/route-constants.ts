export const UnauthenticatedRoutePath = {
  Login: "/login",
  Navigate: "*",
};

export const AuthenticatedRoutePath = {
  Home: () => "/",
  Dashboard: () => "/dashboard",
  Logout: () => "/logout",
  CreateShowcase: () => "/create-showcase",
  CreateShowcaseStandard: () => "/create-showcase/standard",
  CreateShowcaseAutomated: () => "/create-showcase/automated",
  Showcase: (id: string | number = ":id") => `/showcase/${id}`,
  ShowcaseCustomize: (id: string | number = ":id") =>
    `/showcase/${id}/customize`,
  ShowcaseEmbed: (id: string | number = ":id") => `/showcase/${id}/embed`,
  Navigate: () => "*",
};
