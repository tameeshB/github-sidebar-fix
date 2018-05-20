function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}
window.onload = function() {
	var supposedToBeOnTheRight = document.getElementsByClassName("dashboard-sidebar");
	var supposedToBeOnTheLeft = document.getElementsByClassName("news");
	insertAfter(supposedToBeOnTheRight[0],supposedToBeOnTheLeft[0]);
}
