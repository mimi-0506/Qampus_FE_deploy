import {create} from 'zustand';
import {createJSONStorage, persist} from 'zustand/middleware';

interface SearchState {
  query: string;
  setQuery: (query: string) => void;
}

export const useSearchStore = create<SearchState>()(
  persist(
    set => ({
      query: '',
      setQuery: query => set({query}),
    }),
    {
      name: 'search-storage',
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);
