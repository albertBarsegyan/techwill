import { ReactNode } from 'react';
import { navigationButtonStyles } from './navigation-button.styles.ts';
import { useLocation } from 'react-router-dom';
import { InternalErrorMessage } from '../../../../constants/message-constants.ts';
import { Box, Link as MaterialLink, SxProps } from '@mui/material';
import { ButtonComponent } from '../primary-button/primary-button.tsx';

interface NavigationButtonProps {
  sx?: SxProps<any>;
  activeSx?: SxProps<any>;
  children: ReactNode;
  setActive?: boolean;
  buttonSettings?: {
    onClick: () => void;
  };
  linkSettings?: {
    externalLink?: boolean;
    path: string;
  };
}

const getNavigationButtonStyles = (setActive: boolean, buttonStyles: any) =>
  setActive ? buttonStyles.navigationButtonLinkActive : buttonStyles.navigationButtonLink;

export function NavigationButton({
  children,
  setActive = false,
  buttonSettings,
  linkSettings,
  sx,
  activeSx,
}: NavigationButtonProps) {
  const buttonStyles = navigationButtonStyles({ setActive, sx, activeSx });

  const { pathname } = useLocation();

  const areAllSettingsExist = buttonSettings && linkSettings;

  if (areAllSettingsExist) {
    return <div style={{ color: 'red' }}>{InternalErrorMessage.NavigationButton()}</div>;
  }

  if (linkSettings?.externalLink)
    return (
      <MaterialLink sx={getNavigationButtonStyles(setActive, buttonStyles)} href={linkSettings.path}>
        {children}
        <Box sx={setActive ? buttonStyles.bottomBorder : buttonStyles.bottomBorderHidden} />
      </MaterialLink>
    );

  if (linkSettings) {
    const isActivePath = pathname === linkSettings.path;

    return (
      <MaterialLink
        sx={isActivePath ? buttonStyles.navigationButtonLinkActive : buttonStyles.navigationButtonLink}
        href={linkSettings.path}
      >
        {children}

        <Box sx={setActive ? buttonStyles.bottomBorder : buttonStyles.bottomBorderHidden} />
      </MaterialLink>
    );
  }

  if (buttonSettings) {
    return (
      <ButtonComponent
        sx={setActive ? buttonStyles.navigationButtonActive : buttonStyles.navigationButton}
        onClick={buttonSettings.onClick}
      >
        {children}

        <Box sx={setActive ? buttonStyles.bottomBorder : buttonStyles.bottomBorderHidden} />
      </ButtonComponent>
    );
  }

  return <div style={{ color: 'red' }}>{InternalErrorMessage.NavigationButton()}</div>;
}
