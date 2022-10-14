import { postDataAPI } from "../../utils/fetchApi"

export const TYPES = {
    AUTH: 'AUTH'
}

export const LoginAction = (data: any) => async (dispatch: any) => {
    try {
        const res = await postDataAPI('login', data);

        dispatch({
            type: 'AUTH',
            payload: {
                token: res.data.accessToken,
                user: res.data.user
            }
        })

        localStorage.setItem('firstLogin', JSON.stringify(true));

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
