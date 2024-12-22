import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

// Define User and State Types
interface PublicMetadata {
  role: string;
  permissions?: string[];
}

interface User {
  publicMetadata: PublicMetadata;
  emailAddresses: [{ emailAddress: string }];
  profileImageUrl: string;
  username: string;
}

interface AuthPayload {
  user: User;
  token: string;
}

interface UserState {
  currentUser: User | null;
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}

// Helper for LocalStorage and Token Management
const storageKey = "currentUser";
const tokenKey = "authToken";

const storage = {
  getUser: (): User | null => {
    if (typeof window !== "undefined") {
      const storedUser = localStorage.getItem(storageKey);
      return storedUser ? JSON.parse(storedUser) : null;
    }
    return null;
  },
  setUser: (user: User) => {
    if (typeof window !== "undefined") {
      localStorage.setItem(storageKey, JSON.stringify(user));
    }
  },
  clearUser: () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem(storageKey);
    }
  },
};

const tokenStorage = {
  set: (token: string) => {
    if (typeof window !== "undefined") {
      document.cookie = `${tokenKey}=${token}; path=/; Secure; HttpOnly`;
    }
  },
  clear: () => {
    if (typeof window !== "undefined") {
      document.cookie = `${tokenKey}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; Secure; HttpOnly`;
    }
  },
};

// Initial State
const initialState: UserState = {
  currentUser: storage.getUser(),
  token: null,
  isAuthenticated: !!storage.getUser(),
  loading: false,
  error: null,
};

// Async Thunks for Login and Register
export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (
    credentials: { email: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await fetch("/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Login failed");

      tokenStorage.set(data.token);
      return { user: data.user, token: data.token } as AuthPayload;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (
    newUser: { email: string; password: string; full_name: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await fetch("/api/users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Registration failed");

      tokenStorage.set(data.token);
      return { user: data.user, token: data.token } as AuthPayload;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

// Slice Definition
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.currentUser = null;
      state.token = null;
      state.isAuthenticated = false;
      state.loading = false;
      state.error = null;
      storage.clearUser();
      tokenStorage.clear();
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        loginUser.fulfilled,
        (state, action: PayloadAction<AuthPayload>) => {
          state.currentUser = action.payload.user;
          state.token = action.payload.token;
          state.isAuthenticated = true;
          state.loading = false;
          state.error = null;
          storage.setUser(action.payload.user);
        }
      )
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        registerUser.fulfilled,
        (state, action: PayloadAction<AuthPayload>) => {
          state.currentUser = action.payload.user;
          state.token = action.payload.token;
          state.isAuthenticated = true;
          state.loading = false;
          state.error = null;
          storage.setUser(action.payload.user);
        }
      )
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

// Export actions and reducer
export const { logout, setLoading, setError } = userSlice.actions;
export default userSlice.reducer;
