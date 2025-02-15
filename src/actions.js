import axios from "axios";

export const GET_FAVS_FROM_LS = "GET_FAVS_FROM_LS";
export const REMOVE_FAVS_FROM_LS = "REMOVE_FAVS_FROM_LS";
export const FAV_ADD = "FAV_ADD";
export const FAV_REMOVE = "FAV_REMOVE";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_LOADING = "FETCH_LOADING";
export const FETCH_ERROR = "FETCH_ERROR";

export const getFavsFromLocalStorage = () => {
	return { type: GET_FAVS_FROM_LS };
};

export const removeFavsFromLocalStorage = () => {
	return { type: REMOVE_FAVS_FROM_LS };
};

export const addFav = (info) => {
	return { type: FAV_ADD, payload: info };
};

export const removeFav = (key) => {
	return { type: FAV_REMOVE, payload: key };
};

export const fetchAnother = () => (dispatch) => {
	dispatch({ type: FETCH_LOADING, payload: true });
	return axios
		.get("http://www.boredapi.com/api/activity/")
		.then((res) => {
			dispatch({ type: FETCH_SUCCESS, payload: res.data });
			dispatch({ type: FETCH_LOADING, payload: false });
		})
		.catch((err) => dispatch({ type: FETCH_ERROR, payload: err }));
};
