import React, { memo, Suspense } from 'react';
import { useRoutes, Link } from 'react-router-dom';
import routes from './router/index';
import { useSelector, shallowEqual,useDispatch } from 'react-redux';
import { changeMessageAction } from '@/store/modules/counter';

export default memo(function App() {
  const { count, name } = useSelector((state) => ({
    count: state.counter.count,
    name: state.counter.name
  }),
    shallowEqual
  )
  const dispatch=useDispatch()
  function handleChangeName(){
    dispatch(changeMessageAction('竞仔'))
  }
  return (
    <div>
      <div>
        <Link to="/discover">发现音乐</Link>
        <Link to="/mine">我的音乐</Link>
        <Link to="/focus">关注</Link>
        <Link to="/download">下载客户端</Link>
      </div>
      <Suspense fallback="loading...">
        <div>{useRoutes(routes)}</div>
      </Suspense>
      <h2>当前计数：{count}</h2>
      <h2>当前姓名：{name}</h2>
      <button onClick={handleChangeName}>修改name</button>
    </div>
  );
});

