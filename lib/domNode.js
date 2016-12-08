class domNode {

	constructor(
		tagName?:string
		properties?:Array
		children?:Array
		key?:string
		)

		{

		this.tagName = tagName
		this.properties = properties
		this.children = children
		this.key = properties.key
		this.sumOfChildren => {
			var count = 0
			for(var child in children){
				if(child instanceOf domNode){
					count += child.sumOfChildren
				}
				else{
					,
				}
				count++
			}

			return count

		}
	}

	render() {
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

}
