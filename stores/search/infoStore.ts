import {createStore} from 'zustand/vanilla';

export type InfoState = {
  userId: number | null;
  name: string | null;
  email: string | null;
  nickname: string | null;
  universityName: string | null;
  major: string | null;
  profileImageUrl: string | null;
};

export type InfoActions = {
  setInfo: (newInfo: Partial<InfoState>) => void;
  logout: () => void;
};

export type InfoStore = InfoState & InfoActions;

export const defaultInitState: InfoState = {
  userId: null,
  name: null,
  email: null,
  nickname: null,
  universityName: null,
  major: null,
  profileImageUrl: null,
};

export const createInfoStore = (initState: InfoState = defaultInitState) => {
  return createStore<InfoStore>()(set => ({
    ...initState,
    setInfo: newInfo => set(state => ({...state, ...newInfo})),
    logout: () => set(() => ({...defaultInitState})),
  }));
};
