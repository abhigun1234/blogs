import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
export default class Home extends Component {
  render() {
    return (
      <div> 
           <div className='myblog'>
            <div className='react'>
                    <Card >
                    <Card.Img variant="top" src="data:image/webp;base64,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" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                    </Card>
                </div>
                <div className='angular'>
                    <Card >
                    <Card.Img variant="top" src="data:image/png;base64,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" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                    </Card>
                </div>
            </div>

      </div>
    )
  }
}
