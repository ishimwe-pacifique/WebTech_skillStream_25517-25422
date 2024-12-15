import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "axios";

// Axios instance with base URL and headers
const axios = axiosInstance.create({
  baseURL: "http://localhost:8080",
  headers: {
    "Content-Type": "application/json",
  },
});

class api {
  resetAll = createAction("resetAll");

  // User APIs
// User APIs
getusers = createAsyncThunk(
  "/admin/users",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("/admin/users");
      return response.data;
    } catch (error) {
      console.error(error);
      return rejectWithValue({ error: error?.response?.data?.message });
    }
  }
);

register = createAsyncThunk("/register", async (data, { rejectWithValue }) => {
  try {
    const response = await axios.post("/register", { ...data });
    return response.data;
  } catch (error) {
    console.error(error);
    return rejectWithValue({ error: error?.response?.data });
  }
});

login = createAsyncThunk("/login", async (data, { rejectWithValue }) => {
  try {
    const response = await axios.post("/login", { ...data });
    return response.data;
  } catch (error) {
    console.error(error);
    return rejectWithValue({ error: error?.response?.data });
  }
});

deleteUser = createAsyncThunk(
  "/admin/users/{userId}",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`/admin/users/${id}`);
      return response.data;
    } catch (error) {
      console.error(error);
      return rejectWithValue({ error: error?.response?.data?.message });
    }
  }
);


  // Course APIs
  getcourses = createAsyncThunk(
    "getcourses",
    async (_, { rejectWithValue }) => {
      try {
        const response = await axios.get("/courses");
        return response.data;
      } catch (error) {
        console.error(error);
        return rejectWithValue({ error: error?.response?.data?.message });
      }
    }
  );

  createCourse = createAsyncThunk(
    "createCourse",
    async (data, { rejectWithValue }) => {
      try {
        const response = await axios.post("/courses/register", { ...data });
        return response.data;
      } catch (error) {
        console.error(error);
        return rejectWithValue({ error: error?.response?.data?.message });
      }
    }
  );

  getcourse = createAsyncThunk(
    "getcourse",
    async (id, { rejectWithValue }) => {
      try {
        const response = await axios.get(`/courses/${id}`);
        return response.data;
      } catch (error) {
        console.error(error);
        return rejectWithValue({ error: error?.response?.data?.message });
      }
    }
  );

  deletecourse = createAsyncThunk(
    "deletecourse",
    async (id, { rejectWithValue }) => {
      try {
        const response = await axios.delete(`/courses/${id}`);
        return response.data;
      } catch (error) {
        console.error(error);
        return rejectWithValue({ error: error?.response?.data?.message });
      }
    }
  );

  searchcourse = createAsyncThunk(
    "searchcourse",
    async (title, { rejectWithValue }) => {
      try {
        const response = await axios.get(`/courses/searchByTitle/${title}`);
        return response.data;
      } catch (error) {
        console.error(error);
        return rejectWithValue({ error: error?.response?.data?.message });
      }
    }
  );

  updateCourse = createAsyncThunk(
    "updateCourse",
    async (data, { rejectWithValue }) => {
      try {
        const response = await axios.patch(`/courses/${data.id}`, { ...data });
        return response.data;
      } catch (error) {
        console.error(error);
        return rejectWithValue({ error: error?.response?.data?.message });
      }
    }
  );

  // Enrollment APIs
  getenrollments = createAsyncThunk(
    "getenrollments",
    async (_, { rejectWithValue }) => {
      try {
        const response = await axios.get("/enrollment");
        return response.data;
      } catch (error) {
        console.error(error);
        return rejectWithValue({ error: error?.response?.data?.message });
      }
    }
  );

  createEnrollment = createAsyncThunk(
    "createEnrollment",
    async (data, { rejectWithValue }) => {
      try {
        const response = await axios.post("/enrollment", { ...data });
        return response.data;
      } catch (error) {
        console.error(error);
        return rejectWithValue({ error: error?.response?.data });
      }
    }
  );

  getenrollment = createAsyncThunk(
    "getenrollment",
    async (id, { rejectWithValue }) => {
      try {
        const response = await axios.get(`/enrollment/${id}`);
        return response.data;
      } catch (error) {
        console.error(error);
        return rejectWithValue({ error: error?.response?.data?.message });
      }
    }
  );

  getenrollmentbyUser = createAsyncThunk(
    "getenrollmentbyUser",
    async (id, { rejectWithValue }) => {
      try {
        const response = await axios.get(`/enrollment/user/${id}`);
        return response.data;
      } catch (error) {
        console.error(error);
        return rejectWithValue({ error: error?.response?.data?.message });
      }
    }
  );

  getenrollmentbycourse = createAsyncThunk(
    "getenrollmentbycourse",
    async (id, { rejectWithValue }) => {
      try {
        const response = await axios.get(`/enrollment/course/${id}`);
        return response.data;
      } catch (error) {
        console.error(error);
        return rejectWithValue({ error: error?.response?.data?.message });
      }
    }
  );

  leave = createAsyncThunk(
    "leave",
    async (id, { rejectWithValue }) => {
      try {
        const response = await axios.delete(`/enrollment/leave/${id}`);
        return response.data;
      } catch (error) {
        console.error(error);
        return rejectWithValue({ error: error?.response?.data?.message });
      }
    }
  );
}

export const apis = new api();
