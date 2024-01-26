import { ReactNode } from 'react';
import { Stack, Typography, useTheme } from '@mui/material';
import { ThemeOptions } from '@mui/material/styles';
import { useModal } from '../../../hooks/modal-hook.tsx';
import { CloseIcon, CloseIconWithRound } from '../../../icons/close-icon-with-round.tsx';
import { ButtonComponent } from '../button/primary-button/primary-button.tsx';

interface ErrorSnackbarProps {
  text: ReactNode;
}

export function ErrorSnackbar({ text }: ErrorSnackbarProps) {
  const theme = useTheme<ThemeOptions>();
  const { closeSnackbar } = useModal();

  return (
    <Stack
      direction="row"
      spacing={2}
      sx={{
        bgcolor: 'white',
        maxWidth: '384px',
        padding: '16px 24px',
        borderRadius: '5px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        position: 'relative',
      }}
    >
      <div style={{ flexShrink: 0, marginTop: '2px' }}>
        <CloseIconWithRound color={theme.palette.redLight} />
      </div>

      <Typography color="textDark" component="p" sx={{ paddingRight: '5px' }}>
        {text}
      </Typography>

      <ButtonComponent
        sx={{ position: 'absolute', top: '16px', right: '24px', padding: 0, margin: 0 }}
        onClick={closeSnackbar}
      >
        <CloseIcon color={'rgba(0,0,0,.45)'} size={'14px'} />
      </ButtonComponent>
    </Stack>
  );
}
