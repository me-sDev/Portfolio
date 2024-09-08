// Header Sections
const navAnchors = document.querySelectorAll(".nav__link a");
const navMenuOpen = document.querySelector("#navMenuOpen");
const navMenuClose = document.querySelector("#navMenuClose");
const navLinks = document.querySelector(".nav__links");

// Main Sections
const header = document.querySelector("header");
const hero = document.querySelector(".hero")
const about = document.querySelector(".about")
const service = document.querySelector(".service")
const result = document.querySelector(".result")
const skill = document.querySelector(".skill")
const resume = document.querySelector(".resume")
const client = document.querySelector(".client")
const project = document.querySelector(".project")
const blog = document.querySelector(".blog")
const contact = document.querySelector(".contact")
const adSection = document.querySelector(".adSection")

navAnchors.forEach((navAnchor) => {
    navAnchor.addEventListener("click", () => {
        if (window.innerWidth < 767) {
            navLinks.style.display = 'none';
        } else {
            navLinks.style.display = 'flex';
        }
    })
})

navMenuOpen.addEventListener("click", () => {
    navLinks.style.display = 'flex';
})
navMenuClose.addEventListener("click", () => {
    navLinks.style.display = 'none';
})

window.addEventListener("load", (e) => {
    navAnchors[0].style.color = "#E78727";
    // console.log(e.currentTarget);
})

