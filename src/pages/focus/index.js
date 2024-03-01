import React, { memo } from 'react'
import { FocusWrapper } from './style';


const Focus = () => {
  return (
      <FocusWrapper className='wrap-v2'>
          <div className='content'>
            <div className='bgImage notlogin'>
              <a className="btn notlogin" href='/#'>立即登录</a>
            </div>
          </div>
      </FocusWrapper>
  )
}
export default memo(Focus);
