const fs = require('fs');
const process = require('process');
const axios = require('axios');

path = process.argv[2];


function cat(path) {
    fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
            console.log(`cannot read ${path}`, err);
            process.exit(1);
        }
        let arrayUrls = data.toString().split("\n");
        getURL(arrayUrls);
    })
}


async function getURL(urls) {
    for (i in urls) {
        try {

            let siteHTML = await axios.get(urls[i]);
            let fileName = urls[i].replace(/^(?:https?:\/\/)?(?:www\.)?/i, "").split('/')[0];
            fs.writeFile(fileName, siteHTML.data, "utf8", (err) => {
                if (err) {
                    console.log("error");
                }
                console.log(`Wrote to ${fileName}`);
            })
        }
        catch (err) {
            console.log(`error getting ${urls[i]}`);
        }
    }
}


cat(path);
