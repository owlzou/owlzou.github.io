//ICONS 目前在<script>标签的onload里执行
//feather.replace();

//Simple lazy load
document.querySelectorAll(".lazyload").forEach((img) => {
  img.src = img.attributes["data-src"].value;
});

//Menu
document.querySelector(".burger").addEventListener("click", () => {
  document.querySelector(".sidebar").classList.add("active");
  document.querySelector(".mask").classList.add("active");
});

document.querySelector(".mask").addEventListener("click", () => {
  document.querySelector(".sidebar").classList.remove("active");
  document.querySelector(".mask").classList.remove("active");
});

//Scroll To Top
document.querySelector(".fab").addEventListener("click", () => {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
});

//TOCBOT
function toc_onload() {
  tocbot.init({
    tocSelector: ".toc",
    // Where to grab the headings to build the table of contents.
    contentSelector: ".main",
    // Which headings to grab inside of the contentSelector element.
    headingSelector: "h2, h3",
    // For headings inside relative or absolute positioned containers within content.
    hasInnerContainers: true,
  });
  $toc = document.querySelector(".toc");
  if ($toc && $toc.children.length == 0) {
    $toc.remove();
  }
}
