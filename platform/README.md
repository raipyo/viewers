# Customize OHIF Viewer with a “Dental Mode”

Added Dental Mode display and functionality to OHIF Viewer

# Features
- Dental theme toggle (colors, typography, icons)
- Practice header with patient info
- 2x2 Hanging Protocol
- Custom tooth selector (FDI/Universal)

# Installation / Setup

1. Clone the project: https://github.com/raipyo/Viewers/tree/master
2. Navigate to cloned project and checkout master branch: git checkout master
3. Use node v18.20.8 via nvm switcher
    a. Download and install nvm switcher
        - Go to https://github.com/coreybutler/nvm-windows
        - Download the latest installer (nvm-setup.exe)
        - Install it and follow instructions.
    b. Execute nvm
        - nvm install 18
        - nvm use 18
3. Install and run dependencies:
    a. Front end (Path = directory-of-project)
        - yarn install
        - yarn dev
    b. Back end (Path = directory-of-project/platform/backend)
        - yarn install
        - node server.js
4. Go to browser and visit link: "http://localhost:<port>/dental" :: where port is the Front end port the application is running


# Implementation of the task

1. Select the number of tooth in the dropdown(right-top corner) the patient needs data for dental measurements.
2. Click 'PA length', 'Canal angle', 'Crown width', 'Root length' button to record computation.
3. Click 'Export JSON' button to export json file of saved records.
