import { Component } from '@angular/core';

interface EducationItem {
  title: string;
  details: string;
  extra?: string;
  imageUrl?: string;
}

interface SkillEntry {
  label?: string;
  value: string;
}

interface SkillSection {
  title: string;
  entries: SkillEntry[];
}

interface CertificateItem {
  title: string;
  issuedIn: string;
  details: string;
  imageUrl: string;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  protected readonly profileImageUrl = 'assets/profilePic/gambar.Ashraf.png';
  protected readonly aboutMe =
    'Dedicated undergraduate pursuing a Bachelor of Computer Science with Honours (Information Security and Assurance) at USIM with hands-on experience in website and mobile development. I am actively seeking full-time opportunities as a Full Stack, Backend, or Frontend Developer after my internship, which concludes in August 2026. With a strong foundation in programming and a passion for creating high-quality applications, I have worked with technologies like Laravel, Angular, MariaDB, Flutter, and Android Studio. I thrive in collaborative environments, enjoy problem-solving, and am always eager to learn new frameworks and technologies to stay up-to-date with industry trends. I look forward to applying my expertise, enthusiasm, and desire to learn in contributing to impactful projects while continuing to grow professionally in the software development field.';

  protected readonly certificate: CertificateItem = {
    title:
      'ISTQB Certified Tester Foundation Level (CTFL) - Malaysian Software Testing Board (MSTB)',
    issuedIn: 'April 2026',
    details:
      'Accredited by International Software Testing Qualifications Board. Certificate Number: MY0054-26.',
    imageUrl: 'assets/cert/CTFL.png',
  };

  private readonly educationItems: EducationItem[] = [
    {
      title:
        'Bachelor of Computer Science with Honours (Information Security and Assurance)',
      details: 'Universiti Sains Islam Malaysia | 2021-2026 | CGPA: 3.53',
      imageUrl: 'education/usim.png',
    },
    {
      title: 'Sijil Matrikulasi Malaysia',
      details: 'Kolej Matrikulasi Negeri Sembilan | 2021-2022 | CGPA: 3.83',
      extra: 'MUET: Band 4',
      imageUrl: 'education/kmns.png',
    },
    {
      title: 'Sijil Pelajaran Malaysia',
      details: 'SMKA Dato Hj Abu Hassan Hj Sail | 2026-2020 | 7A 5B',
      imageUrl: 'education/semadah.png',
    },
  ];

  private readonly skillSections: SkillSection[] = [
    {
      title: 'Languages',
      entries: [
        { label: 'Malay', value: 'Native (Expert)' },
        {
          label: 'English',
          value: 'Intermediate (Conversational & Written)',
        },
      ],
    },
    {
      title: 'Soft Skills',
      entries: [
        {
          value:
            'Leadership & Discipline, Time Management, Teamwork & Collaboration, Communication Skills, Adaptability & Learning Agility',
        },
      ],
    },
    {
      title: 'Technical Skills',
      entries: [
        {
          label: 'Mobile & Web Development',
          value: 'Flutter, Angular, Nest.js, Express.js, Node.js',
        },
        {
          label: 'Programming Languages',
          value: 'C, JavaScript, TypeScript, Dart, HTML',
        },
        { label: 'Database Management', value: 'Firebase, MariaDB' },
        {
          label: 'Tools & Software',
          value:
            'VS Code, Android Studio, Google Sites, Microsoft Word, Microsoft Excel, Cursor, Codex, Claude',
        },
      ],
    },
  ];

  protected getEducationItems(): EducationItem[] {
    return this.educationItems;
  }

  protected getSkillSections(): SkillSection[] {
    return this.skillSections;
  }
}
