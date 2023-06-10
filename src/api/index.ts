import axios, { AxiosResponse } from 'axios';

const instanse = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0',
  withCredentials: true,
  headers: {
    'API-KEY': '87cefaee-9d63-4f09-a724-a92ef9443d74',
  },
});

export const usersAPI = {
  async getUsers(currentPage: number, totalCount: number) {
    return await instanse
      .get(`/users?page=${currentPage}&count=${totalCount}`)
      .then((res) => res.data);
  },

  async follow(userID: number) {
    return await instanse.post(`/follow/${userID}`);
  },

  async unfollow(userID: number) {
    return await instanse.delete(`/follow/${userID}`);
  },
};

export const profileAPI = {
  async getProfile(id: number) {
    return await instanse.get(`/profile/${id}`).then((res) => res.data);
  },

  async getProfileStatus(id: number) {
    return await instanse.get(`/profile/status/${id}`).then((res) => res.data);
  },

  async updateStatus(status: string) {
    const res = await instanse.put('/profile/status', { status });
    if (res.data.resultCode === resultCode.Success) return res.data.data;
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

export enum resultCode {
  Success = 0,
  Error = 1,
}

// type AuthType = {
//   data: {
//     id: number;
//     email: string;
//     login: string;
//   };
//   resultCode: resultCode;
//   messages: Array<string>;
// };

type AuthData = {
  data: {
    id: number;
    email: string;
    login: string;
  };
};

type LoginData = {
  data: {
    userId: number;
  };
};

type AuthType<T> = {
  data: T;
  resultCode: resultCode;
  messages: Array<string>;
};

export const authAPI = {
  async auth() {
    return await instanse.get<AuthType<AuthData>>(`/auth/me`).then((res) => res.data);
  },

  async login(email: string, password: string) {
    return await instanse.post<AuthType<LoginData>>(`/auth/login`, { email, password });
  },

  async logout() {
    return await instanse.delete(`/auth/login`);
  },
};
