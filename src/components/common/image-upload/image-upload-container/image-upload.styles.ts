import { SxStyleType } from '../../../../types/theme-types.ts';
import { ZIndex } from '../../../../constants/style-constants.ts';

type RuleNames =
  | 'wrapper'
  | 'fileCard'
  | 'fileInputs'
  | 'input'
  | 'plusIconWrapper'
  | 'upload'
  | 'info'
  | 'imageContainer'
  | 'actionButton'
  | 'popoverItem';

export const imageUploadStyles = (): SxStyleType<RuleNames> => ({
  wrapper: {
    height: '160px',
    width: '231px',
    transition: '0.2s',

    '&:hover .upload': {
      color: 'primary.main',
    },

    '&:hover .plusIconWrapper': {
      color: 'primary.main',
    },
    '&:hover .fileCard': {
      borderColor: 'primary.main',
    },
  },

  fileCard: {
    padding: '16px 30px',
    display: 'flex',
    height: '160px',
    width: 'inherit',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '4px',

    border: '2px dashed #dee4e8',
    bgcolor: '#fafafa',
    cursor: 'pointer',
    transition: '0.2s',
  },

  fileInputs: {
    position: 'relative',
    marginBottom: '4px',
  },

  input: {
    position: 'relative',
    textAlign: 'right',
    opacity: 0,
    bgcolor: 'transparent',
    height: '46px',
    maxWidth: '200px',
    cursor: 'pointer',
    display: 'none',
    padding: 0,
    '& input': {
      padding: '0',
    },
  },

  plusIconWrapper: {
    color: 'textDark',
    fontSize: '1.1rem',
    transition: '0.2s all',
    ':hover': {
      bgcolor: 'transparent',
    },
  },

  upload: {
    fontFamily: ' Reader, sans-serif',
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '24px',
    transition: '0.2s',
    marginBottom: '16px',
    color: '#5d676b',
    justifyContent: 'center',
    letterSpacing: '.5px',
    textAlign: 'center',
  },

  info: {
    color: '#9fa6ad',
    fontSize: '12px',
    letterSpacing: '.4px',
    lineHeight: '16px',
    margin: '0 auto',
    maxWidth: '400px',
    textAlign: 'center',
    whiteSpace: 'normal',
    width: '80%',
  },

  popoverItem: {
    color: 'redLight',
    padding: '12px 38px 12px 16px',
  },

  imageContainer: {
    width: '100%',
    border: '1px solid #dee4e8',
    borderRadius: '4px',
    backgroundColor: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20px',
    marginBottom: '20px',
    position: 'relative',
    padding: '6px',
  },
  actionButton: {
    position: 'absolute',
    bottom: '3px',
    right: '3px',
    width: '24px',
    height: '24px',
    borderColor: 'gray200',
    padding: 0,
    bgcolor: 'white',
    zIndex: ZIndex.ThirdLayer,
    '&:hover': {
      borderColor: 'gray200',
      bgcolor: 'white',
    },
  },
});
