import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import BeerPreview from "../../components/BeerPreview/BeerPreview";
import BeersContainer from "../../containers/BeersContainer/BeersContainer";
import Container from "../../components/Container/Container";
import classes from "./Home.module.css";
import { getBeerDataList } from "../../api/api";
import { parseBeerListData } from "../../helpers/dataParser";
import BeerContainerNav from "../../containers/BeersContainer/components/BeerContainerNav";

const Home = () => {
	const params = useParams();
	const navigate = useNavigate();

	const [activeCategoryId, setActiveCategoryId] = useState(-1);
	const [previewData, setPreviewData] = useState(null);
	const [data, setData] = useState({
		items: {
			1: [],
		},
		currentPage: 1,
		allPages: 1,
		allItems: [],
	});

	const changePage = (page) => {
		navigate(`/${page}`, { replace: true });
	};

	const onCategoryChange = (categoryId) => {
		if (categoryId === -1) {
			setData((prevState) => ({
				...prevState,
				...parseBeerListData(data.allItems),
			}));
		} else {
			const filteredItems = data.allItems.filter((item) => item.categoryId === categoryId);
			setData((prevState) => ({
				...prevState,
				...parseBeerListData(filteredItems),
			}));
		}
		setActiveCategoryId(categoryId);
	};

	useEffect(() => {
		if (!params.page && !params.id) {
			getBeerDataList().then((d) => {
				setPreviewData(null);
				const parsedData = parseBeerListData(d);
				setData({ ...parsedData, allItems: d });
			});
			return;
		}

		if (params.page) {
			const page = parseInt(params.page);

			if (isNaN(page) || page < 1) {
				return navigate("/", { replace: true });
			}

			getBeerDataList().then((d) => {
				setPreviewData(null);
				const parsedData = parseBeerListData(d);

				if (parsedData.allPages >= page) {
					return setData({
						...parsedData,
						currentPage: page,
						allItems: d,
					});
				}

				return navigate("/1", { replace: true });
			});
		}

		if (params.id) {
			const beerId = parseInt(params.id);

			getBeerDataList().then((d) => {
				const beer = d.find((b) => b.id === beerId);

				if (beer) {
					setPreviewData({
						...beer,
						count: 1
					});

					setData({
						...parseBeerListData(d),
						allItems: d,
					});
				}
			});
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [params]);


	return (
		<div>
			{!previewData && <BeerContainerNav activeCategoryId={activeCategoryId} onChange={onCategoryChange} />}

			<Container>
				{previewData ? (
					<BeerPreview data={previewData} />
				) : (
					<BeersContainer data={data.items[data.currentPage]} />
				)}
			</Container>

			{!previewData && (
				<div className={classes.pagination}>
					{new Array(data.allPages).fill(0).map((_, index) => (
						<button
							key={index}
							onClick={() => changePage(index + 1)}
							className={`outlet ${data.currentPage === index + 1 ? "active" : ""}`}
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