window.addEventListener("scroll", (e) => {

    if (e.currentTarget.scrollY > 0 && e.currentTarget.scrollY < hero.clientHeight - 300) {
        navAnchors[0].style.color = "#E78727";
        navAnchors[1].style.color = "white";
        navAnchors[2].style.color = "white";
        navAnchors[3].style.color = "white";
        navAnchors[4].style.color = "white";
        navAnchors[5].style.color = "white";
        navAnchors[6].style.color = "white";

    } else if (e.currentTarget.scrollY > hero.clientHeight - 300 && e.currentTarget.scrollY < hero.clientHeight + about.clientHeight - 300) {
        navAnchors[0].style.color = "white";
        navAnchors[1].style.color = "#E78727";
        navAnchors[2].style.color = "white";
        navAnchors[3].style.color = "white";
        navAnchors[4].style.color = "white";
        navAnchors[5].style.color = "white";
        navAnchors[6].style.color = "white";

        const aboutHeroImg = document.querySelector(".about__hero");
        const aboutLittleInfo = document.querySelector(".about__info-me")
        const aboutExtraInfo = document.querySelector(".about__info-extra")
        const aboutInfo = document.querySelector(".about__info-main")
        const aboutButtons = document.querySelector(".about__buttons")
        aboutHeroImg.classList.add("showLeft");
        setTimeout(() => {
            aboutLittleInfo.classList.add("showRight")
        }, 250)
        setTimeout(() => {

            aboutExtraInfo.classList.add("showRight")
        }, 500)
        setTimeout(() => {
            aboutInfo.classList.add("showRight")

        }, 750)
        setTimeout(() => {
            aboutButtons.classList.add("showRight")
        }, 1000)
    } else if (e.currentTarget.scrollY > hero.clientHeight + about.clientHeight - 300 && e.currentTarget.scrollY < hero.clientHeight + about.clientHeight + service.clientHeight - 300) {
        navAnchors[0].style.color = "white";
        navAnchors[1].style.color = "white";
        navAnchors[2].style.color = "#E78727";
        navAnchors[3].style.color = "white";
        navAnchors[4].style.color = "white";
        navAnchors[5].style.color = "white";
        navAnchors[6].style.color = "white";
    } else if (e.currentTarget.scrollY > hero.clientHeight + about.clientHeight + service.clientHeight + result.clientHeight - 300 && e.currentTarget.scrollY < hero.clientHeight + about.clientHeight + service.clientHeight + result.clientHeight + skill.clientHeight - 300) {
        navAnchors[0].style.color = "white";
        navAnchors[1].style.color = "white";
        navAnchors[2].style.color = "white";
        navAnchors[3].style.color = "white";
        navAnchors[4].style.color = "white";
        navAnchors[5].style.color = "white";
        navAnchors[6].style.color = "white";
        const skillCode = document.querySelector(".skill__code-job");
        const skillDesign = document.querySelector(".skill__design-job");
        skillCode.classList.add("showRight")
        skillDesign.classList.add("showLeft")
    } else if (e.currentTarget.scrollY > hero.clientHeight + about.clientHeight + service.clientHeight + result.clientHeight + skill.clientHeight + adSection.clientHeight - 300 && e.currentTarget.scrollY < hero.clientHeight + about.clientHeight + service.clientHeight + result.clientHeight + skill.clientHeight + adSection.clientHeight + resume.clientHeight - 300) {
        navAnchors[0].style.color = "white";
        navAnchors[1].style.color = "white";
        navAnchors[2].style.color = "white";
        navAnchors[3].style.color = "#E78727";
        navAnchors[4].style.color = "white";
        navAnchors[5].style.color = "white";
        navAnchors[6].style.color = "white";
        const rsmEdus = document.querySelectorAll(".rsm__edu-info");
        const rsmExps = document.querySelectorAll(".rsm__exp-info");

        rsmEdus.forEach((rsmEdu) => {
            rsmEdu.classList.add("showLeft");
        })
        rsmExps.forEach((rsmExp) => {
            rsmExp.classList.add("showRight");
        })

        const rsmEduInfo = document.querySelector(".rsm__edu-section-info")
        const rsmEduTitle = document.querySelector(".rsm__edu-section-title")

        const rsmExpInfo = document.querySelector(".rsm__exp-section-info")
        const rsmExpTitle = document.querySelector(".rsm__exp-section-title")

        rsmEduTitle.classList.add("showLeft")
        rsmEduInfo.classList.add("showLeft")

        rsmExpTitle.classList.add("showRight")
        rsmExpInfo.classList.add("showRight")
    } else if (e.currentTarget.scrollY > hero.clientHeight + about.clientHeight + service.clientHeight + result.clientHeight + skill.clientHeight + adSection.clientHeight + resume.clientHeight + client.clientHeight - 300 && e.currentTarget.scrollY < hero.clientHeight + about.clientHeight + service.clientHeight + result.clientHeight + skill.clientHeight + adSection.clientHeight + resume.clientHeight + client.clientHeight + project.clientHeight - 300) {
        navAnchors[0].style.color = "white";
        navAnchors[1].style.color = "white";
        navAnchors[2].style.color = "white";
        navAnchors[3].style.color = "white";
        navAnchors[4].style.color = "#E78727";
        navAnchors[5].style.color = "white";
        navAnchors[6].style.color = "white";

    } else if (e.currentTarget.scrollY > hero.clientHeight + about.clientHeight + service.clientHeight + result.clientHeight + skill.clientHeight + adSection.clientHeight + resume.clientHeight + client.clientHeight + project.clientHeight - 300 && e.currentTarget.scrollY < hero.clientHeight + about.clientHeight + service.clientHeight + result.clientHeight + skill.clientHeight + adSection.clientHeight + resume.clientHeight + client.clientHeight + project.clientHeight + blog.clientHeight - 300) {
        navAnchors[0].style.color = "white";
        navAnchors[1].style.color = "white";
        navAnchors[2].style.color = "white";
        navAnchors[3].style.color = "white";
        navAnchors[4].style.color = "white";
        navAnchors[5].style.color = "#E78727";
        navAnchors[6].style.color = "white";
    } else if (e.currentTarget.scrollY > hero.clientHeight + about.clientHeight + service.clientHeight + result.clientHeight + skill.clientHeight + adSection.clientHeight + resume.clientHeight + client.clientHeight + project.clientHeight + blog.clientHeight - 300 && e.currentTarget.scrollY < hero.clientHeight + about.clientHeight + service.clientHeight + result.clientHeight + skill.clientHeight + adSection.clientHeight + resume.clientHeight + client.clientHeight + project.clientHeight + blog.clientHeight + contact.clientHeight - 300) {
        navAnchors[0].style.color = "white";
        navAnchors[1].style.color = "white";
        navAnchors[2].style.color = "white";
        navAnchors[3].style.color = "white";
        navAnchors[4].style.color = "white";
        navAnchors[5].style.color = "white";
        navAnchors[6].style.color = "#E78727";
    } else {
        navAnchors[0].style.color = "white";
        navAnchors[1].style.color = "white";
        navAnchors[2].style.color = "white";
        navAnchors[3].style.color = "white";
        navAnchors[4].style.color = "white";
        navAnchors[5].style.color = "white";
        navAnchors[6].style.color = "white";
        // document.body.style.paddingTop = "0px";
    }
    if (e.currentTarget.scrollY > 50) {
        header.style.position = "fixed"
        document.body.style.paddingTop = "100px";
    } else {
        document.body.style.paddingTop = "0px";
        header.style.position = "relative"
    }
})

