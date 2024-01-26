

import { SxStyleType } from '../../../../types/theme-types.ts';

interface DropdownItemStyleProps {
  hasSeparator?: boolean;

}

type RuleName = 'dropdownItemContainer';

export const dropdownItemStyles = ({ hasSeparator }: DropdownItemStyleProps): SxStyleType<RuleName> => ({
  dropdownItemContainer: {
    padding: '12px 16px',
    fontSize: '14px',
    width: '100%',
    boxSizing: 'border-box',
    textAlign: 'left',
    borderTopWidth: hasSeparator ? '1px' : '',
    borderTopStyle: hasSeparator ? 'solid' : '',
    borderTopColor: hasSeparator ? 'gray100' : '',
    color: 'textDarker',
    '&:hover': {
      bgcolor:  'greenLight',
      color:  'primary.main',
    },
  },
});
