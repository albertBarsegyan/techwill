import { SxStyleType } from '../../../types/theme-types.ts';

type RuleNames = 'button';

export const buttonGroupSelectStyles = (): SxStyleType<RuleNames> => ({
  button: {
    color: 'rgba(0,0,0,0.65)',
    textTransform: 'none',
    fontWeight: 'bolder',
    fontSize: '12px',
    transition: '.3s',
    padding: '0 15px',
    '&:hover': {
      bgcolor: 'transparent',
      color: 'primary.main',
    },

    '&.Mui-selected': {
      borderColor: 'primary.main',
      borderLeftColor: 'primary.main',
      color: 'primary.main',

      bgcolor: 'transparent',
      '&:hover': {
        bgcolor: 'transparent',
      },
    },

    '&.Mui-selected.MuiToggleButtonGroup-grouped:not(:first-of-type)': {
      borderLeftColor: 'primary.main',
    },
  },
});
