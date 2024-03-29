import {
  faAngular,
  faCss3Alt,
  faGolang,
  faHtml5,
  faJs,
  faPython,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "./components/UI/Card";

export const sectionElements = [
  {
    id: 1,
    title: "About me",
    content: [
      "Software and Mechanical Engineer passionate about technology and innovation. I have experience in software development, data analysis, and project management. I am a quick learner and a team player",
    ],
  },
  {
    id: 2,
    title: "Stack",
    content: [
      <FontAwesomeIcon icon={faPython} size="2x" />,
      <FontAwesomeIcon icon={faGolang} size="2x" />,
      <FontAwesomeIcon icon={faJs} size="2x" />,
      <FontAwesomeIcon icon={faHtml5} size="2x" />,
      <FontAwesomeIcon icon={faCss3Alt} size="2x" />,
      <FontAwesomeIcon icon={faReact} size="2x" />,
      <FontAwesomeIcon icon={faAngular} size="2x" />,
    ],
  },
  {
    id: 3,
    title: "Projects",
    content: [
      <Card
        title="Customer segmentation model based on credit behavior"
        description="The main objective of this project is to build a customer segmentation based on credit card payments behavior"
        link="https://github.com/andreshugueth/credit_card_clustering"
        linkContent="Check it out"
      />,
      <Card
        title="Airbnb Clone"
        description="Clone of the first AirBnb page with flask"
        link="https://github.com/andreshugueth/AirBnB_clone_v4"
        linkContent="Check it out"
      />,
      <Card
        title="Simple Shell"
        description="A simple version of the Linux command line interpreter"
        link="https://github.com/andreshugueth/simple_shell"
        linkContent="Check it out"
      />,
    ],
  },
  {
    id: 4,
    title: "Blogs",
    content: [
      <Card
        title="A Brief Introduction to Machine Learning"
        description="Introduction concept of machine learning. What is learning? - 6 min read"
        link="https://medium.com/analytics-vidhya/a-brief-introduction-to-machine-learning-6c4357874c18"
        linkContent="Learn more here"
      />,
      <Card
        title="What happens when you type an URL and click enter?"
        description="How can you access a web page by typing an URL and clicking enter? - 5 min read"
        link="https://medium.com/@andreshugueth/what-happens-when-you-type-an-url-and-click-enter-fc3bbb10ae80"
        linkContent="Learn more here"
      />,
      <Card
        title="IoT (Internet of Things)"
        description="What is IoT? - 6 min read"
        link="https://medium.com/@andreshugueth/iot-internet-of-things-8d19716eb96a"
        linkContent="Learn more here"
      />,
      <Card
        title="Mutable and Immutable objects in Python"
        description="Mutable and Immutable objects on Python - 4 min read"
        link="https://medium.com/@andreshugueth/mutable-and-immutable-objects-in-python-4b234ee38069"
        linkContent="Learn more here"
      />,
    ],
  },
];
