import React from 'react'
import { Grid, Image } from '@stardust-ui/react'

const imageNames = [
  'ade.jpg',
  'chris.jpg',
  'christian.jpg',
  'daniel.jpg',
  'elliot.jpg',
  'elyse.png',
  'helen.jpg',
  'jenny.jpg',
  'joe.jpg',
  'justen.jpg',
  'kristy.png',
  'laura.jpg',
  'matt.jpg',
  'matthew.png',
  'molly.png',
  'nan.jpg',
  'nom.jpg',
  'patrick.png',
  'rachel.png',
  'steve.jpg',
  'stevie.jpg',
  'tom.jpg',
  'veronika.jpg',
]

const images = imageNames.map((name, index) => (
  <Image key={`${name}-${index}`} fluid src={`public/images/avatar/large/${name}`} />
))

const GridExample = () => (
  <div>
    Grid with specified number or rows and columns:
    <Grid rows="3" columns="8">
      {images}
    </Grid>
    <br />
    Grid with explicitly specified columns:
    <Grid rows="2fr repeat(2, 1fr)" columns="repeat(2, 2fr) 3fr 3fr 100px 14rem 50px 20%">
      {images}
    </Grid>
  </div>
)

export default GridExample
