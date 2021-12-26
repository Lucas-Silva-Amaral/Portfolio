// -------- Nav Hover Data --------
export const navHover = () => {
  const ulLinksHover = () => {
    const ul = document.querySelector(".ulLinks")
    ul.addEventListener("mouseover", () => {
      ul.classList.add("ulHover")
    })
    ul.addEventListener("mouseout", () => {
      ul.classList.remove("ulHover")
    })
  }

  const liLinksHover = () => {
    const linksHover = document.querySelectorAll(".linksHover")
    linksHover.forEach((link) => {
      link.addEventListener("mouseover", () => {
        link.classList.add("linksHoverActive")
      })
      link.addEventListener("mouseout", () => {
        link.classList.remove("linksHoverActive")
      })
    })
  }
  ulLinksHover()
  liLinksHover()
}
