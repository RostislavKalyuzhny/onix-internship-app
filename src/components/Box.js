
const Box = ({ box }) => {
	
	const { img, title, text } = box;

	return (
		<div className="box">
			<img src={ img } alt={ img } />
			<h3>{ title }</h3>
			<p>{ text }</p>
		</div>
	)
}

export default Box;