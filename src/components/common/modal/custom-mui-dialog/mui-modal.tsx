import React, { ReactNode } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

interface CustomMuiDialogProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  modalStyle?: React.CSSProperties;
}

const CustomMuiDialog: React.FC<CustomMuiDialogProps> = ({ open, onClose, children, modalStyle }) => {
  return (
    <Modal open={open} onClose={onClose} aria-labelledby="modal-title" aria-describedby="modal-description">
      <Box sx={modalStyle}>{children}</Box>
    </Modal>
  );
};

export default CustomMuiDialog;
