import axiosClient from "./axiosClient"

const productAPI = {

    getAPI: (query) => {
        const url = `/admin/product${query}`
        return axiosClient.get(url)
    },
    details: (id) => {
        const url = `/admin/product/${id}`
        return axiosClient.get(url)
    },
    create: (data, headers = { "Content-Type": "application/json" }) => {
        const url = `/admin/product/create`
        return axiosClient.post(url, data,{ headers })
    },
    update: (data) => {
        const url = `/admin/product/update`
        return axiosClient.patch(url, data)
    },
    delete: (query) => {
        const url = `/admin/product/delete${query}`
        return axiosClient.delete(url)
    },

    getAll: () => {
        const url = `/product`
        return axiosClient.get(url)
    }

}

export default productAPI