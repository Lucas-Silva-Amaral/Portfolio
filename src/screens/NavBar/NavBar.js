import { navDataLinks, profile } from "../../consts/navDataLinks.js"
import { logoSocial } from "../../consts/profileData.js"

const rederNavBar = () => {
  const navBar = () => {
    const nav = document.querySelector("#nav")
    nav.innerHTML = `
    <header class="header">
    <div class="divLogo">
    <img src=${profile.img} alt="logo" class="logo">
    </div>
    <ul class="ulLinks">
    ${navDataLinks
      .map(
        (link) => `
      <li>
        <a href="${link.href}">
          <i class="material-icons-outlined md-36">${link.icon}</i>
          <span>${link.name}</span>
        </a>
      </li>
    `
      )
      .join("")}
    </ul>
    <div class="divSocial">
    <ul class="ulSocial">
    ${logoSocial
      .map(
        (link) => `
      <li>
        <a href="${link.url}">
          <img src="${link.iconRede}" alt="${link.name}">
        </a>
      </li>
    `
      )
      .join("")}
    </ul>
    </div>
    </header>
      `
  }

  navBar()
}
export default rederNavBar
