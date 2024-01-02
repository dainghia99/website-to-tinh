import { create } from "zustand";

interface isOpenClose {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useOpenClose = create<isOpenClose>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
