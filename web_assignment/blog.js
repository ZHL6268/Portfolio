// Simulated blog data
var blogData = [
  { title: "Book List", content: "JavaScript The Definitive Guide;You don't know JS ", date: new Date(2023, 5, 14) },
  { title: "Website for learning", content: "scrimba;freecodecamp;cssbattle;frontendmentor", date: new Date(2023, 5, 15) },
  { title: "Website as tools", content: "imgage map: www.image-map.net;social media feed: app.curator.io", date: new Date(2023,5,15) },
  { title: "Blog 4", content: "This is the content of Blog 4.", date: new Date() },
  { title: "Blog 5", content: "This is the content of Blog 5.", date: new Date() },
  { title: "Blog 6", content: "This is the content of Blog 6.", date: new Date() }
];

// Get the container element for the blog list
var blogListContainer = document.getElementById("blogList");

// Variable to keep track of the displayed blog count
var displayedBlogs = 0;

// Variable to store the number of blogs to show initially
var initialBlogCount = 3;

// Loop through the blog data and create blog elements
for (var i = 0; i < blogData.length; i++) {
  if (displayedBlogs >= initialBlogCount) {
    break;
  }
  var blog = blogData[i];
  var blogElement = createBlogElement(blog.title, blog.content, blog.date);
  blogListContainer.appendChild(blogElement);
  displayedBlogs++;
}

// Check if there are more blogs to display
if (displayedBlogs < blogData.length) {
  var readMoreBtn = document.getElementById("readMoreBtn");
  readMoreBtn.style.display = "block";
  readMoreBtn.addEventListener("click", expandBlogList);
}

// Function to create a blog element
function createBlogElement(title, content, date) {
  var blogElement = document.createElement("div");
  blogElement.classList.add("blog");
  blogElement.classList.add("collapsed");

  var titleElement = document.createElement("h2");
  titleElement.textContent = title;
  titleElement.addEventListener("click", toggleContent);

  var dateElement = document.createElement("span");
  dateElement.classList.add("date");
  dateElement.textContent = formatDate(date);

  var contentElement = document.createElement("ul");
  // Split content into list items
  var contentItems = content.split(";");
  for (var i = 0; i < contentItems.length; i++) {
    var listItem = document.createElement("li");
    listItem.textContent = contentItems[i];
    contentElement.appendChild(listItem);
  }

  blogElement.appendChild(titleElement);
  blogElement.appendChild(dateElement);
  blogElement.appendChild(contentElement);

  return blogElement;
}

// Function to format date as "YYYY-MM-DD" format
function formatDate(date) {
  var year = date.getFullYear();
  var month = ("0" + (date.getMonth() + 1)).slice(-2);
  var day = ("0" + date.getDate()).slice(-2);
  return year + "-" + month + "-" + day;
}

// Function to toggle the display/hide state of blog content
function toggleContent(event) {
  // Get the parent blog element
  var blogElement = event.target.parentElement;
  // Find the content element within the blog element
  var contentElement = blogElement.querySelector("ul");

  if (blogElement.classList.contains("collapsed")) {
    // If the blog content is collapsed, display it
    contentElement.style.display = "block";
    blogElement.classList.remove("collapsed");
  } else {
    // If the blog content is displayed, hide it
    contentElement.style.display = "none";
    blogElement.classList.add("collapsed");
  }
}

// Immediately collapse the blog content on page load
var initialBlogElements = blogListContainer.querySelectorAll(".blog");
for (var i = 0; i < initialBlogElements.length; i++) {
  var blogElement = initialBlogElements[i];
  var contentElement = blogElement.querySelector("ul");
  // Hide the content of each blog
  contentElement.style.display = "none";
  // Add the "collapsed" class to each blog element
  blogElement.classList.add("collapsed");
}

// Expand the blog list
function expandBlogList() {
  // Remove the "Read More" button
  var readMoreBtn = document.getElementById("readMoreBtn");
  readMoreBtn.style.display = "none";

  // Create blog elements and add them to the list container
  for (var i = initialBlogCount; i < blogData.length; i++) {
    var blog = blogData[i];
    var blogElement = createBlogElement(blog.title, blog.content, blog.date);
    blogListContainer.appendChild(blogElement);
  }

  // Create the "Close" button
  var closeButton = document.createElement("button");
  closeButton.textContent = "Close";
  closeButton.className = "btn";
  closeButton.addEventListener("click", collapseBlogList);
  blogListContainer.style.justifyContent = "center";
  blogListContainer.appendChild(closeButton);
}

// Collapse the blog list
function collapseBlogList() {
  // Remove all blog elements except the initial ones
  var blogElements = blogListContainer.querySelectorAll(".blog");
  for (var i = initialBlogCount; i < blogElements.length; i++) {
    var blogElement = blogElements[i];
    blogListContainer.removeChild(blogElement);
  }

  // Create the "Read More" button
  var readMoreBtn = document.getElementById("readMoreBtn");
  readMoreBtn.style.display = "block";

  // Remove the "Close" button
  var closeButton = blogListContainer.querySelector("button");
  blogListContainer.removeChild(closeButton);
}
