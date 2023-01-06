export type Tag = "writing" |
    "programming" |
    "fsl" |
    "python" |
    "typescript" |
    "javascript" |
    "react" |
    "postgresql" |
    "raycast" |
    "pyside6" |
    "qt" |
    "bootstrap" |
    "scicomm" |
    "ionic"

export interface Link {
    displayImg: string;
    hoverText: string;
    url: string;
}

export interface Project {
    id: string;
    icon: string;
    name: string;
    description: string;
    status: () => JSX.Element;
    tags: Tag[];
    links: Link[];
}