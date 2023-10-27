import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE
} from '../Services/DataMock';

const API_URL = 'http://localhost:3000/user/';
const isDevelopment = true; 

const fetchFromAPI = async (URL) => {
  const response = await fetch(URL);
  return response.ok ? response.json() : null;
};

const getUserMainData = async (userId) => {
  const URL = `${API_URL}${userId}`;
  return isDevelopment ? USER_MAIN_DATA.find((data) => 
          data.id === userId) : fetchFromAPI(URL);
};

const getUserActivity = async (userId) => {
  const URL = `${API_URL}${userId}/activity`;
  return isDevelopment ? USER_ACTIVITY.find((data) => 
          data.userId === userId) : fetchFromAPI(URL);
};

const getUserAverageSessions = async (userId) => {
  const URL = `${API_URL}${userId}/average-sessions`;
  return isDevelopment ? USER_AVERAGE_SESSIONS.find((data) => 
        data.userId === userId) : fetchFromAPI(URL);
};

const getUserPerformance = async (userId) => {
  const URL = `${API_URL}${userId}/performance`;
  return isDevelopment ? USER_PERFORMANCE.find((data) => 
          data.userId === userId) : fetchFromAPI(URL);
};

const UserService = {
  getUserMainData,
  getUserActivity,
  getUserAverageSessions,
  getUserPerformance
};

export default UserService;