import React, { useState } from "react";
import { Box, Skeleton } from "@mui/material";
import styled from "styled-components";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const StyledCard = styled(Box)`
  width: 241px;
  height: 300px;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  flex-direction:column;
  background-color: white;
  transition: box-shadow 0.3s ease; 
  cursor: pointer;
  &:hover {
    box-shadow: 0px 8px 30px rgba(0, 0, 0, 0.2);
  }
`;

const InfoDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  border-radius: 0px 0px 20px 20px;
`;

const StyledH6 = styled.h6`
  margin: 5px 0px 0px 0px;
  display: flex;
  color: black;
  font-size: 12px;
  padding: 0px 5px;
`;

const Favorite = styled.div`
  margin-left: 80%;
  background-color: white;
  box-shadow: 0px 8px 40px rgba(0, 0, 0, 0.3);
  border-radius: 100%;
  padding: 5px;
  display: flex;
`;

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0; 
  const totalStars = 5; 
  
  const stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push(<StarIcon key={`full-${i}`} fontSize="small" color="warning" />);
  }

  if (hasHalfStar) {
    stars.push(<StarHalfIcon key="half" fontSize="small" color="warning" />);
  }

  for (let i = stars.length; i < totalStars; i++) {
    stars.push(<StarBorderIcon key={`empty-${i}`} fontSize="small" color="warning" />);
  }

  return <div>{stars}</div>;
};

const CardWrapper = ({ products, isLoading }) => {
  const [liked, setLiked] = useState(false); 

  console.log('products',products)

  const handleFavoriteClick = () => {
    setLiked(!liked);
  };

  return (
    <>
      {isLoading ? (
        <Skeleton
          variant="rectangular"
          sx={{ width: "280px", height: "300px", borderRadius: "10px" }}
        />
      ) : (
        <StyledCard>
          <Favorite onClick={handleFavoriteClick}>
            {liked ? <FavoriteIcon fontSize="medium" color="error" /> : <FavoriteBorderIcon fontSize="medium" />}
          </Favorite> 
          <img src={products?.image} alt={products?.title} width="50%" height="50%" />
        <InfoDiv>
            <StarRating rating={products?.rating?.rate} />
            <StyledH6>{products?.title}</StyledH6>
        </InfoDiv>
        </StyledCard>
      )}
    </>
  );
};

export default CardWrapper;

