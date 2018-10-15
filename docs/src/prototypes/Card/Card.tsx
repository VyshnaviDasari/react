import * as React from 'react'
import { Extendable } from '../../../../types/utils'
import { Avatar, Header, Text, Layout, Image, Provider } from '@stardust-ui/react'
export interface ICardProps {
  content?: string
  header: string
  image?: string
  text: string
}
const theme = {
  componentStyles: {
    Header: {
      root: {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        WebkitBoxOrient: 'vertical',
        whiteSpace: 'nowrap',
        cursor: 'pointer',
        width: '242px',
      },
    },
  },
}
class Card extends React.Component<Extendable<ICardProps>, any> {
  render() {
    const { content, header, image, text, ...rest } = this.props
    return (
      <Provider theme={theme}>
        <div>
          <Layout
            vertical
            mainCSS={{ paddingTop: '5px' }}
            start={
              this.props.image ? (
                <Image
                  src={this.props.image}
                  styles={() => ({
                    overflow: 'hidden',
                    borderRadius: '2%',
                    border: '1px solid #ededed',
                    padding: ' 0px',
                    width: '280px',
                    height: '174px',
                    boxShadow: ' 0 1px 4px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19)',
                  })}
                />
              ) : (
                this.renderPreview()
              )
            }
            main={<Header as="h4" content={this.props.header} />}
            end={
              <Text
                content={this.props.text}
                styles={{
                  width: '280px',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  WebkitBoxOrient: 'vertical',
                  whiteSpace: 'nowrap',
                }}
              />
            }
            styles={() => ({
              width: '280px',
              height: '170px',
              margin: '10px',
            })}
          />
        </div>
      </Provider>
    )
  }
  renderPreview(): React.ReactNode {
    return (
      <Layout
        vertical
        start={this.renderContent()}
        end={<Text size="smaller" content="6:43 AM" />}
        styles={() => ({
          overflow: 'hidden',
          borderRadius: '2%',
          border: '1px solid #ededed',
          padding: '5px',
          width: '280px',
          height: '174px',
          boxShadow: ' 0 1px 4px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19)',
        })}
      />
    )
  }
  renderContent(): React.ReactNode {
    return (
      <div
        style={{
          display: '-webkit-box',
          WebkitLineClamp: 4,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
          lineHeight: 2.1,
          textOverflow: 'ellipsis',
        }}
      >
        <Avatar size={26} image="public/images/avatar/small/matt.jpg" />
        <Text size="large" content={this.props.content} />
      </div>
    )
  }
}
export default Card
