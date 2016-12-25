function apply(difference, node){
	let index = 0
	return function dfsWalk(node, differences, index) {
		let differenceOfTheVeryNode = difference[index]

		let len = node.childNodes
			? node.childNodes.length
			: 0

		for (childNode in childNodes){
			index++
			dfsWalk(childNode, differences, index)
		}

		if(differenceOfTheVeryNode){
			applyDifference(node, differenceOfTheVeryNode)
		}
	}

	function applyDifference (node, differenceOfTheVeryNode){
		
	}
}