import React from 'react'
import { Button, Menu } from 'semantic-ui-react'

function SignedOutMenu ({ handleSignIn }) {
  return (
    <Menu.Item position='right'>
      <Button basic inverted content='Login' onClick={handleSignIn} />
      <Button
        basic
        inverted
        content='Register'
        style={{ marginLeft: '0.5em' }}
      />
    </Menu.Item>
  )
}

export default SignedOutMenu
