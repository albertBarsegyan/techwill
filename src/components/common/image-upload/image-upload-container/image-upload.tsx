import { Box, Grid, MenuItem, Popover, Stack, TextField, Typography, useTheme } from '@mui/material';
import { PlusBoldIcon } from '../../../../icons/plus-icon.tsx';
import { imageUploadStyles } from './image-upload.styles.ts';
import React, { FC, ReactNode, useId } from 'react';
import { ThemeOptions } from '@mui/material/styles';
import { fileToBase64, imageSourceNormalizer, imageValidation, ValidImages } from '../../../../utils/image-utils.ts';
import { MultipointBigIcon } from '../../../../icons/multipoint-icon.tsx';
import { ButtonComponent } from '../../button/primary-button/primary-button.tsx';
import { ImageLazyLoader } from '../../image-lazy-loader/image-lazy-loader.tsx';
import { DeleteOutlinedIcon } from '../../../../icons/delete-icon.tsx';
import { useModal } from '../../../../hooks/modal-hook.tsx';
import { SnackbarId } from '../../../../constants/snackbar-constants.ts';
import { ImageUploadErrorSnackbar } from '../image-upload-error-snackbar/image-upload-error-snackbar.tsx';

interface ImageUploadProps {
  handleFileChange: (uploadedImage: File, base64Image: string | null) => void;
  image: File | string | null;
  handleRemove: () => void;
  dataIntercomTarget?: string;
  helperText?: string | ReactNode;
  imageMaxSizeInMb: number;
}

const ValidImageInfoForFileUpload = ValidImages.map((imageType) => `image/${imageType}`).join(', ');

export const ImageUpload: FC<ImageUploadProps> = ({
  image,
  handleFileChange,
  handleRemove,
  dataIntercomTarget,
  helperText,
  imageMaxSizeInMb,
}) => {
  const styles = imageUploadStyles();
  const id = useId();
  const theme = useTheme<ThemeOptions>();
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
  const { provideSnackbarSettings } = useModal();

  const imageToShow = imageSourceNormalizer(image);

  const handleClose = () => setAnchorEl(null);

  const onFileChange = async (event: any) => {
    const uploadFile = event.target.files[0];

    const isFileValid = imageValidation(uploadFile, imageMaxSizeInMb);

    const base64Image = await fileToBase64(uploadFile);

    if (isFileValid) {
      handleFileChange(uploadFile, base64Image);
    } else {
      provideSnackbarSettings({
        content: <ImageUploadErrorSnackbar imageMaxSize={imageMaxSizeInMb} />,
        id: SnackbarId.ImageUploadError,
      });
    }

    if (event?.target?.value) event.target.value = null;
  };

  if (image) {
    return (
      <Box sx={styles.imageContainer}>
        <ImageLazyLoader style={{ width: '100%', height: 'auto' }} src={imageToShow} alt="" />

        <ButtonComponent
          sx={styles.actionButton}
          variant="outlined"
          onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
            setAnchorEl(event.currentTarget);
          }}
        >
          <MultipointBigIcon color={theme.palette.textDark} />
        </ButtonComponent>

        <Popover
          open={Boolean(anchorEl)}
          onClose={handleClose}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 30,
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <MenuItem
            onClick={() => {
              handleRemove();
              setAnchorEl(null);
            }}
            sx={styles.popoverItem}
          >
            <Stack spacing={1} direction="row" alignItems="center">
              <DeleteOutlinedIcon color="currentColor" />
              <Typography>Delete Image</Typography>
            </Stack>
          </MenuItem>
        </Popover>
      </Box>
    );
  }

  return (
    <Box sx={styles.wrapper}>
      <label htmlFor={id} style={{ cursor: 'pointer' }} data-intercom-target={dataIntercomTarget}>
        <Grid container sx={styles.fileCard} className="fileCard">
          <Grid item sx={styles.fileInputs}>
            <TextField
              id={id}
              sx={styles.input}
              type="file"
              inputProps={{ accept: ValidImageInfoForFileUpload }}
              onChange={onFileChange}
            />
            <Box className="plusIconWrapper" sx={styles.plusIconWrapper}>
              <PlusBoldIcon />
            </Box>
          </Grid>

          <Typography sx={styles.upload} className="upload">
            Upload Image
          </Typography>
          <Box sx={styles.info}>{helperText}</Box>
        </Grid>
      </label>
    </Box>
  );
};
