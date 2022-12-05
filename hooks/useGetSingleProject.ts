import React from "react";

export const useGetSingleProject = (id:any) => {
    const [project, setProject] = React.useState({})
    React.useEffect(() => {
        
        const getSingleProject = async () => {
        
            const response = await fetch(`/api/projects/${id}`)
            const data = await response.json()
            
            
            setProject(data)
        }

        getSingleProject()
    })
    return project

};
