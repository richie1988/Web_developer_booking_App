// DevelopersActions.js
import axios from 'axios';
import axiosInstance from '../../baseURL';

export const fetchWebDevelopers = () => async (dispatch) => {
  const headers = {
    'Authorization': 'Bearer ' + localStorage.getItem('token')
  }
  try {
    const response = await axiosInstance.get('/web_developers', { headers: headers });
    dispatch({ type: 'FETCH_WEB_DEVELOPERS', payload: response.data });
  } catch (error) {
    console.error('Error fetching web developers:', error.message);
  }
};

export const fetchDeveloper = (id) => async (dispatch) => {
  const headers = {
    'Authorization': 'Bearer ' + localStorage.getItem('token')
  }
  try {
    const response = await axiosInstance.get(`/web_developers/${id}`, { headers: headers });
    dispatch({ type: 'FETCH_DEVELOPER', payload: response.data });
  } catch (error) {
    console.error('Error fetching developer:', error.message);
  }
};

export const addWebDeveloper = (developerData) => async (dispatch) => {
  const headers = {
    'Authorization': 'Bearer ' + localStorage.getItem('token')
  }
  try {
    const response = await axiosInstance.post('/web_developers', developerData, { headers: headers });
    dispatch({ type: 'ADD_WEB_DEVELOPER', payload: response.data });
  } catch (error) {
    console.error('Error adding web developer:', error.message);
  }
};

export const fetchWebDeveloper = (id) => async (dispatch) => {
  try {
    const response = await axiosInstance.get(`/web_developers/${id}`, {headers: headers});
    dispatch({ type: 'FETCH_WEB_DEVELOPER', payload: response.data });
  } catch (error) {
    console.error('Error fetching web developer:', error.message);
  }
};

export const updateWebDeveloper = (id, updatedDeveloperData) => async (dispatch) => {
  try {
    const response = await axiosInstance.patch(`/web_developers/${id}`, updatedDeveloperData, {headers: headers});
    dispatch({ type: 'UPDATE_WEB_DEVELOPER', payload: response.data });
  } catch (error) {
    console.error('Error updating web developer:', error.message);
  }
};

export const deleteWebDeveloper = (id) => async (dispatch) => {
  try {
    await axiosInstance.delete(`/web_developers/${id}`, {headers: headers});
    dispatch({ type: 'DELETE_WEB_DEVELOPER', payload: id });
  } catch (error) {
    console.error('Error deleting web developer:', error.message);
  }
};

export const fetchWebDeveloperSkills = () => async (dispatch) => {
  try {
    const response = await axiosInstance.get('/web_developer_skills', {headers: headers});
    dispatch({ type: 'FETCH_WEB_DEVELOPER_SKILLS', payload: response.data });
  } catch (error) {
    console.error('Error fetching web developer skills:', error.message);
  }
};

export const addWebDeveloperSkill = (skillData) => async (dispatch) => {
  try {
    const response = await axiosInstance.post('/web_developer_skills', skillData, {headers: headers});
    dispatch({ type: 'ADD_WEB_DEVELOPER_SKILL', payload: response.data });
  } catch (error) {
    console.error('Error adding web developer skill:', error.message);
  }
};

export const updateWebDeveloperSkill = (id, updatedSkillData) => async (dispatch) => {
  try {
    const response = await axiosInstance.patch(`/web_developer_skills/${id}`, updatedSkillData, {headers: headers});
    dispatch({ type: 'UPDATE_WEB_DEVELOPER_SKILL', payload: response.data });
  } catch (error) {
    console.error('Error updating web developer skill:', error.message);
  }
};

export const deleteWebDeveloperSkill = (id) => async (dispatch) => {
  try {
    await axiosInstance.delete(`/web_developer_skills/${id}`, {headers: headers});
    dispatch({ type: 'DELETE_WEB_DEVELOPER_SKILL', payload: id });
  } catch (error) {
    console.error('Error deleting web developer skill:', error.message);
  }
};

// Skills Actions
export const fetchSkills = () => async (dispatch) => {
  const headers = {
    'Authorization': 'Bearer ' + localStorage.getItem('token')
  }
  try {
    const response = await axiosInstance.get('/skills', { headers: headers });
    dispatch({ type: 'FETCH_SKILLS', payload: response.data });
  } catch (error) {
    console.error('Error fetching skills:', error.message);
  }
};

export const updateSkill = (id, updatedSkillData) => async (dispatch) => {
  try {
    const response = await axiosInstance.patch(`/skills/${id}`, updatedSkillData, {headers: headers});
    dispatch({ type: 'UPDATE_SKILL', payload: response.data });
  } catch (error) {
    console.error('Error updating skill:', error.message);
  }
};

export const deleteSkill = (id) => async (dispatch) => {
  try {
    await axiosInstance.delete(`/skills/${id}`, {headers: headers});
    dispatch({ type: 'DELETE_SKILL', payload: id });
  } catch (error) {
    console.error('Error deleting skill:', error.message);
  }
};