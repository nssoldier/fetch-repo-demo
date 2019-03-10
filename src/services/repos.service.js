import fetch from "../utils/fetch";

const RepoService = {
  loadUserInfo: username =>
    fetch.get(`/users/${username}`).then(res => res.data),
  loadRepos: (username, page = 1) =>
    fetch.get(`/users/${username}/repos?page=${page}`).then(res => res.data)
};

export default RepoService;
