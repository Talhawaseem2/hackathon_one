import React, { FC } from 'react'

const catalog: FC<{params: {slug : string}}> = ({params}) => {
  return (
    <div>{params.slug}</div>
  )
}

export default catalog