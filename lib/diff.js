function domNode(tagname, properties, children) {
	this.tagname = tagname
	this.properties = properties
	this.children = children
}

module.exports = function (tagname, properties, children){
	return new domNode(tagname, properties, children)
}



domNode.prototype.render = function() {
	var element = document.creatElement(this.tagname)
	var properties = this.properties

	for(var propertyName in this.properties){
		var propertyValue = properties[propertyName]
		element.setAttribute(propertyName, propertyValue)
	}

	var children = this.children
	children.forEach(function(child){
		if (child instanceOf domNode) {
			childDomNode = child.render
		}
		else{
			childDomNode = document.createTextNode
		}
		element.appendChild(childDomNode)
	})

	return element
}
function diffTree(oldTree, newTree){
	var index = 0
	var difference = []
	
	return function depthFirstSearch(){
		difference[index] = 

		domNode.children[1]
		return function diffChildren(){
			depthFirstSearch
		}
	}
}

oldTree->oldnode->oldnode.children

diffTree{
	dfs{
		diffProp{}
		diffchildren{}
		dfs{}
	}
}

function diffTree(oldTree, newTree){
	let index = 0
	var differences = []

	return function dfsAndDiffNode(oldNode, newNode){
		for (var i = 0; i < Things.length; i++) {
			Things[i]
		}
		for (var i = 0; i < Things.length; i++) {
			Things[i]
		}

		differences.push(difference)

		return dfsAndDiffNode(oldChildNode, newChildNode)
	}

}

