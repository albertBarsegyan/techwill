import { SxStyleType } from '../../../../types/theme-types.ts';
import { SxProps } from '@mui/material';

type RuleNames =
  | 'navigationButton'
  | 'navigationButtonLink'
  | 'navigationButtonActive'
  | 'bottomBorder'
  | 'bottomBorderHidden'
  | 'navigationButtonLinkActive';

interface NavigationButtonStyleProps {
  setActive: boolean;
  sx?: SxProps<any>;
  activeSx?: SxProps<any>;
}

export const navigationButtonStyles = ({
  setActive,
  sx,
  activeSx,
}: NavigationButtonStyleProps): SxStyleType<RuleNames> => ({
  navigationButton: {
    textDecoration: 'none',
    fontSize: '1rem',
    lineHeight: '1.5rem',
    border: 0,
    bgcolor: 'transparent',
    cursor: 'pointer',
    color: 'textDark',
    '&:hover': {
      color: 'primary.main',
      bgcolor: 'transparent',
    },
    ...sx,
  },
  navigationButtonActive: {
    textDecoration: 'none',
    border: 0,
    cursor: 'pointer',
    color: 'primary.main',
    fontSize: '1rem',
    lineHeight: '1.5rem',
    bgcolor: 'transparent',
    ...activeSx,
  },

  bottomBorder: {
    borderRadius: '2px 2px 0px 0px',
    height: '2px',
    bgcolor: 'primary.main',
    width: '100%',
    position: 'absolute',
    top: 'calc(100% + 23px)',
  },

  bottomBorderHidden: {
    height: '2px',
  },

  navigationButtonLink: {
    textDecoration: 'none',
    color: setActive ? 'primary.main' : 'textDark',
    fontSize: '1rem',
    lineHeight: '1.5rem',
    '&:hover': {
      color: 'primary.main',
    },
    ...sx,
  },

  navigationButtonLinkActive: {
    textDecoration: 'none',
    fontSize: '1rem',
    border: 0,
    bgcolor: 'transparent',
    cursor: 'pointer',
    color: 'primary.main',
    position: 'relative',
    lineHeight: '1.5rem',
    '&:hover': {
      color: 'primary.main',
    },
    ...activeSx,
  },
});
