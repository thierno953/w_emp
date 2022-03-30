import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";

export const createPerson = createAsyncThunk(
  "person/createPerson",
  async ({ updatedPersonData, navigate, toast }, { rejectWithValue }) => {
    try {
      const response = await api.createPerson(updatedPersonData);
      toast.success("Person Added Successfully");
      navigate("/dashboard");
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

// export const getPersons = createAsyncThunk(
//   "person/getPersons",
//   async (_, { rejectWithValue }) => {
//     try {
//       const response = await api.getPersons();
//       return response.data;
//     } catch (err) {
//       return rejectWithValue(err.response.data);
//     }
//   }
// );

export const getPersons = createAsyncThunk(
  "person/getPersons",
  async (page, { rejectWithValue }) => {
    try {
      const response = await api.getPersons(page);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getPerson = createAsyncThunk(
  "person/getPerson",
  async (id, { rejectWithValue }) => {
    try {
      const response = await api.getPerson(id);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getPersonsByUser = createAsyncThunk(
  "person/getPersonsByUser",
  async (userId, { rejectWithValue }) => {
    try {
      const response = await api.getPersonsByUser(userId);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const deletePerson = createAsyncThunk(
  "person/deletePerson",
  async ({ id, toast, navigate }, { rejectWithValue }) => {
    try {
      const response = await api.deletePerson(id);
      toast.success("Person Deleted Successfully");
      navigate("/dashboard");
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const updatePerson = createAsyncThunk(
  "person/updatePerson",
  async ({ id, updatedPersonData, toast, navigate }, { rejectWithValue }) => {
    try {
      const response = await api.updatePerson(updatedPersonData, id);
      toast.success("Person Updated Successfully");
      navigate("/dashboard");
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const searchPersons = createAsyncThunk(
  "person/searchPersons",
  async (searchQuery, { rejectWithValue }) => {
    try {
      const response = await api.getPersonsBySearch(searchQuery);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const personSlice = createSlice({
  name: "person",
  initialState: {
    person: {},
    persons: [],
    userPersons: [],
    // pages
    currentPage: 1,
    numberOfPages: null,
    error: "",
    loading: false,
  },

  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },

  extraReducers: {
    [createPerson.pending]: (state, action) => {
      state.loading = true;
    },
    [createPerson.fulfilled]: (state, action) => {
      state.loading = false;
      state.persons = [action.payload];
    },
    [createPerson.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [getPersons.pending]: (state, action) => {
      state.loading = true;
    },
    [getPersons.fulfilled]: (state, action) => {
      state.loading = false;
    //  state.persons = action.payload;
    // current
      state.persons = action.payload.data;
      state.numberOfPages = action.payload.numberOfPages;
      state.currentPage = action.payload.currentPage;
    },
    [getPersons.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [getPerson.pending]: (state, action) => {
      state.loading = true;
    },
    [getPerson.fulfilled]: (state, action) => {
      state.loading = false;
      state.person = action.payload;
    },
    [getPerson.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [getPersonsByUser.pending]: (state, action) => {
      state.loading = true;
    },
    [getPersonsByUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.userPersons = action.payload;
    },
    [getPersonsByUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },

    [deletePerson.pending]: (state, action) => {
      state.loading = true;
    },
    [deletePerson.fulfilled]: (state, action) => {
      state.loading = false;
      console.log("action", action);
      const {
        arg: { id },
      } = action.meta;
      if (id) {
        state.userPersons = state.userPersons.filter((item) => item._id !== id);
        state.persons = state.persons.filter((item) => item._id !== id);
      }
    },
    [deletePerson.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },

    [updatePerson.pending]: (state, action) => {
      state.loading = true;
    },
    [updatePerson.fulfilled]: (state, action) => {
      state.loading = false;

      const {
        arg: { id },
      } = action.meta;
      if (id) {
        state.userPersons = state.userPersons.map((item) =>
          item._id === id ? action.payload : item
        );
        state.persons = state.persons.map((item) =>
          item._id === id ? action.payload : item
        );
      }
    },
    [updatePerson.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },

    [searchPersons.pending]: (state, action) => {
      state.loading = true;
    },
    [searchPersons.fulfilled]: (state, action) => {
      state.loading = false;
      state.persons = action.payload;
    },
    [searchPersons.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },

  },
});

export const { setCurrentPage } = personSlice.actions;

export default personSlice.reducer;
