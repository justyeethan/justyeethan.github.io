import { v4 as uuidv4 } from "uuid";
import ProjectImg from "../images/projectImg.png";
import UTrackerImg from "../images/utracker.jpg";
import GreenCtgImg from "../images/greenctg.jpg";
import CoinTrackerImg from "../images/cointracker.jpg";
import CavinImg from "../images/cavinimg.jpg";

const projects = [
  {
    id: uuidv4(),
    name: "Deviant Linux",
    desc: "I created a GNU/Linux distribution based on Arch Linux. Utilizing automatic Aliasing, I was able to create a built-in ad-blocker into the operating system.",
    img: UTrackerImg,
  },
  {
    id: uuidv4(),
    name: "Fidelity Stock Analysis API",
    desc: "I developed a stock analysis API based on Fidelity's dashboard. By leveraging Selenium and ChromeDrivers, I was able to scrape Fidelity's stock GUI and pull data from the webpage.",
    img: GreenCtgImg,
  },
  {
    id: uuidv4(),
    name: "External Face Authenticator",
    desc: "I created an application that allows users to sign into Linux/based operating systems using a Raspberry Pi 4 and a external camera. Utilizing a You Only Look Once (YOLO) detection algorithm, I created a database that stores user features and signs them in based on their profile.",
    img: CoinTrackerImg,
  },
  {
    id: uuidv4(),
    name: "Spotify Voting Application",
    desc: "I created an application that allows users to vote for a specific song playing on Spotify. Members can vote to skip, pause, and play songs.",
    img: CavinImg,
  },
  {
    id: uuidv4(),
    name: "FoodWithFriends Web App",
    desc: "I created a web application using Flask and React, and created a app that allows users to find places to eat with their friends in an interactive UI that is as simple as Tinder and using with my own custom ranking algorithm.",
    img: ProjectImg,
  },
  {
    id: uuidv4(),
    name: "Sudoku Solver",
    desc: "I created a sudoku solver that solves a random sudoku board using Java and the A* backtracking algorithm.",
    img: ProjectImg,
  },
];

export default projects;
