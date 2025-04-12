import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useCookies } from 'react-cookie';

export default function Product(props) {
    const {name,description,link,price,id} = props;
    const [cookies, setCookie] = useCookies();
    const handleAddToCart = () => {
        // Get the current productId list from cookies or initialize it as an empty array
        const currentProductIds = cookies.productId ? cookies.productId : [];
        
        // Add the new product ID to the list
        const updatedProductIds = [...currentProductIds, id];

        // Store the updated list in cookies (as a JSON string)
        setCookie('productId', (updatedProductIds));
        console.log('Updated productId cookie:', updatedProductIds);
    };
  return (
    <Card sx={{ minHeight: 400 ,maxHeight:450 , maxWidth:320 , minWidth:320 , padding:1}}>
      <CardMedia
        sx={{ height: 220 }}
        image={link}
        title="green iguana"
      />
      <CardContent sx={{ height: 120 }}>
        <Typography gutterBottom variant="h5" component="div">
          {name} 
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
         {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleAddToCart}>ADD TO CART</Button> 
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
         Rs. {price}
        </Typography>
      </CardActions>
    </Card>
  );
}
