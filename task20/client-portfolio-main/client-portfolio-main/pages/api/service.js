let BASE_URL = process.env.NEXT_PUBLIC_STRAPI_URL;
let token = process.env.NEXT_PUBLIC_STRAPI_TOKEN;

const apiPOST = async (api, body) => {
	const res = await fetch(`${BASE_URL}/${api}`, {
		method: "POST",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
			Authorization: "Bearer " + token,
		},
		body: JSON.stringify(body),
	});
	return await res.json();
};

const apiGET = async (api) => {
	let res = await fetch(`${BASE_URL}/${api}`, {
		headers: {
			"Content-Type": "application/json",
			Authorization: "Bearer " + token,
		},
	});
	if (!res.status || res.status!=200) {
		throw new Error("API request failed");
	}
	res=await res.json();
	return res;
};

const apiPUT = async (api, body) => {
	const res = await fetch(`${BASE_URL}/${api}`, {
		method: "PUT",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
			Authorization: "Bearer " + token,
		},
		body: JSON.stringify(body),
	});

	return await res.json();
};

const apiPATCH = async (api, body) => {
	const res = await fetch(`${BASE_URL}/${api}`, {
		method: "PATCH",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
			Authorization: "Bearer " + token,
		},
		body: JSON.stringify(body),
	});
	return await res.json();
};

const apiDELETE = async (api, body) => {
	const res = await fetch(`${BASE_URL}/${api}`, {
		method: "DELETE",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
			Authorization: "Bearer " + token,
		},
		body: JSON.stringify(body),
	});

	return await res.json();
};

export { apiPOST, apiGET, apiPATCH, apiDELETE, apiPUT };
