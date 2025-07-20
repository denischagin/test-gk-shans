import type { FC, ReactNode } from 'react'
import css from './Index.module.scss'

export type TIndexProps = {
  children?: ReactNode
  value?: number
}

export const Index: FC<TIndexProps> = (props) => {
  const { children, value } = props

  return (
    <div className={css.index}>
      {children}
      {!!value && <span className={css.index__item}>{value}</span>}
    </div>
  )
}
