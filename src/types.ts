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

export type Status = "Active" |
    "Published" |
    "ComingSoon" |
    "Dormant" |
    "Archived" |
    "MajorUpgrade"

export interface StatusColor {
    background: string;
    foreground: string;
}

export const STATUSES: Record<string,StatusColor> = {
    "Active": { background: "#abf4b4", foreground: "#509773" },
    "Dormant": { background: "#ffe148", foreground: "#ebb200" },
}

export interface Link {
    displayText: string;
    url: string;
}

export interface Project {
    id: string;
    icon: string;
    name: string;
    description: string;
    status: Status
    tags: Tag[];
    links: Link[];
}