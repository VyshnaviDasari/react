import * as React from 'react'
import Header from './components/Header'
import HeaderThree from './components/HeaderThree'
import Main from './components/Main'
import Navigation from './components/Navigation'
import { Grid } from '@stardust-ui/react'
import { mainStyle } from './styles'

class CollectionsLayoutPrototype extends React.Component<any, any> {
  render() {
    return (
      <div style={mainStyle}>
        <Header />
        <HeaderThree />
        <Grid columns="12% 80%">
          <div style={{ borderRight: '1px solid lightgray' }}>
            <Navigation />
          </div>
          <Main />
        </Grid>
      </div>
    )
  }
}

export default CollectionsLayoutPrototype
