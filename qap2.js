// Programming with Javascript - QAP 2
// Name: Sara Woodford
// Date: June 2024

// problem #1
function snake(value){
    value = value
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "_")
    .replace(/[^a-z0-9_]/g, "_");

    return value;
};

// console.log(snake("A BC"));
// console.log(snake("a.B-c"));
// console.log(snake("    A.. b (c   "));

//problem #2
function createVideo(src, width, controls){
    var src = `src="${src.trim()}"`;
    var width = Number.isInteger(width) ? `width="${width}"` : '';
    var controls = controls ? 'controls' : '';

    return `<video ${src} ${width} ${controls}></video>`
}   

console.log(createVideo('https://github.com/natiquekeyin/spring2024/blob/main/QAPs/QAP2/qap2.js', 500))
console.log(createVideo('https://github.com/natiquekeyin/spring2024/blob/main/QAPs/QAP2/qap2.js', 500, true))

//pronlem 3
function parseStringDate(date){
    const dateRegex = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/;
    
    if(!dateRegex.test(date)){
        throw new Error('Please input date in the format YYYY-MM-DD')
    }

    const [year, month, day] = date.split('-').map(Number);

    if (year > 9999 || year < 1000){
        throw new Error("Year must be 4 digits");
    }

    if (month <1 || month >12){
        throw new Error("Month must be between 1-12");
    }

    const monthDays = new Date(year, month, 0).getDate();

    if (day <1 || day > monthDays){
        throw new Error("Day is not valid for given month");
    }

    const months=['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const dateMonth = months[month - 1]

    return `${dateMonth} ${day < 10 ? '0' + day : day}, ${year}`;

}

// console.log(parseStringDate('2024-04-03'));
// console.log(parseStringDate('203-03-16'));
// console.log(parseStringDate('2024-02-30'));



//problem 4
function toDateString(d){

    try{ 
        var year = d.getFullYear();
        var month = d.getMonth();
        var day = d.getDate();

        var stringDate = year + '-' + (month < 10 ? '0'+ month : month) + '-' + (day < 10 ? '0' + day : day);

        return stringDate;
    }catch(error){
        throw new Error('Please enter a valid date.');
    }
        
}

// let dateExample = new Date(2024, 3, 12);
// console.log(toDateString(dateExample));

// console.log(parseStringDate(toDateString(dateExample)));


// problem 5


function normalizeCoord(coordinate){

    const coordinateRegex = /^(-?1?[0-7]?[0-9](\.\d{1,6})?|180),(\s*)?(-?[0-8]?[0-9](\.\d{1,6})?|-?90)$/;
    //regex supports format lng , lat

    if(!coordinateRegex.test(coordinate)){
        throw new Error('Please input the coordinate in the format lng,lat');
    }

    const [lng, lat] = coordinate.split(',')

    var latitude = parseFloat(lat);
    var longitude = parseFloat(lng);

    return `${latitude},${longitude}`;
}

// console.log(normalizeCoord("120.2637,87.237"));

// problem 6

function formatCoords(coordinateArr){

}

// problem 7

function mimeFromFilename(fileName){

    const fileNameRegex = /^\.?[a-zA-Z]+$/;

    const match = fileName.match(fileNameRegex);
    if (!match) return null;

    fileName = fileName
    .toLowerCase()
    .replace('.', '');

        switch(fileName){
            case 'html':
            case 'htm':
                return 'text/html';
            case 'css':
                return 'text/css';
            case 'js': 
                return 'text/javascript';
            case 'jpg':
            case 'jpeg':
                return 'image/jpeg';
            case 'bmp':
                return 'image/bmp';
            case 'ico':
            case 'cur':
                return 'image/x-icon';
            case 'png':
                return 'image/png';
            case 'svg':
                return 'image/svg+xml';
            case 'webp':
                return 'image/webp';
            case 'mp3':
                return 'audio/mp3';
            case 'wav':
                return 'audio/wav';
            case 'mp4' :
                return 'video/mp4';
            case 'webm':
                return 'video/webm';
            case 'json':
                return 'application/json';
            case 'mpeg':
                return 'video/mpeg';
            case 'csv':
                return 'text/csv';
            case 'ttf':
                return 'font/ttf';
            case 'woff':
                return 'font/woff';
            case 'zip' :
                return 'application/zip';
            case 'avi':
                return 'video/x-msvideo';
            default:
                return 'application/octet-stream';
        }
    }

// console.log(mimeFromFilename('.html'));
// console.log(mimeFromFilename('html'));
// console.log(mimeFromFilename('.zip'))
// console.log(mimeFromFilename('ZIP'))

// problem 8

function generateLicenseLink(licenseCode, targetBlank){

}

// problem 9 part 1

function pureBool(boolValue){

    if (boolValue === true){
        return true;
    }

    if(boolValue === false){
        return false;
    }

    if (typeof boolValue === 'string'){
        boolValue = boolValue.toLowerCase();
    }

    if (typeof boolValue === 'number'){
        if(boolValue>0){
            return true;
        }else{
            return false;
        }
    }

    switch(boolValue){
        case 'true':
        case 'TRUE':
        case 'True':
        case 'valid':
        case 'Y':
        case 'y':
        case 'yes':
        case 'YES':
        case 'Oui':
        case 'oui':
        case 'OUI':
        case 'O':
        case 'o':
        case 't':
        case 'T':
        case 'vrai':
        case 'Vrai':
        case 'VRAI':
        case 'V':
        case 'v':
            return true;
        case 'false':
        case 'False':
        case 'FALSE':
        case 'no':
        case 'No':
        case "NO":
        case 'Non':
        case 'NON':
        case 'non':
        case 'N':
        case 'n':
        case 'f':
        case 'F':
        case 'FAUX':
        case 'Faux':
        case 'faux':
            return false;
        default:
            throw new Error('Inavlid boolean value entered');
    }
}

// console.log(pureBool('non'));
// console.log(pureBool(true));
// console.log(pureBool(-100));
// console.log(pureBool(1000));
// console.log(pureBool('FAUX'));
// console.log(pureBool('V'));

//problem 9 part 2

function every(arr){
    try{
        for (var i=0; i<arr.length; i++){
            if(!arr[i]){
                return true;
            }else{
                return false;
            }
        }
    }catch(error){
        throw new Error('Invalid list entered');
    }
}

// let arExample = [false,-1, 0, 'non'];
// console.log(every(arExample));
// let arExample2 = [true, 1, 0, true, 'valid', 'oui'];
// console.log(every(arExample2));

function any(arr){
    var trueCounter = 0;
    var falseCounter = 0;

    for (var i = 0; i < arr.length; i++)
        try{
            if(arr[i]){
                trueCounter ++;
            }else{
                falseCounter ++;
            }
        }catch(error){
            throw new Error('Invalid list entered');
        }

    return trueCounter > falseCounter ? true:false;
}

// let arExample = [true, 1, false, 'y', 0];
// console.log(any(arExample));
// let arExample2 = [false, true, 'invalid', 1, 0, false];
// console.log(any(arExample2));


function none(arr){
    try{
        for (let i=0; i < arr.length; i++){
                const value = arr[i]
                if (typeof value === 'string'){
                    value = value.toLowerCase();
                }
                if(value !== false && value !== 0 && value !== 'no' && value !== 'faux' && value !== 'n' && value !== 'f' && value != 'non' && !(typeof value === 'number' && value <0)){
                    return false;
                }
            }
            return true;
    }catch(error){
        throw new Error('Invalid list entered.')
    }
}   
// let arExample = [false, false, false, false];
// console.log(none(arExample));
// let arExample2 = [false, true, false, false];
// console.log(none(arExample2));
// let arExample3 = [0, -100, false]
// console.log(none(arExample3))

// problem 10