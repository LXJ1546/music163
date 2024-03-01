import React, { memo } from 'react'
import { MineWrapper } from './style';


const Mine = () => {
  return (
      <MineWrapper>
          <div className='content'></div>
      </MineWrapper>
  )
}
export default memo(Mine);
