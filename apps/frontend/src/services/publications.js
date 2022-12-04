import axios from "axios";

export const getPublicationByDate = () => 
    axios.get('http://localhost:3001/publications')

    
export const getPublicationsArchived = () => 
    axios.get(`http://localhost:3001/publications/archived`)

export const archivePublication = (idPublication) => 
    axios.post(`http://localhost:3001/publications/store/${idPublication}`)

export const deletePublication = (idPublication) => 
    axios.delete(`http://localhost:3001/publications/${idPublication}`)