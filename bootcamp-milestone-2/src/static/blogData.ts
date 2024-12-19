export interface Blog {
  title: string;
  date: string;
  description: string;
  image: string;
  imageAlt: string;
  slug: string;
}

const blogs: Blog[] = [
  {
    title: "Hellweek",
    date: "October 21-25",
    description: "Hell week for united movement dance practice",
    image: "/images/um.png",
    imageAlt: "wowwww girl cant even get a picture",
    slug: "umblog",
  },
  {
    title: "K2 hellweek",
    date: "October 21-25",
    description: "Hell week for K2 practice",
    image: "/images/k2.jpg",
    imageAlt: "wowwww girl cant even get a picture",
    slug: "k2blog",
  },
];

export default blogs;
