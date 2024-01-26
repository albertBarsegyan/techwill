import { ReactNode, useRef } from 'react';
import { buttonByStatusStyles, primaryModalUseStyles } from './primary-modal.styles.ts';
import { useOutsideClick } from '../../../../hooks/outside-click-hook.tsx';
import { Box, Stack } from '@mui/material';
import { ButtonComponent } from '../../button/primary-button/primary-button.tsx';

interface ModalSettings {
  content: ReactNode | string | null;
  modalActions?: {
    success?: {
      buttonText: string;
      onClick: () => void;
    };
    danger?: {
      buttonText: string;
      onClick: () => void;
    };
    cancel: {
      buttonText: string;
      onClick?: () => void;
    };
  };
}

interface ModalProps {
  settings: ModalSettings;
  onClose: () => void;
}

interface ModalGeneralButtonProps {
  success?: {
    buttonText: string;
    onClick: () => void;
  };
  danger?: {
    buttonText: string;
    onClick: () => void;
  };
  onClose: () => void;
}

const ModalGeneralButton = ({ success, danger, onClose }: ModalGeneralButtonProps) => {
  const styles = buttonByStatusStyles();

  if (danger) {
    return (
      <ButtonComponent
        sx={styles.dangerButton}
        onClick={() => {
          danger?.onClick();
          onClose();
        }}
      >
        {danger.buttonText}
      </ButtonComponent>
    );
  }

  if (success) {
    return (
      <ButtonComponent
        sx={styles.successButton}
        onClick={() => {
          success?.onClick();
          onClose();
        }}
      >
        {success.buttonText}
      </ButtonComponent>
    );
  }

  return null;
};

export function PrimaryModal({ settings, onClose }: ModalProps) {
  const styles = primaryModalUseStyles();
  const { content } = settings;
  const modalActions = settings?.modalActions;

  const modalContentRef = useRef(null);

  useOutsideClick(modalContentRef, onClose);

  return (
    <Box sx={styles.modalContainer}>
      <Box sx={styles.content} ref={modalContentRef}>
        {content}

        <Stack direction={'row'} alignItems="center" justifyContent="flex-end" style={{ marginTop: '24px' }}>
          <Stack direction={'row'} style={{ gap: '0 16px' }} alignItems="center">
            <ButtonComponent
              sx={styles.cancelButton}
              onClick={() => {
                onClose();
                modalActions?.cancel.onClick && modalActions.cancel.onClick();
              }}
            >
              {modalActions?.cancel.buttonText}
            </ButtonComponent>
            <ModalGeneralButton onClose={onClose} success={modalActions?.success} danger={modalActions?.danger} />
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}
