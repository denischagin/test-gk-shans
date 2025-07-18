import type { FC, PropsWithChildren } from 'react'
import { Provider } from 'react-redux'
import { store } from '../config'

export type ReduxProvider = PropsWithChildren

export const ReduxProvider: FC<ReduxProvider> = (props) => {
  return <Provider store={store}>{props.children}</Provider>
}
