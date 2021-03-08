const cheerio = require('cheerio')
const jsonfile = require('jsonfile')
const request = require('request')

request('https://www.spot.uz/ru/', function(err, response, html){
    if (!err && response.statusCode == 200) {
        const $ = cheerio.load(html)
        let heading = [];

        $('.contentBox').each(function(i, elem) {
            const title = $('.colp10-8').find('.itemTitle').slice(0).eq(i).text().trim()
            const desc = $('.contentBox').find('.txt').slice(0).eq(i).text().trim()

            heading[i]=({title, desc});
            
        })
        
       jsonfile.writeFile('data.json', heading);

       console.log('Done!');

    } else {
        //for errs
        console.log(response.statusCode);
    }
})