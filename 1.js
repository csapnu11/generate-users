console.clear();
console.log('Test doc 1')

const FNAME_URL = 'first-names.txt';
const LNAME_URL = 'names.txt';
const HCOUNT = 1000;

const main = async () => {
    let fnames = await readText(FNAME_URL)
    let lnames = await readText(LNAME_URL)
    createHumans(fnames, lnames, HCOUNT);
}

const $ = (id) => {
    return document.getElementById(id);
}

const createHumans = (fnames, lnames, count) => {
    for(i = 0; i < count; i++){
        let rnd1 = randomIntFromInterval(1, fnames.length)
        let rnd2 = randomIntFromInterval(1, lnames.length)
        let rnd3 = randomIntFromInterval(1, 10)
        let fn = fnames[rnd1]
        let ln = lnames[rnd2]
        let fullname = `${fn} ${ln}`
        const bdate = randomDate(new Date(1980, 0, 1), new Date());
        const email = `${fn.charAt(0)}${ln}${rnd3}@test.com`.toLocaleLowerCase();
        let h = `${fullname} - ${bdate.toLocaleDateString()} - ${email}`;
        let list = $('namelist');
        let entry = document.createElement('li');
        entry.appendChild(document.createTextNode(h));
        list.appendChild(entry);
    }    
}

const readText = async (url) => {
    const res = await fetch(url);
    const result = await res.text();
    let arr = result.split('\r\n');
    console.log(arr)
    return arr;
}

const randomIntFromInterval = (min, max) => { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}
  
const randomDate = (start, end) => {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}  

// runa
main()  
