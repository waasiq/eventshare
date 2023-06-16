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
      width: '100%', // Adjusted to occupy the full width of the container
      padding: '20px 20px',
      height: '100%', // Added to enforce equal card heights
      display: 'flex', // Added to enable vertical alignment
      flexDirection: 'column', // Added to align content vertically
      justifyContent: 'space-between', 
      '&:hover': {
        cursor: 'pointer',
        boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.2)',
      },
    },
  };
  
  export default activitiesStyles;
  