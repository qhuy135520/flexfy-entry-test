import React from 'react'
import { Card, CardBody, CardLink, CardSubtitle, CardText, CardTitle } from 'reactstrap'
import StarRating from './StarRating'
import Color from './Color'
const ProductCard = ({ srcImage, price, colors, views, starSelected, totalStars, key }) => {
  return (
    <Card key={key} className='product-card' style={{ width: '21rem', border: 'none' }}>
      <img alt="Card cap" src={srcImage} width="100%" height={'400px'} />
      <CardBody className='product-card-body'>
        <CardText>
          <StarRating totalStars={totalStars} views={views} starSelected={starSelected} />
          <span className='product-title'>Product - 3 Meta</span><br />
          <span className='product-price'>₱{price}</span><br />
          {
            colors.map((item, index) => (
              <Color color={item} element={index} />
            ))
          }
        </CardText>
      </CardBody>
    </Card>
  )
}

export default ProductCard