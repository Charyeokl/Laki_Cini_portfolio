const data = {
  basic: {
    name: "Cini Laki",
    program: "Full Stack Web Development (RRC Polytech)",
    about: "Frontend-leaning full-stack developer focused on shipping clean UIs with reliable pipelines.",
    email: "Cinilaki24@outlook.com",
    links: {
      github: "https://github.com/Charyeokl",
      linkedin: "https://www.linkedin.com/in/cini-laki-729959190/",
      cv: "/resume.pdf"
    }
  },
  work: [
    {
      title: "SCHCCSAH Non‑Profit Site",
      description: "WordPress + PHP site for a non-profit. Improved performance and UX; integrated payments and events.",
      image: "/assets/work1.jpg",
      link: "https://schccsah.ca/",
      tech: ["WordPress", "PHP", "HTML5/CSS3", "JavaScript", "PayPal", "Stripe"]
    },
    {
      title: "Habit Tracker App",
      description: "Two-person project to track habits with streaks and reminders (in progress).",
      image: "/assets/work2.jpg",
      link: "https://example.com/habit-tracker",
      tech: ["Rails", "PostgreSQL", "Tailwind", "Docker"]
    },
    {
      title: "NBA Forum Auto-Poster",
      description: "Automates game thread creation using NBA data APIs (in progress).",
      image: "/assets/work3.jpg",
      link: "https://example.com/nba-forum",
      tech: ["Rails", "Sidekiq", "Redis", "BALLDONTLIE API"]
    }
  ],
  skills: {
    description: "Comfortable across React/Rails, with Dockerized deploys and CI/CD via GitHub Actions.",
    languagesFrameworks: ["JavaScript (React, Node.js)", "Python", "PHP", "HTML/CSS", "SQL", "Angular", "Django", "Next.js", "MERN"],
    tools: ["Docker", "CI/CD (GitHub Actions)", "Git", "MySQL", "PostgreSQL", "AWS Amplify", "Heroku"]
  },
  resources: [
    { title: "React Docs", image: "/assets/react.jpg", summary: "Modern React documentation.", link: "https://react.dev/" },
    { title: "Docker Docs", image: "/assets/docker.jpg", summary: "Official Docker documentation.", link: "https://docs.docker.com/" },
    { title: "Notion Guides", image: "/assets/notion.jpg", summary: "Guides to build templates & workflows.", link: "https://www.notion.so/help/category/guides" }
  ]
};

export default data;
