import anikaprofile from "../../assets/anika_profile.jpeg";
import anika1 from "../../assets/anika1.jpeg";
import anika2 from "../../assets/anika2.jpeg";
import chaprofile from "../../assets/cha_profile.jpeg";
import cha1 from "../../assets/cha2.jpeg";
import cha3 from "../../assets/cha3.jpg";
import cha4 from "../../assets/cha4.jpeg";
import jeffprofile from "../../assets/jeff_profile.jpeg";
import jeff1 from "../../assets/jeff1.jpeg";
import jeff2 from "../../assets/jeff2.png";

export const ChaChaData = {
  profileImg: chaprofile,
  images: [cha1, cha3, cha4],
  prompts: [
    [
      "My shower thoughts are...",
      "In the worm world, the early worm gets eaten :P",
    ],
    ["My friends would say I am...", "A silly goose! LOL HONK HONK"],
  ],
  name: "Serena Chacha",
  age: 27,
  gender: "Woman",
  location: "Providence, RI",
  compatible: "65",
};

export const AnikaData = {
  profileImg: anikaprofile,
  images: [anika1, anika2],
  prompts: [
    ["The biggest red flag I avoid is...", "Men who are software engineers."],
    [
      "My perfect date would be...",
      "A movie and a five star restaurant, with you paying of course! ",
    ],
  ],
  name: "Anika Ahlualia",
  age: 21,
  gender: "Woman",
  location: "Providence, RI",
  compatible: "99",
};

export const JeffData = {
  profileImg: jeffprofile,
  images: [jeff1, jeff2],
  prompts: [
    ["I enjoy...", "Long walks on the beach, beautiful sunsets, and you ;)"],
    [
      "One of my secret passions in life is...",
      "Building personalized systems based on user behavior data! These systems are applied to attention, mobile, user experience, and health. Tehe",
    ],
  ],
  name: "Jeff Huang",
  age: 25,
  gender: "Man",
  location: "Providence, RI",
  compatible: "80",
};
