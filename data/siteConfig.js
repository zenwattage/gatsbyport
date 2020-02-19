module.exports = {
  siteTitle: 'Hi! I\'m Scott Hansford',
  siteDescription: `Web Dev Portfolio`,
  keyWords: ['gatsbyjs', 'react', 'curriculum'],
  authorName: 'Scott Hansford',
  githubUsername: 'zenwattage',
  authorAvatar: '/images/avatar.jpeg',
  authorDescription: `Designer & Developer. My beginning as a ,'Web Designer' was making Geocities pages for various hobbies and interests in high school. <br />
    In 2013 I started working in online customer service for REI and was quickly promoted to Technical Support Specialist due to being able to adapt and learn technologies quickly. In that position I highly enjoyed collaborating with product experts to efficiently and quickly coordinate solutions for customer issues.
    In 2016, I began taking Computer Science courses and have completed CS courses Programming I & II, in Python, Java, SQL and Web Authoring(HTML,CSS/JS). I recently completed a 24 week Full Stack Web Development Certificate through the University of Washington.<br />
    I am currently working freelance while pursuing a position as a full-time frontend developer and mainly work with <strong>Javascript, NodeJS, React</strong> and am currently learning <strong>Gatsby</strong>(Which I used to make what you are looking at.)`,
  skills: [
    {
      name: 'HTML',
      level: 100
    },
    {
      name: 'CSS',
      level: 96
    },
    {
      name: 'Javascript',
      level: 97
    },
    {
      name: 'NodeJs',
      level: 85
    },
    {
      name: 'React',
      level: 75
    },
    {
      name: 'Git',
      level: 85
    },
    {
      name: 'Adobe Creative Suite',
      level: 100
    },
    {
      name: 'Gatsby.js',
      level: 70
    }
  ],
  jobs: [
    {
      company: "Surly Design Company",
      begin: {
        month: 'Aug',
        year: '2019'
      },
      duration: null,
      occupation: "Web Design and Graphic Design",
      description: "Freelance: Brand, Product, and Web Designer"

    },
    {
      company: "University of Washington",
      begin: {
        month: 'Aug',
        year: '2019'
      },
      duration: '6 mos',
      occupation: "Full stack Web Development",
      description: "Rigorous 24 week MERN stack certification course"

    }, {
      company: "REI",
      begin: {
        month: 'Aug',
        year: '2012'
      },
      duration: '6 mo contract',
      occupation: "Support Technician",
      description: "Demonstrated a passion for problem solving and the ability to apply service and sales skills to enhance the customer/member relationships by utilizing empathy when resolving difficult customer situations."

    },
    /* ... */
  ],
  social: {
    linkedin: "https://www.linkedin.com/in/scott-hansford-239379130/",
    github: "https://github.com/zenwattage",
    email: "scott.hansford1775@gmail.com"
  },
  siteUrl: 'https://github.com/zenwattage/zenwattage.github.io',
  pathPrefix: '/zenwattage.github.io', // Note: it must *not* have a trailing slash.
  siteCover: '/images/rocksdark.png',
  googleAnalyticsId: 'UA-154777602-1',
  background_color: '#ffffff',
  theme_color: '#25303B',
  display: 'minimal-ui',
  icon: 'src/assets/shicon.png',
  headerLinks: [
    {
      label: 'Scott Hansford',
      url: '/',
      icon: 'src/assets/shicon.png'
    }
  ]
}