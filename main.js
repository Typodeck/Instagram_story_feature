const allStories = [
    {
        thumbURL: "images/1-thumb.jpeg",
        imageURL: "images/1.jpeg",
    },

    {
        thumbURL: "images/2-thumb.png",
        imageURL: "images/2.png",
    },

    {
        thumbURL: "images/3-thumb.jpeg",
        imageURL: "images/3.jpeg",
    },

    {
        thumbURL: "images/4-thumb.png",
        imageURL: "images/4.png",
    },

    {
        thumbURL: "images/5-thumb.jpeg",
        imageURL: "images/5.jpeg",
    },

    {
        thumbURL: "images/6-thumb.png",
        imageURL: "images/6.png",
    },

    {
        thumbURL: "images/7-thumb.jpeg",
        imageURL: "images/7.jpeg",
    },

    {
        thumbURL: "images/8-thumb.png",
        imageURL: "images/8.png",
    },

    {
        thumbURL: "images/9-thumb.png",
        imageURL: "images/9.png",
    },

    {
        thumbURL: "images/10-thumb.png",
        imageURL: "images/10.png",
    },

    {
        thumbURL: "images/11-thumb.png",
        imageURL: "images/11.png",
    },
    {
        thumbURL: "images/12-thumb.png",
        imageURL: "images/12.png",
    },
];

const storiesContainer = document.querySelector(".stories-container");
const storyFull = document.querySelector(".story-full");
const storyFullImage = document.querySelector(".story-full img");

allStories.forEach((s) => {
    const content = document.createElement("div");
    content.classList.add("content");
  
    const img = document.createElement("img");
    img.setAttribute("src", s.thumbURL);
  
    storiesContainer.appendChild(content);
    content.appendChild(img);

  
    content.addEventListener("click", () => {
      storyFull.classList.add("active");
      storyFullImage.setAttribute("src", s.imageURL);

      });

});

storyFull.addEventListener("click", () => {
    storyFull.classList.remove("active");
});
