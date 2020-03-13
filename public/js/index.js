init();

async function init() {
  if (location.search.split("=")[1] === undefined) {
    const workout = await API.getLastWorkout();
    if (workout) {
      location.search = "?id=" + workout._id;
    } else {
      document.querySelector("#continue-btn").classList.add("d-none");
      document.querySelector("#new-btn").style.display = "block";
      document.querySelector("#new-btn").style.width = "100%";
    }
  }
}
