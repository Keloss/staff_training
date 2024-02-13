import { $host } from "./index";



export const addWorkerToGroup = async (workerId, groupId) => {
    try {
        const response = await $host.post('api/worker/addWorkerToGroup', {workerId, groupId});
        console.log(response.data)
    } catch(error){
        console.log(error)
    }
}