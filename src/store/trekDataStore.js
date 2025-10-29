import { create } from "zustand";

const useTrekStore = create((set) => ({
    treks: [],
    setTreks: (data) => set({ treks: data }),
}));

export default useTrekStore;
