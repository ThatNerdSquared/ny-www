+++
weight = 3
[extra]
id = "ubc-workday-ext"
name = "UBC Workday Extension"
desc = "A browser extension that makes UBC's Workday student system easier to use, including better course registration tools."
hero_imgs = ["/projects/ubc-workday-ext-0.png", "/projects/ubc-workday-ext-1.png"]
stack = ["typescript", "react"]
links = { "github repo" = "https://github.com/mlool/workday-calendar-extension" }
+++

My university, [UBC](https://ubc.ca), recently switched to a new student
information & course registration system called Workday. This has been...
*controversial*, as many students are upset about Workday's poor UX as well as
significant losses in functionality.

Some students decided to build a browser extension that could restore missing
features, smoothen out some of Workday's rough edges, and maybe even add some
new functionality to make students' lives easier. I joined the project soon
after its inception and have contributed to numerous major updates. I'm also a
part of the [UBC Student Hub](https://ubcstudenthub.ca/) project, an even more
powerful course registration tool that some of us are working on.

Although I am responsible for some of the extension's user-facing features, such
as the [RateMyProf](https://www.ratemyprofessors.com/) integration, the majority
of my work focuses on bugfixes, infrastructural upgrades, and reliability
improvements. Among other things, I've:

- reduced build times from 10s to 60ms
- reverse-engineered APIs
- correctly handled edge-case-filled datetime calculations
- designed and implemented a custom, fault-tolerant, fully typesafe JSON data
  migration system

I've enjoyed working on this project! While patching Workday's inconsistencies
is tricky, it's also been a great opportunity to improve the course registration
experience for the 6000+ students who use this extension. I've also enjoyed
collaborating with many other talented students to make this project happen.
