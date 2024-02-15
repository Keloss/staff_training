import { $host, $authHost } from "./index";


export const createGroup = async (group) => {
    console.log(group)
    const {data} = await $authHost.post('/api/group', group)
    return data
}

export const fetchGroup = async () => {
    const {data} = await $host.get('/api/group')
    return data
}

export const createWorker = async (worker) => {
    const {data} = await $authHost.post('/api/worker', worker[0])
    return data
}

export const fetchWorker = async () => {
    const {data} = await $host.get('/api/worker')
    return data
}

export const addToGroup = async (wg) => {
    console.log(wg)
    const {data} = await $authHost.post('/api/addtogroup', wg[0])
    return data
}

export const fetchWorkersOfGroup = async (id) => {
    console.log(id)
    const {data} = await $host.get(`/api/addtogroup/${id}`)
    return data
}