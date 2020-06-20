var quoteModal = document.querySelector("#quoteModal")
var quoteModalOverlay = document.querySelector("#quoteModalOverlay")
var openQuoteModalBtn = document.querySelector("#requestQuote")
var closeQuoteModalBtn = document.querySelector("#closeQuoteModal")
var cancelQuoteRequestBtn = document.querySelector("#cancelRequest")
var mobileNav = document.querySelector(".navList")
var mobileNavIcon = document.querySelector(".mobileNavIcon")

openQuoteModalBtn.addEventListener("click", function() {
    quoteModal.classList.toggle("closed")
    quoteModalOverlay.classList.toggle("closed")
})

closeQuoteModalBtn.addEventListener("click", function closeModal() {
    quoteModal.classList.toggle("closed")
    quoteModalOverlay.classList.toggle("closed")
})

cancelQuoteRequestBtn.addEventListener("click", function closeModal() {
    quoteModal.classList.toggle("closed")
    quoteModalOverlay.classList.toggle("closed")
})

mobileNavIcon.addEventListener("click", function toggleNav() {
    mobileNav.classList.toggle('open')
    mobileNavIcon.classList.toggle('mobileMenuOpen')
})