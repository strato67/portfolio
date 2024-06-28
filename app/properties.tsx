import {
  EnvelopeClosedIcon,
  LinkedInLogoIcon,
  GitHubLogoIcon,
} from "@radix-ui/react-icons";
import { IconProps } from "@radix-ui/react-icons/dist/types";

type SocialMedia = {
  url: string;
  icon: React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >;
};

type Skill = {
  description: string;
  imagePath: string;
};

export const socials: Record<string, SocialMedia> = {
  linkedin: {
    url: "https://www.linkedin.com/in/saaransh-sharma/",
    icon: LinkedInLogoIcon,
  },
  email: {
    url: "mailto:saaranshsharma28@gmail.com",
    icon: EnvelopeClosedIcon,
  },
  github: {
    url: "https://www.github.com/strato67/",
    icon: GitHubLogoIcon,
  },
};

export const skills: Record<string, Skill[]> = {
  Languages: [
    {
      description: "JavaScript",
      imagePath: "/skills-assets/js.png",
    },
    {
      description: "Python",
      imagePath: "/skills-assets/python.jpg",
    },
    {
      description: "TypeScript",
      imagePath: "/skills-assets/ts.png",
    },
    {
      description: "Java",
      imagePath: "/skills-assets/java.png",
    },
    {
      description: "HTML",
      imagePath: "/skills-assets/html.png",
    },
    {
      description: "CSS",
      imagePath: "/skills-assets/css.jpg",
    },
  ],
  Frameworks: [
    {
      description: "React",
      imagePath: "/skills-assets/react.svg",
    },
    {
      description: "Express.js",
      imagePath: "/skills-assets/express.png",
    },
    {
      description: "Flask",
      imagePath: "/skills-assets/flask.png",
    },
    {
      description: "Next.js",
      imagePath: "/skills-assets/nextjs.jpg",
    },
    {
      description: "Jest",
      imagePath: "/skills-assets/jest.png",
    },
    {
      description: "TailwindCSS",
      imagePath: "/skills-assets/tailwind.png",
    },
  ],

  Tools: [
    {
      description: "Git",
      imagePath: "/skills-assets/git.png",
    },
    {
      description: "Docker",
      imagePath: "/skills-assets/docker.png",
    },
    {
      description: "MySQL",
      imagePath: "/skills-assets/mysql.svg",
    },
    {
      description: "SQLite",
      imagePath: "/skills-assets/sqlite.jpg",
    },
    {
      description: "MongoDB",
      imagePath: "/skills-assets/mongo.png",
    },
    {
      description: "Firebase",
      imagePath: "/skills-assets/firebase.png",
    },
    {
      description: "Redis",
      imagePath: "/skills-assets/redis.jpg",
    },
    {
      description: "AWS",
      imagePath: "/skills-assets/aws.jpg",
    },
    {
      description: "GCP",
      imagePath: "/skills-assets/gcp.png",
    },
  ],
};
