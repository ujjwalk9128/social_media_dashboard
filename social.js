document.addEventListener('DOMContentLoaded', () => {
    const addPhotoBtn = document.getElementById('addPhotoBtn');
    const photoModal = document.getElementById('photoModal');
    const closeModal = document.querySelector('.close');
    const photoForm = document.getElementById('photoForm');
    const photoGallery = document.getElementById('photoGallery');
    const newsList = document.getElementById('newsList');

    // Event listener for opening the photo modal
    addPhotoBtn.addEventListener('click', () => {
        photoModal.style.display = 'block';
    });

    // Event listener for closing the photo modal
    closeModal.addEventListener('click', () => {
        photoModal.style.display = 'none';
    });

    // Event listener for clicking outside the modal to close it
    window.addEventListener('click', (e) => {
        if (e.target == photoModal) {
            photoModal.style.display = 'none';
        }
    });

    // Handle photo upload
    photoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const photoInput = document.getElementById('photoInput');
        const file = photoInput.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const img = document.createElement('img');
                img.src = e.target.result;
                photoGallery.appendChild(img);
                photoModal.style.display = 'none';
                photoInput.value = '';
            };
            reader.readAsDataURL(file);
        }
    });

    // Load dummy news articles
    const dummyNews = [
        "New feature released on Profilebook!",
        "Check out our latest updates!",
        "Profilebook community reaches 1 million users!",
        "Tips and tricks for getting the most out of Profilebook."
    ];

    dummyNews.forEach(newsItem => {
        const li = document.createElement('li');
        li.textContent = newsItem;
        newsList.appendChild(li);
    });
});
