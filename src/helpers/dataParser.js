const parseBeerListData = (data = []) => {
	const parsedData = {
		items: {
			1: [],
		},
		currentPage: 1,
		allPages: 1,
	};

	let index = 1;

	data.forEach((item) => {
		if (parsedData.items[index].length === 6) {
			index += 1;
			parsedData.allPages += 1;
			parsedData.items[index] = [];
		}

		parsedData.items[index].push({
			...item,
			count: 1
		});
	});

	return parsedData;
};

export { parseBeerListData };
