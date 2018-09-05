import * as React from 'react'

import { isConformant } from 'test/specs/commonTests'
import ButtonGroup from 'src/components/Button/ButtonGroup'
import implementsCollectionShorthandProp from '../../commonTests/implementsCollectionShorthandProp'
import Button from 'src/components/Button'

const buttonGroupImplementsShorthandProp = implementsCollectionShorthandProp(ButtonGroup)

describe('ButtonGroup', () => {
  isConformant(ButtonGroup)
  buttonGroupImplementsShorthandProp('buttons', Button)
})
