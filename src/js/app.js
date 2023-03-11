import { isWebp, headerFixed, anchor, sliderSwiper, spoller } from './modules'
import Swiper from 'swiper'
// Проверка браузера на поддерку .webp изображений ====================================================================================================================================================
isWebp()

// Фиксированный header ====================================================================================================================================================
headerFixed()
// ====================================================================================================================================================
// anchor()
sliderSwiper()
spoller()
const iconMenu = document.querySelector('.icon-menu')
const menuBody = document.querySelector('.menu__body')
if (iconMenu) {
	iconMenu.addEventListener('click', e => {
		document.body.classList.toggle('_lock')
		iconMenu.classList.toggle('_active')
		menuBody.classList.toggle('_active')
	})
}
const menuLinks = document.querySelectorAll('.menu__link[data-goto]')
if (menuLinks.length > 0) {
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener('click', onMenuLinkClick)
	})
}
function onMenuLinkClick(e) {
	const menuLink = e.target
	if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
		const gotoBlock = document.querySelector(menuLink.dataset.goto)
		const gotoBlockValue =
			gotoBlock.getBoundingClientRect().top +
			pageYOffset -
			document.querySelector('header').offsetHeight
		if (iconMenu.classList.contains('_active')) {
			document.body.classList.remove('_lock')
			iconMenu.classList.remove('_active')
			menuBody.classList.remove('_active')
		}
		window.scrollTo({
			top: gotoBlockValue,
			behavior: 'smooth'
		})
		e.preventDefault()
	}
}

let animItems = document.querySelectorAll('._anim-items')
if (animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll)
	function animOnScroll() {
		for (let i = 0; i < animItems.length; i++) {
			const animItem = animItems[i]
			const animItemHeight = animItem.offsetHeight
			const animItemOffset = offset(animItem).top
			const animStart = 4
			let animItemPoint = window.innerHeight - animItemHeight / animStart

			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart
			}
			if (
				pageYOffset > animItemOffset - animItemPoint &&
				pageYOffset < animItemOffset + animItemHeight
			) {
				animItem.classList.add('_active')
			} else {
				animItem.classList.remove('_active')
			}
		}
	}
	function offset(el) {
		var rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}
	setTimeout(() => {
		animOnScroll()
	}, 300)
}

// Якоря для футера
const menuLinks2 = document.querySelectorAll('.menu-footer__link[data-goto]')
if (menuLinks2.length > 0) {
	menuLinks2.forEach(menuLink => {
		menuLink.addEventListener('click', onMenuLinkClick2)
	})
}
function onMenuLinkClick2(e) {
	const menuLink = e.target
	if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
		const gotoBlock = document.querySelector(menuLink.dataset.goto)
		const gotoBlockValue =
			gotoBlock.getBoundingClientRect().top +
			pageYOffset -
			document.querySelector('.header').offsetHeight
		if (iconMenu.classList.contains('_active')) {
			document.body.classList.remove('_lock')
			iconMenu.classList.remove('_active')
			menuBody.classList.remove('_active')
		}
		window.scrollTo({
			top: gotoBlockValue,
			behavior: 'smooth'
		})
		e.preventDefault()
	}
}
