import { EnvelopeClosedIcon, LinkedInLogoIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import { IconProps } from "@radix-ui/react-icons/dist/types";

type SocialMedia = {
    url: string,
    icon: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>

}

type Skill = {
  description: string,
  imagePath: string
}

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

export const skills:Record<string, Skill[]> = {
  Languages:[
    {
      description: "JavaScript",
      imagePath: ""
    },
    {
      description: "Python",
      imagePath: ""
    },
    {
      description: "TypeScript",
      imagePath: ""
    },
    {
      description: "Java",
      imagePath: ""
    },
    {
      description: "HTML",
      imagePath: ""
    },
    {
      description: "CSS",
      imagePath: ""
    },
  ],
  Frameworks:[
    {
      description: "React",
      imagePath: ""
    },
    {
      description: "Express.js",
      imagePath: ""
    },
    {
      description: "Flask",
      imagePath: ""
    },
    {
      description: "Next.js",
      imagePath: ""
    },
    {
      description: "Jest",
      imagePath: ""
    },
    {
      description: "TailwindCSS",
      imagePath: ""
    },
  ],

  Tools: [
    {
      description: "Git",
      imagePath: ""
    },
    {
      description: "Docker",
      imagePath: ""
    },
    {
      description: "MySQL",
      imagePath: ""
    },
    {
      description: "SQLite",
      imagePath: ""
    },
    {
      description: "MongoDB",
      imagePath: ""
    },
    {
      description: "Firebase",
      imagePath: ""
    },
    {
      description: "Redis",
      imagePath: ""
    },
    {
      description: "AWS",
      imagePath: ""
    },
    {
      description: "GCP",
      imagePath: ""
    },

  ]

}
