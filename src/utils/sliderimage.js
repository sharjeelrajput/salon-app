import React from 'react';
import { Rating } from 'react-native-ratings';
import images from '../index';
import { Image } from "react-native";
import Styles from '../styles/DefaultScreenStyle/DoctorMapStyle';
import Icon from 'react-native-vector-icons/dist/Octicons';

export const carouselItems = [
    {
        title: 'United Artists Salon & Spa',
        paregraphtitle: '299 Penn Ave, West Reading, PA 19611, United States',
        paregraphtitletwo: 'Apple Hospital',
        Exp: 'Exp.',
        Fees: '22 Years',
        Exptwo: '$60',
        Feestwo: 'Fees',
        rating: <Rating
            type='custom'
            ratingColor='hsl(27.7, 73.8%, 62.5%)'
            ratingBackgroundColor='#c8c7c8'
            ratingCount={5}
            tintColor={'white'}
            imageSize={17}
            startingValue={4.5}
            isDisabled={false}
        />,
        digittext: '(4.5)',
        setprofileimage: <Image source={images.salon2} style={Styles.logoimage} resizeMode='center'/>,

    },
    {
        title: 'Salon U',
        paregraphtitle: ' 2824 Linden Ave, Homewood, AL 35209, United States',
        paregraphtitletwo: 'Rose Hughes',
        Exp: 'Exp.',
        Fees: '20 Years',
        Exptwo: '$40',
        Feestwo: 'Fees',
        rating: <Rating
            type='custom'
            ratingColor='hsl(27.7, 73.8%, 62.5%)'
            ratingBackgroundColor='#c8c7c8'
            ratingCount={5}
            tintColor={'white'}
            imageSize={17}
            startingValue={4.5}
            isDisabled={false}
        />,
        digittext: '(4.5)',
        setprofileimage: <Image source={images.salon3} style={Styles.logoimage} resizeMode='center'/>,

    },
    {
        title: 'Salon Spa W',
        paregraphtitle: '400 E Locust St #2, Des Moines, IA 50309, United States',
        paregraphtitletwo: 'Amit Jaggi Hospital',
        Exp: 'Exp.',
        Fees: '26 Years',
        Exptwo: '$45',
        Feestwo: 'Fees',
        rating: <Rating
            type='custom'
            ratingColor='hsl(27.7, 73.8%, 62.5%)'
            ratingBackgroundColor='#c8c7c8'
            ratingCount={5}
            tintColor={'white'}
            imageSize={17}
            startingValue={4.5}
            isDisabled={false}
        />,
        digittext: '(4.5)',
        setprofileimage: <Image source={images.salon4} style={Styles.logoimage} resizeMode='center'/>,
    },
    {
        title: 'Headquarter Salon',
        paregraphtitle: ' 2145 S China Pl, Chicago, IL 60616, United States',
        paregraphtitletwo: 'Aditya Hospitals',
        Exp: 'Exp.',
        Fees: '40+ Years',
        Exptwo: '$80',
        Feestwo: 'Fees',
        rating: <Rating
            type='custom'
            ratingColor='hsl(27.7, 73.8%, 62.5%)'
            ratingBackgroundColor='#c8c7c8'
            ratingCount={5}
            tintColor={'white'}
            imageSize={17}
            startingValue={4.5}
            isDisabled={false}
        />,
        digittext: '(4.5)',
        setprofileimage: <Image source={images.salon5} style={Styles.logoimage} resizeMode='center'/>,

    },
    {
        title: 'The Establishment Salon',
        paregraphtitle: '4503 N Oakland Ave, Shorewood, WI 53211, United States',
        paregraphtitletwo: 'AHN Grove Hospital',
        Exp: 'Exp.',
        Fees: '28 Years',
        Exptwo: '$40',
        Feestwo: 'Fees',
        rating: <Rating
            type='custom'
            ratingColor='hsl(27.7, 73.8%, 62.5%)'
            ratingBackgroundColor='#c8c7c8'
            ratingCount={5}
            tintColor={'white'}
            imageSize={17}
            startingValue={4.5}
            isDisabled={false}
        />,
        digittext: '(4.5)',
        setprofileimage: <Image source={images.salon6} style={Styles.logoimage} resizeMode='center' />,

    },
];
export const NewssliderScreen = [
    {
        title: 'Health',
        paregraphtitle: 'Covid - 19 Symptoms what are they and should i see a doctore?',
        paregraphtitletwo: 'Dimitri - March 9.2020',
        image: images.Doctore_mashine_one,
        doticon: <Icon name="dot-fill" size={20} color={'red'} />,
        liveicon: 'Live',
    },
    {
        title: 'Paramedic',
        paregraphtitle: 'Is the Pandemic Over? If Only It Were That Simple.',
        paregraphtitletwo: 'Dimitri - March 9.2020',
        image: images.Doctore_mashine_two,
        doticon: <Icon name="dot-fill" size={20} color={'red'} />,
        liveicon: 'Live',
    },
    {
        title: 'Dentist',
        paregraphtitle: 'President Bidens claim has caused the debate over COVID-19 to explode yet again. ',
        paregraphtitletwo: 'Dimitri - March 9.2020',
        image: images.Doctore_mashine_three,
        doticon: <Icon name="dot-fill" size={20} color={'red'} />,
        liveicon: 'Live',
    },
    {
        title: 'Veterinarian',
        paregraphtitle: 'New Dads Brains Shrink COVID Boosters and Open Door Wards',
        paregraphtitletwo: 'Dimitri - March 9.2020',
        image: images.Doctore_mashine_four,
        doticon: <Icon name="dot-fill" size={20} color={'red'} />,
        liveicon: 'Live',
    },
    {
        title: 'Health',
        paregraphtitle: 'Covid - 19 Symptoms what are they and should i see a doctore?',
        paregraphtitletwo: 'Dimitri - March 9.2020',
        image: images.Doctore_mashine_five,
        doticon: <Icon name="dot-fill" size={20} color={'red'} />,
        liveicon: 'Live',
    },
];

