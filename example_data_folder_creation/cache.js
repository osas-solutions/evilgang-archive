import fs from 'node:fs';

const outDir = "data";

if(fs.existsSync(outDir))
    throw `${outDir} directory/file already exists, please rename it or delete it or whateva`;

let data = [];
let songNamesRaw = [];

const artists = fs.readdirSync('.');

fs.mkdirSync(outDir);
// fs.mkdirSync(outDir+"/metadata");
fs.mkdirSync(outDir+"/audio");
// fs.mkdirSync(outDir+"/art");

let songid = 0;

function uploadSong(path) { // returns id (not actual upload)
    songid+=Math.random()*100000;
    const id = btoa(songid)
        .replaceAll("+", "_")
        .replaceAll("/", "-")
        .replaceAll("=", "");

    const ext = path.split(".").pop();
    const newFilename = id+"."+ext;
    
    fs.copyFileSync(path, outDir+"/audio/"+newFilename);

    return newFilename;
}

for(const artistName of artists) {
    if(!fs.statSync(artistName).isDirectory()) continue;

    const names = artistName.split(',');

    let tunesData = [];

    const tunes = fs.readdirSync(artistName);
    for(const tuneName of tunes) {
        const files = fs.readdirSync(artistName+"/"+tuneName);

        let tuneData = {};
        tuneData["name"] = tuneName;
        for(const file of files) {
            if(file.endsWith(".mp3") || file.endsWith(".m4a")) {
                let ext = file.split('.').pop();
                tuneData[ext] = uploadSong(artistName+"/"+tuneName+"/"+file);
            }
        }
        console.log(tuneData);
        // uploadSong(artistName+"/"+tuneName);
        // break;
        // console.log(artistName+"/"+tuneName);
        tunesData.push(tuneData)
        songNamesRaw.push(tuneName);
    }

    data.push({
        "username": names[0],
        "displayname": names[1],
        "tunes": tunesData
    });
}

console.log(data);

fs.writeFileSync(outDir+"/songs.json", JSON.stringify(songNamesRaw));
fs.writeFileSync(outDir+"/data.json", JSON.stringify(data));