// store.ts
import {
	createSlice,
	createAsyncThunk,
	configureStore,
	PayloadAction,
} from "@reduxjs/toolkit";
import { ARTICLE_LIST_API } from "../utils/constants";

interface Article {
	id: string;
	title: string;
	summary?: string;
}

interface ArticlesState {
	data: Article[];
	loading: boolean;
	error: string | null;
}

const initialState: ArticlesState = {
	data: [],
	loading: false,
	error: null,
};

// Define a variable to store the cached articles
let cachedArticles: Article[] = [];

export const fetchArticles = createAsyncThunk(
	"articles/fetchArticles",
	async (_, { rejectWithValue }) => {
		try {
			const response = await fetch(ARTICLE_LIST_API);
			if (!response.ok) {
				// If there is a server error, return the cached articles
				if (cachedArticles.length > 0) {
					return cachedArticles;
				} else {
					throw new Error("Server error");
				}
			}
			const data = await response.json();
			// Update the cached articles
			cachedArticles = data;
			return data;
		} catch (error: any) {
			return rejectWithValue(error.message);
		}
	}
);

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
				}
			)
			.addCase(fetchArticles.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload as string; // action.payload contains the error message
			});
	},
});

export const articlesActions = articlesSlice.actions;

export const store = configureStore({
	reducer: {
		articles: articlesSlice.reducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
