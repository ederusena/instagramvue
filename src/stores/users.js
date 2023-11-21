import { ref } from "vue";
import { defineStore } from "pinia";
import { supabase } from "../supabase";

export const useUsersStore = defineStore("users", () => {
  const user = ref(null);
  const errorMessage = ref("");
  const loading = ref(false);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleLogin = async (credentials) => {
    const { email, password } = credentials;

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

    loading.value = true;

    const { data, error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      loading.value = false;
      errorMessage.value = error.message;
      return errorMessage.value;
    }

    console.log(data)

     const { data: loggedUser } = await supabase
       .from("users")
       .select()
       .eq("email", email)
       .single();

     user.value = {
       id: loggedUser.id,
       username: loggedUser.username,
       email: loggedUser.email,
    };

    loading.value = false;
    errorMessage.value = "";


  };

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

    loading.value = true;

    const { data: userWithUsernameAlreaedyExists } = await supabase
      .from("users")
      .select("*")
      .eq("username", username)
      .single();

    if (userWithUsernameAlreaedyExists) {
      loading.value = false;
      errorMessage.value = "Username already exists";
      return errorMessage.value;
    }

    errorMessage.value = "";

    const { error } = await supabase.auth.signUp({ email, password });
    if (error) {
      loading.value = false;
      errorMessage.value = error.message;
      return errorMessage.value;
    }

    await supabase.from("users").insert([{ username, email }]);

    const { data: newUser } = await supabase
      .from("users")
      .select()
      .eq("email", email)
      .single();

    user.value = {
      id: newUser.id,
      username: newUser.username,
      email: newUser.email,
    }

    loading.value = false;

  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  const getUser = async () => {
    loading.value = true;
    const { data } = await supabase.auth.getUser();

    if (!data.user) {
      loading.value = false;
      user.value = null;
      return;
    }

    const { data: userWithEmail } = await supabase
      .from("users")
      .select()
      .eq("email", data.user.email)
      .single();

    user.value = {
      id: userWithEmail.id,
      username: userWithEmail.username,
      email: userWithEmail.email,
    };

    loading.value = false;
  };

  const clearMessageError = () => {
    errorMessage.value = "";
  };

  return {
    user,
    loading,
    errorMessage,
    clearMessageError,
    handleLogin,
    handleSignup,
    handleLogout,
    getUser,
  };
});
