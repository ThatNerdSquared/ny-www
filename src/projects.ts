import { Project, Status } from "./types"
import timersSvg from "./assets/timers-for-raycast.svg"
import peregrineSvg from "./assets/peregrine.svg"
import blossomSvg from "./assets/blossom.svg"

export const projects: Project[] = [
    {
        id: "02b0d1f3-c8fa-471a-867a-13432914d00e",
        icon: timersSvg,
        name: "Timers for Raycast",
        // eslint-disable-next-line max-len
        description: "A lightweight, Raycast-native extension allowing you to start and stop countdown timers, stopwatches, and alarms.",
        status: "Active",
        tags: ["typescript", "react", "raycast", "programming"],
        links: [
            {
                displayText: "GitHub repo",
                url: "https://github.com/ThatNerdSquared/timers-for-raycast",
            },
            {
                displayText: "Raycast Store listing",
                url: "https://www.raycast.com/ThatNerd/timers",
            },
        ],
    },
    {
        id: "90a5af91-6057-4ca4-b0ad-bb8a545840ca",
        icon: peregrineSvg,
        name: "Peregrine",
        // eslint-disable-next-line max-len
        description: "Peregrine is a rapid, append-only logging and note-taking app, inspired by @thesephist's Inc.",
        status: "Dormant",
        tags: ["python", "pyside6", "qt", "programming"],
        links: [
            {
                displayText: "GitHub repo",
                url: "https://github.com/ThatNerdSquared/peregrine",
            },
            {
                displayText: "Learn more",
                url: "https://peregrine.nathanyeung.ca/",
            },
        ],
    },
    {
        id: "3277553f-c226-49db-8d4c-41d5d29bf9a8",
        icon: blossomSvg,
        name: "Blossom",
        // eslint-disable-next-line max-len
        description: "A pocket of calm, anywhere, anytime. Webapp with Typescript, React, Vite. Mobile app using Ionic.",
        status: "Active",
        tags: ["typescript", "react", "ionic", "programming"],
        links: [
            {
                displayText: "GitHub repo",
                url: "https://github.com/ThatNerdSquared/blossom",
            },
            {
                displayText: "Try it out!",
                url: "https://blossom.nathanyeung.ca/",
            },
        ],
    },
]
