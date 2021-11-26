// Nav Toggle Button Control
// Purpose: Hide and show mobile navigation menu
//
// 1. Assign the navigation toggle button to "navToggle" variable
// 2. Assign the navigation content div to "navContent" variable
// 3. "toggle" function to hide/show the navigation content
// 4. Add click listener to navToggle to call toggle() on navContent when navToggle is clicked

(function buttonControlInit() {
  const navToggle = document.querySelector("#nav_toggle");
  const navContent = document.querySelector("#nav_content");

  function toggleNav() {
    navContent.classList.toggle("hidden");
	navContent.classList.toggle("fadeIn");
	if (navContent.classList.contains("fadeIn")) {
		document.getElementById("nav_bar").style.marginBottom = 0;
	} else {
		document.getElementById("nav_bar").style.marginBottom = "0.75rem"
	}
  };

  navToggle.addEventListener("click", toggleNav);

  // FAQ Dropdown Control
  // 1. Gather all <detail> elements into an array
  // 2. Assign a click listener to each one
  // 3. Click listener toggles "open" class when clicked

  const detailsArray = document.querySelectorAll("details");

  function toggleDetails(e) {
    e.target.classList.toggle("open");
  }
  detailsArray.forEach((el) => el.addEventListener("toggle", toggleDetails));
})();

// Video Loop

const myVideo = document.getElementById('sushiVideo');
const myVideos = [
	"./video/sushiVideo1.mp4",
	"./video/sushiVideo2.mp4",
	"./video/sushiVideo3.mp4"
];
let activeVideo = 0;

myVideo.addEventListener('ended', () => {
	// Update new active video index
	activeVideo = (++activeVideo) % myVideos.length;

	//Update video source and play
	myVideo.src = myVideos[activeVideo];
	myVideo.play()
});
