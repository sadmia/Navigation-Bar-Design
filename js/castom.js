"use strict";


let manu_btn = document.querySelector(".manu");
let close_btn = document.querySelector(".close");
let icon_btn = document.querySelector(".icon-btn");

let navicion_section = document.querySelector(".navicion-section");
let logo_images = document.getElementById('logo_images');

let input_box = document.getElementById('input_box');
let search_icon = document.querySelector(".search-icon");
let search_div = document.querySelector(".search-div");

let profile_site = document.getElementById("profile_site");
let footer_icon = document.querySelector(".fa-sign-out-alt");

let li_text = document.querySelectorAll(".li_text");
for (let i = 0; i < li_text.length; i++) {
	
	close_btn.addEventListener("click", function() {
		close_btn.style.display = "none";
		manu_btn.style.display = "block";
		navicion_section.style.width = "65px";
		logo_images.style.marginLeft = "-150px";
		logo_images.style.transition = "0.1s";
		logo_images.style.opacity = "0";
		search_div.style.padding = "23px 0px";
		input_box.style.display = "none";
		search_icon.style.padding = "15px 15px";
		search_icon.style.left = "0px";
		li_text[i].classList.add("list_text");
		li_text[i].classList.remove("list_text_back");
		profile_site.classList.add("profile_site");
		profile_site.classList.remove("profile_site2");
		footer_icon.classList.add("footer_icon");
	})

	manu_btn.addEventListener("click", function() {
		manu_btn.style.display = "none";
		close_btn.style.display = "block";
		navicion_section.style.width = "300px";
		logo_images.style.marginLeft = "0px";
		logo_images.style.transition = "0.2s";
		logo_images.style.opacity = "1";
		search_div.style.padding = "0px 0px";
		input_box.style.display = "block";
		search_icon.style.padding = "0px 0px";
		search_icon.style.left = "15px";
		li_text[i].classList.remove("list_text");
		li_text[i].classList.add("list_text_back");
		profile_site.classList.remove("profile_site");
		profile_site.classList.add("profile_site2");
		footer_icon.classList.remove("footer_icon");
	})

}


