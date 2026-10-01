import { Project } from '../projects/projects.model';

export interface LandingPageData {
  name: string;
  headline: string;
  bio: string;
  email: string;
  phone: string;
  githubUrl: string;
  linkedinUrl: string;
  featuredProjects: Project[];
}
