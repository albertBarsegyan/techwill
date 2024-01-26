import { SxStyleType } from '../../../../types/theme-types.ts';

type RuleNames = 'wrapper' | 'multipoint';

export const paginationStyles = (): SxStyleType<RuleNames> => ({
  wrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '0 8px',
  },

  multipoint: {
    width: '32px',
    height: '32px',
    margin: '0 10px',
  },
});
