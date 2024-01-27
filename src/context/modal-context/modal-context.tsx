import {
  createContext,
  PropsWithChildren,
  ReactElement,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { setBodyOverflowHidden } from "../../utils/style-utils.ts";
import { Snackbar } from "@mui/material";
import { ZIndex } from "../../constants/style-constants.ts";
import { SnackbarId } from "../../constants/snackbar-constants.ts";

interface ModalSettings {
  content: ReactNode | string | null;
  snackBarSettings?: {
    vertical: "top" | "bottom";
    horizontal: "left" | "right";
  };

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

interface SnackBarSettings {
  content: undefined | ReactElement;
  isOpen?: boolean;
  id: SnackbarId | null;
}

interface ModalContextProps {
  provideModalSettings: (settings: ModalSettings) => void;
  provideSnackbarSettings: (settings: SnackBarSettings) => void;
  closeModal: () => void;
  closeSnackbar: () => void;
}

export const ModalContext = createContext<ModalContextProps>({
  provideModalSettings: () => {},
  provideSnackbarSettings: () => {},
  closeModal: () => {},
  closeSnackbar: () => {},
});

const ModalInitialSettings: ModalSettings = {
  content: null,
  modalActions: {
    cancel: { buttonText: "Cancel", onClick: () => {} },
  },
};

const SnackbarInitialSettings: SnackBarSettings = {
  content: undefined,
  isOpen: false,
  id: null,
};

export function ModalProvider({ children }: PropsWithChildren) {
  const [modalSettings, setModalSettings] =
    useState<ModalSettings>(ModalInitialSettings);
  const [snackbarSettings, setSnackbarSettings] = useState<SnackBarSettings>(
    SnackbarInitialSettings
  );

  const provideModalSettings = useCallback(
    (settings: ModalSettings) => setModalSettings(settings),
    []
  );

  const provideSnackbarSettings = useCallback(
    (settings: SnackBarSettings) =>
      setSnackbarSettings({ ...settings, isOpen: true }),
    []
  );

  const closeModal = useCallback(
    () => setModalSettings(ModalInitialSettings),
    []
  );

  const closeSnackbar = useCallback(
    () => setSnackbarSettings(SnackbarInitialSettings),
    []
  );

  useEffect(() => {
    if (modalSettings.content) setBodyOverflowHidden(true);

    return () => setBodyOverflowHidden(false);
  }, [modalSettings.content]);

  const modalContextValue = useMemo(
    () => ({
      provideModalSettings,
      provideSnackbarSettings,
      closeModal,
      closeSnackbar,
    }),
    [closeModal, closeSnackbar, provideModalSettings, provideSnackbarSettings]
  );

  useEffect(() => {
    const handleHistoryChange = () => closeModal();

    window.addEventListener("popstate", handleHistoryChange);

    return () => window.removeEventListener("popstate", handleHistoryChange);
  }, [closeModal]);

  return (
    <ModalContext.Provider value={modalContextValue}>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        sx={{ zIndex: ZIndex.ForthLayer }}
        onClose={closeSnackbar}
        open={snackbarSettings.isOpen}
        autoHideDuration={6000}
        key={snackbarSettings.id}
      >
        <div>{snackbarSettings.content}</div>
      </Snackbar>

      {modalSettings.content}

      {children}
    </ModalContext.Provider>
  );
}
