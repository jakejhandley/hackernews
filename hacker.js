"use strict"

const url_maxitem = "http://hacker-news.firebaseio.com/v0/maxitem.json";
const url_jobstories = "http://hacker-news.firebaseio.com/v0/jobstories.json";
const url_topstories = "http://hacker-news.firebaseio.com/v0/topstories.json";


$.ajax({
	url: url_maxitem,
	success: function (story_maxitem){
		console.log(story_maxitem)

		$("#maxitem").text(story_maxitem);
	}
})

$.ajax({
	url: url_jobstories,
	success: function (story_jobstories){
		console.log(story_jobstories)

		$("#jobstories").text(story_jobstories);
	}
})

$.ajax({
	url: url_topstories,
	success: function (story_topstories){
		console.log(story_topstories)

		$("#topstories").text(story_topstories);
	}
})