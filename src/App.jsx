import { Container, Divider, Navbar, NavItems, NavLink, MenuIcon, Button, Drawer, Input, Modal } from "@yosang/react-ui"
import { BrowserRouter, Route, Link, Routes } from "react-router-dom"
import Home from './Home'
import { useState } from "react"

function App() {
  const [cartOpen, setCartOpen] = useState(false)
  const [loginOpen, setLoginOpen] = useState(false)

  return (
    <>
    <BrowserRouter>
      <Navbar sticky={true} style={{minHeight: "70px"}}>
          <p>Logo</p>
        <NavItems>
          <NavLink tag={"a"} href="/" >Home</NavLink>
          <Divider direction="vertical"/>
          <NavLink onClick={() => setLoginOpen(true)}>Login</NavLink>
          <NavLink onClick={() => setCartOpen(true)}>Cart</NavLink>
        </NavItems>
      </Navbar>
      <Navbar sticky={true} style={{ top: "70px"}} order="bottom">
        <NavItems>
          <NavLink>Products</NavLink>
          <NavLink>Brands</NavLink>
          <NavLink>Campaigns</NavLink>
        </NavItems>
        <NavItems>
          <NavLink>Velg butikk</NavLink>
        </NavItems>
      </Navbar>
      <Container style={{ width: "90%", margin: "auto"}} centered={true}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Drawer isOpen={cartOpen} onClose={() => setCartOpen(false)} title="Cart">
          <p>Products in cart</p>
          <br />
          <Button onClick={() => setCartOpen(false)}>Checkout</Button>
        </Drawer>
        <Modal isOpen={loginOpen} onClose={() => setLoginOpen(false)} title="Login">
          <Container>
            <p>Username</p>
            <Input type="text" placeholder="username"/>
            <p>Password</p>
            <Input type="password" placeholder="Password"/>
            <br />
            <Button onClick={() => setLoginOpen(false)}>Login</Button>
          </Container>
        </Modal>
      </Container>
    </BrowserRouter>
    </>
  )
}

export default App
