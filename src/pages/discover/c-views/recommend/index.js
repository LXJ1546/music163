import React, { memo,useEffect } from 'react'
import hyRequest from '@/service';
const Recommend = () => {
    useEffect(()=>{
        hyRequest.get({url:'/banner'}).then((res)=>{console.log(res.banners)})
    },[])
    return (
        <div>
            <h2>推荐</h2>
        </div>
    )
}
export default memo(Recommend);