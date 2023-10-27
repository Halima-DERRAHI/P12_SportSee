export function formatUserData(Data) {

    const formattedData = {
      id: Data.data.id,
      userInfos: {
        firstName: Data.data.userInfos.firstName,
        lastName: Data.data.userInfos.lastName,
        age: Data.data.userInfos.age,
      }
    };
    return formattedData;
} 