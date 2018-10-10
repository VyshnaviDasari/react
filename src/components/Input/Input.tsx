import * as React from 'react'
import * as PropTypes from 'prop-types'
import * as _ from 'lodash'

import {
  AutoControlledComponent,
  customPropTypes,
  IRenderResultConfig,
  createShorthandFactory,
} from '../../lib'
import {
  Extendable,
  ShorthandValue,
  ShorthandRenderFunction,
  ComponentEventHandler,
} from '../../../types/utils'
import { ComponentPartStyle, ComponentVariablesInput } from 'theme'
import Icon from '../Icon'
import Slot from '../Slot'
import Ref from '../Ref'

export interface IInputProps {
  as?: any
  className?: string
  clearable?: boolean
  defaultValue?: React.ReactText
  fluid?: boolean
  icon?: ShorthandValue
  inline?: boolean
  onChange?: ComponentEventHandler<IInputProps>
  renderIcon?: ShorthandRenderFunction
  renderInput?: ShorthandRenderFunction
  renderWrapper?: ShorthandRenderFunction
  styles?: ComponentPartStyle<IInputProps, any>
  type?: string
  value?: React.ReactText
  variables?: ComponentVariablesInput
  wrapper?: ShorthandValue
}

export interface IInputState {
  value?: React.ReactText
}

/**
 * An Input
 * @accessibility
 * For good screen reader experience set aria-label or aria-labelledby attribute for input.
 *
 * Other considerations:
 *  - if input is search, then use "role='search'"
 */
class Input extends AutoControlledComponent<Extendable<IInputProps>, IInputState> {
  private inputRef: HTMLInputElement

  static className = 'ui-input'

  static displayName = 'Input'

  static propTypes = {
    /** An element type to render as (string or function). */
    as: customPropTypes.as,

    /** Additional CSS class name(s) to apply.  */
    className: PropTypes.string,

    /** A property that will change the icon on the input and clear the input on click on Cancel */
    clearable: PropTypes.bool,

    /** The default value of the input. */
    defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /** An input can take the width of its container. */
    fluid: PropTypes.bool,

    /** Optional Icon to display inside the Input. */
    icon: customPropTypes.itemShorthand,

    /** An input can be used inline with text */
    inline: PropTypes.bool,

    /**
     * Called on change.
     *
     * @param {SyntheticEvent} event - React's original SyntheticEvent.
     * @param {object} data - All props and proposed value.
     */
    onChange: PropTypes.func,

    /**
     * A custom render function the icon slot.
     *
     * @param {React.ReactType} Component - The computed component for this slot.
     * @param {object} props - The computed props for this slot.
     * @param {ReactNode|ReactNodeArray} children - The computed children for this slot.
     */
    renderIcon: PropTypes.func,

    /**
     * A custom render function the input slot.
     *
     * @param {React.ReactType} Component - The computed component for this slot.
     * @param {object} props - The computed props for this slot.
     * @param {ReactNode|ReactNodeArray} children - The computed children for this slot.
     */
    renderInput: PropTypes.func,

    /**
     * A custom render function the wrapper slot.
     *
     * @param { React.ReactType } Component - The computed component for this slot.
     * @param { object } props - The computed props for this slot.
     * @param { ReactNode | ReactNodeArray } children - The computed children for this slot.
     */
    renderWrapper: PropTypes.func,

    /** Additional CSS styles to apply to the component instance.  */
    styles: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),

    /** The HTML input type. */
    type: PropTypes.string,

    /** The value of the input. */
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /** Override for theme site variables to allow modifications of component styling via themes. */
    variables: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),

    /** Shorthand for the wrapper component */
    wrapper: customPropTypes.itemShorthand,
  }

  static defaultProps = {
    as: 'input',
    type: 'text',
    wrapper: 'div',
  }

  static autoControlledProps = ['value']

  state = { value: this.props.value || this.props.defaultValue || '' }

  renderComponent({
    ElementType,
    classes,
    rest,
    styles,
    variables,
  }: IRenderResultConfig<IInputProps>) {
    const { renderIcon, renderInput, renderWrapper, type, wrapper } = this.props
    const { value = '' } = this.state

    const createInput = createShorthandFactory(ElementType, val => ({ type: val }))
    const inputComponent = createInput(type, {
      defaultProps: { className: classes.input, style: styles.root, value, ...rest },
      overrideProps: { onChange: this.handleChange },
      render: renderInput,
    })

    if (!wrapper) {
      return inputComponent
    }

    const iconComponent = Icon.create(this.computeIcon(), {
      defaultProps: {
        styles: styles.icon,
        variables: variables.icon,
      },
      overrideProps: this.handleIconOverrides,
      render: renderIcon,
    })

    return Slot.create(wrapper, {
      defaultProps: { className: classes.wrapper },
      overrideProps: {
        children: (
          <>
            <Ref innerRef={this.handleInputRef}>{inputComponent}</Ref>
            {iconComponent}
          </>
        ),
      },
      render: renderWrapper,
    })
  }

  private handleInputRef = (c: HTMLInputElement) => (this.inputRef = c)

  private handleIconOverrides = predefinedProps => ({
    onClick: (e: React.SyntheticEvent) => {
      this.handleOnClear()
      this.inputRef.focus()
      _.invoke(predefinedProps, 'onClick', e, this.props)
    },
    ...(predefinedProps.onClick && { tabIndex: '0' }),
  })

  private handleChange = (e: React.SyntheticEvent) => {
    const value = _.get(e, 'target.value')

    _.invoke(this.props, 'onChange', e, { ...this.props, value })

    this.trySetState({ value })
  }

  private handleOnClear = () => {
    if (this.props.clearable) {
      this.trySetState({ value: '' })
    }
  }

  private computeIcon = (): ShorthandValue => {
    const { clearable, icon } = this.props
    const { value } = this.state

    if (clearable && (value as string).length !== 0) {
      return 'close'
    }

    return icon || null
  }
}

export default Input
