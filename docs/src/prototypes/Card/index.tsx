import * as React from 'react'
import Card from './Card'
import { Header, Divider } from '@stardust-ui/react'
class CardPrototype extends React.Component<any, { popupOpen: boolean }> {
  render() {
    const cardone = {
      content:
        'As a result, reads from the cache require minimal work and can be optimized to constant time lookups with hole of wizards',
      header: 'Downloads',
      text: 'Most recent folder',
    }
    const cardtwo = {
      image: 'public/images/image-16by9.png',
      header: 'Important.doc',
      text: 'Northtrades > Marketing',
    }
    return (
      <div>
        <div style={{ margin: '20px' }}>
          <Header
            as="h3"
            content="Collection Card"
            description={{
              content: 'Simple collection card component.',
              styles: { fontSize: '16px' },
            }}
          />
          <Card {...cardone} />
        </div>
        <Divider />
        <div style={{ margin: '20px' }}>
          <Header
            as="h3"
            content="Collection Card"
            description={{
              content: 'Simple collection card component.',
              styles: { fontSize: '16px' },
            }}
          />
          <Card {...cardtwo} />
        </div>
      </div>
    )
  }
}
export default CardPrototype
