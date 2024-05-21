

export const ScrollToTop = () => {
  window.addEventListener('scroll',(
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  ))
}
