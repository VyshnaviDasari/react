import React from 'react'
import { Grid, Input, Text } from '@stardust-ui/react'

const inputStyles = { padding: '5px', background: 'yellow' }
const wrapperStyles = { padding: '5px', background: 'red' }
const InputExampleWrapper = () => (
  <Grid columns="1fr 2fr" styles={{ justifyItems: 'start', alignItems: 'center', gap: '10px' }}>
    <Text content="Input:" />
    <Input placeholder="Search..." styles={inputStyles} wrapper={false} />

    <Text content="Wrapped Input default:" />
    <Input placeholder="Search..." styles={inputStyles} />

    <Text content="Wrapped Input with props:" />
    <Input
      placeholder="Search..."
      styles={inputStyles}
      wrapper={{ role: 'presentation', styles: wrapperStyles }}
    />

    <Text content="Wrapped Input with existing component:" />
    <Input
      placeholder="Search..."
      styles={inputStyles}
      wrapper={<Text role="presentation" styles={wrapperStyles} />}
    />

    <Text content="Wrapped Input with custom element:" />
    <Input
      placeholder="Search..."
      styles={inputStyles}
      wrapper={<span role="presentation" style={wrapperStyles} />}
    />
  </Grid>
)

export default InputExampleWrapper
