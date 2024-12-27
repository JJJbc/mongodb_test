import { atom } from 'recoil';

// Nav, Form, App
export const userState = atom({
  key: 'userState',
  default: {
    user: null,
    loading: true,
  },
});
