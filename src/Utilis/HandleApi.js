import axios from "axios";

const baseUrl = "http://localhost:3000";

const signUp = async (userName, userEmail, userPassword) => {
  try {
        await axios
      .post(`${baseUrl}/register`, {
        name: userName,
        email: userEmail,
        password: userPassword,
      })
      .then((res) => alert(res.data.message));
  } catch (err) {
    console.log("Error while registering.....");
  }
};

const signIn = async (
  userEmail,
  userPassword,
  setLoginUser,
  navigate,
  setUser
) => {
  try {
    const response = await axios
      .post(`${baseUrl}/login`, {
        email: userEmail,
        password: userPassword,
      })
      .then((res) => {
        alert(res.data.message);
        setLoginUser(res.data.user);
        setUser(res.data.user);
        navigate("/");
      });
  } catch (err) {
    console.log("Error while login........");
  }
};

export { signUp, signIn };
