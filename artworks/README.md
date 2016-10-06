# Artworks 

## Description
Test assignment for angular.js developer position. Total time: 6h;

## Build & run
- npm install
- grunt
- any http server (e.g. node.js 'http-server' utility)

## Updates
- UI improved: validation + debounce for change saving + confirmations + loading indicatros;
- Performance improved: materials and mediums now are cached in local browser storage (via amplify.js);
- Functionality: filter now works fine;

## Architecture and performance 
**Language:** I'm absolutely OK with es5, but as my recent experience shows - typescript is a better option. It brings a lot of syntax sugar from es6 and allows creating more stable applications because of type checking during compilation;

**Data access layer:** $resourse service which implements active record pattern is a nice thing (especially when you need to provide access to restful API) but it real world application with a complex dependencies between entities it could lead to increased complexity in business logic layer + it's harder to test such application because entities contain some data access logic. So I've decorated $resourse usage with repository pattern;
 
**Performance:**  There is a problem with getting the full list of materials and mediums because we had to make many http requests to the server. I've encapsulated this logic inside collectionsService, so entities will be retrieved only a single time during the session. The next step for performance optimization is to store this data in local browser cache (we could do it because material/mediums entities are immutable). We could use amplify.js for caching (it provides a nice set of fallbacks for old browsers);

**+** Unfortunately we had to load all artworks because we need to filter them by artist name on client side. We could get a little improvement by making delay after loading first 5 artworks (other will be out of screen) - so materials and mediums loading requests will be completed faster.

## Missing functionality
I’ve implemented the core functionality, but 5 hours wasn’t enough for me to implement all what I want. Here list of missing functionality:

- ~~Filtering by artist name;~~
- ~~Inputs validations;~~
- ~~Loading indicators;~~
- Errors handling;
- Unit tests;
- Problem with removing material from artwork (Access-Control-Allow-Origin)

However, I hope that the final functionality is enough to evaluate my angular.js developer skills.

## Design & styles
Unfortunately, I have no enough time to make a beautiful interface. There is no loading indicators, animations, e.t.c.