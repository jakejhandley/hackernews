"use strict"

//hacker-news.firebaseio.com/v0/jobstories.json
//hacker-news.firebaseio.com/v0/topstories.json

const url_maxitem = "http://hacker-news.firebaseio.com/v0/maxitem.json";

$.ajax({
	url: url_maxitem,
	success: function (story){
		console.log(story)

		$("#latestStory").text(story);
	}
})