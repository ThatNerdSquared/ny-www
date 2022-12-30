export enum Tag {
    writing,
    programming,
    fsl,
    python,
    typescript,
    javascript,
    react,
    postgresql,
    raycast,
    pyside6,
    qt,
    bootstrap,
    scicomm
}

export enum Status {
    Active,
    Published,
    ComingSoon,
    Dormant,
    Archived,
    MajorUpgrade,
}

export interface Link {
    displayText: string;
    url: string;
}

export interface Project {
    icon: string;
    name: string;
    description: string;
    status: Status
    tags: Tag[];
    links: Link[];
}
