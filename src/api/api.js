const getBeerDataList = async () => {
	const res = await fetch("/data.json", {
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
	});
	return await res.json();
};

export { getBeerDataList };
