import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'


function Item(props)
{
    return (
        <Paper>
            <img src={props.name} alt="" />
            <p>{props.item.description}</p>

            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>
    )
}

const ImgSlide = () => {
  var items = [
    {
        name: "src/assets/IMG-20230105-WA0026.jpg",
        description: "Probably the most random thing you have ever seen!"
    },
    {
        name: "src/assets/IMG-20230105-WA0024.jpg",
        description: "Hello World!"
    }
]

return (
    <Carousel>
        {
            items.map( (item, i) => <img style={{height:'25%',width:'50%'}} src={item.name} alt="" />)
        }
    </Carousel>
)
}

export default ImgSlide