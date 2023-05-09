import axios from 'axios';

const instanse = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0',
  withCredentials: true,
  headers: {
    'API-KEY': '87cefaee-9d63-4f09-a724-a92ef9443d74',
  },
});

export const usersAPI = {
  async getUsers(currentPage, totalCount) {
    return await instanse
      .get(`/users?page=${currentPage}&count=${totalCount}`)
      .then((res) => res.data);
  },

  async follow(userID) {
    return await instanse.post(`/follow/${userID}`);
  },

  async unfollow(userID) {
    return await instanse.delete(`/follow/${userID}`);
  },
};

export const profileAPI = {
  async getProfile(id) {
    return await instanse.get(`/profile/${id}`).then((res) => res.data);
  },

  async getProfileStatus(id) {
    return await instanse.get(`/profile/status/${id}`).then((res) => res.data);
  },

  async updateStatus(status) {
    const res = await instanse.put('/profile/status', { status });
    if (res.data.resultCode === 0) return res.data.data;
  },

  async savePhoto(photo) {
    let formData = new FormData();
    formData.append('image', photo);
    const res = await instanse.put('/profile/photo', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return res.data.data;
  },
};

export const authAPI = {
  async auth() {
    return await instanse.get(`/auth/me`).then((res) => res.data);
  },

  async login(email, password) {
    return await instanse.post(`/auth/login`, { email, password });
  },

  async logout() {
    return await instanse.delete(`/auth/login`);
  },
};
