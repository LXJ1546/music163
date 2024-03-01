import React, { memo } from 'react'
import { MineWrapper } from './style';


const Mine = () => {
  return (
      <MineWrapper className='wrap-v2'>
          <div className='content'>
            <div className='bgImage mine_sprite'>
              <a className="btn mine_sprite" href='/#'>立即登录</a>
            </div>
          </div>
      </MineWrapper>
  )
}
export default memo(Mine);
