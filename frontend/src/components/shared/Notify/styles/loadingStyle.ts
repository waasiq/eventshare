const loadingStyle = {
    position: {
        position: 'fixed',
        textAlign: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: '#0008',
        zIndex: 50
    },
    loading:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
} as const 

export default loadingStyle;