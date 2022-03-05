import axios from "axios";

export const getUser = async (name) => {
  try {
    return await axios.get(`https://api.github.com/users/${name}`);
  } catch (err) {
    console.error(`No Users Found...  ${err.message}`);
  }
};

export const getRepos = async (url) => {
  try {
    return await axios.get(url);
  } catch (err) {
    console.error(err.message);
  }
};
