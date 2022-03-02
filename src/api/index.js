import axios from "axios";

export const addUserToList = async (
  name,
  setUsers,
  setValue,
  setIsLoading,
  inputRef
) => {
  try {
    const res = await axios.get(`https://api.github.com/users/${name}`);
    setUsers((prev) => [...prev, res]);
    setIsLoading(false);
    setValue(""); // resetting the input value
    inputRef.current.focus();
  } catch (err) {
    console.error(`No Users Found...  ${err.message}`);
    setIsLoading(false);
    setValue(""); // resetting the input value
    inputRef.current.focus();
  }
};

export const getRepos = async (url) => {
  try {
    const response = await axios.get(url);
    return response;
  } catch (err) {
    console.error(err.message);
  }
};
