const activitiesStyles = {
    mainContainer: {
        display: 'flex'
    },
    activitiesContainer: {
        flex: 0.75,
        display: 'flex',
        flexDirection: 'column',
    },
    cardsContainer: {
        display: 'flex',
        flexDirection: 'row',
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

export default activitiesStyles


