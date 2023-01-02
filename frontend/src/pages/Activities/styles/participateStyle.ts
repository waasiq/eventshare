const participateStyle = {
    activities: {
        display: 'flex'
    },
    activities__container : {
        display: 'flex',
        flexDirection: 'column',
    },
    activities__container__title: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    },
    activities__container__cards : {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    },
    card: {
        padding: '20px 20px',
        width: '80%',
        '&:hover': {
            cursor: 'pointer',
            boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.2)',
        },
    },
}

export default participateStyle;