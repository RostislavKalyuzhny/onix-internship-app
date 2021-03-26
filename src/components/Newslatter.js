
const Newslatter = ({ visible }) => {

	return (
		visible &&
			<section className="newslatter">
				<div className="container">
					<form className="newslatter-form">
						<h2>Newsletter Signup</h2>
						<input type="text" placeholder="test@youremail.com" />
						<button type="submit">Signup</button>
					</form>
				</div>
			</section>
	)
}

export default Newslatter;