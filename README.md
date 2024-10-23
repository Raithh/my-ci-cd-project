🌐 My CI/CD Project: Automated Deployment to AWS S3 & CloudFront 🚀
Overview 📜
Welcome to My CI/CD Project, a demonstration of a streamlined Continuous Integration and Continuous Deployment (CI/CD) pipeline. This project showcases a web application automatically deployed to AWS using GitHub Actions. The core idea is to ensure code quality and manage cloud resources while keeping the project lightweight and efficient.

Key Technologies:

- AWS S3 & CloudFront for hosting and distribution.
- GitHub Actions for CI/CD automation.
- HTML, CSS, JavaScript for a simple static website.
- Code Quality Tools: HTMLHint, Stylelint, ESLint.



🎯 Project Goals
- Demonstrate a simple yet powerful CI/CD setup.
- Enforce code quality checks through automated validation and linting.
- Utilise AWS Cloud Services for hosting and distribution.
- Implement a visually appealing website using modern design techniques.

🛠️ Tech Stack
- HTML/CSS/JavaScript: Core frontend technologies.
- GitHub Actions: Automates CI/CD workflows.
- AWS S3: For static web hosting.
- AWS CloudFront: For Content Delivery Network (CDN) distribution.
- HTMLHint, Stylelint, ESLint: For automated code quality checks.

📂 Project Structure

my-ci-cd-project/
├── .github/workflows/          # CI/CD workflow files
├── pictures/                     # pictures
├── node_modules/               # Node.js modules (ignored from S3 deployment)
├── index.html                  # Main HTML file
├── style.css                   # Stylesheet
├── script.js                   # JavaScript functionality
├── .gitignore                  # Git ignore file
├── .htmlhintrc                 # Configuration for HTMLHint
├── .stylelintrc.json           # Configuration for Stylelint
├── eslint.config.js            # Configuration for ESLint
└── README.md                   # You're reading it 😊!

🚀 Deployment Guide
Prerequisites
- Node.js and npm installed locally.
- AWS CLI configured with proper credentials.
- GitHub repository set up with necessary secrets.

👣 Steps
- Clone the repository:
```
git clone https://github.com/yourusername/my-ci-cd-project.git
```
- Install dependencies:
```
npm install
```
- Push changes to main branch to trigger the GitHub Actions workflow.


🔄 CI/CD Pipeline Explained
The CI/CD workflow is defined in the deploy.yml file located in the .github/workflows/ directory. Here’s a breakdown of the steps:

- Code Checkout: Pulls the latest code from the repository.
- Set Up Node.js: Ensures the environment has the correct Node.js version.
- Install Dependencies: Installs necessary packages.
- Code Quality Checks:
    * HTMLHint: Ensures HTML follows best practices.
    * Stylelint: Lints CSS for style consistency.
    * ESLint: Checks JavaScript for syntax and formatting errors.
- AWS Deployment:
    * Syncs the project to an AWS S3 bucket.
    * Ensures the deployment is lightweight by excluding unnecessary files.

🔍 Monitoring & Logging
- AWS CloudWatch: Used for logging access and error metrics.
- AWS CloudTrail: Tracks API calls and changes to the infrastructure.

💡 Design & Creative Enhancements
The website follows a minimalist design approach:

* Color Scheme: Professional tones with modern accents.
* Typography: Clean and legible fonts.
* Animations: Subtle hover effects for buttons for a dynamic feel.
To make changes or enhance the design, use TailwindCSS or Bootstrap for quick adjustments.

📝 Known Issues & Next Steps
Known Issues
* None at the moment! 🎉

Next Steps
* Implement unit tests for JavaScript functionality.
* Integrate AWS Lambda for serverless backend operations.
* Add a contact form using AWS SES.

🧪 Run Locally
- Clone the repository:
```
git clone https://github.com/yourusername/my-ci-cd-project.git
```
- Install dependencies:
```
npm install
```
- Open index.html in your browser to see the web app in action!

🏆 Acknowledgments
- AWS Free Tier for cloud hosting.
- GitHub Actions for easy CI/CD.
- Open-Source Tools like HTMLHint, Stylelint, and ESLint for code validation.

📬 Contact
Feel free to reach out if you have any questions or suggestions:

Email: nova_cr@outlook.com
GitHub: @raithh

📜 License
This project is open-source and available under the MIT License.

🌟 Contributing
Contributions are welcome! Feel free to submit a pull request or open an issue to discuss potential changes.

