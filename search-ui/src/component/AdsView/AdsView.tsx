import React from "react";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import ParticularAd, { ISearchAds } from "../ParticularAdCard";
import { useAdsView } from "./useAdsView";

const AdsView: React.FC = () => {
  const { adsData , search } = useAdsView();
  return (
    <Container
      component="section"
      sx={{ mt: 8, backgroundColor: "#e7ebf0", p: 1 }}
    >
      <br />
      <Typography component="h2" variant="h4" textAlign={"center"}>
        Searched Ads
      </Typography>
      <br />
      <Grid
        container
        spacing={2}
        columns={{ xs: 1, md: 12 }}
        sx={{
          alignItems: "stretch",
          justifyContent: "center",
        }}
      >
        {adsData.length > 0 ? (
          adsData.map((searchAd: ISearchAds) => (
            <Grid
              item
              xs={1}
              md={4}
              key={searchAd._id}
              sx={{
                display: "flex",
              }}
            >
              <ParticularAd
                _id={searchAd._id}
                primaryText={searchAd.primaryText}
                description={searchAd.description}
                companyId={searchAd.companyId}
                cta={searchAd.cta}
                imageUrl={searchAd.imageUrl}
                companyData={searchAd.companyData}
              />
            </Grid>
          ))
        ) : (
          <Typography component="h2" variant="h4" textAlign={"center"}>
            No Ad Available
          </Typography>
        )}
      </Grid>
    </Container>
  );
};

export default AdsView;
