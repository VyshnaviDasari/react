import { IAccessibilityDefinition } from '../../interfaces'

/**
 * @description
 * Adds role='option'. This role is used for a selectable item in a list.
 * Adds attribute 'aria-selected=true' based on the property 'active'. Based on this screen readers will recognize the selected state of the item.
 */

const SelectableListItemBehavior: (props: any) => IAccessibilityDefinition = (props: any) => ({
  attributes: {
    root: {
      role: 'option',
      'aria-selected': !!props['active'],
      tabIndex: props.isFocused === 0 ? '0' : '-1',
    },
  },
})

export default SelectableListItemBehavior
