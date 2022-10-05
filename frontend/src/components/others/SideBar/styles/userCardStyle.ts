const userCardStyle = {
  card: {
    border: '0',
    marginBottom: '20px',
    marginTop: '20px',
    borderRadius: '6px',
    color: '#7b858b',
    background: '#1b2730',
    width: '80%',
    boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.14)',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    minWidth: '0',
    wordWrap: 'break-word',
    fontSize: '.875rem'
  },
  coverPic: {
    objectFit: 'contain',
    width: '115%',
    margin: '-20px 0 0 -20px'
  },
  avatar: {
    width: '100px',
    height: '100px',
    margin: '-50px auto 0',
    borderRadius: '50%',
    overflow: 'hidden',
    padding: '0'
  },
  content: {
    textAlign: 'center',
    padding: '15px 20px'
  },
  name: {
    fontSize: '15px',
    color: '#e6eff1'
  },
  username: {
    fontSize: '13px',
    color: '#7b858b'
  },
  bio: {
    fontSize: '13px',
    color: '#e6eff1'
  },
  stats: {
    fontSize: '13px',
    color: '#7b858b',
    display: 'flex',
    justifyContent: 'center',
    padding: '20px 0',
    flexWrap: 'wrap',
    boxShadow: '0px -2px 0px 0px #28343e, 0px 2px 0px 0px #28343e'
  },
  stat: {
    margin: '0 10px'
  },
  statLabel: {
    fontSize: '11px',
    color: '#7b858b',
    textTransform: 'uppercase',
    fontWeight: 400,
    display: 'block',
    marginBottom: '5px'
  },
  statNumber: {
    fontSize: '18px',
    color: '#e6eff1',
    fontWeight: 300,
    display: 'block',
    lineHeight: '1',
    padding: '2px 20px'
  }
}

export default userCardStyle
