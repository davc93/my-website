export interface Project {
    id:                 number | string;
    name:              string;
    description:        string;
    envLink:            string;
    repoLink:           string;
    featureImage:       string;
    techs:             Tech[];
}

export interface Tech {

    id: number | string;
    name: string;
    type: string;
}
