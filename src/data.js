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
      title: "StungEye Blog",
      description: "StungEye Blog Project for my Websecurity class.",
      image: "/assets/work2.jpg",
      link: "github.com/Charyeokl/blog",
      tech: ["PHP", "Apache", "Debian", "HTML5/CSS3", "JavaScript.", "MySQL"]
    },
    {
      title: "Underrated Ecommerce Store",
      description: "Ecommerce store for my Agile class (in progress).",
      image: "/assets/work3.jpg",
      link: "https://github.com/Charyeokl/underrated_store",
      tech: ["Rails", "Sidekiq", "Ruby", " API", "HTML5/CSS3", "JavaScript", "PostgreSQL"]
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
