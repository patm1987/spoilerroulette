/**
 * Created by Patrick on 1/2/2016.
 */

function SpoilerProvider() {
	this._spoiler = 'Jar Jar is Greedo\'s spy';
}

SpoilerProvider.prototype.getSpoiler = function() {
	return this._spoiler;
};

module.exports = SpoilerProvider;
