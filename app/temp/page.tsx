import { NextRequest } from 'next/server'
import React from 'react'

type Props = {}

function TempPage ({params}: any) {

    console.log(params, 'params')
  return (
    <div>Temppage</div>
  )
}

export default TempPage