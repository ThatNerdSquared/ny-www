import { Project } from "./types"
import timersSvg from "./assets/timers-for-raycast.svg"
import peregrineSvg from "./assets/peregrine.svg"
import breezeSvg from "./assets/breeze.svg"
import blossomSvg from "./assets/blossom.svg"
import sciDemosSvg from "./assets/scidemos.svg"
import hyperfocusSvg from "./assets/hyperfocus.png"
import ghSvg from "./assets/ghmark.svg"
import globeSvg from "./assets/globe.svg"
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
                hoverText: "View on GitHub",
                url: "https://github.com/ThatNerdSquared/timers-for-raycast",
            },
            {
                displayImg: globeSvg,
                hoverText: "Raycast Store listing",
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
        status: ActiveStatus,
        tags: ["flutter", "dart", "programming"],
        links: [
            {
                displayImg: ghSvg,
                hoverText: "View on GitHub",
                url: "https://github.com/ThatNerdSquared/peregrine",
            },
            // {
            //     displayImg: globeSvg,
            //     hoverText: "Learn more",
            //     url: "https://peregrine.nathanyeung.ca/",
            // },
        ],
    },
    {
        id: "90a5af91-6057-4ca4-b0ad-bb8a545840ca",
        icon: breezeSvg,
        name: "Breeze",
        description: "extremely minimal todo app",
        status: ActiveStatus,
        tags: ["flutter", "dart", "programming"],
        links: [
            {
                displayImg: ghSvg,
                hoverText: "View on GitHub",
                url: "https://github.com/ThatNerdSquared/breeze",
            },
            // {
            //     displayImg: globeSvg,
            //     hoverText: "Learn more",
            //     url: "https://breeze.nathanyeung.ca/",
            // },
        ],
    },
    {
        id: "3277553f-c226-49db-8d4c-41d5d29bf9a8",
        icon: blossomSvg,
        name: "Blossom",
        // eslint-disable-next-line max-len
        description: "A pocket of calm, anywhere, anytime. Webapp with Typescript, React, Vite. Mobile app using Ionic.",
        status: DormantStatus,
        tags: ["typescript", "react", "ionic", "programming"],
        links: [
            {
                displayImg: ghSvg,
                hoverText: "View on GitHub",
                url: "https://github.com/ThatNerdSquared/blossom",
            },
            {
                displayImg: globeSvg,
                hoverText: "Try it out!",
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
        status: DormantStatus,
        tags: ["bootstrap", "scicomm", "programming"],
        links: [
            {
                displayImg: ghSvg,
                hoverText: "View on GitHub",
                url: "https://github.com/ThatNerdSquared/scidemos",
            },
            {
                displayImg: globeSvg,
                hoverText: "Try it out!",
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
                hoverText: "View on GitHub",
                url: "https://github.com/ThatNerdSquared/hyperfocus-app",
            },
            // {
            //     displayImg: globeSvg,
            //     hoverText: "Try it out!",
            //     url: "https://hyperfocus.nathanyeung.ca/",
            // },
        ],
    }
]
