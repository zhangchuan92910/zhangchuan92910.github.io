/*
  "Database" for your Research Page
  This single file holds all the dynamic content for research.html
*/

// ===================================
// 1. RESEARCH INTERESTS
// ===================================
const researchInterests = [
    {
        name: "Graph Theory & Combinatorics",
        description: "Special structures of both simple graph and directed graphs."
    },
    {
        name: "Algorithms & Complexity",
        description: "Designing and analyzing algorithms for combinatorial problems, including approximation algorithms and randomized algorithms."
    },
    {
        name: "Theoretical Computer Science",
        description: "Exploring foundational topics such as cryptography, quantum computing, and complexity theory."
    }
];


// ===================================
// 2. SELECTED PUBLICATIONS
// ===================================
/*
  Workflow:
  1. Maintain a .bib file locally (see publications.bib for an example).
  2. Use an online "bibtex to json converter" to convert your .bib file.
  3. Paste the resulting JSON array into this 'publications' variable.
*/
const publications = [
  {
    "entryTags": {
      "author": "Your Name and Coauthor Name",
      "title": "A Really Great Paper on a Really Great Topic",
      "journal": "The journal publishing your article",
      "year": "2026",
      "volume": "100",
      "number": "1",
      "pages": "1-20"
    },
    "entryType": "article"
  },
  {
    "entryTags": {
      "author": "Your Name and Coauthor Name",
      "title": "Another Paper on Another Great Topic",
      "booktitle": "A book presenting your article",
      "year": "2025",
      "pages": "100-110"
    },
    "entryType": "inproceedings"
  }
  // Paste new JSON entries here
];


// ===================================
// 3. TALKS & CONFERENCES
// ===================================
const talksAndConferences = [
    // {
    //     title: "A Structural Characterization of Strongly Chordal Semicomplete Digraphs",
    //     subtitle: "Invited Talk | UVic Discrete Math Seminar | Oct 2025",
    //     description: "Presented the main findings of my thesis research on extending structural properties from tournaments to semicomplete digraphs."
    // },
    // {
    //     title: "Introduction to Randomized Algorithms",
    //     subtitle: "Guest Lecture | CPSC 304, Simon Fraser University | Mar 2022",
    //     description: "Delivered a guest lecture on the basics of randomized algorithms, including examples like the randomized quicksort and min-cut algorithms."
    // }
];

// ===================================
// 4. TEACHING EXPERIENCE
// ===================================
const teachingExperience = [
    {
        title: "Teaching Assistant, MATH 152: Calculus II",
        subtitle: "University of Victoria | Sep 2025 – Dec 2025",
        description: "Led weekly tutorials, graded assignments, and held office hours for a first-year calculus course."
    }
];

// ===================================
// 5. WORKSHOPS
// ===================================
// (I am intentionally leaving this array empty to test your request.)
// (The JavaScript in research.html will see this is empty and will HIDE the "Workshops" title.)
const workshops = [
    // Example of what you *could* add:
    // {
    //     title: "Git for Academics",
    //     subtitle: "Workshop Facilitator | UVic Grad Students' Society | Nov 2025",
    //     description: "Led a 2-hour workshop on using Git and GitHub for version control in research projects and LaTeX documents."
    // }
];
