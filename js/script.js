document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.content-con').forEach(item => {
        item.addEventListener('click', function () {
            let title = this.querySelector('.con-title').innerText; // Get title text
            let description = this.querySelector('.con-txt').innerText; // Get description text
            
            // Get the computed background image of the clicked element
            let bgImage = window.getComputedStyle(this).backgroundImage;
            
            // Extract the URL from background-image: url("path-to-image.jpg")
            let imageUrl = bgImage.replace(/^url\(["']?/, '').replace(/["']?\)$/, '');

            openModal(title, description, imageUrl);
        });
    });

    function openModal(title, description, imageUrl) {
        let modal = document.getElementById("dynamic-modal");
        let modalTitle = document.getElementById("modal-title");
        let modalText = document.getElementById("modal-text");
        let modalImage = document.querySelector(".modal-image");

        modal.style.display = "flex"; // Show modal
        modalTitle.innerText = title; // Set title
        modalText.innerText = description; // Set text
        modalImage.style.backgroundImage = `url(${imageUrl})`; // Set extracted background image
    }

    function closeModal() {
        let modal = document.getElementById("dynamic-modal");
        modal.style.display = "none"; // Close modal
    }

    // Close modal when clicking outside the content
    window.addEventListener("click", function (event) {
        let modal = document.getElementById("dynamic-modal");
        let modalContent = document.querySelector(".modal-content"); 
        let closeBtn = document.getElementById("close");

        if (event.target === modal || event.target === modalContent || event.target === closeBtn) {
            closeModal();
        }
    });
});
