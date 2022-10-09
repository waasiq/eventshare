const profileStyle = {
  container: {
    display: 'flex'
  },
  coverPictureContainer: {
    width: '100%',
    height: '40vh',
    position: 'relative'
  },
  coverPicture: {
    width: '100vw',
    height: '100%',
    objectFit: 'cover'
  },
  profilePictureContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-300%, -40%)',
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    overflow: 'hidden',
    border: '5px solid #fff'
  },
  profilePicture: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  profileInfo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    transform: 'translate(-20% , 0%)',
    marginTop: '20px'
  },
  name: {
    fontSize: '1.5rem',
    fontWeight: 600
  },
  username: {
    fontSize: '1rem',
    fontWeight: 400,
    color: '#555'
  },
  tabs: {
    margin: '2% 25%'
  }
} as const

export default profileStyle
