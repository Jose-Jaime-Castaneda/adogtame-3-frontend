import { LoginErrorResponse, LoginSuccessResponse, UserLogin } from '@/types/login';
import { userLogin, userLogout } from '@/utils/userAPI';
import { log } from 'console';
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

type StoreState = {
    isLoading: boolean;
    token: string;
    loginError: string;
    changeLoader: (value: boolean) => void;
    userLogin: (user: UserLogin) => Promise<boolean>;
    userLogOut: (token: string) => Promise<boolean>
};

export const useStore = create<StoreState>()(
    devtools(
        persist(
            (set) => ({
                isLoading: false,
                token: '',
                loginError: '',
                changeLoader: (value) => {
                    set({ isLoading: value });
                },
                userLogin: async (user) => {
                    const loginResponse = await userLogin(user)
                    //console.log(loginResponse);
                    if ((loginResponse as LoginSuccessResponse).status === 'success') {
                        set({ token: (loginResponse as LoginSuccessResponse).token })
                        return true
                    } else {
                        //console.log((loginResponse as LoginErrorResponse).error);
                        set({ loginError: (loginResponse as LoginErrorResponse).error })
                        return false
                    }
                },
                userLogOut: async (token) => {
                    const userLogOut = await userLogout(token)
                    //console.log(userLogOut);
                    if (userLogOut.status === 200) {
                        set({ token: '' })
                        return true
                    } else {
                        return false
                    }
                }
            }),
            {
                name: 'userInfo',
                partialize: (state) => ({ token: state.token }),
            }
        )
    )
);
