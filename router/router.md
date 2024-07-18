# Router
## 1. Router
- Complex website needs multiple pages.
- SPA: Single Page Application  
  - The entire application runs within a single web page,
  providing a more responsive and seamless user experience
- In traditional multi-page web application, navigating between pages involves a complete
  page reload of the entire page, resulting in slower response time and less interactive user experience.
- need router to create multi-page app

## 2. Initial setup
- `npm install react-router-dom`
```javascript
//index.js
<BrowswerRouter>
  <App/>
</BrowswerRouter>
```
## homework
- make city view a multi-page-app
- when click the thumb, do not set pic as background, instead, a separate page to show one picture, with description
- url is created dynamically based on index
- example: 3000/picture/2
