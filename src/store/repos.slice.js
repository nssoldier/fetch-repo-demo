import { createSlice } from "redux-starter-kit";
import repoService from "../services/repos.service";

const slice = createSlice({
  slice: "repos",
  initialState: {
    loading: false,
    username: null,
    list: [],
    page: 0,
    error: null,
    total: 0
  },
  reducers: {
    loadStart: (state, action) => ({
      loading: true,
      list: [],
      username: action.payload
    }),
    loadSuccess: (state, action) => ({
      loading: false,
      list: [...action.payload.list],
      total: action.payload.userInfo.public_repos,
      page: 1
    }),
    loadFail: (state, action) => ({
      loading: false,
      error: action.payload
    })
  }
});

export const search = username => async dispatch => {
  dispatch(slice.actions.loadStart(username));
  try {
    const userInfo = await repoService.loadUserInfo(username);
    const repos = await repoService.loadRepos(username, 1);
    dispatch(
      slice.actions.loadSuccess({
        list: repos,
        userInfo
      })
    );
  } catch (err) {
    dispatch(slice.actions.loadFail(err));
  }
};

export const loadMore = () => async (dispatch, getState) => {

}

export default slice;
