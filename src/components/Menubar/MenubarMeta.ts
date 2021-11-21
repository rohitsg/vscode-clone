export const MenubarNames = [
    {
        name: "File",
        options: [
            {
                name: "New File",
                keyShortcut: "Ctrl+N"
            },
            {
                name: "New Window",
                keyShortcut: "Ctrl+Shift+N"
            },
            {
                separator: "separator"
            },
            {
                name: "Open File...",
                keyShortcut: "Ctrl+O"
            },
            {
                name: "Open Folder...",
                keyShortcut: "Ctrl+K Ctrl+O"
            },
            {
                name: "Open workspace...",
                keyShortcut: ""
            },
            {
                name: "Open Recent",
                keyShortcut: "",
                options: [
                    {
                        name: "Reopen Closed Editor",
                        keyShortcut: "Ctrl+Shift+T"
                    }, {
                        separator: "separator"
                    }, {
                        name: "~/projects/css/vscode-clone",
                        keyShortcut: ""
                    }, {
                        name: "~/projects/layout",
                        keyShortcut: ""
                    },
                    {
                        separator: "separator"
                    }, {
                        name: "~/projects/POC/reddit/multi.js",
                        keyShortcut: ""
                    }, {
                        name: "~/projects/POC/stackoverflow/main.java",
                        keyShortcut: ""
                    }, {
                        separator: "separator"
                    }, {
                        name: "More...",
                        keyShortcut: "Ctrl+R"
                    }, {
                        separator: "separator"
                    }, {
                        name: "Clear Recently Opened",
                        keyShortcut: ""
                    },]
            },
            {
                separator: "separator"
            },
            {
                name: "Add Folder to Workspace...",
                keyShortcut: ""
            },
            {
                name: "Save Workspace As...",
                keyShortcut: ""
            },
            {
                name: "Duplicate Worksapce",
                keyShortcut: ""
            },
            {
                separator: "separator"
            },
            {
                name: "Save",
                keyShortcut: "Ctrl+S"
            },
            {
                name: "Save As...",
                keyShortcut: ""
            },
            {
                name: "Save All",
                keyShortcut: ""
            },
            {
                separator: "separator"
            },
            {
                name: "Auto Save",
                keyShortcut: ""
            },
            {
                name: "Prefenrences",
                keyShortcut: ""
            },
            {
                separator: "separator"
            },
            {
                name: "Revert File",
                keyShortcut: ""
            },
            {
                name: "Close Editor",
                keyShortcut: "Ctrl+W"
            },
            {
                name: "Close Folder",
                keyShortcut: ""
            },
            {
                name: "Close Window",
                keyShortcut: "Alt+F4"
            },
            {
                separator: "separator"
            },
            {
                name: "Exit",
                keyShortcut: "Ctrl+Q"
            },
        ]
    },
    {
        name: "Edit",
        options: [
            {
                name: "Undo",
                keyShortcut: "Ctrl+Z"
            },
            {
                name: "Redo",
                keyShortcut: "Ctrl+Y"
            },
            {
                separator: "separator"
            },
            {
                name: "Cut",
                keyShortcut: "Ctrl+C"
            },
            {
                name: "Copy",
                keyShortcut: "Ctrl+C"
            },
            {
                name: "Paste",
                keyShortcut: "Ctrl+V"
            },
            {
                separator: "separator"
            },
            {
                name: "Find",
                keyShortcut: "Ctrl+F"
            },
            {
                name: "Replace",
                keyShortcut: "Ctrl+H"
            },
            {
                separator: "separator"
            },
            {
                name: "Find in Files",
                keyShortcut: "Ctrl+Shift+F"
            },
            {
                name: "Replace in Files",
                keyShortcut: "Ctrl+Shift+H"
            },
            {
                separator: "separator"
            },
            {
                name: "Toggle Line Comment",
                keyShortcut: "Ctrl+/"
            },
            {
                name: "Toggle Block Comment",
                keyShortcut: "Ctrl+Shift+A"
            },
            {
                name: "Emmet: Expand Abbreviation",
                keyShortcut: "Tab"
            },
        ]
    },
    {
        name: "Selection",
        options: [{
            name: "Select All",
            keyShortcut: "Ctrl+A"
        }, {
            separator: "separator"
        },
        {
            name: "Expand Selection",
            keyShortcut: "Alt+Shift+Right Arrow"
        }, {
            name: "Shrink Selection",
            keyShortcut: "Alt+Shift+Left Arrow"
        }, {
            separator: "separator"
        }, {
            name: "Copy Line Up",
            keyShortcut: "Alt+Ctrl+Shift+Up Arrow"
        }, {
            name: "Copy Line Down",
            keyShortcut: "Alt+Ctrl+Shift+Down Arrow"
        }, {
            name: "Move Line Up",
            keyShortcut: "Alt+Up Arrow"
        }, {
            name: "Move Line Down",
            keyShortcut: "Alt+Down Arrow"
        }, {
            name: "Duplicate Selection",
            keyShortcut: ""
        }, {
            separator: "separator"
        }, {
            name: "Add Cursor Above",
            keyShortcut: "Alt+Shift+Up Arrow"
        }, {
            name: "Add Cursor Below",
            keyShortcut: "Alt+Shift+Down Arrow"
        }, {
            name: "Add Cursor to Line Ends",
            keyShortcut: "Alt+Shift+I"
        }, {
            name: "Add Next Occurrence",
            keyShortcut: "Ctrl+D"
        }, {
            name: "Add Previous Occurrence",
            keyShortcut: ""
        }, {
            name: "Select All Occurrences",
            keyShortcut: "Ctrl+Shift+L"
        }, {
            separator: "separator"
        }, {
            name: "Switch to Ctrl+Click for Multi-Cursor",
            keyShortcut: ""
        }, {
            name: "Column Selection Mode",
            keyShortcut: ""
        }]
    },
    {
        name: "View",
        options: [{
            name: "Command Palette...",
            keyShortcut: "Ctrl+Shift+P"
        }, {
            name: "Open View...",
            keyShortcut: ""
        }, {
            separator: "separator"
        }, {
            name: "Appearance",
            keyShortcut: ""
        }, {
            name: "Editor Layout",
            keyShortcut: ""
        }, {
            separator: "separator"
        }, {
            name: "Explorer",
            keyShortcut: "Ctrl+Shift+E"
        }, {
            name: "Search",
            keyShortcut: "Ctrl+Shift+F"
        }, {
            name: "SCM",
            keyShortcut: "Ctrl+Shift+G G"
        }, {
            name: "Run",
            keyShortcut: "Ctrl+Shift+D"
        }, {
            name: "Extensions",
            keyShortcut: "Ctrl+Shift+X"
        }, {
            separator: "separator"
        }, {
            name: "Problems",
            keyShortcut: ""
        }, {
            name: "Output",
            keyShortcut: "Ctrl+K Ctrl+H"
        }, {
            name: "Debug Console",
            keyShortcut: "Ctrl+Shift+Y"
        }, {
            name: "Terminal",
            keyShortcut: ""
        }, {
            separator: "separator"
        }, {
            name: "Word Wrap",
            keyShortcut: "Alt+Z"
        }, {
            name: "Show Minimap",
            keyShortcut: ""
        }, {
            name: "Show Breadcrumbs",
            keyShortcut: ""
        }, {
            name: "Render Whitespace",
            keyShortcut: ""
        }, {
            name: "Render Control Characters",
            keyShortcut: ""
        }]
    },
    {
        name: "Go",
        options: [{
            name: "Back",
            keyShortcut: "Alt+Ctrl+-"
        }, {
            name: "Forward",
            keyShortcut: "Ctrl+Shift+-"
        }, {
            name: "Last Edit Location",
            keyShortcut: "Ctrl+K Ctrl+Q"
        }, {
            separator: "separator"
        }, {
            name: "Switch Editor",
            keyShortcut: ""
        }, {
            name: "Switch Group",
            keyShortcut: ""
        }, {
            separator: "separator"
        }, {
            name: "Go to File...",
            keyShortcut: "Ctrl+P"
        }, {
            name: "Go to Symbol in Workspace...",
            keyShortcut: "Ctrl+T"
        }, {
            separator: "separator"
        }, {
            name: "Go to Symbol in Editor...",
            keyShortcut: "Ctrl+Shift+O"
        }, {
            name: "Go to Defition",
            keyShortcut: "F12"
        }, {
            name: "Go to Declaration",
            keyShortcut: ""
        }, {
            name: "Go to Type Defition",
            keyShortcut: ""
        }, {
            name: "Go to Implementations",
            keyShortcut: "Ctrl+F12"
        }, {
            name: "Go to References",
            keyShortcut: "Shift+F12"
        }, {
            separator: "separator"
        }, {
            name: "Go to Line/Column...",
            keyShortcut: "Ctrl+G"
        }, {
            name: "Go to Bracket",
            keyShortcut: "Ctrl+Shift+\\"
        }, {
            separator: "separator"
        }, {
            name: "Next Problem",
            keyShortcut: "F8"
        }, {
            name: "Previous Problem",
            keyShortcut: "Shift+F8"
        }, {
            separator: "separator"
        }, {
            name: "Go to References",
            keyShortcut: "Shift+F8"
        }, {
            name: "Next Change",
            keyShortcut: "Alt+F3"
        }, {
            name: "Previous Change",
            keyShortcut: "Alt+Shift+F3"
        },]
    },
    {
        name: "Run",
        options: [{
            name: "Start Debugging",
            keyShortcut: "F5"
        }, {
            name: "Run Without Debugging",
            keyShortcut: "Ctrl+F5"
        }, {
            name: "Stop Debugging",
            keyShortcut: "Shift+F5"
        }, {
            name: "Restart Debugging",
            keyShortcut: "Ctrl+Shift+F5"
        }, {
            separator: "separator"
        }, {
            name: "Open Configurations",
            keyShortcut: "Shift+F5"
        }, {
            name: "Add Configuration...",
            keyShortcut: ""
        }, {
            separator: "separator"
        }, {
            name: "Step Over",
            keyShortcut: "F10"
        }, {
            name: "Step Into",
            keyShortcut: "F11"
        }, {
            name: "Step Out",
            keyShortcut: "Shift+F11"
        }, {
            name: "Continue",
            keyShortcut: "F5"
        }, {
            separator: "separator"
        }, {
            name: "Toggle Breakpoint",
            keyShortcut: "F9"
        }, {
            name: "Next Breakpoint",
            keyShortcut: ""
        }, {
            separator: "separator"
        }, {
            name: "Enable All Breakpoint",
            keyShortcut: ""
        }, {
            name: "Disable All Breakpoint",
            keyShortcut: ""
        }, {
            name: "Remove All Breakpoint",
            keyShortcut: ""
        }, {
            separator: "separator"
        }, {
            name: "Install Additional Debuggers...",
            keyShortcut: ""
        },]
    },
    {
        name: "Terminal",
        options: [{
            name: "New Terminal",
            keyShortcut: "Ctrl+Shift+`"
        }, {
            name: "Split Terminal",
            keyShortcut: "Ctrl+Shift+5"
        }, {
            separator: "separator"
        }, {
            name: "Run Task...",
            keyShortcut: "Alt+Ctrl+T"
        }, {
            name: "Run Build Task...",
            keyShortcut: "Ctrl+Shift+B"
        }, {
            name: "Run Active File",
            keyShortcut: ""
        }, {
            name: "Run Selected Text",
            keyShortcut: ""
        }, {
            separator: "separator"
        }, {
            name: "Show Running Tasks...",
            keyShortcut: ""
        }, {
            name: "Restart Running Tasks...",
            keyShortcut: ""
        }, {
            name: "Terminate Tasks...",
            keyShortcut: ""
        }, {
            separator: "separator"
        }, {
            name: "Configure Tasks...",
            keyShortcut: ""
        }, {
            name: "Configure Default Build Tasks...",
            keyShortcut: ""
        },]
    },
    {
        name: "Help",
        options: [{
            name: "Welcome",
            keyShortcut: ""
        }, {
            name: "Interactive Playground",
            keyShortcut: ""
        }, {
            name: "Documentation",
            keyShortcut: ""
        }, {
            name: "Release Notes",
            keyShortcut: ""
        }, {
            separator: "separator"
        }, {
            name: "Keyboard Shortcuts Referecne",
            keyShortcut: "Ctrl+K Ctrl+R"
        }, {
            name: "Introductory Videos",
            keyShortcut: ""
        }, {
            name: "Tips and Tricks",
            keyShortcut: ""
        }, {
            separator: "separator"
        }, {
            name: "Join Us on Twitter",
            keyShortcut: ""
        }, {
            name: "Search Feature Requests",
            keyShortcut: ""
        }, {
            name: "Report Issue",
            keyShortcut: ""
        }, {
            separator: "separator"
        }, {
            name: "View License",
            keyShortcut: ""
        }, {
            name: "Privacy Statement",
            keyShortcut: ""
        }, {
            separator: "separator"
        }, {
            name: "Toggle Developer Tools",
            keyShortcut: "Ctrl+Shift+I"
        }, {
            name: "Open Process Explorer",
            keyShortcut: ""
        }, {
            separator: "separator"
        }, {
            name: "Check for Updates...",
            keyShortcut: ""
        }, {
            separator: "separator"
        }, {
            name: "About",
            keyShortcut: ""
        },]
    }
]