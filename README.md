# Simple To-Do List App

The Simple To-Do List App is a basic React Native application designed to help users manage their tasks. It allows users to add new tasks, mark tasks as completed, and delete tasks. The app uses Tailwind CSS for styling and is built with TypeScript for type safety.

## Table of Contents

- [Overview](#overview)
- [Setting Up the Environment](#setting-up-the-environment)
- [Core Functionality](#core-functionality)
- [Issues Encountered](#issues-encountered)
- [Known Technical Debt](#known-technical-debt)
- [Features for Next Iteration](#features-for-next-iteration)

## Overview

The Simple To-Do List App is a React Native application designed to help users manage their tasks. It allows users to add new tasks, mark tasks as completed, and delete tasks. The app uses Tailwind CSS for styling and is built with TypeScript for type safety.

## Setting Up the Environment

1. **Install Node.js and npm/Yarn**:
   Ensure you have Node.js and npm installed on your machine.

2. **Initialize the React Native Project**:
   Create a new React Native project and download Expo Go on your phone.

3. **Install Dependencies**:
   Install necessary dependencies including Tailwind CSS and `react-native-paper`.

4. **Create Necessary Files and Components**:
   - `App.tsx`
   - `screens/TaskListScreen.tsx`
   - Tailwind CSS configuration files

## Core Functionality

1. **Task Management**:
   - Users can add tasks through a text input and a save button.
   - Tasks are displayed in a list with radio buttons to mark them as completed.
   - Clicking the radio button toggles the task's completion status and changes the button color from green to blue. A second click deletes the task.

2. **State Management**:
   - Use React's `useState` hook to manage the list of tasks and the input for new tasks.

3. **Styling**:
   - Tailwind CSS is used for styling components to ensure a consistent and responsive design.

## Issues Encountered

1. **Module Not Found Errors**:
   - Ensuring the correct installation and import of “tailwindcss-react-native”.
   - Handling import paths and module resolutions.

2. **State Management**:
   - Managing state changes effectively, especially toggling task completion and handling task deletion based on click count.

## Known Technical Debt

1. **Styling Issues**:
   - Ensuring consistent styling with Tailwind CSS and handling platform-specific styling nuances in React Native.

## Features for Next Iteration

1. **Persistent Storage**:
   - Integrate persistent storage like a database to save tasks, even when the app is reloaded.

2. **Enhanced UI/UX**:
   - Improve the user interface with better visual feedback and animations.

3. **Task Editing**:
   - Allow users to edit existing tasks instead of only adding or deleting them.

4. **Un-Deleting Tasks**:
   - Allow users to undelete an existing deleted task.