window.addEventListener("load", (e) => {

    if (e.currentTarget.scrollY > 0 && e.currentTarget.scrollY < hero.clientHeight - 300) {
        navAnchors[0].style.color = "#E78727";
        navAnchors[1].style.color = "white";
        navAnchors[2].style.color = "white";
        navAnchors[3].style.color = "white";
        navAnchors[4].style.color = "white";
        navAnchors[5].style.color = "white";
        navAnchors[6].style.color = "white";

    } else if (e.currentTarget.scrollY > hero.clientHeight - 300 && e.currentTarget.scrollY < hero.clientHeight + about.clientHeight - 300) {
        navAnchors[0].style.color = "white";
        navAnchors[1].style.color = "#E78727";
        navAnchors[2].style.color = "white";
        navAnchors[3].style.color = "white";
        navAnchors[4].style.color = "white";
        navAnchors[5].style.color = "white";
        navAnchors[6].style.color = "white";

        const aboutHeroImg = document.querySelector(".about__hero");
        const aboutLittleInfo = document.querySelector(".about__info-me")
        const aboutExtraInfo = document.querySelector(".about__info-extra")
        const aboutInfo = document.querySelector(".about__info-main")
        const aboutButtons = document.querySelector(".about__buttons")
        aboutHeroImg.classList.add("showLeft");
        setTimeout(() => {
            aboutLittleInfo.classList.add("showRight")
        }, 250)
        setTimeout(() => {

            aboutExtraInfo.classList.add("showRight")
        }, 500)
        setTimeout(() => {
            aboutInfo.classList.add("showRight")

        }, 750)
        setTimeout(() => {
            aboutButtons.classList.add("showRight")
        }, 1000)
    } else if (e.currentTarget.scrollY > hero.clientHeight + about.clientHeight - 300 && e.currentTarget.scrollY < hero.clientHeight + about.clientHeight + service.clientHeight - 300) {
        navAnchors[0].style.color = "white";
        navAnchors[1].style.color = "white";
        navAnchors[2].style.color = "#E78727";
        navAnchors[3].style.color = "white";
        navAnchors[4].style.color = "white";
        navAnchors[5].style.color = "white";
        navAnchors[6].style.color = "white";
    } else if (e.currentTarget.scrollY > hero.clientHeight + about.clientHeight + service.clientHeight + result.clientHeight - 300 && e.currentTarget.scrollY < hero.clientHeight + about.clientHeight + service.clientHeight + result.clientHeight + skill.clientHeight - 300) {
        navAnchors[0].style.color = "white";
        navAnchors[1].style.color = "white";
        navAnchors[2].style.color = "white";
        navAnchors[3].style.color = "white";
        navAnchors[4].style.color = "white";
        navAnchors[5].style.color = "white";
        navAnchors[6].style.color = "white";
        const skillCode = document.querySelector(".skill__code-job");
        const skillDesign = document.querySelector(".skill__design-job");
        skillCode.classList.add("showRight")
        skillDesign.classList.add("showLeft")
    } else if (e.currentTarget.scrollY > hero.clientHeight + about.clientHeight + service.clientHeight + result.clientHeight + skill.clientHeight + adSection.clientHeight - 300 && e.currentTarget.scrollY < hero.clientHeight + about.clientHeight + service.clientHeight + result.clientHeight + skill.clientHeight + adSection.clientHeight + resume.clientHeight - 300) {
        navAnchors[0].style.color = "white";
        navAnchors[1].style.color = "white";
        navAnchors[2].style.color = "white";
        navAnchors[3].style.color = "#E78727";
        navAnchors[4].style.color = "white";
        navAnchors[5].style.color = "white";
        navAnchors[6].style.color = "white";
        const rsmEdus = document.querySelectorAll(".rsm__edu-info");
        const rsmExps = document.querySelectorAll(".rsm__exp-info");

        rsmEdus.forEach((rsmEdu) => {
            rsmEdu.classList.add("showLeft");
        })
        rsmExps.forEach((rsmExp) => {
            rsmExp.classList.add("showRight");
        })

        const rsmEduInfo = document.querySelector(".rsm__edu-section-info")
        const rsmEduTitle = document.querySelector(".rsm__edu-section-title")

        const rsmExpInfo = document.querySelector(".rsm__exp-section-info")
        const rsmExpTitle = document.querySelector(".rsm__exp-section-title")

        rsmEduTitle.classList.add("showLeft")
        rsmEduInfo.classList.add("showLeft")

        rsmExpTitle.classList.add("showRight")
        rsmExpInfo.classList.add("showRight")
    } else if (e.currentTarget.scrollY > hero.clientHeight + about.clientHeight + service.clientHeight + result.clientHeight + skill.clientHeight + adSection.clientHeight + resume.clientHeight + client.clientHeight - 300 && e.currentTarget.scrollY < hero.clientHeight + about.clientHeight + service.clientHeight + result.clientHeight + skill.clientHeight + adSection.clientHeight + resume.clientHeight + client.clientHeight + project.clientHeight - 300) {
        navAnchors[0].style.color = "white";
        navAnchors[1].style.color = "white";
        navAnchors[2].style.color = "white";
        navAnchors[3].style.color = "white";
        navAnchors[4].style.color = "#E78727";
        navAnchors[5].style.color = "white";
        navAnchors[6].style.color = "white";

    } else if (e.currentTarget.scrollY > hero.clientHeight + about.clientHeight + service.clientHeight + result.clientHeight + skill.clientHeight + adSection.clientHeight + resume.clientHeight + client.clientHeight + project.clientHeight - 300 && e.currentTarget.scrollY < hero.clientHeight + about.clientHeight + service.clientHeight + result.clientHeight + skill.clientHeight + adSection.clientHeight + resume.clientHeight + client.clientHeight + project.clientHeight + blog.clientHeight - 300) {
        navAnchors[0].style.color = "white";
        navAnchors[1].style.color = "white";
        navAnchors[2].style.color = "white";
        navAnchors[3].style.color = "white";
        navAnchors[4].style.color = "white";
        navAnchors[5].style.color = "#E78727";
        navAnchors[6].style.color = "white";
    } else if (e.currentTarget.scrollY > hero.clientHeight + about.clientHeight + service.clientHeight + result.clientHeight + skill.clientHeight + adSection.clientHeight + resume.clientHeight + client.clientHeight + project.clientHeight + blog.clientHeight - 300 && e.currentTarget.scrollY < hero.clientHeight + about.clientHeight + service.clientHeight + result.clientHeight + skill.clientHeight + adSection.clientHeight + resume.clientHeight + client.clientHeight + project.clientHeight + blog.clientHeight + contact.clientHeight - 300) {
        navAnchors[0].style.color = "white";
        navAnchors[1].style.color = "white";
        navAnchors[2].style.color = "white";
        navAnchors[3].style.color = "white";
        navAnchors[4].style.color = "white";
        navAnchors[5].style.color = "white";
        navAnchors[6].style.color = "#E78727";
    } else {
        navAnchors[0].style.color = "white";
        navAnchors[1].style.color = "white";
        navAnchors[2].style.color = "white";
        navAnchors[3].style.color = "white";
        navAnchors[4].style.color = "white";
        navAnchors[5].style.color = "white";
        navAnchors[6].style.color = "white";
        // document.body.style.paddingTop = "0px";
    }
    if (e.currentTarget.scrollY > 50) {
        header.style.position = "fixed"
        document.body.style.paddingTop = "100px";
    } else {
        document.body.style.paddingTop = "0px";
        header.style.position = "relative"
    }
    const happyClients = document.querySelector(".happyClients")
    happyClients.textContent = 0;
    const stophappyClients = setInterval(() => {
        if (happyClients.textContent == 275) {
            clearInterval(stophappyClients)
            String(happyClients.textContent)

        } else {
            happyClients.textContent++
        }

    }, 0)
    const workHours = document.querySelector(".workHours")
    workHours.textContent = 74100;
    const stopworkHours = setInterval(() => {
        if (workHours.textContent == 74589) {
            clearInterval(stopworkHours)
            String(workHours.textContent)

        } else {
            workHours.textContent++
        }

    }, 0)
    const coffeeCup = document.querySelector(".coffeeCup")
    coffeeCup.textContent = 4500;
    const stopcoffeeCup = setInterval(() => {
        if (coffeeCup.textContent == 4960) {
            clearInterval(stopcoffeeCup)
            String(coffeeCup.textContent)

        } else {
            coffeeCup.textContent++
        }

    }, 0)
    const rating = document.querySelector(".rating")
    rating.textContent = 0;
    const stoprating = setInterval(() => {
        if (rating.textContent == 158) {
            clearInterval(stoprating)
            String(rating.textContent)

        } else {
            rating.textContent++
        }

    }, 0)
})


const proMainSection = document.querySelector(".proMainSection");
const proSectionBtns = document.querySelectorAll(".pro__sectionBtns");
const proSectionsParent = document.querySelectorAll("#sectionParent");

proMainSection.innerHTML = proSectionsParent[0].innerHTML
for (let i = 0; i < proSectionBtns.length; i++) {
    proSectionBtns[i].addEventListener("click", () => {
        proMainSection.innerHTML = proSectionsParent[i].innerHTML
    })
}