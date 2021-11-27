import { v4 as uuidv4 } from "uuid";
import Restaurant from "../images/Restaurant.jpeg";
import Arch from "../images/arch.jpeg";
import Fidelity from "../images/fidelity.jpeg";
import FaceAuth from "../images/faceauth.jpeg";
import Spotify from "../images/spotify.jpeg";
import Sudoku from "../images/sudoku.png";
import Bitcoin from "../images/cointracker.jpg";
import Food from "../images/food.png";
import SAIL from "../images/SAIL.jpeg";
import Prosthetics from "../images/prosthetics.jpeg";

const projects = [
  {
    id: uuidv4(),
    name: "Robotics and Movement Research",
    desc: "Along with students at Stanford, we developed new detection algorithms that simulate human and behavioral movements from multidiminsional directed robotics.",
    img: SAIL,
  },
  {
    id: uuidv4(),
    name: "Cheaper Prosthetic Limbs",
    desc: "Along with students at Stanford, the SAIL and engineering students and I created a cheaper and more efficient solution for prosthetic legs and more accurate hand gestures.",
    img: Prosthetics,
  },
  {
    id: uuidv4(),
    name: "Deviant Linux",
    desc: "Developed a GNU/Linux distribution based on Arch Linux. Utilizing automatic Aliasing, I was able to create a built-in ad-blocker into the operating system.",
    img: Arch,
  },
  {
    id: uuidv4(),
    name: "Fidelity Stock Analysis API",
    desc: "Designed a stock analysis API based on Fidelity's dashboard. By leveraging Selenium and ChromeDrivers, I was able to scrape Fidelity's stock GUI and pull data from the webpage.",
    img: Fidelity,
  },
  {
    id: uuidv4(),
    name: "External Face Authenticator",
    desc: "I developed an application that allows users to sign into Linux/based operating systems using a Raspberry Pi 4 and a external camera. Utilizing a You Only Look Once (YOLO) detection algorithm, I created a database that stores user features and signs them in based on their profile.",
    img: FaceAuth,
  },
  {
    id: uuidv4(),
    name: "Plate Calorie Calculator",
    desc: "Along with members of SEAL, we developed an application that detects food on a plate using computer vision algorithms.",
    img: Food,
  },
  {
    id: uuidv4(),
    name: "Bitcoin Trading Bot",
    desc: "Developed a trading bot for Bitcoin and Etherium that net a profit of over 264% net profit.",
    img: Bitcoin,
  },
  {
    id: uuidv4(),
    name: "Spotify Voting Application",
    desc: "Created an application that allows users to vote for a specific song playing on Spotify. Members can vote to skip, pause, and play songs.",
    img: Spotify,
  },
  {
    id: uuidv4(),
    name: "FoodWithFriends Web App",
    desc: "Designed a web application using Flask and React, and created a app that allows users to find places to eat with their friends in an interactive UI that is as simple as Tinder and using with my own custom ranking algorithm.",
    img: Restaurant,
  },
  {
    id: uuidv4(),
    name: "Sudoku Solver",
    desc: "Created a sudoku solver that solves a random sudoku board using Java and the A* backtracking algorithm.",
    img: Sudoku,
  },
];

export default projects;
