import { SxStyleType } from '../../../types/theme-types.ts';

type RuleNames = 'separator';

interface SeparatorStyleProps {
  color?: string;
  topSpace?: number;
  bottomSpace?: number;
}

export const separatorStyles = ({ color, topSpace, bottomSpace }: SeparatorStyleProps): SxStyleType<RuleNames> => ({
  separator: {
    width: '100%',
    marginTop: `${topSpace}px !important`,
    marginBottom: `${bottomSpace}px !important`,
    bgcolor: color ?? 'gray100',
  },
});
