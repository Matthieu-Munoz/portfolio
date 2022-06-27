import html from "Assets/icons/html.svg";
import css from "Assets/icons/css.svg";
import js from "Assets/icons/js.svg";
import vscode from "Assets/icons/vscode.svg";
import php from "Assets/icons/php.svg";
import sql from "Assets/icons/sql.svg";
import laravel from "Assets/icons/laravel.svg";
import react from "Assets/icons/react.svg";
import redux from "Assets/icons/redux.svg";
import sass from "Assets/icons/sass.svg";
import npm from "Assets/icons/npm.svg";
import wordpress from "Assets/icons/wordpress.svg";
import git from "Assets/icons/git.svg";
import linux from "Assets/icons/linux.svg";
import win from "Assets/icons/win.svg";
import figma from "Assets/icons/sass.svg";
import canva from "Assets/icons/canva.svg";

export const data = [
  {
    french: {
      menu: {
        home: "Accueil",
        skills: "Compétences",
        projects: "Projets",
        contact: "Contact",
        resume: "Mon CV",
        language: "Langue",
        languageBtn: "Switch to english",
      },
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
          delay: "0",
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
          delay: "50",
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
          delay: "100",
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
      projects: {
        about: "En savoir plus",
        title: "Le projet :",
        date: "Date de réalisation :",
        context: "Contexte :",
        skills: "Compétences utilisées :",
        github: "Lien GitHub",
        list: [
          {
            title: "dustyourgames.com",
            url: "https://dustyourgames.com",
            img_mobil: "screenDYGMobile_ulfuwx.webp",
            img_deskot: "screenDYGDesk_oarbxm.webp",
            desc: "Ludothèque virtuelle de jeux de société.<br>Projet professionnel réalisé en équipe pendant un mois dans le cadre de ma formation de développeur web.",
            moreInfo: true,
            logo: "https://res.cloudinary.com/matthieu-munoz/f_auto,c_scale,h_150,w_150,q_100/logo_dyg-dark_kipnar.webp",
            github: "https://github.com/Matthieu-Munoz/dust-your-games",
            descSupp:
              "Dust your Games est une ludothèque personnelle, un moyen de répertorier virtuellement ses jeux, mais pas seulement :<br>Depuis cette application, vous pourrez trouver rapidement un jeu adapté à toutes les situations : que vous ayez 5 minutes ou 3 heures, que vous soyez jeune ou moins jeune, que vous soyez un, deux, trois, douze… !<br>Fini les jeux laissés derrière, vous saurez quand vous aurez joué à votre jeu favori et lesquels commencent à prendre la poussière.<br>Grâce à la fonction Dépoussiérage et à la magie de notre algorithme, vous aurez plus de chance de déterrer des jeux que vous n’avez pas vus depuis des années et qui correspondent à vos envies du moment.",
            date: "un mois - mai 2022",
            context:
              "Combien de vos jeux de société prennent actuellement la poussière sur vos étagères ?<br>Une question que nous nous sommes posée et qui a défini les bases de notre projet ; réalisé en équipe dans le cadre de notre fin de formation avec O’Clock. Pendant un mois, nous avons posé les bases, réalisé une maquette, codé un front et un back avant de présenter notre projet en live sur Youtube.<br>Cette première expérience professionnelle a joué un rôle essentiel dans notre apprentissage, elle a ancré tout le savoir acquis pendant ces mois de formation.",
            skills: [
              "React.JS",
              "Redux",
              "SASS",
              "Git",
              "Figma",
              "Gestion de projet",
              "Maquettage",
            ],
          },
          {
            title: "aphantasiaclub.org",
            url: "https://aphantasiaclub.org",
            img_mobil: "screenAphantasiaClubMobile_uwqkp2.webp",
            img_deskot: "screenAphantasiaClubDesk_vdh8li.webp",
            desc: "Site réalisé avec Wordpress pour mon association Aphantasia Club.<br>Inclus la réalisation d'une boutique.",
            moreInfo: true,
            logo: "https://res.cloudinary.com/matthieu-munoz/f_auto,c_scale,h_150,w_150,q_100/aphantasiaclub_xrmfsg.webp",
            github: false,
            descSupp:
              "L’aphantasie, c’est l’incapacité à visualiser des images, entendre des sons ou encore sentir des odeurs dans sa tête.<br><strong>Aphantasia Club</strong> est une association créée après le constat, qu’en France, l’aphantasie n’était pas représentée. Elle a donc pour but de :<ul><li><strong>Faire connaître</strong> l’aphantasie et son spectre autour de nous, en France, dans les médias et sur les réseaux sociaux. </li><li><strong>Rassembler</strong> toutes les personnes concernées et intéressées par ce sujet, pour ouvrir des discussions et des débats ! </li><li><strong>Sensibiliser</strong> sur tous les impacts de l’aphantasie dans la vie quotidienne, notamment concernant la mémoire, à l’école et pour les apprentissages. </li><li><strong>Aider aux recherches</strong> dédiées à l’aphantasie, en y participant, en les partageant et en entrant en contact avec les professionnels.</li></ul>",
            date: "courant 2021",
            context:
              "Après avoir fondé cette association, nous avons rapidement entrepris la création d'un site internet. Celui-ci a pour but de nous donner une visibilité supplémentaire et une plus grande capacité d'évolution que nos réseaux sociaux.<br>J'avais déjà réalisé un premier site avec Wordpress, j'ai donc continué sur ma lancé pour concevoir et mettre en ligne le site d'Aphantasia Club. C'est avec ce site que j'ai compris à quel point j'aimais ce monde et j'ai obtenu mes premières compétences.<br> À la suite de quoi j'ai entamé ma reconversion professionnelle.",
            skills: [
              "Wordpress",
              "Canva",
              "HTML",
              "CSS",
              "Optimisation",
              "Hébérgement web",
              "Cloudflare",
            ],
          },
          {
            title: "Interface de notation",
            url: "https://rating.matthieu-munoz.fr/",
            img_mobil: "screenRateMobile_rpudif.webp",
            img_deskot: "screenRateDesk_ksspff.webp",
            desc: "Réalisation et écriture d'un exercice guidé disponible sur github. En résumant les étapes, j'ai pu mettre à plat mes compétences et prendre conscience des connaissances acquises pendant ma formation.",
            moreInfo: false,
          },
          {
            title: "Challenge : Les planètes",
            url: "https://planets-fact.matthieu-munoz.fr/",
            img_mobil: "screenPlanetsMobile_xx1okk.webp",
            img_deskot: "screenPlanetsDesk_vfmogp.webp",
            desc: "Avec ce challenge Frontend réaliser à la moitié de ma formation, j'ai pu appliquer dans un cas concret l'utilisation de l'HTML, du CSS et de JS.",
            moreInfo: false,
          },
          {
            title: "Utilisation de l'api GitHub",
            url: "https://github-api.matthieu-munoz.fr/",
            img_mobil: "screenGitMobile_lolkhz.webp",
            img_deskot: "screenGitDesk_fincbc.webp",
            desc: "Ce challenge d'entrainement m'a introduit à l'utilisation d'un api, mais également à la compréhension d'une doc technique en utilisant pour la première fois Semantic-UI.",
            moreInfo: false,
          },
        ],
      },
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
      languageBtn: "Passer le site en français",
      menu: {
        home: "Home",
        skills: "Skills",
        projects: "Projects",
        contact: "Contact",
        resume: "Resume",
        language: "Language",
      },
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
          delay: "0",
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
          delay: "50",
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
          delay: "100",
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
      projects: {
        about: "Learn more",
        title: "The project :",
        date: "Date of realization :",
        context: "Context :",
        skills: "Skills used :",
        github: "GitHub link",
        list: [
          {
            title: "dustyourgames.com",
            url: "https://dustyourgames.com",
            img_mobil: "screenDYGMobile_ulfuwx.webp",
            img_deskot: "screenDYGDesk_oarbxm.webp",
            desc: "Virtual library of board games.<br>A professional project carried out as a team for a month as part of my training as a web developer.",
            moreInfo: true,
            logo: "https://res.cloudinary.com/matthieu-munoz/f_auto,c_scale,h_150,w_150,q_100/logo_dyg-dark_kipnar.webp",
            github: "https://github.com/Matthieu-Munoz/dust-your-games",
            descSupp:
              "Dust your Games is a personal library, a way to virtually list your games, but not only:<br>From this application, you can quickly find a game suitable for all situations: whether you have 5 minutes or 3 hours, whether you be young or old, whether you're one, two, three, twelve...!<br>No more games left behind, you'll know when you've played your favorite game and which ones are starting to gather dust.<br>Thanks to the Dusting function and the magic of our algorithm, you'll have a better chance of bringing out games that you haven't seen in months and that correspond to your desires of the moment.",
            date: "one month - May 2022",
            context:
              "How many of your board games are currently gathering dust on your shelves?<br>A question we asked ourselves and which defined the bases of our project; realized as a team as part of my training with O’Clock. For a month, we laid the foundations, made a mockup, coded a front and a back before presenting our project live on Youtube.<br>This first professional experience played an essential role in our learning, it anchored the knowledge acquired during these months of training.",
            skills: [
              "React.JS",
              "Redux",
              "SASS",
              "Git",
              "Figma",
              "Project management",
              "Mockups",
            ],
          },
          {
            title: "aphantasiaclub.org",
            url: "https://aphantasiaclub.org",
            img_mobil: "screenAphantasiaClubMobile_uwqkp2.webp",
            img_deskot: "screenAphantasiaClubDesk_vdh8li.webp",
            desc: "Site made with Wordpress for my association Aphantasia Club.<br>Includes the creation of a shop.",
            moreInfo: true,
            logo: "https://res.cloudinary.com/matthieu-munoz/f_auto,c_scale,h_150,w_150,q_100/aphantasiaclub_xrmfsg.webp",
            github: false,
            descSupp:
              "Aphantasia is the inability to visualize images, hear sounds or even smell odors in one's head.<br><strong>Aphantasia Club</strong> is an association created after the observation that in France, aphantasia was not represented. It therefore aims to:<ul><li><strong>Raise awareness</strong> of aphantasia and its spectrum around us, in France, in the media and on social networks. </li><li><strong>Bring together</strong> all the people concerned and interested in this subject, to open discussions and debates! </li><li><strong>Raise awareness</strong> of all the impacts of aphantasia in daily life, particularly concerning memory, at school and for learning. </li><li><strong>Help with research</strong> dedicated to aphantasia, by participating in it, sharing it and getting in touch with professionals.</li></ul>",
            date: "during 2021",
            context:
              "After founding this association, we quickly undertook the creation of a website. This is intended to give us additional visibility and a greater capacity for evolution than our social networks.<br>I had already created a first site with Wordpress, so I continued on my way to design and put the Aphantasia Club website online. It is with this site that I understood how much I loved this world and I obtained my first skills.<br> Following which I began my professional retraining.",
            skills: [
              "Wordpress",
              "Canva",
              "HTML",
              "CSS",
              "Optimization",
              "Web hosting",
              "Cloudflare",
            ],
          },
          {
            title: "Rating interface",
            url: "https://rating.matthieu-munoz.fr/",
            img_mobil: "screenRateMobile_rpudif.webp",
            img_deskot: "screenRateDesk_ksspff.webp",
            desc: "Realization and writing of a guided exercise available on github. By summarizing the steps, I was able to flatten my skills and become aware of the knowledge acquired during my training.",
            moreInfo: false,
          },
          {
            title: "Challenge: Planets",
            url: "https://planets-fact.matthieu-munoz.fr/",
            img_mobil: "screenPlanetsMobile_xx1okk.webp",
            img_deskot: "screenPlanetsDesk_vfmogp.webp",
            desc: "With this Frontend challenge realized halfway through my training, I was able to apply in a concrete case the use of HTML, CSS and JS.",
            moreInfo: false,
          },
          {
            title: "Using the GitHub API",
            url: "https://github-api.matthieu-munoz.fr/",
            img_mobil: "screenGitMobile_lolkhz.webp",
            img_deskot: "screenGitDesk_fincbc.webp",
            desc: "This training challenge introduced me to the use of an API, but also to the understanding of a technical doc by using Semantic-UI for the first time.",
            moreInfo: false,
          },
        ],
      },
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
