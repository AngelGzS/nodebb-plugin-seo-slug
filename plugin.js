"use strict";
var plugin = {};

var options = 
    {
      separator: '-',
      truncate: 120,
    };

function slugify (text) {

    var slug = text.toLowerCase();
 
    slug = slug.normalize("NFD").replace(/[\u0300-\u036f]/g, "") 
    slug = slug.replace(/\s+/g, ' '); 
    slug = slug.replace(/[^a-zA-Z0-9\- ]/g, "");
    slug = slug.substring(0,options.truncate); 
    slug = slug.trim(); 
    slug = slug.replace(/ /gi, '-');
    slug = slug.replace(/\-+/g, '-'); 
    slug = slug.trim("-"); 

    return slug;
}

plugin.createTopic = function (data, callback) {
	if (data && data.topic && data.topic.slug) {
		data.topic.slug = slugify(data.topic.slug);
	}
	callback(null, data);
};

plugin.editTopic = function (data, callback) {
	if (data && data.topic && data.topic.slug) {
		data.topic.slug = slugify(data.topic.slug);
	}
	callback(null, data);
};

plugin.categoryCreate = function (data, callback) {
	if (data && data.category && data.category.slug)
		data.category.slug = slugify(data.category.slug);

	callback(null, data);
}

plugin.categoryUpdate = function (data, callback) {
	if (data && data.category && data.category.slug)
		data.category.slug = slugify(data.category.slug);

	callback(null, data);
}

plugin.userCreate = function (data, callback) {
	if (data && data.userslug)
		data.userslug = slugify(data.userslug);

	callback(null, data);
}

module.exports = plugin;
