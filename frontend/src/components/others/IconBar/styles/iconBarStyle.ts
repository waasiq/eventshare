const iconBarStyle = {
  container: {
    paddingLeft: '20px',
    flex: 0.25
  },
  iconsContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    cursor: 'pointer',
    boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.14)',
    borderRadius: '6px',
    width: '95%',
    padding: '15px 0'
  },
  icon: {
    fontSize: '1.5rem',
    width: '95%',
    padding: '20px',
    borderRadius: '10px',
    alignItems: 'flex-end',
    '&:hover': {
      color: '#e6eff1',
      backgroundColor: '#7b858b'
    }
  },
  iconImg: {
    width: '1.5rem',
    height: '1.5rem',
    padding: '10px'
  },
  iconText: {
    color: '#fff',
    fontWeight: 'bold'
  }
} as const

export default iconBarStyle
