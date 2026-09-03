import axios from "axios";

const apiClient = axios.create({
	baseURL: "http://localhost:3000",
	headers: {
		"Content-Type": "application/json",
	},
	withCredentials: true,
});

export const getProfile = async () => {
	try {
		const response = await apiClient.get("/api/intern/profile");
		return response.data;
	} catch (error) {
		throw error.response?.data || error;
	}
};