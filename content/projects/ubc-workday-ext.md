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
information & course registration system called Workday.

Let's just say it's been... *suboptimal*.
Multiple-terms-of-courses-squished-onto-one-calendar-view, suboptimal.
Everything-takes-millions-of-clicks, suboptimal.

Some students decided to get together and build a browser extension that could
add back some functionality from the previous registration system, smoothen out
some of Workday's rough edges, and maybe even add in some new features to make
students' lives easier. I joined the project soon after its inception and have
contributed to numerous major updates, including integration with the [UBC
Student Hub](https://ubcstudenthub.ca/) project a few of us are working on as an
even more powerful course registration tool.

Although I do work on some user-facing features (mainly our
[RateMyProf](https://www.ratemyprofessors.com/) integration), the majority of my
work on the UBC Workday Extension is on bugfixes, infrastructural upgrades, and
reliability improvements. Among other things, I've helped to:

- rewire our build system for millisecond-level build times
- reverse-engineer APIs
- handle edge-case-filled datetime calculations
- implement a custom, fault-tolerant, fully typesafe JSON migration system that
  can automatically convert data from previous versions of the extension to
  match our current data format

I'm excited about the future of this project! Although it's tricky working
around Workday's inconsistencies, it's also a great opportunity to improve the
course registration experience for the 6000+ students who use the extension.
I've also enjoyed collaborating with many other students to make this project
happen :)
