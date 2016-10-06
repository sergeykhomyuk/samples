# Test assignment

- **Screenshot:** [screenshot.png](https://www.dropbox.com/s/n2de5ehyd8pxq82/screenshot.png?dl=0)

### Build & run
- cd app
- npm install
- grunt
- any http server (e.g. node.js 'http-server' utility)

### Architecture & Design
**Language:** I'm absolutely OK with es5, but as my recent experience shows - **typescript** is a better option. It brings a lot of syntax sugar from es6 and allows creating more stable applications because of type checking during compilation;

**Frameworks & Libs:** Angular.js, Require.js, Underscore.js, Bootstrap.UI, Chart.js + Grunt.js;

**Architecture:** I've designed application architecture as it was part of large application: 'builds' is just a child module for 'app', all calls from low-level components (such as app:item-result) are passed to their 'hubs' (e.g. ItemController), module is divided into many small components;

**Components:** I've implemented accordion directive by myself, other components (dropdown, modal) I took from bootstrap-ui library;

**Back-end:** I've implemented basic back-end mockup with ASP.NET MVC that generates initial data and add randomly generates new items (its source code is not a topic for discussion);

**Design:** Based on Twitter Bootstrap, responsive;

###Possible improvements
- Fetch only updated items from back-end;
- Use web sockets to avoid HTTP protocol overhead;
- Add animations;
- Implement missing functionality;