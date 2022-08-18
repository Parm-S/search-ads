import React from "react";

import { getSearchAds } from "../../api";

import eventEmitter from "../../helpers/event";

import { Event } from "../../helpers/enum";

import { ISearchAds } from "../ParticularAdCard";

interface ISearchedAds extends Array<ISearchAds> {}

const useAdsView = () => {
  const [adsData, setAdsData] = React.useState<ISearchedAds>([]);
  const [search, setSearch] = React.useState("");
  const [key, setKey] = React.useState(Math.random());

  const searches = React.useCallback(
    (searchText: string) => {
      setSearch(searchText);
      setKey(Math.random());
    },
    [setSearch]
  );

  React.useEffect(() => {
    eventEmitter.on(Event.search, searches);

    return () => {
      eventEmitter.off(Event.search, searches);
    };
  }, [searches]);

  const fetchAds = React.useCallback(() => {
    getSearchAds(search).then((res : any) => {
      const data = res.data;
      if (data && res.status === 200) {
        setAdsData(data)
      }
    });
  }, [search]);

  React.useEffect(() => {
    if (search) {
      fetchAds();
    }
  }, [key]); //eslint-disable-line react-hooks/exhaustive-deps

  return {
    adsData,
    search
  };
};

export { useAdsView };
