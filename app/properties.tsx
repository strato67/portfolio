import TopicPill from "@/components/ui/topic-pill";
import Image from "next/image";
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
      imagePath: "/skills-assets/python.png",
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

export const projects = [
  {
    title: "Meteo Guesser",
    description: (
      <div className="flex flex-col gap-4">
        <p>
          Multiplayer weather guessing game, designed using a data pipeline
          architecture with microservices.
        </p>
        <div className="flex flex-wrap gap-2">
          <TopicPill topic="TypeScript" />
          <TopicPill topic="Python" />
          <TopicPill topic="React" />
          <TopicPill topic="Websockets" />
          <TopicPill topic="Flask" />
          <TopicPill topic="Express.js" />
          <TopicPill topic="Redis" />
          <TopicPill topic="Jest" />
          <TopicPill topic="MongoDB" />
          <TopicPill topic="Docker" />
          <TopicPill topic="Docker Compose" />
          <TopicPill topic="AWS EC2" />
        </div>
      </div>
    ),
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/projects-assets/meteoguesser.png"
          width={1024}
          height={1024}
          className="h-full w-full object-cover"
          alt="Meteo Guesser"
        />
      </div>
    ),
  },
  {
    title: "Attend OT",
    description: (
      <div className="flex flex-col gap-4">
        <p>
          Student attendance tracking system consisting of a mobile
          application for students and a web application for professors.
          Students log in and scan a QR code at their seat in the classroom.
          Professors log attendance and seating of students through the
          web app.
        </p>
        <div className="flex flex-wrap gap-2">
          <TopicPill topic="TypeScript" />
          <TopicPill topic="JavaScript" />
          <TopicPill topic="Next.js" />
          <TopicPill topic="React Native" />
          <TopicPill topic="Express.js" />
          <TopicPill topic="Firebase" />
          <TopicPill topic="GCP Cloud Functions" />
          <TopicPill topic="GCP Cloud Scheduler" />
        </div>
      </div>
    ),
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
      <Image
        src="/projects-assets/attendot.png"
        width={1024}
        height={1024}
        className="h-full w-full object-cover"
        alt="Attend OT"
      />
    </div>
    ),
  },
  {
    title: "GPUs R Us",
    description: (
      <div className="flex flex-col gap-4">
        <p>
          GPU and computer parts storefront web application, allowing users to
          search, purchase and review products. Includes Stripe.js payment
          integration.
        </p>
        <div className="flex flex-wrap gap-2">
          <TopicPill topic="JavaScript" />
          <TopicPill topic="MongoDB" />
          <TopicPill topic="Express.js" />
          <TopicPill topic="React" />
          <TopicPill topic="Mongoose" />
          <TopicPill topic="Stripe.js" />
          <TopicPill topic="TailwindCSS" />

        </div>
      </div>
    ),
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Version control
      </div>
    ),
  },
  {
    title: "Toronto Coffee Shop Insights",
    description: (
      <div className="flex flex-col gap-4">
        <p>
          An analysis of demographics and crime rate datasets using K-means clustering to identify ideal locations for new coffee shops.
        </p>
        <div className="flex flex-wrap gap-2">
          <TopicPill topic="Python" />
          <TopicPill topic="Jupyter Notebook" />
          <TopicPill topic="Scikit-learn" />
          <TopicPill topic="Matplotlib" />


        </div>
      </div>
    ),
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Running out of content
      </div>
    ),
  },
];
