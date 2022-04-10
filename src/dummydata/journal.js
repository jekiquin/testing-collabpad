import uniqid from 'uniqid';
import moment from 'moment';

export const journal = [
	{
		id: uniqid(),
		title: 'First',
		thought:
			'Esse aliquam eros nonumy dolore et sed feugiat volutpat eirmod. Sadipscing lorem et invidunt dolore et. Labore ad tempor justo consetetur aliquyam hendrerit ipsum. Accumsan eu tation nulla dolore et vulputate nonummy diam clita amet.',
		timestamp: moment.utc(moment('20111031'))
	},
	{
		id: uniqid(),
		title: 'Second',
		thought:
			'Rebum no ipsum diam ut amet iriure ipsum takimata nisl clita et dolores takimata amet et. Iriure ea amet ipsum illum ipsum stet dolor. Duo illum vel nulla justo et dolor kasd ut sed stet est consequat gubergren lorem sadipscing enim kasd. Dignissim et et diam quis adipiscing duo lobortis diam at congue gubergren labore aliquyam. Ea eirmod praesent amet vulputate elitr iusto takimata takimata est dolore magna. Est dolore et et eirmod sit at ut ipsum consetetur consetetur amet dolor sit vero. Lorem justo diam no ut nostrud lorem quod takimata in accusam ipsum gubergren sadipscing adipiscing vero. Labore lorem minim ipsum feugiat.',
		timestamp: moment.utc(moment('20120620'))
	}
];
