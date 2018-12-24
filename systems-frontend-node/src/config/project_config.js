/*
This file maintains the configuration for the project target dropdowns
and should be added to for changes to what projects are displayed
 */

import projectspartial from '../projects/projects.html'
import project1partial from '../projects/project1.html';
import project2partial from '../projects/project2.html';
import project3partial from '../projects/project3.html';
import project4partial from '../projects/project4.html';
let projectConfig = {
    nav_targets: {
        topbar: [],
        dropdowns : [
            {
                label : "Projects",
                entries: [
                    {path: '/projects', label: "Project Due Dates", templateUrl: projectspartial},
                    { path: '/project1', label: "Project 1", templateUrl: project1partial, enabled: false },
                    { path: '/project2', label: "Project 2", templateUrl: project2partial, enabled: false },
                    { path: '/project3', label: "Project 3", templateUrl: project3partial, enabled: false },
                    { path: '/project4', label: "Project 4", templateUrl: project4partial, enabled: false },

                ]
            },
        ]
    }
};

export default projectConfig;
