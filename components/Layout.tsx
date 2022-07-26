import Nav from './Nav'
import { ReactNode } from 'react'
import Meta from './Meta'

type Props = {
  children: ReactNode
}

const Layout: React.FC<Props> = ({ children }) => (
  <div>
    <Meta />
    <Nav />
    <div className='d-flex justify-content-between'>
      <main
        className='container py-2'
        style={{ minHeight: 'calc(100vh - 120px)' }}
      >
        {children}
      </main>
    </div>
  </div>
)

export default Layout
