import { useState } from "react";

// @mui
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import RemoveCircleRoundedIcon from "@mui/icons-material/RemoveCircleRounded";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BalanceIcon from "@mui/icons-material/Balance";
import {
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";

// Style
import "./product.scss";
import styled from "@emotion/styled";

const Product = () => {
  const [selectedIndex, setSelectedIndex] = useState(1);
  const [quantity, setQuantity] = useState(1);
  const [isLiked, setIsLiked] = useState(false);

  const handleQuantity = (action) => {
    if (action === "+" && quantity < 10) {
      setQuantity((prevQuantity) => prevQuantity + 1);
    } else if (action === "-" && quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const images = [
    "https://images.pexels.com/photos/10026491/pexels-photo-10026491.png?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    "https://images.pexels.com/photos/12179283/pexels-photo-12179283.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
  ];

  return (
    <ProductContainer container spacing={2}>
      <LeftSide item xs={12} lg={6}>
        <SmallContainer>
          {/*  */}
          <SmallImg>
            <img src={images[0]} alt='' onClick={() => setSelectedIndex(0)} />
          </SmallImg>

          <SmallImg>
            <img src={images[1]} alt='' onClick={() => setSelectedIndex(1)} />
          </SmallImg>
          {/*  */}
        </SmallContainer>

        <LargeImg>
          <img src={images[selectedIndex]} alt='' />
        </LargeImg>
      </LeftSide>

      <RightSide item sm={12} lg={6}>
        <ProductTitle>Long Sleeve Graphic T-shirt</ProductTitle>

        <Typography sx={{ color: "primary.main", fontSize: "1.5rem" }}>
          $19.99
        </Typography>

        <Typography sx={{ color: "text.secondary" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut assumenda
          ducimus repudiandae! Sed, provident vitae expedita pariatur deleniti
          sequi accusantium aut. Illo pariatur dignissimos voluptatibus eius
          aperiam itaque, magni quae.
        </Typography>

        <QuantityContainer>
          <IconButton
            color='primary'
            onClick={() => handleQuantity("-")}
            disabled={quantity === 1}>
            <RemoveCircleRoundedIcon />
          </IconButton>

          <Typography>{quantity}</Typography>

          <IconButton
            color='primary'
            onClick={() => handleQuantity("+")}
            disabled={quantity === 10}>
            <AddCircleRoundedIcon />
          </IconButton>
        </QuantityContainer>

        <Button
          variant='contained'
          sx={{ width: "200px" }}
          startIcon={<AddShoppingCartIcon />}>
          ADD TO CART
        </Button>

        <Stack direction='row' spacing={2}>
          <Button
            disableRipple
            startIcon={isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
            onClick={() => setIsLiked(!isLiked)}>
            ADD TO WISHLIST
          </Button>

          <Stack direction='row' spacing={1} alignItems='center'>
            <Button disableRipple startIcon={<BalanceIcon />}>
              ADD TO COMPARE
            </Button>
          </Stack>
        </Stack>

        <Stack direction='column' className='product--info' spacing={1}>
          <SpanInfo>Vendor: Polo</SpanInfo>
          <SpanInfo>Product Type: T-Shirt</SpanInfo>
          <SpanInfo>Tag: T-Shirt, Women, Top</SpanInfo>
        </Stack>

        <Divider />

        <Stack
          sx={{ width: "250px" }}
          direction='column'
          spacing={1}
          divider={<Divider orientation='horizontal' flexItem />}>
          <SpanInfo>DESCRIPTION</SpanInfo>
          <SpanInfo>ADDITIONAL INFORMATION</SpanInfo>
          <SpanInfo>FAQ</SpanInfo>
        </Stack>
      </RightSide>
    </ProductContainer>
  );
};

export default Product;

const ProductTitle = styled(Typography)(({ theme }) => ({
  fontSize: "2rem",
  fontWeight: "600",
  color: theme.palette.text.primary,
}));

const SmallContainer = styled(Stack)(({ theme }) => ({
  flex: 1,
  flexDirection: "column",
  gap: "1rem",
  [theme.breakpoints.down("lg")]: {
    flexDirection: "column",
  },
}));

const QuantityContainer = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  alignItems: "center",
  [theme.breakpoints.down("lg")]: {
    justifyContent: "center",
  },
}));

const LeftSide = styled(Grid)(({ theme }) => ({
  gap: "1rem",
  display: "flex",
  [theme.breakpoints.down("lg")]: {
    flexDirection: "row",
    height: "50vh",
  },
}));

const RightSide = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  [theme.breakpoints.down("lg")]: {
    textAlign: "center",
    alignItems: "center",
  },
}));

const ProductContainer = styled(Grid)(({ theme }) => ({
  padding: "2rem",
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  [theme.breakpoints.down("sm")]: {
    padding: "2rem 0.5rem",
  },
}));

const SmallImg = styled(Box)(({ theme }) => ({
  flex: 1,
  maxHeight: "150px",
  maxWidth: "150px",
  overflow: "hidden",
  [theme.breakpoints.down("lg")]: {
    maxHeight: "100%",
    maxWidth: "100%",
  },
  "& > img": {
    height: "100%",
    width: "100%",
    objectFit: "cover",
    cursor: "pointer",
    position: "relative",
    transition: "0.2s all ease-in-out",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
}));

const LargeImg = styled(Box)(({ theme }) => ({
  flex: 5,
  backgroundColor: "red",
  [theme.breakpoints.down("lg")]: {
    flex: 3,
  },
  "& > img": {
    width: "100%",
    height: "80vh",
    [theme.breakpoints.down("lg")]: {
      height: "100%",
      objectFit: "cover",
    },
  },
}));

const SpanInfo = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: "0.9rem",
}));
