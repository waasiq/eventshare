import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Loading from './Loading'
import loginState from '../../../ts/interfaces';

const Notify: React.FC =  function () {
  const state = useSelector(state => state) as loginState;
  const { auth, notify } = state;

  const dispatch = useDispatch()
  
  return (
    <div>
        <Loading />
        {/* {notify.loading && }  */}
    </div>
  )
}

export default Notify
