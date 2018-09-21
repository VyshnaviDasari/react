import * as React from 'react'
import * as PropTypes from 'prop-types'
import * as cx from 'classnames'

import {
  childrenExist,
  createShorthandFactory,
  customPropTypes,
  IRenderResultConfig,
  UIComponent,
} from '../../lib'
import {
  ComponentPartStyle,
  ComponentVariablesInput,
  IComponentPartStylesInput,
} from '../../../types/theme'
import { Extendable, ItemShorthand, ReactChildren } from '../../../types/utils'
import Avatar from '../Avatar'
import Layout from '../Layout'
import Text from '../Text'

export interface IChatBubbleProps {
  as?: any
  author?: ItemShorthand
  avatar?: ItemShorthand
  children?: ReactChildren
  className?: string
  content?: any
  mine?: boolean
  styles?: ComponentPartStyle
  timestamp?: ItemShorthand
  variables?: ComponentVariablesInput
}

class ChatBubble extends UIComponent<Extendable<IChatBubbleProps>, any> {
  static className = 'ui-chat__bubble'

  static create: Function

  static displayName = 'ChatBubble'

  static propTypes = {
    as: customPropTypes.as,

    /** Author of the message. */
    author: customPropTypes.itemShorthand,

    /** Chat messages can have an avatar. */
    avatar: customPropTypes.itemShorthand,

    /** Child content. */
    children: PropTypes.node,

    /** Additional classes. */
    className: PropTypes.string,

    /** Shorthand for the primary content. */
    content: PropTypes.any,

    /** Indicates whether message belongs to the current user. */
    mine: PropTypes.bool,

    /** Custom styles to be applied for component. */
    styles: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),

    /** Timestamp of the message. */
    timestamp: customPropTypes.itemShorthand,

    /** Custom variables to be applied for component. */
    variables: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  }

  static handledProps = [
    'as',
    'author',
    'avatar',
    'children',
    'className',
    'content',
    'mine',
    'styles',
    'timestamp',
    'variables',
  ]

  static defaultProps = {
    as: 'div',
  }

  renderComponent({
    ElementType,
    classes,
    rest,
    styles,
    variables,
  }: IRenderResultConfig<IChatBubbleProps>) {
    const { as, avatar, children, mine } = this.props

    return childrenExist(children) ? (
      <ElementType {...rest} className={cx(classes.root, classes.content)}>
        {children}
      </ElementType>
    ) : (
      <Layout
        as={as}
        {...rest}
        className={classes.root}
        start={!mine && this.renderAvatar(avatar, styles.avatar, variables)}
        main={this.renderContent(classes.content, styles, variables)}
        end={mine && this.renderAvatar(avatar, styles.avatar, variables)}
      />
    )
  }

  private renderContent = (
    contentClass: string,
    styles: IComponentPartStylesInput,
    variables: ComponentVariablesInput,
  ) => {
    const { author, content, mine, timestamp } = this.props

    const authorComponent = Text.create(author, {
      defaultProps: {
        size: 'sm',
        styles: styles.author,
        variables: variables.author,
      },
    })

    const timestampComponent = Text.create(timestamp, {
      defaultProps: {
        size: 'sm',
        timestamp: true,
        styles: styles.timestamp,
        variables: variables.timestamp,
      },
    })

    return (
      <Layout
        className={contentClass}
        vertical
        start={
          <>
            {!mine && authorComponent}
            {timestampComponent}
          </>
        }
        main={content}
      />
    )
  }

  private renderAvatar = (
    avatar: ItemShorthand,
    avatarStyles: ComponentPartStyle,
    variables: ComponentVariablesInput,
  ) =>
    avatar &&
    Avatar.create(avatar, {
      defaultProps: {
        styles: avatarStyles,
        variables: variables.avatar,
      },
    })
}

ChatBubble.create = createShorthandFactory(ChatBubble, content => ({ content }))

export default ChatBubble