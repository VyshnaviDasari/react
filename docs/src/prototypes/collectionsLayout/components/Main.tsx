import React, { Component } from 'react'
import Card from 'docs/src/prototypes/Card/Card'
import { Header, Divider, Input } from '@stardust-ui/react'

class Main extends Component {
  render() {
    return (
      <div>
        <div style={{ padding: '10px' }}>
          <Header as="h3" content="Saved" />
          <Input
            fluid
            placeholder="Add a quick note or paste a URL"
            styles={{ border: '1px solid grey', padding: '3px', borderRadius: '5px' }}
          />
        </div>
        <Divider />
        <div style={{ overflowY: 'scroll', height: '850px' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            <Card header="Image.png" text="hsgdhjs" image="public/images/image-16by9.png" />
            <Card
              header="Some text"
              text="To be remebered"
              content="You can run Jest directly from the CLI (if it's globally available in your PATH, e.g. by yarn global add jest) with a variety of useful options."
            />
            <Card
              header="Downloads"
              text="Most recent folder"
              image="public/images/image-16by9.png"
            />
            <Card
              header="Collections.ppt"
              text="Team with three"
              content="As a result, reads from the cache require minimal work and can be optimized to constant time lookups in some cases there may be additional fields."
            />
            <Card header="Salary" text="December Month" image="public/images/image-16by9.png" />
            <Card
              header="Notes"
              text="hsgdhjs"
              content="An experimental cache implementation for Apollo Client, tuned for the performance of heavy GraphQL payloads."
            />
            <Card header="Important" text="hsgdhjs" image="public/images/image-16by9.png" />
            <Card
              header="Tasks to be done before Friday"
              text="Completed ones"
              content="Complete Task 1 .o test that two values were exactly identical. To learn about the other things that Jest can test. "
            />
            <Card
              header="Collections.ppt"
              text="Team with three"
              content="As a result, reads from the cache require minimal work and can be optimized to constant time lookups in some cases there may be additional fields."
            />
            <Card header="Salary" text="December Month" image="public/images/image-16by9.png" />
            <Card
              header="Notes"
              text="hsgdhjs"
              content="An experimental cache implementation for Apollo Client, tuned for the performance of heavy GraphQL payloads."
            />
            <Card
              header="Collections.ppt"
              text="Team with three"
              content="As a result, reads from the cache require minimal work and can be optimized to constant time lookups in some cases there may be additional fields."
            />
            <Card header="Salary" text="December Month" image="public/images/image-16by9.png" />
            <Card
              header="Notes"
              text="hsgdhjs"
              content="An experimental cache implementation for Apollo Client, tuned for the performance of heavy GraphQL payloads."
            />
            <Card header="Important" text="hsgdhjs" image="public/images/image-16by9.png" />
            <Card
              header="Tasks to be done before Friday"
              text="Completed ones"
              content="Complete Task 1 .o test that two values were exactly identical. To learn about the other things that Jest can test. "
            />
            <Card
              header="Notes"
              text="hsgdhjs"
              content="An experimental cache implementation for Apollo Client, tuned for the performance of heavy GraphQL payloads."
            />
            <Card header="Important" text="hsgdhjs" image="public/images/image-16by9.png" />
            <Card
              header="Tasks to be done before Friday"
              text="Completed ones"
              content="Complete Task 1 .o test that two values were exactly identical. To learn about the other things that Jest can test. "
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Main
