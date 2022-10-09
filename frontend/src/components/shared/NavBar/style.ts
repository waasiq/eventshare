const navStyle = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: '#b7c8d0'
  },
  name: {
    fontSize: '1.5rem'
  },
  navLinks: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '-30px',
    alignItems: 'center'
  },
  homeTab: {
    backgroundColor: '#f5fdff',
    textDecoration: 'none',
    borderRadius: '25px',
    padding: '5px 5px',
    margin: '0 15px'
  },
  homeText: {
    color: 'black',
    textDecoration: 'none',
    fontSize: '20px',
    fontWeight: 'bold',
    paddingRight: '10px',
    paddingLeft: '30px'
  },
  homeIcon: {
    marginRight: '-35px',
    zIndex: 1,
    color: '#1da1f2'
  },
  userTab: {
    backgroundColor: '#2a3843',
    borderRadius: '25px',
    fontSize: '10px',
    padding: '5px 5px',
    margin: '0 15px'
  },
  userIcon: {
    marginRight: '-47px',
    zIndex: 1,
    color: '#b47764'
  },
  userText: {
    color: '#acbbc1',
    textDecoration: 'none',
    fontSize: '18px',
    fontWeight: 'bold',
    paddingRight: '10px',
    paddingLeft: '30px'
  },
  img: {
    width: '150px',
    height: '150px',
    marginTop: '-30px',
    display: 'flex'
  },
  link: {
    textDecoration: 'none',
    fontSize: '20px',
    fontWeight: 'bold',
    padding: '0 20px',
    color: '#b7c8d0'
  },
  appIcon: {
    width: '30px',
    height: '30px',
    display: 'flex',
    cursor: 'pointer'
  },
  dropDownMenu: {
    display: 'flex',
    position: 'absolute',
    top: '-550px',
    zIndex: 1,
    right: '0',
    justifyContent: 'center',
    borderRadius: '25px',
    color: '#b7c8d0',
  }
} as const

export default navStyle
