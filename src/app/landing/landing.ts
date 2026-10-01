import { Component, ElementRef, signal, viewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PROJECTS } from '../projects/projects.data';
import { LandingPageData } from './landing.model';

const LANDING_DATA: LandingPageData = {
  name: 'Ashraf',
  headline: 'Hi, Im a passionate junior developer!',
  bio: 'I build web applications using Angular, NestJS and more!',
  email: 'muhammaddashraf.official@gmail.com',
  phone: '+6013-8259195',
  githubUrl: 'https://github.com/Asshhhraf-stack',
  linkedinUrl: 'https://www.linkedin.com/in/muhammad-ashraf-731bb0291/',
  featuredProjects: PROJECTS,
};

@Component({
  selector: 'app-landing',
  imports: [RouterLink],
  templateUrl: './landing.html',
  styleUrl: './landing.scss',
})
export class Landing {
  private readonly projectsCarousel =
    viewChild<ElementRef<HTMLElement>>('projectsCarousel');

  protected readonly activeProjectIndex = signal(0);
  protected readonly data: LandingPageData = LANDING_DATA;
  protected readonly gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(LANDING_DATA.email)}`;
  protected readonly phoneHref = `tel:${LANDING_DATA.phone.replace(/-/g, '')}`;
  protected readonly resumeUrl =
    'assets/resume/Muhammad_Ashraf_Resume_0138259195.pdf';
  protected readonly resumeFileName = 'Muhammad_Ashraf_Resume_0138259195.pdf';
  protected readonly aboutMe =
    'Passionate Developer holding a Bachelor of Computer Science with Honours (Information Security and Assurance) from USIM. Experienced in building secure and high-quality web and mobile applications using Laravel, Angular, and Flutter. I thrive in collaborative environments and am eager to apply my security-conscious mindset to impactful software engineering projects. Ready for full-time opportunities starting August 2026!';

  protected scrollToProject(index: number): void {
    const carousel = this.projectsCarousel()?.nativeElement;
    if (!carousel || carousel.children.length === 0) {
      return;
    }

    const card = carousel.children[0] as HTMLElement;
    const gap = 16;
    carousel.scrollTo({
      left: index * (card.offsetWidth + gap),
      behavior: 'smooth',
    });
    this.activeProjectIndex.set(index);
  }

  protected scrollProjects(direction: 'prev' | 'next'): void {
    const nextIndex =
      direction === 'prev'
        ? this.activeProjectIndex() - 1
        : this.activeProjectIndex() + 1;

    if (nextIndex < 0 || nextIndex >= this.data.featuredProjects.length) {
      return;
    }

    this.scrollToProject(nextIndex);
  }

  protected onProjectsScroll(): void {
    const carousel = this.projectsCarousel()?.nativeElement;
    if (!carousel || carousel.children.length === 0) {
      return;
    }

    const card = carousel.children[0] as HTMLElement;
    const step = card.offsetWidth + 16;
    const index = Math.round(carousel.scrollLeft / step);
    const clampedIndex = Math.min(
      Math.max(index, 0),
      this.data.featuredProjects.length - 1,
    );

    this.activeProjectIndex.set(clampedIndex);
  }
}
