import { SxStyleType } from '../../../types/theme-types.ts';

type RuleName = 'titleContainer' | 'pickerWrapper' | 'pickerColorBox' | 'colorNameBox';

export const colorPickerStyles = ({ color }: { color: string }): SxStyleType<RuleName> => ({
  titleContainer: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  pickerWrapper: {
    width: '150px',
    height: '47px',
    display: 'flex',
    justifyContent: 'flex-start',
    marginTop: '20px',
    '&:hover .colorNameBox': {
      borderColor: 'primary.main',
    },
  },
  pickerColorBox: {
    width: '47px',
    backgroundColor: color,
    border: '1px solid #D6D6D6',
    borderRight: 'none',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  colorNameBox: {
    width: '103px',
    backgroundColor: '#ffff',
    color: 'rgba(0, 0, 0, 0.65)',
    fontSize: '13px',
    border: '1px solid #D6D6D6',
    borderRadius: '0px 5px 5px 0px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: '0.2s',
  },
});
