var quoteModal = document.querySelector("#quoteModal")
var quoteModalOverlay = document.querySelector("#quoteModalOverlay")
var openQuoteModalBtn = document.querySelector("#requestQuote")
var closeQuoteModalBtn = document.querySelector("#closeQuoteModal")
var cancelQuoteRequestBtn = document.querySelector("#cancelRequest")
var mobileNav = document.querySelector(".navList")
var mobileNavIcon = document.querySelector(".mobileNavIcon")
var body = document.querySelector("body")

openQuoteModalBtn.addEventListener("click", function() {
    quoteModal.classList.toggle("closed")
    quoteModalOverlay.classList.toggle("closed")
    body.classList.add("modalOpen")
})

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

mobileNavIcon.addEventListener("click", function toggleNav() {
    mobileNav.classList.toggle('open')
    mobileNavIcon.classList.toggle('mobileMenuOpen')
})