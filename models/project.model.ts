export interface Project {
    id:                 number | string;
    title:              string;
    description:        string;
    envLink:            string;
    repoLink:           string;
    labels:             Label[];
}

export interface Label {

    id: number | string;
    name: string;
    type: string;
}
