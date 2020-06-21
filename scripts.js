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

closeQuoteModalBtn.addEventListener("click", function closeModal() {
    quoteModal.classList.toggle("closed")
    quoteModalOverlay.classList.toggle("closed")
    body.classList.remove("modalOpen")
})

cancelQuoteRequestBtn.addEventListener("click", function closeModal() {
    quoteModal.classList.toggle("closed")
    quoteModalOverlay.classList.toggle("closed")
    body.classList.remove("modalOpen")
})

mobileNavIcon.addEventListener("click", function toggleNav() {
    mobileNav.classList.toggle('open')
    mobileNavIcon.classList.toggle('mobileMenuOpen')
})