import { FC, PropsWithChildren } from 'react'

const Content: FC<PropsWithChildren<any>> = (props) => {
  return <div>{props.children}</div>
}

export { Content }
