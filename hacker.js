"use strict"

//add the api calls JS

const url_maxitem = "http://hacker-news.firebaseio.com/v0/maxitem.json";
const url_jobstories = "http://hacker-news.firebaseio.com/v0/jobstories.json";
const url_topstories = "http://hacker-news.firebaseio.com/v0/topstories.json";

//add your ajax call to get and display the data for the latest job posts - this call also links the title to the url

$.ajax({
    url: url_jobstories,
    success: function (story_jobstories) {
        var liststories = $("#jobstories");
        story_jobstories.slice(-10).forEach(function (id) {
            $.ajax({
                url: `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`,
            success: function (jobstory) {
                var entry = document.createElement('li');
                var clickableName = document.createElement('a')
                clickableName.href = jobstory["url"]
                clickableName.target = "_blank"
                var storyName = document.createTextNode(jobstory["title"])
                clickableName.appendChild(storyName)
                entry.appendChild(clickableName);
                liststories.append(entry);
            }
        })
        })
    }}
);

//add your ajax call to get and display the data for the highest scoring stories - this call also links the title to the url

$.ajax({
    url: url_topstories,
    success: function (story_topstories) {
        var liststories = $("#topstories");
        story_topstories.slice(-10).forEach(function (id) {
            $.ajax({
                url: `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`,
            success: function (topstory) {
                var entry = document.createElement('li');
                var clickableName = document.createElement('a')
                clickableName.href = topstory["url"]
                clickableName.target = "_blank"
                var storyName = document.createTextNode(topstory["title"])
                clickableName.appendChild(storyName)
                entry.appendChild(clickableName);
                liststories.append(entry);
            }
        })
        })
    }}
);