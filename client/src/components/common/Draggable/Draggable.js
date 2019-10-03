import React from 'react';

const Draggable = (props) => {
    
	function onDragStart(e){
		if(props.data.image){
			const dragIcon = document.createElement('img');
    		dragIcon.src = props.data.image;
    		dragIcon.width = '100';
    		const div = document.createElement('div');
    		div.appendChild(dragIcon);
    		e.dataTransfer.setDragImage(div, -10, -10);
		}
		
		e.dataTransfer.setData('application/mimushka-shop', JSON.stringify(props.data))
	}

	return <div draggable="true" onDragStart={onDragStart}>{props.children}</div>
}

export default Draggable;