import { Project } from './projects.model';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'LearnAlign',
    description:
      'Final Year Project: An AI-powered system providing personalized learning paths and career guidance for students based on psychometric assessments.',
    details:
      'LearnAlign is a web-based system that helps students identify personalized learning approaches and suitable career paths. It uses VARK model assessments to evaluate sensory learning preferences and a Career Interest Inventory based on Holland\'s RIASEC model for vocational personality types. Google Generative AI (Gemini API) processes psychometric scores to generate real-time learning and career recommendations through an AI chatbox. The frontend is built with Flutter and Dart for a responsive cross-platform experience, while Firebase Authentication handles secure registration and email verification. User profiles, assessment questions, and results are stored in Firebase.',
    techStack: ['Flutter', 'Dart', 'Firebase'],
    logos: ['assets/logo/flutter.jpg', 'assets/logo/dart.jpg', 'assets/logo/firebase.png'],
    githubUrl: 'https://github.com/Asshhhraf-stack/LearnAlign',
  },
  {
    id: '2',
    title: 'UnifiedCareerClient',
    description:
      'Frontend client for the Unified API Middleware project, providing a user-friendly interface to calculate domestic postage rates (City-Link, J&T, and Poslaju) within Malaysia.',
    details:
      'This repository contains the frontend client for the Unified API Middleware system. The backend middleware (developed separately) integrates courier services such as City-Link, Poslaju, and J&T for domestic postage rate calculations. The frontend was built independently to create a decoupled full-stack workflow, focusing on data presentation, form validation, and client-side error handling. Users can interact with the rate calculation engine through a clean web interface built with JavaScript, HTML, and CSS, with Python scripts supporting parts of the integration workflow.',
    techStack: ['JavaScript', 'Python', 'CSS', 'HTML'],
    logos: [
      'assets/logo/javascript.jpg',
      'assets/logo/python.jpg',
      'assets/logo/css.png',
      'assets/logo/HTML5.jpg',
    ],
    githubUrl: 'https://github.com/Asshhhraf-stack/UnifiedCareerClient',
  },
  {
    id: '3',
    title: 'RFID Attendance System',
    description: 'Semester project for tracking attendance using RFID technology.',
    details:
      'An IoT-based RFID attendance system that uses an ESP8266 (NodeMCU) or ESP32 board with an RFID reader to scan cards and send attendance records to a PHP web application backed by MySQL. This is a full hardware and software project: it requires an Arduino-compatible board, MFRC522 RFID module, and a web server with PHP and MySQL. The firmware runs on the microcontroller while the PHP application manages attendance records, user data, and reporting through a web dashboard.',
    techStack: ['PHP', 'JavaScript', 'CSS', 'MySQL'],
    logos: [
      'assets/logo/php.png',
      'assets/logo/javascript.jpg',
      'assets/logo/css.png',
      'assets/logo/mysql.jpg',
    ],
    githubUrl: 'https://github.com/Asshhhraf-stack/RFID-Attendance-System',
  },
  {
    id: '4',
    title: 'OSINT Security Toolkit',
    description:
      'Android toolkit for open-source intelligence gathering and security research.',
    details:
      'A local Android OSINT Security Toolkit built with Kotlin and Jetpack Compose. The app runs entirely on an emulator or physical device with no backend deployment required. It provides security research and open-source intelligence gathering tools in a mobile-friendly interface. The project uses modern Android development practices with Gradle, JDK 17+, and Android SDK targeting API 29 and above.',
    techStack: ['Kotlin', 'Android'],
    logos: ['assets/logo/kotlin.png', 'assets/logo/android studio.jpg'],
    githubUrl: 'https://github.com/Asshhhraf-stack/OSINT-Security-Toolkit',
  },
];
