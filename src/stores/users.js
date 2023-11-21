import { ref } from "vue";
import { defineStore } from "pinia";

export const useUsersStore = defineStore("users", () => {
  const user = ref(null);
  const errorMessage = ref("");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleLogin = () => {};

  const handleSignup = (credentials) => {
    const { email, password, username } = credentials;


    if (username.length < 4) {
      console.log("Username must be at least 3 characters");
      const errorMessageValue = "Username must be at least 3 characters";
      errorMessage.value = errorMessageValue;
      return errorMessage.value;
    }

    if (!emailRegex.test(email)) {
      console.log("Please enter a valid email");
      const errorMessageValue = "Please enter a valid email";
      errorMessage.value = errorMessageValue;
      return errorMessage.value;
    }

    if (password.length < 8) {
      console.log("Password must be at least 8 characters");
      const errorMessageValue = "Password must be at least 8 characters";
      errorMessage.value = errorMessageValue;
      return errorMessage.value;
    }

    errorMessage.value = "";

  };

  const handleLogout = () => {};

  const getUser = () => {};

  return { user, errorMessage, handleLogin, handleSignup, handleLogout, getUser };
});
