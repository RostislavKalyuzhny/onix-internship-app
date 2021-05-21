
const Ref = ({ link }) => {
	
	const { href, name } = link;

	return (
		<li>
			<a href={ href }>{ name }</a>
		</li>
	)
}

export default Ref;