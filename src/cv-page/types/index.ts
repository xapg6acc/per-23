export interface ResumeData {
  name: string;
  title: string;
  phone: string;
  telegram: string;
  email: string;
  linkedin: string;
  github: string;
  location: string;
  availability: string;
  summary: string;
  skills: string[];
  experience: Experience[];
  additionalEducation: string[];
  achievements: string[];
  relevant: RelevantInfo;
  position?: string;
  contact?: Contact;
  books: string[];
}

// export interface Experience {
//   position: string;
//   projects: Project[];
// }

// export interface Project {
//   type: string;
//   duration: string;
//   technologies?: string[];
//   links?: {
//     demo?: string;
//     github?: string;
//   };
// }

export interface RelevantInfo {
  relocate: boolean;
  coworking: boolean;
  laptop: boolean;
  availability: string;
  experience: string;
}

// todo

// interface AdditionalEducation {
//   additionalEducation: string[];
// }

interface Experience {
  type: string;
  duration: string;
  technologies: string[];
}

interface Contact {
  name: string;
  phone: string;
  telegram: string;
  github: string;
  linkedin: string;
  location: string;
  email: string;
}

// interface Relevant {
//   availability: string;
//   coworking: string;
//   relocate: string;
//   laptop: string;
// }
//
// interface Skills {
//   skills: string[];
// }
//
// interface Achievements {
//   achievements: string[];
// }
//
// interface Books {
//   books: string[];
// }
//
// export interface NewResumeData extends AdditionalEducation, Experience, Contact, Relevant, Skills, Achievements, Books {}
