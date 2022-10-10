// code by Gabrielle Wee

let links = Array.from(document.querySelectorAll(".bio-links"));

links.forEach(link=>{
	link.addEventListener("click", e => {
		let linkHref = link.getAttribute("href").substring(1);
		let targetLink = document.getElementById(linkHref);
		targetLink.scrollIntoView({ behavior: "smooth" });
	});
});

let linksTwo = Array.from(document.querySelectorAll(".thumb-section a"));

linksTwo.forEach(linkTwo=>{
	linkTwo.addEventListener("click", e => {
		let linkTwoHref = linkTwo.getAttribute("href").substring(1);
		let targetlinkTwo = document.getElementById(linkTwoHref);
		targetlinkTwo.scrollIntoView({ behavior: "smooth" });
	});
});