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
      description: "",
      imagePath: ""
    },
    {
      description: "",
      imagePath: ""
    },
    {
      description: "",
      imagePath: ""
    },
    {
      description: "",
      imagePath: ""
    },
    {
      description: "",
      imagePath: ""
    },
    {
      description: "",
      imagePath: ""
    },
  ],
  Frameworks:[
    {
      description: "",
      imagePath: ""
    },
    {
      description: "",
      imagePath: ""
    },
    {
      description: "",
      imagePath: ""
    },
    {
      description: "",
      imagePath: ""
    },
    {
      description: "",
      imagePath: ""
    },
    {
      description: "",
      imagePath: ""
    },
  ],

  Tools: [
    {
      description: "",
      imagePath: ""
    },
    {
      description: "",
      imagePath: ""
    },
    {
      description: "",
      imagePath: ""
    },
    {
      description: "",
      imagePath: ""
    },
    {
      description: "",
      imagePath: ""
    },
    {
      description: "",
      imagePath: ""
    },
  ]

}
