const fileupload = document.querySelector('#fileUpload');
const btnUpldoad = document.querySelector('.uploadButton')
let meme = null;


fileupload.addEventListener('change', selectPic);
btnUpldoad.addEventListener('click', uploadMeme);


async function selectPic(){
    const file = fileupload.files[0];
    console.log(file);

    if(file){
        meme=file;
        const reader = new FileReader();
        reader.onload = (e) => {
            const newMeme = document.querySelector('.newMeme');
            newMeme.style.backroundImage = `url('${e.target.result}')`
            newMeme.style.backroundRepeat = 'no-repeat';
        }
        reader.readAsDataURL(file);
    }
}

async function uploadMeme(){
    try{
        if(meme){
            const formData = new FormData;
            formData.append('meme',meme)
           // console.log(formData)


            const response = await fetch('http://127.0.0.1:3000/api/memes/uploadMeme',{
                method: 'POST',
                body: formData,
                credentials: 'include'
        }); 
        }else{
            alert('Válassz ki egy képet')
        }

    } catch(error){
        console.log(error);
    }
}

