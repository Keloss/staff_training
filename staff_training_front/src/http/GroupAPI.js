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
    console.log(worker[0])
    const {data} = await $authHost.post('/api/worker', worker[0])
    return data
}

export const fetchWorker = async () => {
    const {data} = await $host.get('/api/worker')
    return data
}