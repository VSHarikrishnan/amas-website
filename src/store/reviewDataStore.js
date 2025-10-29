import { create } from "zustand";

const useReviewDataStore = create((set) => ({
    reviews: [],
    setReviews: (data) => set({ reviews: data }),
}));

export default useReviewDataStore;
