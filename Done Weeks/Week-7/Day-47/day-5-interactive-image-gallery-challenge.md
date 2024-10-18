# Code Challenge: Interactive Image Gallery

## Problem Statement

In this challenge, you'll create an interactive image gallery with thumbnail images. When a thumbnail is clicked, the full-size image should be displayed in a modal overlay. This challenge will test your ability to manipulate the DOM, handle events, and create interactive user interfaces.

## Function Signatures

```javascript
function createThumbnail(src, alt) {
  // Your code here
}

function createGallery(images, targetElement) {
  // Your code here
}

function createModal() {
  // Your code here
}

function openModal(imageSrc, imageAlt) {
  // Your code here
}

function closeModal() {
  // Your code here
}
```

## Input

* `src`: A string representing the source URL of an image.
* `alt`: A string providing alternative text for an image.
* `images`: An array of objects, each containing `src` and `alt` properties for an image.
* `targetElement`: A DOM element where the gallery will be inserted.
* `imageSrc`: A string representing the source URL of the full-size image to display in the modal.
* `imageAlt`: A string providing alternative text for the full-size image.

## Output

* `createThumbnail`: Should return a new `<img>` element representing a thumbnail.
* `createGallery`: Should return the `targetElement` with the gallery appended.
* `createModal`: Should return a new DOM element representing the modal overlay.
* `openModal`: Should display the modal with the specified image.
* `closeModal`: Should hide the modal.

## Example

HTML Structure:

```html
<div id="gallery-container"></div>
```

JavaScript:

```javascript
const images = [
  { src: 'image1-thumb.jpg', alt: 'Image 1', fullSrc: 'image1-full.jpg' },
  { src: 'image2-thumb.jpg', alt: 'Image 2', fullSrc: 'image2-full.jpg' },
  { src: 'image3-thumb.jpg', alt: 'Image 3', fullSrc: 'image3-full.jpg' }
];

const galleryContainer = document.getElementById('gallery-container');
createGallery(images, galleryContainer);
```

## Constraints

* Do not use any external libraries or frameworks. Implement the gallery using vanilla JavaScript.
* Ensure the modal can be closed by clicking outside the image or on a close button.
* Make sure the gallery is responsive and works well on different screen sizes.
* Implement proper error handling for missing images or invalid input.

## Testing the Script

To test your implementation, you can use the following code:

```javascript
const images = [
  { src: 'https://via.placeholder.com/150', alt: 'Thumbnail 1', fullSrc: 'https://via.placeholder.com/800x600' },
  { src: 'https://via.placeholder.com/150', alt: 'Thumbnail 2', fullSrc: 'https://via.placeholder.com/800x600' },
  { src: 'https://via.placeholder.com/150', alt: 'Thumbnail 3', fullSrc: 'https://via.placeholder.com/800x600' }
];

const galleryContainer = document.getElementById('gallery-container');
createGallery(images, galleryContainer);

// Test creating a single thumbnail
console.log(createThumbnail('https://via.placeholder.com/150', 'Test Thumbnail'));

// Test creating the modal
document.body.appendChild(createModal());

// Test opening the modal
openModal('https://via.placeholder.com/800x600', 'Full size image');

// Test closing the modal (you might want to add a delay or trigger this manually)
// setTimeout(closeModal, 3000);
```

Make sure to have an HTML file with a `<div id="gallery-container"></div>` element, and link your JavaScript file to it.

## Bonus Challenge

Implement image preloading for faster display of full-size images, and add keyboard navigation (arrow keys to move between images, Esc key to close the modal).

## Detailed Explanation & Expanded Instructions

### Step 1: Understanding the Problem

This challenge focuses on creating an interactive image gallery with the following key components:
1. A gallery of thumbnail images
2. A modal overlay to display full-size images
3. Event handling for opening and closing the modal
4. Dynamic image source changes

### Step 2: Implementing the Functions

Here's a step-by-step approach to solve this challenge:

1. `createThumbnail(src, alt)`:
   - Create an `<img>` element using `document.createElement('img')`
   - Set the `src` and `alt` attributes of the image
   - Add any necessary classes for styling
   - Return the created image element

2. `createGallery(images, targetElement)`:
   - Create a container element for the thumbnails
   - Iterate over the `images` array
   - For each image, call `createThumbnail` and append the result to the container
   - Add click event listeners to each thumbnail that call `openModal` with the full-size image details
   - Append the container to the `targetElement`
   - Return the `targetElement`

3. `createModal()`:
   - Create a modal container element
   - Create elements for the modal content, including an `<img>` element and a close button
   - Style the modal to overlay the entire screen
   - Add a click event listener to the modal background and close button to call `closeModal`
   - Return the modal element (but don't append it to the document yet)

4. `openModal(imageSrc, imageAlt)`:
   - Get a reference to the modal (create it if it doesn't exist)
   - Set the `src` and `alt` attributes of the image in the modal
   - Display the modal by changing its style or adding a class
   - Optionally, disable scrolling on the body while the modal is open

5. `closeModal()`:
   - Hide the modal by changing its style or removing a class
   - Optionally, re-enable scrolling on the body

### Step 3: Styling the Gallery and Modal

Create CSS to style your gallery and modal. Here's a basic example:

```css
.gallery {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.thumbnail {
  width: 150px;
  height: 150px;
  object-fit: cover;
  cursor: pointer;
}

.modal {
  display: none;
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.9);
}

.modal-content {
  margin: auto;
  display: block;
  width: 80%;
  max-width: 700px;
}

.modal-image {
  width: 100%;
  height: auto;
}

.close {
  color: #f1f1f1;
  position: absolute;
  top: 15px;
  right: 35px;
  font-size: 40px;
  font-weight: bold;
  cursor: pointer;
}
```

### Step 4: Testing the Functions

To test your implementation:

1. Create an HTML file with the provided structure and CSS.
2. Implement all functions as described.
3. Use the provided testing code to check each function.
4. Open the HTML file in a web browser and interact with the gallery.
5. Verify that clicking thumbnails opens the modal with the correct full-size image.
6. Check that the modal can be closed using the close button or by clicking outside the image.

## Time and Space Complexity

- Time Complexity: O(n) for creating the gallery, where n is the number of images
- Space Complexity: O(n) for storing the thumbnail and modal elements

## Key Takeaways

- Dynamic creation of DOM elements allows for flexible and interactive user interfaces
- Event delegation can be used to handle events on dynamically created elements
- Modals provide a way to focus user attention on specific content
- Proper styling is crucial for creating an attractive and user-friendly interface
- Error handling and responsiveness are important considerations in real-world applications

## Notes

In a production environment, you might want to consider implementing lazy loading for thumbnails and full-size images to improve performance with large galleries. Additionally, adding keyboard navigation and touch support would enhance accessibility and mobile usability.

