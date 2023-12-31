import { FC, ReactNode } from 'react';
import Navbar from '../navbar/Navbar.component'

type LayoutProps = {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
        <Navbar />
        {children}
    </>
  )
}

export default Layout