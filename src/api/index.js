import axios from "axios";

export const addUserToList = (
  login,
  setUsers,
  setValue,
  setIsLoading,
  users,
  inputRef
) => {
  setIsLoading(true);
  axios
    .get(`https://api.github.com/users/${login}`)
    .then((data) => {
      console.log(data);
      if (data?.data?.login) {
        // if user found...
        setUsers((prev) => [...prev, data]);
        console.log(users);
      } else {
        console.log("No users found...");
      }
      setIsLoading(false);
      setValue(""); // resetting the input value
      inputRef.current.focus();
    })
    .catch((err) => {
      console.log(err);
      setIsLoading(false);
      setValue(""); // resetting the input value
      inputRef.current.focus();
    });
};

export const getRepos = async (url) => {
  const response = await axios.get(url);
  console.log(response);
  return response;
};
