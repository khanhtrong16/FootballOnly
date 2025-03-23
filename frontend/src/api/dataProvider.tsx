import { config } from "./conflig";

const apiProvider = {
    getList: async (resource: string, limit: number, page: number) => {
        try {
            let res = null;
            if (!limit && !page) {
                res = await config.get(resource);
            } else {
                res = await config.get(`${resource}?limit=${limit}&page=${page}`);
            }
            if (res.status < 200 || res.status >= 300) throw new Error("error");
            return res.data;
        } catch (error: any) {
            throw new Error(error);
        }
    },
    getOne: async (resource: string, id: string) => {
        try {
            const res = await config.get(`${resource}/${id}`);
            if (res.status < 200 || res.status >= 300) throw new Error("error");
            return res.data;
        } catch (error: any) {
            throw new Error(error);
        }
    },
    create: async (resource: string, variables: any) => {
        try {
            const res = await config.post(resource, variables);
            if (res.status < 200 || res.status >= 300) throw new Error("error");
            return res.data;
        } catch (error: any) {
            throw new Error(error);
        }
    },
    update: async (resource: string, id: string, variables: any) => {
        try {
            const res = await config.put(`${resource}/${id}`, variables);
            if (res.status < 200 || res.status >= 300) throw new Error("error");
            return res.data;
        } catch (error: any) {
            throw new Error(error);
        }
    },
    getById: async (resource: string, category: string, id: string) => {
        try {
            const res = await config.get(`${resource}/${category}/${id}`);
            if (res.status < 200 || res.status >= 300) throw new Error("error");
            return res.data;
        } catch (error: any) {
            throw new Error(error);
        }
    },
    deleteById: async (resource: string, id: string) => {
        try {
            const res = await config.delete(`${resource}/${id}`);
            if (res.status < 200 || res.status >= 300) throw new Error("error");
            return res.data;
        } catch (error: any) {
            throw new Error(error);
        }
    },
};

export const { getList, getOne, create, update, getById, deleteById } = apiProvider;
