import axios from "axios";
import { PUBLIC_API_URL } from "../app/constants";

export const getPublicationByDate = () => 
    axios.get(`${PUBLIC_API_URL}/publications`)
    
export const getPublicationsArchived = () => 
    axios.get(`${PUBLIC_API_URL}/publications/archived`)

export const archivePublication = (idPublication) => 
    axios.post(`${PUBLIC_API_URL}/publications/store/${idPublication}`)

export const deletePublication = (idPublication) => 
    axios.delete(`${PUBLIC_API_URL}/publications/${idPublication}`)