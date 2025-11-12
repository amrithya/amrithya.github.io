// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-cv",
          title: "CV",
          description: "Showcasing my academic background and expertise in Artificial Intelligence, Machine Learning, and Computer Science.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-repositories",
          title: "Repositories",
          description: "A showcase of my GitHub projects, experiments. From machine learning to deep learning in bioinformatics and beyond.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-people",
          title: "People",
          description: "You can contact supervisors from my past research roles for references.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "dropdown-know-me",
              title: "Know me",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/Know_me/";
              },
            },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-ended-the-tenure-as-a-programmer-analyst-at-cognizant-technology-solutions-chennai-india-building-full-stack-applications-and-managing-enterprise-software-projects",
          title: 'Ended the tenure as a Programmer Analyst at Cognizant Technology Solutions, Chennai, India,...',
          description: "",
          section: "News",},{id: "news-finished-3-month-machine-learning-research-internship-at-laboratoire-hubert-curien-saint-étienne-focusing-on-graph-learning-and-interpretable-structured-learning",
          title: 'Finished 3-month Machine Learning Research Internship at Laboratoire Hubert Curien, Saint-Étienne, focusing on...',
          description: "",
          section: "News",},{id: "news-completed-student-researcher-role-at-the-bioinformatics-group-albert-ludwigs-universität-freiburg-working-on-peptide-and-protein-analysis-using-deep-learning-and-ml",
          title: 'Completed Student Researcher role at the Bioinformatics Group, Albert-Ludwigs-Universität Freiburg, working on peptide...',
          description: "",
          section: "News",},{id: "news-completed-1-semeter-erasmus-program-at-albert-ludwigs-universität-freiburg-specializing-in-artificial-intelligence",
          title: 'Completed 1-semeter ERASMUS+ Program at Albert-Ludwigs-Universität Freiburg, specializing in Artificial Intelligence.',
          description: "",
          section: "News",},{id: "news-graduated-from-msc-in-machine-learning-and-data-mining-at-université-jean-monnet-saint-étienne-france",
          title: 'Graduated from MSc in Machine Learning and Data Mining at Université Jean Monnet,...',
          description: "",
          section: "News",},{id: "news-looking-for-research-position-in-ai-related-to-llms-and-llms-applied-to-interdisciplinary-projects",
          title: 'Looking for Research position in AI, related to LLMs and LLMs applied to...',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
