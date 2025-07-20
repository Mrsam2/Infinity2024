document.addEventListener("DOMContentLoaded", function() {
    const portfolioButtons = document.querySelectorAll('.block');
    const coCardContainer = document.querySelector('.co-card');
    const memCardContainer = document.querySelector('.mem-card');
    const menuIcon = document.querySelector('.menu-icon');
    const section1 = document.querySelector('.section1');

    // Define images for each block for both co-card and mem-card
    const portfolios = {
        'Co-Coordinators': {
            coImages:  ['./IMAGES/14.png', './IMAGES/33.png'],  // 2 images for co-card
              // up to 2 images for mem-card
        },
        'Documentation': {
            coImages: ['./IMAGES/19.png', './IMAGES/18.png'],
           
        },
       
        
        'Media Team': {
            coImages: ['./IMAGES/001.png', './IMAGES/24.png', './IMAGES/26.png'],
            memImages: ['./IMAGES/23.png','./IMAGES/25.png','./IMAGES/22.png'],
            
        },
        'Decoration': {
            coImages: ['./IMAGES/16.png', './IMAGES/17.png'],
            
        },
        'I&V': {
            coImages: ['./IMAGES/20.png', './IMAGES/21.png'],
            
        },
        'Registration': {
            coImages: ['./IMAGES/29.png', './IMAGES/30.png'],
            
        },
        'Requirement': {
            coImages: ['./IMAGES/32.png', './IMAGES/31.png'],
            
        },
        'Promotion': {
            coImages: ['./IMAGES/27.png', './IMAGES/28.png'],
        }
    };

    // Function to update both co-card and mem-card sections
    function updateCards(blockName) {
        const { coImages, memImages } = portfolios[blockName];

        // Clear current co-card and mem-card containers
        coCardContainer.innerHTML = '';
        memCardContainer.innerHTML = '';

        // Apply fade-out to current images
        const currentCards = document.querySelectorAll('.card');
        currentCards.forEach(card => {
            card.classList.add('fade-out');
        });

        // Add a slight delay to allow fade-out before showing new images
        setTimeout(() => {
            // Update co-card section (always 2 images)
            coImages.forEach(imageSrc => {
                const imgElement = document.createElement('img');
                imgElement.classList.add('card', 'fade-in');
                imgElement.src = imageSrc; // Set image source
                imgElement.alt = `${blockName} co-card image`; // Set alt text
                coCardContainer.appendChild(imgElement);
            });

            // Update mem-card section (up to 2 images)
            memImages.forEach(imageSrc => {
                const imgElement = document.createElement('img');
                imgElement.classList.add('card', 'fade-in');
                imgElement.src = imageSrc;
                imgElement.alt = `${blockName} mem-card image`;
                memCardContainer.appendChild(imgElement);
            });
        }, 500); // Delay matches fade-out duration (0.5s)
    }

    // Add click event listeners to all portfolio buttons
    portfolioButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            portfolioButtons.forEach(btn => btn.classList.remove('active'));

            // Add active class to the clicked button
            this.classList.add('active');

            // Get the block name from the text content and update the cards
            const blockName = this.textContent;
            updateCards(blockName);
        });
    });

    // Function to toggle the mobile menu
    window.toggleMenu = function() {
        section1.classList.toggle('menu-active');
    };
});
