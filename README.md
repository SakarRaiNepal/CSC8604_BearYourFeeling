# CSC8604 - Bear your Feeling
Created using Raspberry Pi, RFID tags and Green button to make a fun and interactive device for young children to help them educate new emotions

![Picture1](https://github.com/SakarRaiNepal/CSC8604/assets/143952149/c0fa171d-fdeb-40d7-ad62-0a7a2f33b09d)

## Table of Contents
- [General Information](#General-Information)
- [Hardware](#Hardware)
- [Software](#Software)
- [Setup and Run Instructions](#Setup-and-Run-Instructions)


# General-Information
<br> Bear Your Feelings is an interactive learning device designed for educational settings; schools and therapeutic environments. Aimed at enhancing emotional literacy among children aged 4-6. Through engaging digital and tangible interactions, it introduces young learners to a broad spectrum of emotions, facilitating effective communication and reflection on their feelings.
<br> Employing RFID technology, the device engages children with story-based scenarios that correlate emotions with relatable experiences. Ideal for use in both home and educational contexts, Bear Your Feelings not only promotes learning but also encourages open discussions about mental health, serving as a comprehensive tool for parents, teachers, and therapists to create emotional awareness and empathy in early childhood education.

# Hardware:
- Raspberry Pi 
- RFID Sensor
- RFID Tags
- Physical Green Button
- Raspberry Pi LCD Screen

# Software:
- HTML
- CSS
- JavaScript

# Setup and Run Instructions
To get Bear Your Feelings up and running, follow these setup instructions:

- **Hardware Setup**: Connect the RFID sensor, green button, and LCD screen to your Raspberry Pi according to the wiring guide provided in the documentation.
- **Software Setup**: Clone this repository to your Raspberry Pi. Ensure you have Node.js installed to run the server-side code.
- **Server Initialization**: Navigate to the project directory in your terminal and run the server with the command node server.mjs.
- **Interacting with the Device**: Use the RFID tags by tapping them on the sensor to navigate through the learning modules. Press the green button to advance through the application as instructed on-screen.
