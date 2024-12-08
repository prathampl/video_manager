
const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000/api',
});

// Auth APIs
export const sendOtp = (email) => api.post('/auth/send-otp', { email });
export const verifyOtp = (email, otp) => api.post('/auth/verify-otp', { email, otp });

// Layout APIs
export const saveLayout = (userId, layout) => api.post('/layout/save', { userId, layout });
export const loadLayout = (userId) => api.get(`/layout/load/${userId}`);

// YouTube Playlist API (Mock)
export const fetchYouTubePlaylists = () => api.get('/youtube-playlists');

export default api;
