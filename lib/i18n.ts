export type Lang = "en" | "fr";

export const i18n = {
  en: {
    nav: {
      home: "HOME",
      about: "ABOUT",
      skills: "SKILLS",
      projects: "PROJECTS",
      contact: "CONTACT",
    },
    hero: {
      titlePrefix: "HEY, I'M",
      subtitle:
        "A frontend-focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product.",
    },
    sections: {
      aboutTitle: "About Me",
      aboutP1:
        "I’m Elibert Hernandez, a web developer in training currently completing an AEC in Transactional Website Development at Collège Ahuntsic in Montréal. After over a decade of experience in the restaurant industry as a chef and team lead, I’m transitioning into tech with a strong focus on frontend development and clean, responsive user interfaces.",
      aboutP2:
        "I’m comfortable working under pressure, solving problems efficiently, and delivering concrete results. I enjoy building modern web applications using technologies such as React, Next.js, and Tailwind CSS, and I’m currently seeking an internship or junior web development opportunity.",
      skillsTitle: "Skills",
      frontend: "Frontend",
      backendTools: "Backend & Tools",
      projectsTitle: "Projects",
      projectsIntro: "A selection of academic and personal projects.",
      contactTitle: "Contact",
      contactIntro:
        "Feel free to reach out for internship or junior opportunities, collaboration, or questions about my projects.",
      cards: {
        email: "Email",
        location: "Location",
        phone: "Phone",
        cv: "Curriculum Vitae",
      },
      cvBtn: "Download CV",
    },
    footer: {
      line1: "Montréal, Québec • Web Developer (AEC)",
      line2: "Built with Next.js",
    },
  },

  fr: {
    nav: {
      home: "ACCUEIL",
      about: "À PROPOS",
      skills: "COMPÉTENCES",
      projects: "PROJETS",
      contact: "CONTACT",
    },
    hero: {
      titlePrefix: "SALUT, JE SUIS",
      subtitle:
        "Développeur web orienté frontend, je conçois des interfaces modernes pour des sites web et des applications qui contribuent au succès global du produit.",
    },
    sections: {
      aboutTitle: "À propos de moi",
      aboutP1:
        "Je m’appelle Elibert Hernandez et je suis développeur web en formation, actuellement en voie de compléter une AEC en Développement de sites transactionnels au Collège Ahuntsic, à Montréal. Après plus d’une décennie d’expérience dans l’industrie de la restauration comme chef et chef d’équipe, j’ai entrepris une transition vers le domaine des technologies avec un intérêt marqué pour le développement frontend et la conception d’interfaces modernes et responsives.",
      aboutP2:
        "Habitué à travailler sous pression et à résoudre des problèmes efficacement, j’aime concevoir des applications web modernes à l’aide de technologies comme React, Next.js et Tailwind CSS. Je suis actuellement à la recherche d’un stage ou d’un poste junior en développement web.",
      skillsTitle: "Compétences",
      frontend: "Frontend",
      backendTools: "Backend & Outils",
      projectsTitle: "Projets",
      projectsIntro: "Sélection de projets académiques et personnels.",
      contactTitle: "Contact",
      contactIntro:
        "N’hésitez pas à me contacter pour des opportunités de stage ou de poste junior, une collaboration ou toute question concernant mes projets.",
      cards: {
        email: "Courriel",
        location: "Localisation",
        phone: "Téléphone",
        cv: "Curriculum vitae",
      },
      cvBtn: "Télécharger le CV",
    },
    footer: {
      line1: "Montréal, Québec • Développeur Web (AEC)",
      line2: "Réalisé avec Next.js",
    },
  },
} as const;
