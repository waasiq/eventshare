const postStyles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#1b2730',
    borderRadius: '15px',
    boxShadow: '0px 5px 7px -7px rgba(0,0,0,0.75)',
    marginBottom: '10px'
  },
  header: {
    display: 'flex',
    paddingTop: '20px',
    paddingLeft: '20px'
  },
  headerText: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '10px'
  },
  headerTextName: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#fff'
  },
  headerTextTime: {
    fontSize: '14px',
    color: '#fff'
  },
  headerUsername: {
    fontSize: '14px',
    color: '#fff'
  },
  body: {
    display: 'flex',
    flexDirection: 'column',
    padding: '20px'
  },
  bodyText: {
    fontSize: '16px',
    color: '#fff'
  },
  bodyImage: {
    width: '100%',
    height: 'auto',
    borderRadius: '15px',
    marginTop: '10px'
  },
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px'
  },
  footerIcon: {
    fontSize: '20px',
    color: '#fff',
    marginRight: '10px'
  },
  footerText: {
    fontSize: '14px',
    color: '#fff'
  },
  form: {
    flex: 1,
    display: 'flex'
  },
  formInput: {
    outlineWidth: 0,
    width: '100%',
    border: 'none',
    padding: '5px 20px',
    margin: '0 10px',
    borderRadius: '19px',
    backgroundColor: '#28343e'
  },
  senderInput: {
    flex: 1
  },
  senderBottom: {
    display: 'flex',
    justifyContent: 'row'
  },
  senderOption: {
    padding: '20px',
    display: 'flex',
    alignItems: 'center',
    color: 'gray',
    margin: '5px'
  }
} as const

export default postStyles
