import React, { memo, Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import routes from './router/index';
import { useSelector, shallowEqual,useDispatch } from 'react-redux';
import { changeMessageAction } from '@/store/modules/counter';
import AppHeader from './components/app-header';
import AppFooter from './components/app-footer';

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
      <AppHeader/>
      <Suspense fallback="loading...">
        <div>{useRoutes(routes)}</div>
      </Suspense>
      <AppFooter/>
      <h2>当前计数：{count}</h2>
      <h2>当前姓名：{name}</h2>
      <button onClick={handleChangeName}>修改name</button>
    </div>
  );
});

