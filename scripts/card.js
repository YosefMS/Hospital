// بيانات الأطباء (تعديل البيانات حسب الحاجة)
const doctors = [
    {
        name: "Dr. Samuela Manages, MD",
        specialty: "Family Medicine",
        rating: 3.4,
        address: "4 Main St, Van Buren, ME 04785",
        image: "https://via.placeholder.com/300x200?text=Doctor+1",
    },
    {
        name: "Dr. Hans Duvefelt, MD",
        specialty: "Family Medicine",
        rating: 4.3,
        address: "4 Main St, Van Buren, ME 04785",
        image: "https://via.placeholder.com/300x200?text=Doctor+2",
    },
    {
        name: "Dr. Maria Stevens, MD",
        specialty: "Pediatrics",
        rating: 4.8,
        address: "12 Elm St, Portland, ME 04101",
        image: "https://via.placeholder.com/300x200?text=Doctor+3",
    },
];

// تحديد الحاوية الأساسية
const cardContainer = document.getElementById("card-container");

// إضافة البطاقات ديناميكيًا
doctors.forEach((doctor) => {
    const card = document.createElement("div");
    card.className = "card";

    // الصورة
    const imageContainer = document.createElement("div");
    imageContainer.className = "image-container";
    const image = document.createElement("img");
    image.src = doctor.image;
    image.alt = ${doctor.name};
    imageContainer.appendChild(image);
    card.appendChild(imageContainer);

    // المحتوى
    const cardContent = document.createElement("div");
    cardContent.className = "card-content";

    const name = document.createElement("h2");
    name.textContent = doctor.name;
    cardContent.appendChild(name);

    const specialty = document.createElement("p");
    specialty.textContent = Specialty: ${doctor.specialty};
    cardContent.appendChild(specialty);

    const rating = document.createElement("p");
    rating.textContent = Rating: ${doctor.rating} ★;
    cardContent.appendChild(rating);

    const address = document.createElement("p");
    address.textContent = (`Address: ${doctor.address`)};
    cardContent.appendChild(address);

    // زر التفاصيل
    const button = document.createElement("button");
    button.textContent = "View Profile";
    button.onclick = () => alert(`Viewing profile for ${doctor.name}`);
    cardContent.appendChild(button);

    card.appendChild(cardContent);
    cardContainer.appendChild(card);
});