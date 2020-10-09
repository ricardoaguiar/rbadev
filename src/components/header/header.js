import React, { useState, useRef } from "react"
import { HeaderContainer } from "./header-styles"
import Menu from "../../components/menu/menu"
import { useOnClickOutside } from "../../components/hooks"
import RbaLogo from "../logo/rba-logo"
import BurgerComponent from "../../components/burger/burger"
// import GitHub from "../../components/social/github"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Header = () => {
  const [open, setOpen] = useState(false)
  const node = useRef()
  useOnClickOutside(node, () => setOpen(false))

  return (
    <>

      <HeaderContainer ref={node}>
        <RbaLogo />
        <BurgerComponent open={open} setOpen={setOpen} />

        <FontAwesomeIcon icon={"envelope"} size="14px" pointerEvents="none" />

        {/* <GitHub /> */}
      </HeaderContainer>
      <Menu open={open} setOpen={setOpen} />
    </>
  )
}

export default Header
