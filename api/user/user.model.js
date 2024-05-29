// 아래는 향후, 몽고DB로 바꿀 것임 (꼭 잊지 말고)
const Store = [
    {
      name: '정희라',
      role: 'user',
      email: 'hera@jpop.com',
      password: '1234',
    },
    {
      name: '백천만',
      role: 'driver',
      email: '10millon@jpop.com',
      password: '5678',
      availlablity: 1,
      position: {
        gps_x: 37.22,
        gps_y: 127.2,
      },
    },
  ];
  
  export const User = {
    find: async (params) => {
      if (!params) return Store;
    },
  };
  