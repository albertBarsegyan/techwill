import { useContext } from "react";
import { ModalContext } from "../context/modal-context/modal-context.tsx";

export function useModal() {
  return useContext(ModalContext);
}
