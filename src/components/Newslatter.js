import PropTypes from 'prop-types';

const Newslatter = ({ visible }) => (
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

Newslatter.propTypes = {
	visible: PropTypes.bool,
}

export default Newslatter;