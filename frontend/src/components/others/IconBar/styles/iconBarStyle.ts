const iconBarStyle = {
  container: {
    paddingLeft: '20px',
    flex: 0.25
  },
  iconsContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    cursor: 'pointer',
    color: '#7b858b',
    boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.14)',
    borderRadius: '6px',
    width: '95%',
    padding: '15px 0',
    backgroundColor: '#1b2730'
  },
  icon: {
    fontSize: '1.5rem',
    padding: '20px',
    '&:hover': {
      color: '#e6eff1'
    }
  },
  iconImg: {
    width: '1.5rem',
    height: '1.5rem',
    padding: '10px'
  },
  iconText: {
    color: '#fff',
    fontSize: '1.5rem',
    width: '20%',
    padding: '10px',
    fontWeight: 'bold'
  }
} as const

export default iconBarStyle
