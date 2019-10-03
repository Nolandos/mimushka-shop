import React from 'react';

const Draggable = (props) => {
    
	function onDragStart(e){
		if(props.image){
			let img = new Image();
			img.src = props.image;
			e.dataTransfer.setDragImage(img,10,10)
		}
		e.dataTransfer.setData('application/x-edukursy-kurs', JSON.stringify(props.data))
	}

	return <div draggable="true" onDragStart={onDragStart}>{props.children}</div>
}

export default Draggable;