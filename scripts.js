var quoteModal = document.querySelector("#quoteModal")
var quoteModalOverlay = document.querySelector("#quoteModalOverlay")
var mobileNav = document.querySelector(".navList")
var mobileNavIcon = document.querySelector(".mobileNavIcon")
var body = document.querySelector("body")

function openModal() {
    quoteModal.classList.remove("closed")
    quoteModalOverlay.classList.remove("closed")
    body.classList.add("modalOpen")
}

function closeQuoteModal() {
    document.getElementById("quoteContents").scrollIntoView(true);
    quoteModal.classList.toggle("closed")
    quoteModalOverlay.classList.toggle("closed")
    body.classList.remove("modalOpen")
}

function closeMobileNavMenu() {
    mobileNav.classList.remove('open')
    mobileNavIcon.classList.remove('mobileMenuOpen')
}

function toggleNav() {
    mobileNav.classList.toggle('open')
    mobileNavIcon.classList.toggle('mobileMenuOpen')
}