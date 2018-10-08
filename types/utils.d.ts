// ========================================================
// Utilities
// ========================================================

import * as React from 'react'

export type Extendable<T> = T & {
  [key: string]: any
}

export type ArgOf<T> = T extends (arg: infer TArg) => any ? TArg : never
export type ResultOf<T> = T extends (...arg: any[]) => infer TResult ? TResult : never

export type OneOrArray<T> = T | T[]
export type ObjectOf<T> = { [key: string]: T }

export type ObjectOrFunc<TResult, TArg = {}> = ((arg: TArg) => TResult) | TResult

// ========================================================
// Props
// ========================================================

export type IProps = ObjectOf<any>
export type ReactChildren = React.ReactNodeArray | React.ReactNode
export type ComponentEventHandler<TProps> = (event: React.SyntheticEvent, data: TProps) => void

// ========================================================
// Shorthand Factories
// ========================================================

export type ShorthandPrimitive = string | number
export type ShorthandValue = React.ReactNode | IProps
export type MapValueToProps = (value: ShorthandPrimitive) => IProps
export type ShorthandRenderFunction = (
  Component: React.ReactType,
  props: IProps,
  children: ReactChildren,
) => React.ReactElement<any>
