export const siteConfig = {
  name: "Shuravin Macsim",
  title: "Full-stack developer",
  description: "Portfolio website of Shuravin Macsim",
  accentColor: "#1d4ed8",
  social: {
    email: "shuravinmacsim@yandex.ru",
    // linkedin: "https://linkedin.com/in/yourprofile",
    // twitter: "https://x.com/rfitzio",
    github: "https://github.com/macsimir",
  },
  aboutMe:
  //Испрвить
    "I develop websites, Telegram bots, parsers, and other programs on a freelance basis. I'd be happy to work with you!",
  skills: ["Python", "Django", "Flask", "FastAPI", "C++", "Docker"],
  projects: [
    {
      name: "Tomarket App",
      description:"Telegram bot clicker using Web App",
      link: "https://t.me/Tomarket_ai_bot/app?startapp=00009JGa",
      skills: ["Aiogram3", "FastAPI", "SQLite","JS"],
    },
    {
        name: "Telegram Shop Bot",
        description:"Telegram sales bot for replenishing all services. API integration for replenishing online services",
        link: "https://t.me/YepShopBot",
        skills: ["Aiogram3", "FastAPI"],
    },
    {
        name: "AI Bot",
        description:"Telegram bot integrated with all modern neural networks",
        link: "https://t.me/Ai_dai_bot",
        skills: ["Python", "Aiogram3", "MySQL"],
    },
  ],
  experience: [
      {
          company: "self-employment",
          title: "Freelance",
          dateRange: "2022 - Present",
            bullets: [
                "Made more than 100 orders",
                "Developed large projects for working with finances",
            ],
      },
      {
          company: "Digital Agency",
          title: "Python developer",
          dateRange: "2020 - 2023",
          bullets: [
              "Worked on a team developing Telegram bots and parsers",
              "Developed telegram web bot applications",
          ],
      },
  ],
    education: [
        {
            school: "ETU",
            degree: "Bachelor of Science in Computer Science",
            dateRange: "2025 - Present",
            achievements: [
                "Average score 4.40",
            ],
        },
        {
            school: "Online Platform",
            degree: "Full Stack Development Certificate",
            dateRange: "2022",
            achievements: [
                "Built 10+ portfolio projects",
                "Specialized in Django and FastAPI",
            ],
        },
    ],
};
