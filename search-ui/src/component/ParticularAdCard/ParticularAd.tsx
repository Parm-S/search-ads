import React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import { ISearchAds } from ".";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";

const ParticularAd: React.FC<ISearchAds> = (searchAd) => {
  const { primaryText, description, imageUrl, cta, companyId } = searchAd;

  return (
    <Card sx={{ width: 1 }} >
      <CardMedia
        component="img"
        height="140"
        alt={companyId.name}
        image={imageUrl}
        sx={{
          objectFit: "contain",
        }}
      />
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          alignContent: "center",
          alignItems: "flex-start",
        }}
      >
        <Typography variant="h5">{companyId.name}</Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            wordBreak: "break-all",
          }}
        >
          {primaryText != null ? primaryText : " " }
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            wordBreak: "break-all",
          }}
        >
          {description != null ?description : " "}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" component="a" href={companyId.url}>
          {cta}
        </Button>
      </CardActions>
    </Card>
  );
};

export default ParticularAd;
