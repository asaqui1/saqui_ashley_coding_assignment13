# UI Component Library Assignment - Ashley Saqui

This project is a **React component library** made with **Create React App** and **Storybook** for my assignment. It includes components like Buttons, Cards, Tables, Labels, Dropdowns, Radio Buttons, Hero Image, Img, and Text.

All components have default and disabled states. You can see and interact with them in Storybook.

## How to run React

## Step 1 - Install dependencies

Open terminal in the project folder and run:

```bash
npm install

## Step 2 - Run storybook by opening on http://127.0.0.1:8083

npm run storybook

## Step 3 - Run tests check that components render correctly and respond to default/disabled tests

npm test

## Step 4 - Build for production creates a ready ver of the app

npm run build

## Step 5 - Run in Docker. Docker serves the app on localhost:8083 to the container's nginx port 80

docker build -5 saqui_ashley_ui_garden .

docker run -p 8083:80 --name saqui_ashley_coding assignment12 saqui_ashley_ui_garden

## Step 6: Project structure. Each contains for example: Component.tsx, Component.stories.tsx, Component.types.tsx, Component.tests.tsx, index.ts

# All components are in src/component:
# Button/
# Card/
# Dropdown/
# HeroImg/
# Img/
# Label/
# RadioButton/
# Table/
# Text/

## Step 7 - Notes; All components use styled-components for styling. All components are interactive. Storybook lets you see changes live. Deafult and Disabled states are available for each component

## Step 8 - To learn more, visit: React Documentation. Create React App Documentation. Storybook Documentation

```
