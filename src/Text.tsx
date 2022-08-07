import React from 'react'
import { Outlet } from 'react-router-dom'

type Props = {}

const Text = (props: Props) => {
  return (
    <div style={{}}>
        <Outlet></Outlet>
    </div>
  )
}

export default Text