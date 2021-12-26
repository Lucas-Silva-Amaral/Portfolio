import { navDataLinks, logoSocial, titles } from "../../consts/Data.js"
import { profile } from "../../consts/profileData.js"
import { navHover } from "../../js/moldules/NavBar/navBarHover.js"

const renderHeader = () => {
  const navBar = () => {
    const header = document.querySelector("#header")
    header.innerHTML = `
    <nav id="nav">
    <div class="divLogo">
    <img src=${profile.img} alt="${profile.name}" class="logo">
    </div>
    <ul class="ulLinks">
    ${navDataLinks
      .map(
        (link) => `
      <li class="liLinks">
        <a href="${link.href}" class="linksHover">
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
        <span>${titles.titleFooter}</span>
    </div>
    <ul class="ulSocial">
    ${logoSocial
      .map(
        (link) => `
      <li>
        <a href="${link.url}" class="socialLink">
          <img class="iSocial" src="${link.iconRede}" alt="${link.name}">
        </a>
      </li>
    `
      )
      .join("")}
    </ul>
    </div>
    </nav>
      `
  }

  navBar()
  navHover()
}
export default renderHeader
