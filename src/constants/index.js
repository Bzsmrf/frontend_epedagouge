import { people01, people02, people03, facebook, instagram, linkedin, twitter, airbnb, binance, coinbase, dropbox, send, shield, star  } from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id:"courses",
    title:"Courses"
  },
  {
    id: "placement",
    title: "Placement",
    link: "https://blog.loginradius.com/engineering/guest-post/modern-login-signup-form-tailwindcss-react/"
  },
  {
    id: "blog",
    title: "Blog",
    link:"https://blog.loginradius.com/engineering/guest-post/modern-login-signup-form-tailwindcss-react/"
  },
  {
    id: "signin",
    title: "Sign in",
    link:"https://blog.loginradius.com/engineering/guest-post/modern-login-signup-form-tailwindcss-react/"
  },
 
];
export const testimonial =[

{
  id: "testimonial-1",
  title: "Anupreet",
  content: "Software Tester",
  img: people01,

},
{
  id: "testimonial-1",
  title: "Anupreet",
  content: "Software Tester",
  img: people01,

},
{
  id: "testimonial-1",
  title: "Anupreet",
  content: "Software Tester",
  img: people01,

},
{
  id: "testimonial-1",
  title: "Anupreet",
  content: "Software Tester",
  img: people01,

},
{
  id: "testimonial-1",
  title: "Anupreet",
  content: "Software Tester",
  img: people01,

},


];



export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "Web Development",
    content:
      "The best credit cards offer some tantalizing combinations of promotions and prizes",
    link:"https://blog.epedagogue.com/"
  },
  {
    id: "feature-2",
    icon: shield,
    title: "software testing",
    content:
      "We take proactive steps make sure your information and transactions are secure.",
      link:"https://blog.epedagogue.com/"
  },
  {
    id: "feature-3",
    icon: send,
    title: "API testing",
    content:
      "A balance transfer credit card can save you a lot of money in interest charges.",
    link:"https://blog.epedagogue.com/"  
  },
  {
    id: "feature-4",
    icon: send,
    title: "API testing1",
    content:
      "A balance transfer credit card can save you a lot of money in interest charges.",
    link:"https://blog.epedagogue.com/"  
  },
  {
  id: "feature-5",
  icon: star,
  title: "Web Development",
  content:"The best credit cards offer some tantalizing combinations of promotions and prizes",
  link:"https://blog.epedagogue.com/"
},
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
    name: "Herman Jensen",
    title: "Founder & Leader",
    img: people01,
  },
  {
    id: "feedback-2",
    content:
      "Money makes your life easier. If you're lucky to have it, you're lucky.",
    name: "Steve Mark",
    title: "Founder & Leader",
    img: people02,
  },
  {
    id: "feedback-3",
    content:
      "It is usually people in the money business, finance, and international trade that are really rich.",
    name: "Kenn Gallagher",
    title: "Founder & Leader",
    img: people03,
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "Placement Rate",
    value: "100%",
  },
  {
    id: "stats-2",
    title: "Written Palcement Assurance",
    value: "",
  },
  {
    id: "stats-3",
    title: "Money Back Gaurantee",
    value: "",
  },
];

export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Content",
        link: "https://www.hoobank.com/content/",
      },
      {
        name: "How it Works",
        link: "https://www.hoobank.com/how-it-works/",
      },
      {
        name: "Create",
        link: "https://www.hoobank.com/create/",
      },
      {
        name: "Explore",
        link: "https://www.hoobank.com/explore/",
      },
      {
        name: "Terms & Services",
        link: "https://www.hoobank.com/terms-and-services/",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Help Center",
        link: "https://www.hoobank.com/help-center/",
      },
      {
        name: "Partners",
        link: "https://www.hoobank.com/partners/",
      },
      {
        name: "Suggestions",
        link: "https://www.hoobank.com/suggestions/",
      },
      {
        name: "Blog",
        link: "https://www.hoobank.com/blog/",
      },
      {
        name: "Newsletters",
        link: "https://www.hoobank.com/newsletters/",
      },
    ],
  },
  {
    title: "Partner",
    links: [
      {
        name: "Our Partner",
        link: "https://www.hoobank.com/our-partner/",
      },
      {
        name: "Become a Partner",
        link: "https://www.hoobank.com/become-a-partner/",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/officialepedagogue/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/epedagogue",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://twitter.com/e_pedagogue",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/company/epedagogue/",
  },
];

export const clients = [
  {
    id: "client-1",
    logo: airbnb,
  },
  {
    id: "client-2",
    logo: binance,
  },
  {
    id: "client-3",
    logo: coinbase,
  },
  {
    id: "client-4",
    logo: dropbox,
  },
];
export const forms =[
{
  id:"form",
}
];

const loginFields=[
  {
      labelText:"Email address",
      labelFor:"email-address",
      id:"email-address",
      name:"email",
      type:"email",
      autoComplete:"email",
      isRequired:true,
      placeholder:"Email address"   
  },
  {
      labelText:"Password",
      labelFor:"password",
      id:"password",
      name:"password",
      type:"password",
      autoComplete:"current-password",
      isRequired:true,
      placeholder:"Password"   
  }
]

const signupFields=[
  {
      labelText:"Username",
      labelFor:"username",
      id:"username",
      name:"username",
      type:"text",
      autoComplete:"username",
      isRequired:true,
      placeholder:"Username"   
  },
  {
      labelText:"Email address",
      labelFor:"email-address",
      id:"email-address",
      name:"email",
      type:"email",
      autoComplete:"email",
      isRequired:true,
      placeholder:"Email address"   
  },
  {
      labelText:"Password",
      labelFor:"password",
      id:"password",
      name:"password",
      type:"password",
      autoComplete:"current-password",
      isRequired:true,
      placeholder:"Password"   
  },
  {
      labelText:"Confirm Password",
      labelFor:"confirm-password",
      id:"confirm-password",
      name:"confirm-password",
      type:"password",
      autoComplete:"confirm-password",
      isRequired:true,
      placeholder:"Confirm Password"   
  }
]


