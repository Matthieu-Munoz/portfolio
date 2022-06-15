import html from "@/assets/icons/html.svg";
import css from "@/assets/icons/css.svg";
import js from "@/assets/icons/js.svg";
import vscode from "@/assets/icons/vscode.svg";
import php from "@/assets/icons/php.svg";
import sql from "@/assets/icons/sql.svg";
import laravel from "@/assets/icons/laravel.svg";
import react from "@/assets/icons/react.svg";
import redux from "@/assets/icons/redux.svg";
import sass from "@/assets/icons/sass.svg";
import npm from "@/assets/icons/npm.svg";
import wordpress from "@/assets/icons/wordpress.svg";
import git from "@/assets/icons/git.svg";
import linux from "@/assets/icons/linux.svg";
import win from "@/assets/icons/win.svg";
import figma from "@/assets/icons/sass.svg";
import canva from "@/assets/icons/canva.svg";
export const data = [
  {
    french: {
      home: {
        text: {
          0: "Après plus de quatre ans passés dans un atelier de métallerie ferronnerie d'art comme technicien d'étude, j'ai commencé une reconversion professionnelle vers le développement web en 2021.",
          1: "J'ai découvert ce milieu par des projets personnels qui ont fortement attisé ma curiosité, mais surtout mon envie de faire partie de ce monde.",
          2: "J'ai suivi une formation chez O'Clock jusqu'en mai 2022, avec un socle PHP et une spécialisation en React.js, j'ai appris les ficelles du métier, mais j'ai aussi pris conscience de mes préférences.",
          3: "Aujourd'hui, je me spécialise donc en développement front-end en gardant des compétences full-stack.",
        },
        profil: {
          name: "Matthieu",
          info: " ans, Développeur web",
          contact: "contact@matthieu-munoz.f",
        },
      },
      skills: [
        {
          name: "Techniques",
          class: "tech",
          skill: [
            {
              name: "HTML",
              src: html,
              tip: "Intégration HTML propre et sémantique",
            },
            {
              name: "CSS",
              src: css,
              tip: "Mise en forme grâce au CSS",
            },
            {
              name: "JS",
              src: js,
              tip: "Javascript Vanilla",
            },
            {
              name: "PHP",
              src: php,
              tip: "Programmation Orientée Objet",
            },
            {
              name: "SQL",
              src: sql,
              tip: "Gestion de BDD",
            },
            {
              name: "Laravel",
              src: laravel,
              tip: "PHP framework",
            },
            {
              name: "WP",
              src: wordpress,
              tip: "Création de site",
            },
            {
              name: "Git",
              src: git,
              tip: "Gestion de projet",
            },
          ],
        },
        {
          name: "Spécialisation",
          class: "spec",
          skill: [
            {
              name: "React",
              src: react,
              tip: "Développement React",
            },
            {
              name: "Redux",
              src: redux,
              tip: "Gestion d'état",
            },
            {
              name: "SASS",
              src: sass,
              tip: "Feuille de style",
            },
            {
              name: "NPM",
              src: npm,
              tip: "Gestion de projet",
            },
          ],
        },
        {
          name: "Diverses",
          class: "divers",
          skill: [
            {
              name: "VScode",
              src: vscode,
              tip: "Éditeur de code",
            },
            {
              name: "Linux",
              src: linux,
              tip: "Utilisation de Linux",
            },
            {
              name: "Win",
              src: win,
              tip: "Utilisation de Windows",
            },
            {
              name: "Figma",
              src: figma,
              tip: "Création de maquettes",
            },
            {
              name: "Canva",
              src: canva,
              tip: "Création de design",
            },
          ],
        },
      ],
      contact: {
        name: "Nom",
        email: "email",
        subject: "Sujet",
        message: "Message",
      },
      footer: {
        text: "Réalisé par Matthieu Munoz, code disponible",
        link: "ici",
      },
    },
    english: {
      home: {
        text: {
          0: "After more than four years spent in a metalwork workshop as a design technician, I began a professional retraining towards web development.",
          1: "I got introduced to the world of Web dev through personal projects which strongly aroused my curiosity, but mainly expressed my desire to be part of this world.",
          2: "So, I started to study at O'Clock, with a PHP base and a specialization in ReactJS, I learned the tricks of the trade, but I also became aware of my preferences.",
          3: "Nowadays, I specialize in front-end development while keeping full-stack skills.",
        },
        profil: {
          name: "Matthieu",
          info: ", web developer",
          contact: "contact@matthieu-munoz.f",
        },
      },
      skills: [
        {
          name: "Technicals",
          class: "tech",
          skill: [
            {
              name: "HTML",
              src: html,
              tip: "Clean and semantic HTML integration",
            },
            {
              name: "CSS",
              src: css,
              tip: "Formatting with CSS",
            },
            {
              name: "JS",
              src: js,
              tip: "vanilla javascript",
            },
            {
              name: "PHP",
              src: php,
              tip: "Object Oriented Programming",
            },
            {
              name: "SQL",
              src: sql,
              tip: "Database management",
            },
            {
              name: "Laravel",
              src: laravel,
              tip: "PHP framework",
            },
            {
              name: "WP",
              src: wordpress,
              tip: "Website creation",
            },
            {
              name: "Git",
              src: git,
              tip: "Gestion de projet",
            },
          ],
        },
        {
          name: "Specialization",
          class: "spec",
          skill: [
            {
              name: "React",
              src: react,
              tip: "React Development",
            },
            {
              name: "Redux",
              src: redux,
              tip: "State management",
            },
            {
              name: "SASS",
              src: sass,
              tip: "Advanced style sheet",
            },
            {
              name: "NPM",
              src: npm,
              tip: "Project management",
            },
          ],
        },
        {
          name: "Miscellaneous",
          class: "divers",
          skill: [
            {
              name: "VScode",
              src: vscode,
              tip: "Code editor",
            },
            {
              name: "Linux",
              src: linux,
              tip: "Linux usage",
            },
            {
              name: "Win",
              src: win,
              tip: "Windows usage",
            },
            {
              name: "Figma",
              src: figma,
              tip: "Creation of models",
            },
            {
              name: "Canva",
              src: canva,
              tip: "Design creation",
            },
          ],
        },
      ],
      contact: {
        name: "Name",
        email: "e-mail",
        subject: "Subject",
        message: "Message",
      },
      footer: {
        text: "Directed by Matthieu Munoz, code available",
        link: "here",
      },
    },
  },
];
