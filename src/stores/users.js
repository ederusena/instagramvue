import { ref } from "vue";
import { defineStore } from "pinia";
import { supabase } from "../supabase";

export const useUsersStore = defineStore("users", () => {
  const user = ref(null);
  const errorMessage = ref("");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleLogin = () => {};

  const handleSignup = async (credentials) => {
    const { email, password, username } = credentials;

    if (username.length < 4) {
      const errorMessageValue = "Username must be at least 3 characters";
      errorMessage.value = errorMessageValue;
      return errorMessage.value;
    }

    if (!emailRegex.test(email)) {
      const errorMessageValue = "Please enter a valid email";
      errorMessage.value = errorMessageValue;
      return errorMessage.value;
    }

    if (password.length < 8) {
      const errorMessageValue = "Password must be at least 8 characters";
      errorMessage.value = errorMessageValue;
      return errorMessage.value;
    }

    errorMessage.value = "";

    const { data: userWithUsernameAlreaedyExists } = await supabase
      .from("users")
      .select("*")
      .eq("username", username)
      .single();

    if (userWithUsernameAlreaedyExists) {
      errorMessage.value = "Username already exists";
      return errorMessage.value;
    }

    errorMessage.value = "";

    const { error } = await supabase.auth.signUp({ email, password });
    if (error) {
      errorMessage.value = error.message;
      return errorMessage.value;
    }

    await supabase.from("users").insert([{ username, email }]);
  };

  const handleLogout = () => {};

  const getUser = () => {};

  const clearMessageError = () => {
    errorMessage.value = "";
  };

  return {
    user,
    errorMessage,
    clearMessageError,
    handleLogin,
    handleSignup,
    handleLogout,
    getUser,
  };
});
