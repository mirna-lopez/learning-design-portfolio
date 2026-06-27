// All module content lives here. Editing copy means editing this file only,
// not touching the markup or the rendering logic in app.js.

const MODULES = [
  {
    id: 1,
    label: "Onboarding Workflow",
    sub: "Process design",
    objective: "Objective: design a repeatable system, not a one time fix",
    title: "Onboarding an intern into a fast moving workflow",
    situationHeading: "The situation",
    situation: "When a new intern joined the team, she was new to our workflow conventions, including branch strategy and which branch to target for pull requests. Without structure, this risked repeated mistakes and a slower ramp up than the team could afford.",
    builtHeading: "What I built",
    built: [
      "Built a Notion hub for the team, with a clear team map and an onboarding section, so a new person always knows who to ask and where to start",
      "A screenshot check in step before opening any pull request",
      "A clear staging branch workflow she could always rely on",
      "Ongoing Slack based handoffs with direct, specific feedback in the moment"
    ],
    extra: "I adjusted the process as I saw where she was still uncertain, treating it as something to iterate on rather than a fixed document.",
    images: [
      {
        src: "assets/notion-screenshot.png",
        alt: "Screenshot of the Notion hub I built for the team, showing a quick team map and a New Intern Basics section",
        caption: "The actual Notion hub I built: a clear team map and onboarding section, so a new person always knows who to ask and where to start."
      }
    ],
    toolkit: ["Slack", "GitHub", "Staging environment"],
    reflection: "Calibrating how to correct her was the hardest part. Too much correction too fast risks undermining confidence; too little risks letting bad habits set in. I leaned toward frequent, small, specific feedback, which took a few iterations to get right."
  },
  {
    id: 2,
    label: "Editor Migration",
    sub: "Technical &amp; UX/UI",
    objective: "Objective: modernize the editing experience without breaking what already worked",
    title: "Migrating a legacy editor without disrupting production",
    situationHeading: "The situation",
    situation: "A platform I work on ran on a legacy editor that needed to be replaced, touching frontend architecture, backend coordination, and the actual editing experience for content authors. A poorly sequenced rollout could break existing content or introduce a clunkier experience than what authors already had.",
    builtHeading: "What I built",
    built: [
      "Grouped toolbar controls by function so the toolbar stayed scannable",
      "Added an edit and preview toggle so authors could check their work in place",
      "Added a floating toolbar near the text, so authors didn't need to reach a fixed top bar for common changes, a pattern familiar from tools like Word"
    ],
    extra: "I drafted a full migration plan, got buy in from leadership before building anything, then prototyped the editor to validate the approach. The result was a visibly modern interface for authors, built with an eye toward the integrations and content tracking that increasingly sit downstream of what they write.",
    images: [
      {
        src: "assets/docs-view.png",
        alt: "Screenshot of the editor showing a floating toolbar appearing on text selection, with heading, formatting, and alignment controls",
        caption: "The floating toolbar in action: formatting controls appear right where the author selects text, instead of forcing them up to a fixed top bar."
      },
      {
        src: "assets/docs-plan.png",
        alt: "Screenshot of the migration plan document, showing sections for Background and Motivation, Current State, and Scope Breakdown",
        caption: "The migration plan I drafted before writing any code: background, current state, and scope breakdown."
      }
    ],
    toolkit: ["React", "Editor library", "Git branch workflow"],
    reflection: "Balancing power user functionality against visual clutter was the hardest part. The toolbar needed to support a lot without overwhelming the author, and I had to maintain scope discipline about what to fix now versus defer."
  },
  {
    id: 3,
    label: "Echoes of the Estate",
    sub: "Interactive &amp; AI content",
    objective: "Objective: make every playthrough feel different",
    title: "Building an AI driven story under time pressure",
    situationHeading: "The situation",
    situation: "For a Halloween hackathon, I set out to build Echoes of the Estate, a ghost story game, within a tight deadline. The challenge was designing an engaging interactive narrative and integrating AI so the experience felt dynamic rather than scripted, while building solo and against the clock.",
    builtHeading: "What I built",
    built: [
      "Structured the narrative around player decision points",
      "Integrated AI to generate responses in real time based on player choices, instead of pre written text",
      "Built the full experience solo in React and TypeScript under the hackathon timeline"
    ],
    extra: "I brainstormed the narrative structure with AI assistance early on, using it as a thinking partner to work through story logic before writing any code. That is the same instinct I'd bring to designing a lesson: think through the learner's path before building the screen. It also includes bilingual support in English and Spanish, so the same branching story plays naturally in either language.",
    images: [
      {
        src: "assets/echoes-screenshot.jpg",
        alt: "Screenshot of Echoes of the Estate, showing the Grand Entrance Hall scene, branching path choices, a ghost trust meter, and a chat input to speak to the ghost",
        caption: "The actual game: branching paths, a trust meter that tracks state, and a live AI powered chat with the ghost."
      }
    ],
    link: { url: "https://echoes-estate-game.netlify.app/", label: "Play Echoes of the Estate" },
    toolkit: ["React", "TypeScript", "AI API integration"],
    reflection: "The constraint was purely time. With more of it, the experience would have had more polish, more refined writing, and smoother transitions. I prioritized a functioning end to end experience over fully polishing every part of it."
  }
];

