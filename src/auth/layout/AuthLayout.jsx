import { Outlet } from 'react-router-dom';
export const AuthLayout = () => {
  return (

    <>
      <div id="detail">
        <Outlet />
      </div>
        <h1> Auth layout</h1>
    </>
  )
}
