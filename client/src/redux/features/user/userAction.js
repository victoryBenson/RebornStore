
import axios from "axios";


const backendURL = "https://reborn-api.onrender.com/api/v1/users/";



//getUsers
export const getUsers = createAsyncThunk(
  "user/getUsers",
  async (userData, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const response = await axios.get(
        `${backendURL}getUsers`,
        userData,
        config
      );
      return response.data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);


//getUsers
export const getUser = createAsyncThunk(
  "user/getUser",
  async (userData, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const response = await axios.get(
        `${backendURL}getUser`,
        userData,
        config
      );
      return response.data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

//getUsersCount
export const UsersTotal = createAsyncThunk(
  "user/getUserCount",
  async (userData, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const response = await axios.get(
        `${backendURL}getUsersCount`,
        userData,
        config
      );
      return response.data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

//deleteUser
export const deleteUser = createAsyncThunk(
  "user/deleteUser",
    async (userId, { rejectWithValue }) => {
        try {
        const config = {
            headers: {
            "Content-Type": "application/json",
            },
        };

        const response =  await axios.delete(
            `${backendURL}deleteUser/${userId}`,
            config
        );
        return response.data;
        
        } catch (error) {
        if (error.response && error.response.data.message) {
            return rejectWithValue(error.response.data.message);
        } else {
            return rejectWithValue(error.message);
        }
        }
    }
);


