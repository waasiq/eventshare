const activitiesStyles = {
    mainContainer: {
        display: 'flex'
    },
    activitiesContainer: {
        display: 'flex',
        flex: 0.75,
        flexDirection: 'column',
    },
    cardsContainer: {
        display: 'flex',
        flexDirection: 'row',
    },
    card: {
        width: '80%',
        padding: '20px 20px',   
        '&:hover': {
            cursor: 'pointer',
            boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.2)',
        },
    },
}

export default activitiesStyles


