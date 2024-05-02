import service from "../"

const PATH_PETS = "/pets";

export const getPets = async () => {
    const response = await service.get(PATH_PETS);
    return response.data;
}

export const createPet = async (data: any) => {
    const response = await service.post(PATH_PETS, data);
    return response.data;
}