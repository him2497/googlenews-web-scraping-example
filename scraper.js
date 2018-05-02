let express = require('express')
let request = require('request')
let cheerio = require('cheerio')
let readLine = require('readline-sync')

//This is where the query is read and then passed onto the url parameter
let query = readLine.question("What is your query? \n")
let url = `https://news.google.com/news/search/section/q/${query}/?ned=us&gl=US&hl=en`

let arr = []

request(url, (err, res, body) => {
    //Passing the html to the cheerio to load and then looping over the elements
    //to get the title and the link of the article
    let $ = cheerio.load(body)
    let value = $('.nuEeue').each((index,element) => {
        arr.push({
            title: element.children[0].data,
            link:element.attribs.href
        })
    });

console.log(arr)
})




