// DevelopersActions.js
import axios from 'axios';
import baseRequest from '../../http-common'

export const fetchWebDevelopers = () => async (dispatch) => {
  const headers = {
    'Authorization': 'Bearer '+localStorage.getItem('token')
  }
  try {
    const response = await baseRequest.get('/web_developers', {
      headers: headers
    });
    dispatch({ type: 'FETCH_WEB_DEVELOPERS', payload: response.data });
  } catch (error) {
    console.error('Error fetching web developers:', error.message);
  }
};
export const fetchDeveloper = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`http://localhost:3000/api/web_developers/${id}`);
    dispatch({ type: 'FETCH_DEVELOPER', payload: response.data });
  } catch (error) {
    console.error('Error fetching developer:', error.message);
  }
};

export const addWebDeveloper = (developerData) => async (dispatch) => {
  const headers = {
    'Authorization': 'Bearer '+localStorage.getItem('token')
  }
  try {
    const response = await baseRequest.post('/web_developers', developerData, {
      headers: headers
    });
    dispatch({ type: 'ADD_WEB_DEVELOPER', payload: response.data });
  } catch (error) {
    console.error('Error adding web developer:', error.message);
  }
};

export const fetchWebDeveloper = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`http://localhost:3000/api/web_developers/${id}`);
    dispatch({ type: 'FETCH_WEB_DEVELOPER', payload: response.data });
  } catch (error) {
    console.error('Error fetching web developer:', error.message);
  }
};

export const updateWebDeveloper = (id, updatedDeveloperData) => async (dispatch) => {
  try {
    const response = await axios.patch(`http://localhost:3000/api/web_developers/${id}`, updatedDeveloperData);
    dispatch({ type: 'UPDATE_WEB_DEVELOPER', payload: response.data });
  } catch (error) {
    console.error('Error updating web developer:', error.message);
  }
};

export const deleteWebDeveloper = (id) => async (dispatch) => {
  try {
    await axios.delete(`http://localhost:3000/api/web_developers/${id}`);
    dispatch({ type: 'DELETE_WEB_DEVELOPER', payload: id });
  } catch (error) {
    console.error('Error deleting web developer:', error.message);
  }
};

export const fetchWebDeveloperSkills = () => async (dispatch) => {
  try {
    const response = await axios.get('http://localhost:3000/api/web_developer_skills');
    dispatch({ type: 'FETCH_WEB_DEVELOPER_SKILLS', payload: response.data });
  } catch (error) {
    console.error('Error fetching web developer skills:', error.message);
  }
};

export const addWebDeveloperSkill = (skillData) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:3000/api/web_developer_skills', skillData);
    dispatch({ type: 'ADD_WEB_DEVELOPER_SKILL', payload: response.data });
  } catch (error) {
    console.error('Error adding web developer skill:', error.message);
  }
};

export const updateWebDeveloperSkill = (id, updatedSkillData) => async (dispatch) => {
  try {
    const response = await axios.patch(`http://localhost:3000/api/web_developer_skills/${id}`, updatedSkillData);
    dispatch({ type: 'UPDATE_WEB_DEVELOPER_SKILL', payload: response.data });
  } catch (error) {
    console.error('Error updating web developer skill:', error.message);
  }
};

export const deleteWebDeveloperSkill = (id) => async (dispatch) => {
  try {
    await axios.delete(`http://localhost:3000/api/web_developer_skills/${id}`);
    dispatch({ type: 'DELETE_WEB_DEVELOPER_SKILL', payload: id });
  } catch (error) {
    console.error('Error deleting web developer skill:', error.message);
  }
};

// Skills Actions
export const fetchSkills = () => async (dispatch) => {
  try {
    const response = await axios.get('http://localhost:3000/api/skills');
    dispatch({ type: 'FETCH_SKILLS', payload: response.data });
  } catch (error) {
    console.error('Error fetching skills:', error.message);
  }
};

export const addSkill = (skillData) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:3000/api/skills', skillData);
    dispatch({ type: 'ADD_SKILL', payload: response.data });
  } catch (error) {
    console.error('Error adding skill:', error.message);
  }
};

export const updateSkill = (id, updatedSkillData) => async (dispatch) => {
  try {
    const response = await axios.patch(`http://localhost:3000/api/skills/${id}`, updatedSkillData);
    dispatch({ type: 'UPDATE_SKILL', payload: response.data });
  } catch (error) {
    console.error('Error updating skill:', error.message);
  }
};

export const deleteSkill = (id) => async (dispatch) => {
  try {
    await axios.delete(`http://localhost:3000/api/skills/${id}`);
    dispatch({ type: 'DELETE_SKILL', payload: id });
  } catch (error) {
    console.error('Error deleting skill:', error.message);
  }
};
