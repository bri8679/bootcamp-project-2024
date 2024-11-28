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
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5HXhDhB879563O1I1x6C45yTZoVR0ETammQ&s",
    imageAlt: "wowwww girl cant even get a picture",
    slug: "hellweek",
  },
  {
    title: "K2 hellweek",
    date: "October 21-25",
    description: "Hell week for K2 practice",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJFQt4BNZEytRYSEMNh6YgtxxWuthbbzr-UA&s",
    imageAlt: "wowwww girl cant even get a picture",
    slug: "k2hellweek",
  },
];

export default blogs;
