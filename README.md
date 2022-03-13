# <h1 align="center" style="font-weight: bold; margin-top: 20px; margin-bottom: 20px;">Demo NextJS Ag-grid React-Bootstrap</h1>
  
<h3 align="center" style="font-weight: bold; margin-top: 20px; margin-bottom: 20px;">Guide setup Ag-grid for Nextjs with Bootstrap CSS</h3>
  
<p align="center">
  <a href="https://github.com/tampm92/demo-nextjs-ag-grid-react-bootstrap"><img alt="GitHub Workflow Status" src="https://img.shields.io/github/workflow/status/tampm92/demo-nextjs-ag-grid-react-bootstrap/build"></a>
  <a href="#last-commit"><img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/tampm92/demo-nextjs-ag-grid-react-bootstrap"></a>
  <a href="#node-current"><img alt="node-current" src="https://img.shields.io/node/v/next"></a>
  <a href="#license"><img alt="GitHub" src="https://img.shields.io/github/license/tampm92/demo-nextjs-ag-grid-react-bootstrap"></a>
</p>
  
<p align="center">
  <a href="#getting-started">Getting Started</a> •
  <a href="#documentation">Documentation</a> •
  <a href="#support">Need Help?</a> •
  <a href="#about">About</a> •
  <a href="#license">License</a>
</p>
  
<br/>

## Introduction

AG Grid is a feature rich datagrid designed for the major JavaScript Frameworks.

<br/>
  
## Key Features

- **[Next JS](https://nextjs.org/docs/getting-started)**
- **[Ag-gird](https://www.ag-grid.com/react-data-grid/getting-started/)**
- **[react-bootstrap](https://react-bootstrap.github.io)**

<br/>
  
## Usage

```sh
# install libs
yarn
# run dev
yarn dev
# generate
yarn export
```

<br/>
  
## Getting Started

### **Structure**

```js
.
├── 📁 assets
│   ├── 📁 styles
│   │   └── 📝 globals.scss
│   └── 📁 images
├── 📁 auth
│   ├── 📝 fireinit.jsx
│   ├── 📝 index.jsx
│   └── 📝 routes.jsx
├── 📁 components
│   ├── 📁 common
│   └── 📁 partials
├── 📁 layouts
│   ├── 📁 components
│   └── 📝 default.jsx
├── 📁 pages
│   ├── 📝 _app.jsx
│   ├── 📝 index.jsx
│   ├── 📝 login.jsx
│   └── 📝 user.jsx
├── 📁 public
├── 📁 shared
│   ├── 📝config.jsx
│   └── 📁 services
├── 📝 jsconfig.js
├── 📝 next.config.js
└── 📝 README.md
```

<br/>

### **Prerequisites**

- [Node.js](https://nodejs.org/en)
- [yarn](https://yarnpkg.com/getting-started/install)
  
## Documentation

### **API**

1. Install lib

```bash
yarn add ag-grid-community ag-grid-react
```

2. Add example

```jsx
import React, { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const App = () => {
  const [rowData] = useState([
    {make: "Toyota", model: "Celica", price: 35000},
    {make: "Ford", model: "Mondeo", price: 32000},
    {make: "Porsche", model: "Boxter", price: 72000}
  ]);

  const [columnDefs] = useState([
    { field: "make" },
    { field: "model" },
    { field: "price" },
  ]);     

  return (
    <div className="ag-theme-alpine" style={{height: 400, width: 600}}>
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}>
      </AgGridReact>
    </div>
  );
};

export default App;
```

<br/>

### **Performance and testing**

Any of testing activities and reports goes here.

<br/>

## Support
  
### **Get Help**
  
**You have a question or problem wasn't solved?** No worries! Just open up a new issue in the `GitHub issue tracker`. Please provide all information to reproduce your problem. If you don't have a GitHub account, you can [contact](#contact) me directly.
  
<br/>
  
## About

### **Known Issues**
  
 - none (that are reported)

<br/>
  
### **Contact**
  
If you haven't done so already, please check out [Get Help](#get-help) for the fastest possible help on your issue. Alternatively you can get in touch with me by:

- Email: phanminhtam1992@gmail.com
  
<br/>

## License

This project is proudly licensed under the [MIT license][git-license].

<!-- LINKS -->
<!-- in-line references: websites -->
[tampm.com]:https://tampm.com
[react-bootstrap]:https://react-bootstrap.github.io/

<!-- in-line references to github -->

[git-profile]:https://github.com/tampm92
[git-readme]:README.md
[git-license]:LICENSE.md