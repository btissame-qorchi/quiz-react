const questions = [
  {
    question: "Qu'est-ce que React ?",
    options: [
      { text: "Un framework CSS", isCorrect: false },
      { text: "Une bibliothèque JavaScript", isCorrect: true },
      { text: "Un langage de programmation", isCorrect: false },
      { text: "Un outil de gestion de bases de données", isCorrect: false },
    ],
  },
  {
    question: "Quel est l'élément central de React ?",
    options: [
      { text: "Components", isCorrect: true },
      { text: "Services", isCorrect: false },
      { text: "Controllers", isCorrect: false },
      { text: "Modules", isCorrect: false },
    ],
  },
  {
    question: "Que sont les 'props' dans React ?",
    options: [
      { text: "Des propriétés d'un composant", isCorrect: true },
      { text: "Des états locaux", isCorrect: false },
      { text: "Des styles CSS", isCorrect: false },
      { text: "Des fonctions utilitaires", isCorrect: false },
    ],
  },
  {
    question: "Quel est le cycle de vie d'un composant React ?",
    options: [
      { text: "Mounting, Updating, Unmounting", isCorrect: true },
      { text: "Rendering, Handling, Displaying", isCorrect: false },
      { text: "Initializing, Rendering, Destroying", isCorrect: false },
      { text: "Creating, Updating, Deleting", isCorrect: false },
    ],
  },
  {
    question: "Comment crée-t-on un composant fonctionnel ?",
    options: [
      { text: "En utilisant 'class'", isCorrect: false },
      { text: "En utilisant une fonction JavaScript", isCorrect: true },
      { text: "En utilisant 'render()'", isCorrect: false },
      { text: "En utilisant 'React.Component'", isCorrect: false },
    ],
  },
  {
    question:
      "Quel hook permet de gérer l'état dans un composant fonctionnel ?",
    options: [
      { text: "useEffect", isCorrect: false },
      { text: "useState", isCorrect: true },
      { text: "useContext", isCorrect: false },
      { text: "useReducer", isCorrect: false },
    ],
  },
  {
    question: "Quel est l'objectif de 'useEffect' ?",
    options: [
      { text: "Gérer l'état", isCorrect: false },
      { text: "Gérer les effets secondaires", isCorrect: true },
      { text: "Gérer les événements", isCorrect: false },
      { text: "Gérer les styles", isCorrect: false },
    ],
  },
  {
    question: "Qu'est-ce que JSX ?",
    options: [
      { text: "Un préprocesseur CSS", isCorrect: false },
      { text: "Un format de fichier", isCorrect: false },
      {
        text: "Une syntaxe qui permet d'écrire des éléments HTML dans JavaScript",
        isCorrect: true,
      },
      { text: "Un langage de programmation", isCorrect: false },
    ],
  },
  {
    question: "Comment partage-t-on des données entre des composants ?",
    options: [
      { text: "Props", isCorrect: true },
      { text: "States", isCorrect: false },
      { text: "Context", isCorrect: false },
      { text: "Hooks", isCorrect: false },
    ],
  },
  {
    question: "Quel est l'outil de création d'applications React recommandé ?",
    options: [
      { text: "Create React App", isCorrect: true },
      { text: "React Boilerplate", isCorrect: false },
      { text: "Next.js", isCorrect: false },
      { text: "Gatsby", isCorrect: false },
    ],
  },
];

export default questions;
