
const API_URL = 'http://localhost:3000/user/';

const fetchFromAPI = async (URL) => {
  const response = await fetch(URL);
  if (response.ok) {
    const data = await response.json();
    //console.log('Données récupérées avec succès :', data);
    return data;
  }
  return null;
};

const getUserMainData = async (userId) => {
  const URL = `${API_URL}${userId}`;
  return fetchFromAPI(URL);
};

const getUserActivity = async (userId) => {
  const URL = `${API_URL}${userId}/activity`;
  return fetchFromAPI(URL);
};

const getUserAverageSessions = async (userId) => {
  const URL = `${API_URL}${userId}/average-sessions`;
  return fetchFromAPI(URL);
};

const getUserPerformance = async (userId) => {
  const URL = `${API_URL}${userId}/performance`;
  return fetchFromAPI(URL);
};

const UserService = {
  getUserMainData,
  getUserActivity,
  getUserAverageSessions,
  getUserPerformance
};

export default UserService;