## Project\_One: Cyberpunk Neon Portfolio (Mohammad Javad Dehfroz)

-----

### Description

**Project\_One** is a dynamic, personal portfolio website that showcases Mohammad Javad Dehfroz's expertise in **Operating System Development** and **Computer Architecture**. It features a modern, **cyberpunk-themed UI** with **intensive neon aesthetics**, highlighting skills in low-level systems and open-source contributions.

The design utilizes a **Left-to-Right (LTR)** layout and is styled with pure CSS, ensuring best practices in web development and offering a structured, maintainable code base.

### Features

  * **Cyberpunk Neon Theme:** High-contrast colors, intense box shadows, and pulsing neon animations.
  * **LTR Direction:** Fully configured for Left-to-Right content flow.
  * **Responsive Design:** Optimized for all screen sizes (desktop, tablet, and mobile).
  * **Interactive Navigation:** Sticky header and responsive, toggleable mobile menu.
  * **Dynamic Elements:** Command-line style **typing effect** in the hero section and holographic button hover effects.
  * **Portfolio Showcase:** Displays open-source projects with links to GitHub repositories.
  * **Contact Links:** Easy access to email, LinkedIn, and GitHub profiles.

### Prerequisites

To view or modify this project locally, ensure you have:

  * A modern web browser (e.g., Chrome, Firefox, Edge).
  * (Optional) A text editor like VS Code for modifying files.

No additional build tools or dependencies are required, as all resources (e.g., Font Awesome, ScrollReveal) are loaded via CDNs.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/MohammadJavadQm/Project_One.git
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd Project_One
    ```
3.  **Open the website:**
    Open `index.html` in a web browser (e.g., double-click the file or use a local server like **Live Server** in VS Code).

No build or installation steps are required since the project uses static files.

### Usage

1.  **Navigate** through the website using the header links (Home, About Me, Modules, Repositories, Connect).
2.  **Explore** the portfolio section to view open-source projects with links to their GitHub repositories.
3.  **Download** the CV from the hero section (note: `MohammadJavadDehfroz_CV.pdf` is referenced).
4.  **Contact** Mohammad Javad via the provided links in the Connect section.

### Project Structure

```
Project_One/
├── image/
│   └── picture.jpg           # Profile image used in hero and about sections
├── index.html               # Main HTML file for the website
├── script.js                # JavaScript for sticky header, navigation, and animations
├── style.css                # **UPDATED:** Core CSS styles including LTR configuration and Neon theme
├── MohammadJavadDehfroz_CV.pdf  # CV file for download
└── README.md                # Project documentation
```

### Commit History

The project follows a clean and organized commit history (including recent CSS structure and LTR fixes):

1.  Initial setup with `README.md` and `.gitignore`.
2.  Added `image` folder with `picture.jpg`.
3.  Added `index.html` in three commits: Header and hero section; About, skills, and portfolio sections; Contact section, footer, and scripts.
4.  Added `script.js` in two commits: Sticky header and navigation functionality; ScrollReveal effects and card hover animations.
5.  **Added/Updated `style.css` in three commits (based on LTR Cyberpunk implementation):**
      * `feat: Define Core Cyberpunk Theme Variables and Base LTR Reset`
      * `feat: Implement LTR Header, Navigation, and Hero Sections`
      * `fix: Adjust RTL-to-LTR Positioning and Implement Remaining Sections`

### Contributing

Contributions are welcome\! To contribute:

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/your-feature`).
3.  Make your changes and commit (`git commit -m "Add your feature"`).
4.  Push to your branch (`git push origin feature/your-feature`).
5.  Create a **Pull Request** on GitHub.

Please ensure commits are small, focused, and include clear, **English commit messages**.

### Contact

For questions, collaboration, or feedback, reach out via:

  * **Email:** `mohamadjavad.deh1384@gmail.com`
  * **LinkedIn:** Mohammad Javad Dehfroz
  * **GitHub:** MohammadJavadQm

### License

This project is licensed under the **MIT License**. See the `LICENSE` file for details.