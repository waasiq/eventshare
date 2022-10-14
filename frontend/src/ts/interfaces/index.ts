export default interface loginState {
    auth: {
        token: string,
        user: {
            _doc: any;
            name: string;
            username: string;
            email: string;
            password: string;
            avatar: string;
            role: string;
            gender: string;
            country: string;
            city: string;
        }
    }
    notify: {
        loading: string,
        success: string,
        error: string
    }
}