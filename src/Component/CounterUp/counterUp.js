/*
function setCounter() {
  const counters = document.querySelectorAll(".counter");
  const speed = 2000; // The lower the slower

  counters.forEach((counter) => {
    const updateCount = () => {
      const target = +counter.getAttribute("data-count");
      const count = +counter.innerText;

      // Lower inc to slow and higher to slow
      const inc = target / speed;

      // console.log(inc);
      // console.log(count);

      // Check if target is reached
      if (count < target) {
        // Add inc to count and output in counter
        counter.innerText = Math.ceil(count + inc);
        // Call function every ms
        setTimeout(updateCount, 1);
      } else {
        counter.innerText = target;
      }
    };

    updateCount();
  });
}

window.onload = function () {
  setCounter();
};
*/
/*
jQuery(document).ready(function () {
  $("data-count").counterUp({ delay: 1, time: 1000 });
});*/

/*"data-count".counterUp({ delay: 1, time: 1000 });
 */
