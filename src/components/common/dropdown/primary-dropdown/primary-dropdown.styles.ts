import { SxStyleType } from '../../../../types/theme-types.ts';
import { Theme } from '@mui/material';
import { DropdownArrowSettings, DropdownPositionProps } from './primary-dropdown-types.ts';

type RuleNames = 'select' | 'selectItem' | 'bottomLine' | 'items';

interface DropdownStyleProps extends DropdownArrowSettings, DropdownPositionProps {
  bottomLineDistance?: number;
  isOptionHovered?: boolean;
}

export const primaryDropdownStyles =
  (theme?: Theme) =>
  (props?: DropdownStyleProps): SxStyleType<RuleNames> => ({
    select: {
      border: 'none',
      paddingTop: 0,
      paddingBottom: 0,
      paddingLeft: 0,
      outline: 0,
      width: '100%',
      '& .MuiSelect-icon': {
        display: props?.isHidden ? 'none' : 'block',
        marginLeft: props?.distance ? `${theme?.spacing(props.distance)}px` : null,
        color: props?.color ?? null,
      },

      '& fieldset': {
        border: 'none',
      },
      '& .MuiSelect-select': {
        paddingTop: 0,
        paddingBottom: 0,
      },

      '& fieldset.MuiOutlinedInput-notchedOutline': {
        border: 'none',
      },
    },

    bottomLine: {
      position: 'absolute',
      top: `calc(100% + ${props?.bottomLineDistance}px)`,
      width: '100%',
      height: '2px',
      borderRadius: '2px 2px 0px 0px',
      bgcolor: 'primary.main',
    },

    selectItem: {
      padding: 0,
      margin: 0,
      width: '100%',
      background: 'transparent',
    },
    items: {
      '& .Mui-selected, && .Mui-selected.MuiMenuItem-root': {
        backgroundColor: props?.isOptionHovered ? '#fafafa' : 'greenLight',
      },
      '& .Mui-selected.MuiMenuItem-root:hover, & .MuiMenuItem-root:hover': {
        backgroundColor: 'greenLight',
      },
    },
  });
