// DevelopersActions.js
import axiosInstance from '../../baseURL';

// Web Developers Actions
export const fetchWebDevelopers = () => async (dispatch) => {
  try {
    const response = await axiosInstance.get('/web_developers');
    dispatch({ type: 'FETCH_WEB_DEVELOPERS', payload: response.data });
  } catch (error) {
    console.error('Error fetching web developers:', error.message);
  }
};

export const fetchDeveloper = (id) => async (dispatch) => {
  try {
    const response = await axiosInstance.get(`/web_developers/${id}`);
    dispatch({ type: 'FETCH_DEVELOPER', payload: response.data });
  } catch (error) {
    console.error('Error fetching developer:', error.message);
  }
};

export const addWebDeveloper = (developerData) => async (dispatch) => {
  try {
    const response = await axiosInstance.post('/web_developers', developerData);
    dispatch({ type: 'ADD_WEB_DEVELOPER', payload: response.data });
  } catch (error) {
    console.error('Error adding web developer:', error.message);
  }
};

export const fetchWebDeveloper = (id) => async (dispatch) => {
  try {
    const response = await axiosInstance.get(`/web_developers/${id}`);
    dispatch({ type: 'FETCH_WEB_DEVELOPER', payload: response.data });
  } catch (error) {
    console.error('Error fetching web developer:', error.message);
  }
};

export const updateWebDeveloper = (id, updatedDeveloperData) => async (dispatch) => {
  try {
    const response = await axiosInstance.patch(`/web_developers/${id}`, updatedDeveloperData);
    dispatch({ type: 'UPDATE_WEB_DEVELOPER', payload: response.data });
  } catch (error) {
    console.error('Error updating web developer:', error.message);
  }
};

export const deleteWebDeveloper = (id) => async (dispatch) => {
  try {
    await axiosInstance.delete(`/web_developers/${id}`);
    dispatch({ type: 'DELETE_WEB_DEVELOPER', payload: id });
  } catch (error) {
    console.error('Error deleting web developer:', error.message);
  }
};

export const fetchWebDeveloperSkills = () => async (dispatch) => {
  try {
    const response = await axiosInstance.get('/web_developer_skills');
    dispatch({ type: 'FETCH_WEB_DEVELOPER_SKILLS', payload: response.data });
  } catch (error) {
    console.error('Error fetching web developer skills:', error.message);
  }
};

export const addWebDeveloperSkill = (skillData) => async (dispatch) => {
  try {
    const response = await axiosInstance.post('/web_developer_skills', skillData);
    dispatch({ type: 'ADD_WEB_DEVELOPER_SKILL', payload: response.data });
  } catch (error) {
    console.error('Error adding web developer skill:', error.message);
  }
};

export const updateWebDeveloperSkill = (id, updatedSkillData) => async (dispatch) => {
  try {
    const response = await axiosInstance.patch(`/web_developer_skills/${id}`, updatedSkillData);
    dispatch({ type: 'UPDATE_WEB_DEVELOPER_SKILL', payload: response.data });
  } catch (error) {
    console.error('Error updating web developer skill:', error.message);
  }
};

export const deleteWebDeveloperSkill = (id) => async (dispatch) => {
  try {
    await axiosInstance.delete(`/web_developer_skills/${id}`);
    dispatch({ type: 'DELETE_WEB_DEVELOPER_SKILL', payload: id });
  } catch (error) {
    console.error('Error deleting web developer skill:', error.message);
  }
};

// Skills Actions
export const fetchSkills = () => async (dispatch) => {
  try {
    const response = await axiosInstance.get('/skills');
    dispatch({ type: 'FETCH_SKILLS', payload: response.data });
  } catch (error) {
    console.error('Error fetching skills:', error.message);
  }
};

export const addSkill = (skillData) => async (dispatch) => {
  try {
    const response = await axiosInstance.post('/skills', skillData);
    dispatch({ type: 'ADD_SKILL', payload: response.data });
  } catch (error) {
    console.error('Error adding skill:', error.message);
  }
};

export const updateSkill = (id, updatedSkillData) => async (dispatch) => {
  try {
    const response = await axiosInstance.patch(`/skills/${id}`, updatedSkillData);
    dispatch({ type: 'UPDATE_SKILL', payload: response.data });
  } catch (error) {
    console.error('Error updating skill:', error.message);
  }
};

export const deleteSkill = (id) => async (dispatch) => {
  try {
    await axiosInstance.delete(`/skills/${id}`);
    dispatch({ type: 'DELETE_SKILL', payload: id });
  } catch (error) {
    console.error('Error deleting skill:', error.message);
  }
};