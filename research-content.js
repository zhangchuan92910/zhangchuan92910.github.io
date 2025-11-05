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
// 3. ACADEMIC PROJECTS & EXPERIENCE
// ===================================
const academicProjects = [
    {
        title: "Project: \"Attention is not all you need\"",
        subtitle: "Course Project, Simon Fraser University | Sep 2020 – Dec 2020",
        description: "Researched the Transformer model; tested the influence of attention weights on output."
    },
    {
        title: "Project: Sketching Recognition with ML",
        subtitle: "Course Project, Simon Fraser University | Jan 2020 – Mar 2020",
        description: "Tested KNN, SVM, and CNN on the Quick Draw Dataset; improved CNN structure based on Sketch-a-Net."
    },
    {
        title: "Research Assistance, SJTU-JI",
        subtitle: "Undergraduate Researcher | May 2014 – Jan 2015",
        description: "Benchmark supercomputers for CFD simulation via OpenCFD."
    }
    // Add new projects here
];
