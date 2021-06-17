From the Odin Project

1. Create elements for intial page-load using JavaScript only, e.g. by appending each new element to div#content once the page is first loaded. Since we’re all set up to write our code in multiple files, let’s write this initial page-load function inside of its own module and then import and call it inside of index.js.
  - I created a separate module for the pageLoad function, which when called will create our intial elements and append them to the div#content.

2. Next, set up your restaurant site to use tabbed browsing to access the Contact and Menu pages.
  1. Put the contents of each ‘tab’ inside of its own module. Each module will export a function that creates a div element, adds the appropriate content and styles to that element and then appends it to the DOM.
  2. Write the tab-switching logic inside of index.js. You should have event listeners for each tab that wipes out the current contents and then runs the correct ‘tab module’ to populate it again.

  - I created a module for the home page, the menu page, and the contact page.
  - In index.html, I added the logic to switch tabs woooo