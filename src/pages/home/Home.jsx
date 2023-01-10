import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import BeerPreview from "../../components/BeerPreview/BeerPreview";
import BeersContainer from "../../containers/BeersContainer/BeersContainer";
import Container from "../../components/Container/Container";
import classes from "./Home.module.css";

const parseData = (data = []) => {
  const parsedData = {
    currentItems: {
      1: [],
    },
    currentPage: 1,
    allPages: 1,
  };

  let index = 1;

  data.forEach((item) => {
    if (parsedData.currentItems[index].length === 6) {
      index += 1;
      parsedData.allPages += 1;
      parsedData.currentItems[index] = [];
    }

    parsedData.currentItems[index].push(item);
  });

  return parsedData;
};

const getData = async () => {
  const res = await fetch("/data.json", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  return await res.json();
};

const Home = () => {
  const params = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState({
    currentItems: {
      1: [],
    },
    currentPage: 1,
    allPages: 1,
  });
  const [previewData, setPreviewData] = useState(null);

  const changePage = (page) => {
    navigate(`/${page}`, { replace: true });
  };

  useEffect(() => {
    if (!params.page && !params.id) {
      getData().then((d) => {
        setPreviewData(null);
        const parsedData = parseData(d);
        setData(parsedData);
      });
      return;
    }

    if (params.page) {
      const page = parseInt(params.page);

      if (isNaN(page) || page < 1) {
        return navigate("/", { replace: true });
      }

      getData().then((d) => {
        setPreviewData(null);
        const parsedData = parseData(d);

        if (parsedData.allPages >= page) {
          return setData({
            ...parsedData,
            currentPage: page,
          });
        }

        return navigate("/1", { replace: true });
      });
    }

    if (params.id) {
      const beerId = parseInt(params.id);

      getData().then((d) => {
        const beer = d.find((b) => b.id === beerId);

        if (beer) {
          setPreviewData(beer);
          setData(parseData(d));
        }
      });

      return;
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

  return (
    <div className={classes.root}>
      <Container>
        {previewData ? (
          <BeerPreview data={previewData} />
        ) : (
          <BeersContainer data={data.currentItems[data.currentPage]} />
        )}
      </Container>

      {!previewData && (
        <div className={classes.pagination}>
          {new Array(data.allPages).fill(0).map((_, index) => (
            <button
              key={index}
              onClick={() => changePage(index + 1)}
              className={`outlet ${
                data.currentPage === index + 1 ? "active" : ""
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
