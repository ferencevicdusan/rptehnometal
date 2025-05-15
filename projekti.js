// Project data
const projects = {
    project1: {
        title: "Industrijski Objekat",
        location: "Beograd, Srbija",
        date: "2023",
        size: "5,000 m²",
        description: "Kompletna montaža čelične konstrukcije za industrijski objekat. Projekt je uključivao montažu glavne konstrukcije, krovne konstrukcije i fasade.",
        features: [
            "Montaža glavne čelične konstrukcije",
            "Montaža krovne konstrukcije",
            "Montaža fasadnih elemenata",
            "Implementacija sigurnosnih standarda",
            "Kontrola kvaliteta tokom montaže"
        ],
        images: [
            "Slike/Snimak ekrana 2021-11-17 103411.webp",
            "Slike/Snimak ekrana 2021-11-17 103337.webp",
            "Slike/Snimak ekrana 2021-11-17 103142.webp"
        ]
    },
    project2: {
        title: "Komercijalni Centar",
        location: "Novi Sad, Srbija",
        date: "2023",
        size: "8,000 m²",
        description: "Montaža čelične konstrukcije za moderni komercijalni centar. Projekt je uključivao kompleksnu montažu višespratne konstrukcije sa posebnim zahtevima za sigurnost i stabilnost.",
        features: [
            "Montaža višespratne konstrukcije",
            "Implementacija protivpožarnih zaštita",
            "Montaža liftovskih konstrukcija",
            "Kontrola vibracija i stabilnosti",
            "Montaža fasadnih sistema"
        ],
        images: [
            "Slike/Snimak ekrana 2021-11-17 103337.webp",
            "Slike/Snimak ekrana 2021-11-17 103411.webp",
            "Slike/Snimak ekrana 2021-11-17 103142.webp"
        ]
    },
    project3: {
        title: "Skladišni Objekat",
        location: "Niš, Srbija",
        date: "2022",
        size: "3,500 m²",
        description: "Montaža čelične konstrukcije za skladišni objekat sa posebnim zahtevima za nosivost i otpornost na spoljašnje uticaje.",
        features: [
            "Montaža teške nosive konstrukcije",
            "Implementacija zaštite od korozije",
            "Montaža krovne konstrukcije",
            "Montaža ventilacionih sistema",
            "Kontrola kvaliteta zavarivanja"
        ],
        images: [
            "Slike/Snimak ekrana 2021-11-17 103142.webp",
            "Slike/Snimak ekrana 2021-11-17 103411.webp",
            "Slike/Snimak ekrana 2021-11-17 103337.webp"
        ]
    },
    project4: {
        title: "Proizvodni Pogon",
        location: "Kragujevac, Srbija",
        date: "2022",
        size: "6,000 m²",
        description: "Montaža čelične konstrukcije za proizvodni pogon sa posebnim zahtevima za industrijsku opremu i sigurnost radnika.",
        features: [
            "Montaža teške industrijskie konstrukcije",
            "Implementacija zaštite od vibracija",
            "Montaža kranova i dizalica",
            "Montaža zaštitnih ograda",
            "Kontrola kvaliteta montaže"
        ],
        images: [
            "Slike/Snimak ekrana 2021-11-17 103316.webp",
            "Slike/Snimak ekrana 2021-11-17 103411.webp",
            "Slike/Snimak ekrana 2021-11-17 103142.webp"
        ]
    },
    project5: {
        title: "Logistički Centar",
        location: "Subotica, Srbija",
        date: "2023",
        size: "7,000 m²",
        description: "Montaža čelične konstrukcije za moderni logistički centar sa zahtevima za brzu montažu i visoku nosivost.",
        features: [
            "Brza montaža konstrukcije",
            "Implementacija zaštite od vremenskih uticaja",
            "Montaža krovne konstrukcije",
            "Montaža fasadnih sistema",
            "Kontrola kvaliteta zavarivanja"
        ],
        images: [
            "Slike/Snimak ekrana 2021-11-17 103223.webp",
            "Slike/Snimak ekrana 2021-11-17 103411.webp",
            "Slike/Snimak ekrana 2021-11-17 103142.webp"
        ]
    },
    project6: {
        title: "Poslovni Objekat",
        location: "Zrenjanin, Srbija",
        date: "2023",
        size: "4,500 m²",
        description: "Montaža čelične konstrukcije za moderni poslovni objekat sa zahtevima za estetiku i funkcionalnost.",
        features: [
            "Montaža moderne poslovne konstrukcije",
            "Implementacija zaštite od buke",
            "Montaža krovne konstrukcije",
            "Montaža fasadnih sistema",
            "Kontrola kvaliteta montaže"
        ],
        images: [
            "Slike/Snimak ekrana 2021-11-17 103029.webp",
            "Slike/Snimak ekrana 2021-11-17 103411.webp",
            "Slike/Snimak ekrana 2021-11-17 103142.webp"
        ]
    }
};

// Initialize AOS
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Modal elements
const modal = document.getElementById('projectModal');
const closeModal = document.querySelector('.close-modal');
const mainImage = document.querySelector('.main-image');
const thumbnailContainer = document.querySelector('.thumbnail-container');
const modalTitle = document.querySelector('.modal-info h2');
const locationSpan = document.querySelector('.location');
const dateSpan = document.querySelector('.date');
const sizeSpan = document.querySelector('.size');
const descriptionDiv = document.querySelector('.project-description');
const featuresList = document.querySelector('.project-features ul');

// Open modal
document.querySelectorAll('.view-project').forEach(button => {
    button.addEventListener('click', () => {
        const projectId = button.getAttribute('data-project');
        const project = projects[projectId];
        
        // Update modal content
        modalTitle.textContent = project.title;
        locationSpan.textContent = project.location;
        dateSpan.textContent = project.date;
        sizeSpan.textContent = project.size;
        descriptionDiv.textContent = project.description;
        
        // Update features list
        featuresList.innerHTML = '';
        project.features.forEach(feature => {
            const li = document.createElement('li');
            li.textContent = feature;
            featuresList.appendChild(li);
        });
        
        // Update images
        mainImage.src = project.images[0];
        thumbnailContainer.innerHTML = '';
        project.images.forEach(image => {
            const thumbnail = document.createElement('img');
            thumbnail.src = image;
            thumbnail.classList.add('thumbnail');
            thumbnail.addEventListener('click', () => {
                mainImage.src = image;
            });
            thumbnailContainer.appendChild(thumbnail);
        });
        
        // Show modal
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });
});

// Close modal
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

// Close modal when clicking outside
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'block') {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}); 