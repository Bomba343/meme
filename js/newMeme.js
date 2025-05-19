const fileupload = document.querySelector('#fileUpload');
let meme = null;


fileupload.addEventListener('change', selectPic);


async function selectPic(){
    const file = fileupload.files[0];
    console.log(file);

    if(file){
        meme=file;
        const reader = new FileReader();
        reader.onload = (e) => {
            const newMeme = document.querySelector('.newMeme');
            newMeme.style.backroundImage = `url('${}')`
        }
    }
}

