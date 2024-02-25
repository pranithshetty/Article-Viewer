import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { ARTICLE_LIST_API } from "../utils/constants";
import axios from "axios";

//type of each article
interface Article {
	id: string;
	title: string;
	summary?: string;
}
//inetial state type
interface InetialState {
	data: Article[];
	loading: boolean;
	error: string | null;
}

const initialState: InetialState = {
	data: [],
	loading: false,
	error: null,
};

//let cachedArticles: Article[] = [];

//fetch the article list|| generates pending,fullfiled and rejected action types
export const fetchArticles = createAsyncThunk("articles/fetchArticles", () => {
	// return cachedArticles.length
	// 	? cachedArticles
	// 	:
	return axios.get(ARTICLE_LIST_API).then((response) => {
		//cachedArticles = response.data;
		//localStorage.setItem('articles',response.data)
		return response.data;
	});
});

const articlesSlice = createSlice({
	name: "articles",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchArticles.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(
				fetchArticles.fulfilled,
				(state, action: PayloadAction<Article[]>) => {
					state.loading = false;
					state.data = action.payload;
					state.error = null;
				}
			)
			.addCase(fetchArticles.rejected, (state, action) => {
				state.loading = false;
				state.error =
					(action.error.message as string) || "Something went wrong!";
				//state.data = cachedArticles;
			});
	},
});

//export const articlesActions = articlesSlice.actions;
export default articlesSlice.reducer;
