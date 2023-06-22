import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Error, TypeMap } from "../../components";
import { BounceLoader } from "react-spinners";
import { Skeleton } from "@mui/material";
import { BASE_URL } from "../../hooks/api";
import { StyledLoader } from "../../styles/layout/Loader.styled";

const Type = () => {
  const { condition, body } = useParams();
  const [type, setType] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    document.title = `${condition.toUpperCase()} ${body.toUpperCase()} Cars`;
  });
  const [error, setError] = useState(false);

  const getType = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `${BASE_URL}/listing/${condition}/${body}/get`
      );
      const fetchedtype = await response?.data;
      setType(fetchedtype);
      console.log("I got this type:", type);
    } catch (error) {
      console.log({ error: error.message });
      setError(true);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    getType();
  }, [getType]);

  return (
    <div className="flex flex-col mt-14 ml-5 w-full">
      {isLoading ? (
        <Skeleton width="200px" height="100px" variant="text" />
      ) : (
        <h1 className="text-2xl font-semibold font-sofia">
          {condition.toUpperCase()} {body.toUpperCase()}
        </h1>
      )}

      {error && (
        <StyledLoader>
          <Error />
        </StyledLoader>
      )}

      {isLoading ? (
        <div className="flex justify-center items-center flex-col h-96">
          <BounceLoader size={150} color="#000" />
          <p className="font-semibold font-sofia text-lg">
            Loading {condition} {body} cars...
          </p>
        </div>
      ) : (
        <div className="flex flex-wrap gap-3">
          {type.map((ty, index) => (
            <TypeMap ty={ty} key={index} loading={isLoading} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Type;
