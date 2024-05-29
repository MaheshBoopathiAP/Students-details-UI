// src/services/studentService.js
import axios from 'axios';

const API_URL = 'http://3.223.98.72:1337/api/students';

export const fetchStudents = async () => {
  try {
    const response = await axios.get(API_URL);
    const students = response.data.data.map(item => ({
      id: item.id,
      firstName: item.attributes.firstName,
      lastName: item.attributes.lastName,
      email: item.attributes.parentEmailId,
      phone: item.attributes.parentContactNo,
      yearGroup: 'Grade 12', // Assuming year group is not provided in the API response
      photo: 'default_photo_url', // Assuming photo URL is not provided in the API response
    }));
    return students;
  } catch (error) {
    console.error('Error fetching student data:', error);
    throw error;
  }
};
