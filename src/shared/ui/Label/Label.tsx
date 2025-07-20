import type { FC, ReactNode } from 'react'
import css from './Label.module.scss'

export type TLabelProps = {
  variant: 'new' | 'discount' | string
  children?: ReactNode
}

export const Label: FC<TLabelProps> = (props) => {
  const { children, variant } = props

  return (
    <li className={css.label + ' ' + css['label--' + variant]}>{children}</li>
  )
}
