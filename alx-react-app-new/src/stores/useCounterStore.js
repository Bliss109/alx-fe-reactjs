import { create } from 'zustand';

const initialState = { count: 0 };

const useCounterStore = create((set) => ({
  ...initialState,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));

export default useCounterStore;

