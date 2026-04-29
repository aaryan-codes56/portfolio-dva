const base = import.meta.env.BASE_URL

const projects = [
  {
    name: "Cardiovascular Risk Assessment",
    description: "This project analyzes cardiovascular risk using patient health data to evaluate whether smoking and diabetes impact disease occurrence, heart rate, and cholesterol. It highlights single-factor correlations and emphasizes multivariate modeling, enabling data-driven healthcare decisions through interactive dashboards and analytical frameworks.",
    image: "https://i.postimg.cc/FHvqPd8W/image.png",
    tags: ["Python", "ML", "Data Analysis"],
    github: "https://github.com/RahulDwivedi205/G11_DVA_Capstone",
    live: "https://docs.google.com/spreadsheets/d/1GaOiBl-1Sb5tEx1u_0V1A0bZIkZrJKNOeL-GtxrP1mQ/edit?usp=sharing"
  },
  {
    name: "UK-Road-Safety-Analysis",
    description: "End-to-end data pipeline cleaning and analyzing UK road accident records. Processed raw datasets into dashboard-ready formats using Python and Pandas. Comprehensive analysis of UK road accident data using Python. Covers severity distribution, temporal patterns, weather and road conditions, speed limits, and multi-variable safety factor analysis with visualizations and feature importance.",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
    tags: ["Python", "Pandas", "Data Cleaning", "Tableau"],
    github: "https://github.com/Deepanshu-Nst/SectionE_G-4_UK-Road-Safety",
    live: "https://github.com/Deepanshu-Nst/SectionE_G-4_UK-Road-Safety"
  }
]

export default projects
