const loadingStyle = {
    position: {
        position: 'fixed',
        textAlign: 'center',
        top: 0,
        left: 0,
        zIndex: 50
    },
    loading:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
} as const 

export default loadingStyle;