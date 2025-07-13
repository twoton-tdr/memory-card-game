async function fetchImg() {
    console.log("called fetch")
    const apiKey = "45166605-9b283c4a7bdefc7c5e7e2380c";
    try{
        const response = await fetch(`https://pixabay.com/api/?key=${apiKey}&q=landmarks&image_type=photo&orientation=vertical`);
        const imgData = await response.json();
        
        
        const cardData = [];
        imgData.hits.map((eleme)=>{
            const {id,largeImageURL} = eleme;
            if(cardData.length < 16){
                const temp = {id,largeImageURL,clicked:true,loaded : false};
                cardData.push(temp)
            }
            return eleme;
        })
        return cardData;
    }
    catch
    {
        return console.error();
        
    }
}


export {fetchImg}