export const Faqdataset = [
    {
      "id": 1,
      "paymentparegraph": "Registration and login. Doctor profile look up Appointment scheduling. Doctor-patient communication. ntegration with medical devices Access to medical records.",
      "smalltext": 'Which of the following features should be included in a mobile health app for a patient use?',
      "walletstextset": 'Wallets',
    },
    {
      "id": 2,
      "paymentparegraph": "The four Ps (predictive, preventive, personalized, participative)",
      "smalltext": 'What are the 4 Ps of patient care?',
    },
    {
      "id": 3,
      "paymentparegraph": "Reduce Readmissions. Encourage Patients to Proactively Manage Their Health. Improve Trust and Build Relationships. Boost Brand Image and Reputation.",
      "smalltext": 'How to increase patient engagement on a healthcare app?',
    },
    {
      "id": 4,
      "paymentparegraph": "Four Phases of Care Reduce pain. Reduce nerve irritation. Reduce tissue inflammation. Increase flexibility.",
      "smalltext": 'What are the 4 phases of care?',
    },
    {
      "id": 5,
      "paymentparegraph": "Health care are the specific things that people do: see a patient or prescribe a medication. Healthcare is an industry, the system by which people get the health care they need.",
      "smalltext": 'What is the difference between health care and healthcare?',
    },
    {
      "id": 6,
      "paymentparegraph": "WIts follow-up report, Crossing the Quality Chasm: A New Health System for the 21st Century (2001), introduced the IOM Six Aims for Improvement: care that is safe, timely, effective, efficient, equitable and patient-centered (STEEEP).",
      "smalltext": 'What are the six aims in healthcare?',
    },
    {
      "id": 7,
      "paymentparegraph": "1) Faster Operation: 2) Personalized experience: 3)Online and Offline Capacities: 4)Utilize Device Features: 5)Instant Updates and Notification: 6)Branding Possibilities:",
      "smalltext": 'What is the greatest benefit of using an app?',
    },
    {
      "id": 8,
      "paymentparegraph": "First, our study shows that users of mHealth devices and apps can became more autonomous and more motivated in self-regulating their health behavior and more engaged and consistent in their lifestyle and wellness behavior, which leads to improved health outcomes.",
      "smalltext": 'Why do health apps work?',
    },
    {
      "id": 9,
      "paymentparegraph": "The use of mobile health apps affected up to 67.95% (1016/1495) of the users for consultation and 71.97% (1076/1495) of the users for decision making. The model was effective for 88.76% (1327/1495) of the cases regarding lifestyle behaviors but only 71.97% (1076/1495) regarding health management behaviors.",
      "smalltext": 'How effective are mobile health apps?',
    },
    {
      "id": 10,
      "paymentparegraph": "1)Improved Decision Making 2)Save Time 3)Increase Productivity: 4)Medication Tracking",
      "smalltext": 'What is the need for a Healthcare App?',
    },
    {
      "id": 11,
      "paymentparegraph": "This allows patients to chat with healthcare providers around the clock. They both can communicate instantly through the common medium, that is, your healthcare app. A real-time chat feature gives you an edge over other apps that lack this attribute. It reduces the overall time in treatment and provides improved user experience.",
      "smalltext": 'How to chat with doctor for personal',
    },
]