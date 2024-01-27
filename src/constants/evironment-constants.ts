export const enum ProjectEnvironmentVariant {
  Production = "Production ",
  Development = "Development",
}

export const ProjectCurrentEnvironment = import.meta.env.VITE_ENVIRONMEN;
