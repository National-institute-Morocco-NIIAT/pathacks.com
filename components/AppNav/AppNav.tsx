import React, { useEffect, useState } from 'react'
import NavLink, { NavLinkProps } from '../NavLink'
import { useRouter } from 'next/router'
import { useGetSessionQuery, GetSessionQuery } from '../../graphql'
import Navbar from 'react-bootstrap/Navbar'
import { Container, Nav } from 'react-bootstrap'
import ProfileDropdownMenu from '../ProfileDropdownMenu'
import styles from '../../scss/appNav.module.scss'
import {
  // REPO_PATH,
  DOCS_PATH,
  CURRICULUM_PATH,
  DISCORD_PATH,
  LOGIN_PATH,
  SIGNUP_PATH
} from '../../constants'
import _ from 'lodash'
import { useSession } from 'next-auth/react'
import { SessionContext } from '../../@types/auth'

type AuthLinkProps = {
  session: any
}

type NavItem = NavLinkProps & { name: string }

const navItems: NavItem[] = [
  { path: CURRICULUM_PATH, name: 'Curriculum' },
  // {
  //   path: REPO_PATH,
  //   name: 'Repo',
  //   external: true
  // },
  {
    path: DOCS_PATH + '/learn',
    name: 'Learn'
  },
  {
    path: DISCORD_PATH,
    name: 'Community',
    external: true
  }
]

const NavBar: React.FC<AuthLinkProps> = ({}) => {
  const router = useRouter()
  const location = router.asPath

  return (
    <>
      {navItems.map(button => (
        <NavLink
          {...button}
          className={`${styles['nav-item']} ${styles['nav-link']} px-3`}
          key={button.name}
          activePath={location.includes(button.path)}
        >
          {button.name}
        </NavLink>
      ))}
    </>
  )
}

const NotLoggedInAuthNav = () => (
  <div className={`${styles['nav-buttons']}`}>
    <NavLink
      path={LOGIN_PATH}
      className={`m-2 me-lg-3 ${styles['login-btn']} ${styles['login-signup-size']}`}
    >
      Login
    </NavLink>
    <NavLink
      path={SIGNUP_PATH}
      className={`m-2 me-lg-3 ${styles['signup-btn']} ${styles['login-signup-size']}`}
    >
      Signup
    </NavLink>
  </div>
)

const AppNav: React.FC<{}> = () => {
  const { data: sessionData } = useSession() as SessionContext
  const [session, setSession] = useState<GetSessionQuery['session']>()
  const isAdmin = session?.user?.isAdmin || false

  // Keep the fetch policy cache-first #2345
  const { data, loading } = useGetSessionQuery()

  useEffect(() => {
    if (data?.session) {
      setSession(data.session)
    }
  }, [data])

  const renderButtons = () => {
    if (loading) return <></>

    if (
      !sessionData?.user &&
      (!session || _.get(session, 'user.username', null) === null)
    ) {
      return <NotLoggedInAuthNav />
    }

    const username = session?.user?.username

    return <ProfileDropdownMenu username={username || ''} isAdmin={isAdmin} />
  }

  return (
    <Navbar
      id="appNav"
      className={`${styles['navbar']}`}
      expand="lg"
      bg="white"
    >
      <Container>
        <Navbar.Brand href="/">
          {/* <div className={`${styles['navbar-brand']} text-primary fw-bold`}>
            C0D3
            {isAdmin ? (
              <span className={`${styles['isAdminBadge']} badge`}> ADMIN </span>
            ) : (
              ''
            )}
          </div> */}

          {/* site logo */}
          <img
            width="180px"
            height="160px"
            src="/logo.png"
          />
          
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="text-center">
          <Nav className="m-auto">
            <NavBar session={session} />
          </Nav>
          {renderButtons()}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default AppNav
