
export const setSearch = (activity: any, type:any) => {
    return {
        type: "SET_ACTIVITY_SEARCH",
        payload: [activity,type]
    };
}