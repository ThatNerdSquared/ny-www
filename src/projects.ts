import { Project } from "./types"
import timersSvg from "./assets/timers-for-raycast.svg"
import peregrineSvg from "./assets/peregrine.svg"
import blossomSvg from "./assets/blossom.svg"
import sciDemosSvg from "./assets/scidemos.svg"
import lentoSvg from "./assets/lento.svg"
import hyperfocusSvg from "./assets/hyperfocus.png"
import ghSvg from "./assets/ghmark.svg"
import { ActiveStatus, DormantStatus } from "./StatusBox"

export const projects: Project[] = [
    {
        id: "02b0d1f3-c8fa-471a-867a-13432914d00e",
        icon: timersSvg,
        name: "Timers for Raycast",
        // eslint-disable-next-line max-len
        description: "A lightweight, Raycast-native extension allowing you to start and stop countdown timers, stopwatches, and alarms.",
        status: ActiveStatus,
        tags: ["typescript", "react", "raycast", "programming"],
        links: [
            {
                displayImg: ghSvg,
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
        status: DormantStatus,
        tags: ["python", "pyside6", "qt", "programming"],
        links: [
            {
                displayImg: ghSvg,
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
        status: ActiveStatus,
        tags: ["typescript", "react", "ionic", "programming"],
        links: [
            {
                displayImg: ghSvg,
                url: "https://github.com/ThatNerdSquared/blossom",
            },
            {
                displayText: "Try it out!",
                url: "https://blossom.nathanyeung.ca/",
            },
        ],
    },
    {
        id: "47bc7029-90d3-4b49-8bb9-940caaf83d01",
        icon: sciDemosSvg,
        name: "SciDemos",
        // eslint-disable-next-line max-len
        description: "SciDemos is a collection of small webpages I've built to explain concepts related science and scientific thinking in a simple, usually interactive way.",
        status: ActiveStatus,
        tags: ["bootstrap", "scicomm", "programming"],
        links: [
            {
                displayImg: ghSvg,
                url: "https://github.com/ThatNerdSquared/scidemos",
            },
            {
                displayText: "Try it out!",
                url: "https://scidemos.nathanyeung.ca/",
            },
        ],
    },
    {
        id: "ab93d5a9-db1f-4808-84d1-6b437a2c7b95",
        icon: hyperfocusSvg,
        name: "Hyperfocus",
        // eslint-disable-next-line max-len
        description: "A collaborative timer designed to make work sessions more productive and more enjoyable.",
        status: DormantStatus,
        tags: [
            "typescript",
            "javascript",
            "react",
            "postgresql",
            "programming"
        ],
        links: [
            {
                displayImg: ghSvg,
                url: "https://github.com/ThatNerdSquared/hyperfocus-app",
            },
            {
                displayText: "Try it out!",
                url: "https://hyperfocus.nathanyeung.ca/",
            },
        ],
    },
    {
        id: "a4312982-d96e-4c02-818c-d5a8d53265cf",
        icon: lentoSvg,
        name: "Lento",
        // eslint-disable-next-line max-len
        description: "A modern distraction blocker for Windows and macOS, built with Python.",
        status: DormantStatus,
        tags: ["python", "pyside6", "qt", "programming"],
        links: [
            {
                displayImg: ghSvg,
                url: "https://github.com/lentoapp/lento",
            },
            {
                displayText: "Learn more",
                url: "https://lentoapp.github.io/",
            },
        ],
    },
]
