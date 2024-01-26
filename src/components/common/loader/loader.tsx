import { CircularProgress, Stack } from '@mui/material';

export function Loader({ isFullScreen = true, color = 'primary.main' }: { isFullScreen?: boolean; color?: string }) {
  const loaderElement = <CircularProgress sx={{ color }} />;

  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{
        minHeight: isFullScreen ? '100vh' : 'auto',
        marginTop: isFullScreen ? 0 : '100px',
      }}
    >
      {loaderElement}
    </Stack>
  );
}

export const ButtonLoader = ({ color = 'primary.main' }: { color?: string }) => (
  <CircularProgress size={20} sx={{ color }} />
);
