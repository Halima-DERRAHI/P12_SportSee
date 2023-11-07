const API_URL = 'http://localhost:3000/user';

const fetchData = async (URL) => {
  const response = await fetch(URL);
  return response.ok ? await response.json() : null;
};

/* Main User Data */

const formatUserData = (data) => {
  const { id, keyData, userInfos } = data.data;
  const todayScore = data.data.todayScore || data.data.score;

  return {
    id,
    keyData: {
      calorieCount: keyData.calorieCount,
      proteinCount: keyData.proteinCount,
      carbohydrateCount: keyData.carbohydrateCount,
      lipidCount: keyData.lipidCount,
    },
    todayScore,
    userInfos: {
      firstName: userInfos.firstName,
      lastName: userInfos.lastName,
      age: userInfos.age,
    },
  };
};

const getUserMainData = async (userId) => {
  const URL = `${API_URL}/${userId}`;
  return formatUserData(await fetchData(URL));
};

/* Activity User Data */

const formatActivityData = (data) => {
  const { userId, sessions } = data.data;
  const formatDay = (day) => {
    const match = day.match(/(\d{1})$/);
    return match ? match[1] : ''; 
  };

  const formattedSessions = sessions.map(session => ({
    day: formatDay(session.day),
    kilogram: session.kilogram,
    calories: session.calories,
  }));
  
  return {
    userId,
    sessions: formattedSessions,
  };
};


const getUserActivity = async (userId) => {
  const URL = `${API_URL}/${userId}/activity`;
  return formatActivityData(await fetchData(URL));
};

/* Average Sessions User Data */

const formatAverageSessionsData = (data) => {
  const { userId, sessions } = data.data;

  const dayInitials = ["", "L", "M", "M", "J", "V", "S", "D"];

  const formattedSessions = sessions.map(session => ({
    day: dayInitials[parseInt(session.day)],
    sessionLength: session.sessionLength
  }));

  formattedSessions.unshift({day: '',
    sessionLength: formattedSessions[0].sessionLength
  })

  const lastSessions = formattedSessions[formattedSessions.length -1];
  formattedSessions.push({day: '',
    sessionLength: lastSessions.sessionLength
  })

  return {
    userId,
    sessions: formattedSessions,
  };
};

const getUserAverageSessions = async (userId) => {
  const URL = `${API_URL}/${userId}/average-sessions`;
  return formatAverageSessionsData(await fetchData(URL));
};

/* Performance User Data */

const formatPerformanceData = (data) => {
  const { userId, kind, data: performanceData } = data.data;

  const formattedPerformance = Object.keys(kind).map((kindKey) => ({
    value: performanceData[kindKey -1].value,
    kind: kind[kindKey].charAt(0).toUpperCase() + kind[kindKey].slice(1),
  }));

  return {
    userId,
    kind: formattedPerformance,
  };
};

const getUserPerformance = async (userId) => {
  const URL = `${API_URL}/${userId}/performance`;
  return formatPerformanceData(await fetchData(URL));
};

/* All User's Data */

const getUserData = async (userId) => {
  const mainUserData = await getUserMainData(userId);
  const activityData = await getUserActivity(userId);
  const averageSessionsData = await getUserAverageSessions(userId);
  const performanceData = await getUserPerformance(userId);

  return {
    mainUserData,
    activityData,
    averageSessionsData,
    performanceData,
  };
};

export default getUserData;