const CERTIFICATE = {
  id: 4,
  label: "Certificate",
  sub: "Course complete",
  name: "Mirna Lopez",
  blurb: "approaches learning design: clear objectives, honest reflection, and a build first instinct, used here to design this very page.",
  badges: ["Process documentation", "Needs analysis", "React &amp; TypeScript", "AI integration", "HCI &amp; UX foundations", "Bilingual EN / ES"],
  contact: {
    email: "lopez.mirna2807@gmail.com",
    linkedin: "https://www.linkedin.com/in/mirna-lopez/",
    status: "Open to instructional design roles and Front-end roles"
  },
  resume: "assets/resume.pdf"
};

const ABOUT = {
  photo: "assets/profile-photo.jpg",
  bio: "I'm a Frontend Lead at Assistiv, an AI powered learning management platform, and a Computer Science student at Oregon State University. I care about how people learn as much as how software works, which is why I built this page as a course instead of a list. Bilingual in English and Spanish.",
  links: {
    linkedin: "https://www.linkedin.com/in/mirna-lopez/",
    github: "https://github.com/mirna-lopez",
    resume: "assets/resume.pdf"
  },
  skills: [
    { group: "Languages & Frameworks", items: ["TypeScript", "JavaScript", "React 18", "Next.js 14", "Node.js", "Python", "Java", "C#"] },
    { group: "Frontend Architecture", items: ["Redux Toolkit", "Custom hooks", "State management design", "REST API integration", "Tailwind CSS", "Responsive & accessible design"] },
    { group: "Tools, AI & Practices", items: ["Git & GitHub", "PR review & branching workflows", "Figma", "Claude API & AI agent integration", "Notion"] }
  ],
  experience: [
    {
      role: "Frontend Lead",
      org: "Assistiv, an AI powered learning management platform",
      dates: "Aug 2025 – Present",
      location: "Hybrid, Plano TX",
      bullets: [
        "Promoted from intern to Frontend Lead in 7 months, owning frontend architecture and state management design across student, instructor, and admin portals",
        "Led the TipTap editor migration end to end, securing leadership sign off and coordinating with backend and design",
        "Serve as the frontend quality gate, reviewing UI and code on every pull request before merge",
        "Mentor a developer transitioning into full stack work, and authored the team's onboarding documentation and branching conventions"
      ]
    },
    {
      role: "Web Design Intern",
      org: "Thaddeus Resource Center",
      dates: "Feb 2025 – Feb 2026",
      location: "Remote",
      bullets: [
        "Designed and iterated on web interfaces in Figma and Miro, applying responsive design and accessibility standards across nonprofit program pages"
      ]
    }
  ],
  projects: [
    {
      name: "Ikigai Pet",
      blurb: "An AR app built in Unity and C# for hospitalized children, where a virtual pet's health is tied to a camera detecting whether the child has taken medication or eaten, turning self care into a game. Third place winner at a children's health hackathon, built in a team of two.",
      link: "https://devpost.com/software/ikigai-pet"
    },
    {
      name: "Echoes of the Estate",
      blurb: "A ghost story game built solo in React and TypeScript for a Halloween hackathon. Branching narrative, a trust meter that tracks player choices, and a live AI powered chat with the ghost. Includes bilingual support in English and Spanish.",
      link: "https://echoes-estate-game.netlify.app/"
    }
  ],
  education: [
    "B.S. Computer Science, Oregon State University (eCampus), expected 2028",
    "Academy of Engineering, NAF, Dallas TX, 2021",
    "CodePath Intro to Web Development, issued April 2025"
  ]
};
