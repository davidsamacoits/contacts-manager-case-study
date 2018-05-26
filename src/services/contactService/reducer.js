// import * as actionTypes from './actionTypes';

export const initialState = () => ({
  contacts: [
    {
      id: 'U77cba987a43cb0f0e82',
      firstName: 'Adam',
      lastName: 'Brodowski',
      jobTitle: 'QA',
      phoneHome: '975-235-5323',
      phoneWork: '235-566-1385',
      email: 'adam@brodowski.com',
      picture: 'https://tinyfac.es/data/avatars/FBEBF655-4886-455A-A4A4-D62B77DD419B.jpeg',
    },
    {
      id: 'U211b6bb798aa30baf1d',
      firstName: 'Alexis',
      lastName: 'Doreau',
      jobTitle: 'Developer',
      phoneHome: '462-245-4345',
      phoneWork: '346-775-2366',
      email: 'alexis@doreau.com',
      picture: 'https://tinyfac.es/data/avatars/26CFEFB3-21C8-49FC-8C19-8E6A62B6D2E0.jpeg',
    },
    {
      id: 'U43d15aec1a2c3ba5739',
      firstName: 'Erwan',
      lastName: 'Gauthier',
      jobTitle: 'Manager',
      phoneHome: '543-433-3332',
      phoneWork: '321-323-3424',
      email: 'erwan@gauthier.com',
      picture: 'https://tinyfac.es/data/avatars/BA0CB1F2-8C79-4376-B13B-DD5FB8772537.jpeg',
    },
    {
      id: 'Uf9148a1f33448931e0c',
      firstName: 'Rafael',
      lastName: 'Gonde',
      jobTitle: 'Developer',
      phoneHome: '765-454-3346',
      phoneWork: '367-342-4357',
      email: 'rafael@gonde.com',
      picture: 'https://tinyfac.es/data/avatars/2DDDE973-40EC-4004-ABC0-73FD4CD6D042.jpeg',
    },
    {
      id: 'Ua8b7f8600af38c7df32',
      firstName: 'Sophie Louise',
      lastName: 'Hart',
      jobTitle: 'Analyst',
      phoneHome: '675-474-7643',
      phoneWork: '443-332-3479',
      email: 'sophielouise@hart.com',
      picture: 'https://tinyfac.es/data/avatars/03F55412-DE8A-4F83-AAA6-D67EE5CE48DA.jpeg',
    },
    {
      id: 'U6a56bef2898d32ae021',
      firstName: 'Jeffrey',
      lastName: 'Kam',
      jobTitle: 'QA',
      phoneHome: '243-454-7654',
      phoneWork: '367-422-6532',
      email: 'jeffrey@kam.com',
      picture: 'https://tinyfac.es/data/avatars/852EC6E1-347C-4187-9D42-DF264CCF17BF.jpeg',
    },
    {
      id: 'Uc074fa244d81b84bb3e',
      firstName: 'Dallas',
      lastName: 'Kwok',
      jobTitle: 'Developer',
      phoneHome: '939-928-9023',
      phoneWork: '234-321-9822',
      email: 'dallas@kwok.com',
      picture: 'https://tinyfac.es/data/avatars/7E570445-25F0-4276-8E8F-084ABA2C8FB8.jpeg',
    },
    {
      id: 'U8e486fa2558d3310f6c',
      firstName: 'Abigael',
      lastName: 'Trickey',
      jobTitle: 'System Administrator',
      phoneHome: '765-433-3346',
      phoneWork: '238-342-5432',
      email: 'abigael@trickey.com',
      picture: 'https://tinyfac.es/data/avatars/A7299C8E-CEFC-47D9-939A-3C8CA0EA4D13.jpeg',
    },
    {
      id: 'U6a3282e1189f070dd33',
      firstName: 'Steven',
      lastName: 'Van Well',
      jobTitle: 'Manager',
      phoneHome: '326-454-3346',
      phoneWork: '367-003-4324',
      email: 'steven@vanwell.com',
      picture: 'https://tinyfac.es/data/avatars/E0B4CAB3-F491-4322-BEF2-208B46748D4A.jpeg',
    },
    {
      id: 'U588f2e5d628d6986c1b',
      firstName: 'Stearne',
      lastName: 'Vercauteren',
      jobTitle: 'Analyst',
      phoneHome: '124-133-3423',
      phoneWork: '422-431-9373',
      email: 'stearne@vercauteren.com',
      picture: 'https://tinyfac.es/data/avatars/5F8C5D50-DDB6-4F06-AA15-ACB30D8D910D.jpeg',
    },
  ],
});

export default (state = initialState(), action) => {
  switch (action.type) {
    default:
      return state;
  }
};
