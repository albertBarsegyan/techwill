import { SxStyleType } from '../../../../types/theme-types.ts';

type RuleNames = 'paginationButton';

interface PaginationButtonStyleProps {
  isActive?: boolean;
}

export const paginationButtonStyles = ({ isActive }: PaginationButtonStyleProps): SxStyleType<RuleNames> => ({
  paginationButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: isActive ? 'pointer' : 'not-allowed',
    width: '32px',
    height: '32px',
    borderStyle: 'solid',
    borderWidth: '1px',
    minWidth: 'auto',
    borderColor: 'gray200',
    color: isActive ? 'teal500' : 'gray300',
    borderRadius: '4px',
    bgcolor: 'white',

    padding: 0,
    '&:hover': {
      bgcolor: 'white',
      color: isActive ? 'primary.main' : null,
      borderColor: isActive ? 'primary.main' : null,
    },
  },
});
