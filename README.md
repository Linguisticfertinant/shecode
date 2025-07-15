# SheCode

A safe, anonymous platform for sharing stories and reporting harassment, designed to empower users to speak their truth while protecting their privacy.

---

## Table of Contents

- [About](#about)
- [Motivation](#motivation)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Privacy & Anonymity](#privacy--anonymity)
- [File Structure](#file-structure)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Contributing](#contributing)
- [Troubleshooting](#troubleshooting)
- [Contact](#contact)
- [License](#license)

---

## About

**SheCode** is a static web platform that empowers users to share their stories and report harassment anonymously. The project is designed with privacy as a core value, ensuring that no identifying information is collected or stored.

---

## Motivation

Many people hesitate to share their experiences or report harassment due to fear of exposure or retaliation. SheCode aims to provide a safe, supportive, and anonymous space for users to speak their truth, seek support, and help others by sharing their stories.

---

## Features

- **Anonymous Story Sharing:** No names, emails, or identifying data are collected. Stories are stored anonymously.
- **Harassment Reporting:** Submit reports via Google Forms, with privacy settings that do not collect emails or logins.
- **Privacy First:** Only the SheCode team can access backend data. No data is shared or sold.
- **User Control:** Users decide what to share and when. No pressure, no requirements.
- **Simple, Accessible UI:** Clean, responsive design for easy access on any device.

---

## Technologies Used

- **HTML5** – Structure and content
- **CSS3** – Styling and layout
- **JavaScript** – Client-side interactivity
- **Google Firestore** – Anonymous story storage
- **Google Forms** – Secure, anonymous reporting

---

## Privacy & Anonymity

- **No Personal Data Collected:** No names, emails, or logins are required to use the platform.
- **Anonymous Storage:** Stories are stored in Firestore without any identifying information.
- **Anonymous Reporting:** Google Forms is configured to not collect email addresses, logins, or IP addresses.
- **Restricted Access:** Only the SheCode team can view backend data.
- **User Empowerment:** Users are never required to share more than they are comfortable with.

---

## File Structure

```
shecode/
  ├── images/                # Project images and assets
  ├── index.html             # Home page
  ├── pages/
  │   ├── privacy.html       # Privacy & Anonymity information
  │   ├── report.html        # Harassment report form
  │   └── stories.html       # Story sharing page
  ├── script.js              # JavaScript functionality
  └── styles.css             # Main stylesheet
```

---

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Edge, Safari, etc.)
- (Optional) A code editor if you wish to contribute

### Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Linguisticfertinant/shecode.git
   cd shecode
   ```

2. **Open the site:**
   - Double-click `index.html` or open it in your browser.

3. **No build step required:**  
   All files are static and ready to use.

---

## Usage

- **Home Page:** Overview and navigation.
- **Stories Page:** Read and share stories anonymously.
- **Report Page:** Submit harassment reports via Google Forms.
- **Privacy Page:** Learn about how your privacy is protected.

---

## Contributing

We welcome contributions! To get started:

1. Fork the repository.
2. Create a new branch for your feature or fix.
3. Commit your changes with clear, descriptive messages.
4. Push to your fork and submit a pull request.

**Please follow the code style and respect the privacy-first philosophy.**

---

## Troubleshooting

**Common Issues:**

- **Permission denied when pushing to GitHub:**  
  Make sure you have access to the repository or push to your own fork.

- **Site not loading properly:**  
  Ensure all files are present and you are opening `index.html` in a modern browser.

- **Google Forms/Firestore not working:**  
  Check your internet connection and that the forms are still active.

If you encounter other issues, please open an issue on GitHub or contact the team.

---

## Contact

For questions, support, or feedback, contact the SheCode team via GitHub or email.

---

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details. 



