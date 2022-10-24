import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Box } from '@mui/material'
import Loading from './Loading'
import loginState from '../../../ts/interfaces';
import Toast from './Toast'

const Notify: React.FC =  function () {
  const state = useSelector(state => state) as loginState;
  const { auth, notify } = state;

  const dispatch = useDispatch()
  
  return (
    <Box>
        {notify.loading && <Loading />} 
        {notify.error && <Toast severity="error" message={notify.error} open />}
        {notify.success && <Toast severity="success" message={notify.success} open />}
    </Box>
  )
}

export default Notify
