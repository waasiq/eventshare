import { GLOBALTYPES } from "./globalTypes"; 
import { postDataAPI } from "../../utils/fetchApi";

export const TYPES = {
    AUTH: 'AUTH'
}

export const LoginAction = (data: any) => async (dispatch: any) => {
    try {
        const res = await postDataAPI('login', data);

        dispatch({
            type: GLOBALTYPES.AUTH,
            payload: {
                token: res.data.accessToken,
                user: res.data.user
            }
        })

        localStorage.setItem('firstLogin',"true");

        dispatch({
            type: 'NOTIFY',
            payload: {
                success: res.data.status
            }
        })
    }
    catch (err: any) {
        dispatch({
            type: 'NOTIFY',
            payload: {
                error: err.response.data.message
            }
        })
    }
}


export const refreshToken = () => async (dispatch: any) => {
    const firstLogin = localStorage.getItem('firstLogin');
    if (firstLogin) {
        dispatch({ type: 'NOTIFY', payload: { loading: true } });
        try {
            const res = await postDataAPI('refresh_token');
            dispatch({
                type: 'AUTH',
                payload: {
                    token: res.data.accessToken,
                    user: res.data.user
                }
            })

            dispatch({ type: 'NOTIFY', payload: {} });
        }
        catch (err: any) {
            dispatch({
                type: 'NOTIFY',
                payload: {
                    error: err.response.data.message
                }
            })
        }
    } 
} 

export const logout = () => async (dispatch: any) => {
    try {
        localStorage.removeItem('firstLogin');
        localStorage.removeItem('user');
        await postDataAPI('logout');
        window.location.href = "/";
    }
    catch (err: any) {
        dispatch({
            type: 'NOTIFY',
            payload: {
                error: err.response.data.message
            }
        })
    }
}

export const register = (data: any) => async (dispatch: any) => {
    try{
        const res = await postDataAPI('register', data);
 
        dispatch({
            type: GLOBALTYPES.AUTH,
            payload: {
                token: res.data.accessToken,
                user: res.data.user
            }
        })

        localStorage.setItem("firstLogin", "true");
        
        dispatch({
            type: 'NOTIFY',
            payload: {
                success: res.data.status
            }
        })
    } catch (err: any) {
        dispatch({
            type: 'NOTIFY',
            payload: {
                error: err.response.data.message
            }
        })
    }
};