const schemes = [
    // Central Government Schemes
    {
        name: "Sarva Shiksha Abhiyan (SSA)",
        description: "Ensures free and compulsory education for children aged 6 to 14 years.",
        link: "https://en.wikipedia.org/wiki/Sarva_Shiksha_Abhiyan",
        type: "central"
    },
    {
        name: "Rashtriya Madhyamik Shiksha Abhiyan (RMSA)",
        description: "Enhances access to and quality of secondary education.",
        link: "https://en.wikipedia.org/wiki/Rashtriya_Madhyamik_Shiksha_Abhiyan",
        type: "central"
    },
    {
        name: "Mid-Day Meal Scheme",
        description: "Improves nutrition by providing free lunches to students in Classes I to VIII.",
        link: "https://en.wikipedia.org/wiki/Midday_Meal_Scheme",
        type: "central"
    },
    {
        name: "PM eVidya",
        description: "Unifies efforts for digital and online education for multi-mode access.",
        link: "https://www.education.gov.in/en/pm-vidya",
        type: "central"
    },
    {
        name: "National Means-cum-Merit Scholarship Scheme (NMMSS)",
        description: "Awards scholarships to meritorious students of economically weaker sections.",
        link: "https://www.education.gov.in/en/scholarship-schemes",
        type: "central"
    },
    {
        name: "SPARC (Scheme for Promotion of Academic and Research Collaboration)",
        description: "Facilitates research collaborations with international institutions.",
        link: "https://sparc.iitkgp.ac.in/",
        type: "central"
    },
    {
        name: "PM POSHAN (Pradhan Mantri Poshan Shakti Nirman)",
        description: "Provides hot cooked meals to elementary school students to improve nutrition.",
        link: "https://pmposhan.education.gov.in/",
        type: "central"
    },

    // Karnataka State Government Schemes
    {
        name: "Vidya Siri Scheme",
        description: "Financial assistance for food and hostel fees for economically weaker students.",
        link: "https://karepass.cgg.gov.in/",
        type: "state"
    },
    {
        name: "Karnataka ePASS (Post-Matric Scholarship)",
        description: "Offers scholarships for backward class students pursuing higher education.",
        link: "https://karepass.cgg.gov.in/",
        type: "state"
    },
    {
        name: "Laptop Distribution Scheme",
        description: "Distributes free laptops to students pursuing higher education in professional courses.",
        link: "https://karnataka.gov.in/",
        type: "state"
    },
    {
        name: "Prabuddha Scheme",
        description: "Provides financial aid for competitive exam coaching for SC/ST students.",
        link: "https://socialwelfare.karnataka.gov.in/",
        type: "state"
    },
    {
        name: "Karnataka Mathru Purna Yojana",
        description: "Ensures nutritional mid-day meals for pregnant women and lactating mothers.",
        link: "https://dwcd.karnataka.gov.in/",
        type: "state"
    },
    {
        name: "CM's Nava Chetana Scheme",
        description: "Funds skill development training for employability improvement.",
        link: "https://karnataka.gov.in/",
        type: "state"
    },
    {
        name: "Shiksha Setu Yojana",
        description: "Improves the quality of education in government schools.",
        link: "https://education.karnataka.gov.in/",
        type: "state"
    },
    {
        name: "Residential Schools for Girls",
        description: "Establishes residential schools with free education and boarding for girls.",
        link: "https://karnataka.gov.in/",
        type: "state"
    }
];

function populateSchemes() {
    const schemesContainer = document.getElementById('schemes');
    schemesContainer.innerHTML = ""; // Clear existing content
    schemes.forEach(scheme => {
        const schemeItem = document.createElement('div');
        schemeItem.classList.add('scheme-item');
        schemeItem.innerHTML = `
            <h3>${scheme.name}</h3>
            <p>${scheme.description}</p>
            <a href="${scheme.link}" target="_blank">Learn More</a>
        `;
        schemesContainer.appendChild(schemeItem);
    });
}

function filterSchemes() {
    const filterValue = document.getElementById('schemeType').value;
    const schemesContainer = document.getElementById('schemes');
    schemesContainer.innerHTML = ""; // Clear content for filtering
    schemes
        .filter(scheme => filterValue === 'all' || scheme.type === filterValue)
        .forEach(scheme => {
            const schemeItem = document.createElement('div');
            schemeItem.classList.add('scheme-item');
            schemeItem.innerHTML = `
                <h3>${scheme.name}</h3>
                <p>${scheme.description}</p>
                <a href="${scheme.link}" target="_blank">Learn More</a>
            `;
            schemesContainer.appendChild(schemeItem);
        });
}

window.onload = populateSchemes;

function toggleMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('active');
}
