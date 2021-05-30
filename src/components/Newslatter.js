import PropTypes from 'prop-types';
import { useTranslation } from "react-i18next";

const Newslatter = ({ visible }) => {
	const { t } = useTranslation('newslatter');

	return (
		visible &&
			<section className="newslatter">
				<div className="container">
					<form className="newslatter-form">
						<h2>{ t('head') }</h2>
						<input type="text" placeholder="test@youremail.com" />
						<button type="submit">{ t('button') }</button>
					</form>
				</div>
			</section>
	)
}


Newslatter.propTypes = {
	visible: PropTypes.bool,
}

export default Newslatter;