import { navDataLinks, profile } from "../../consts/navDataLinks.js"
import { logoSocial } from "../../consts/profileData.js"

const rederNavBar = () => {
  const navBar = () => {
    const nav = document.querySelector("#nav")
    nav.innerHTML = `
    <header class="header">
    <div class="divLogo">
    <img src=${profile.img} alt="${profile.name}" class="logo">
    </div>
    <ul class="ulLinks fSNav">
    ${navDataLinks
      .map(
        (link) => `
      <li class="liLinks">
        <a href="${link.href}">
          <i class="material-icons-outlined md-36">${link.icon}</i>
          <span class="fSNav">${link.name}</span>
        </a>
      </li>
    `
      )
      .join("")}
    </ul>
    <div class="divSocial">
    <div>
        <span class="fSNav">Find in me</span>
    </div>
    <ul class="ulSocial">
    ${logoSocial
      .map(
        (link) => `
      <li>
        <a href="${link.url}">
          <img class="iSocial" src="${link.iconRede}" alt="${link.name}">
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
