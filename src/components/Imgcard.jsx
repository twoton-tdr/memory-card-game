function ImgCard({cardData,setHigh,setCurrent,high,current,setCardData}){
    // console.log(cardData)
    function imgClicked(id){
        cardData.map((data)=>{
            // console.log(data);
            if(data.id === id){
                if(data.clicked){
                    
                    setCurrent((prev)=>prev + 1);
                    reshuffle(id,true);
                    // return data.clicked = false;
                }
                else if(!data.clicked){
                    setHigh((prev)=> prev>current ? prev : current);
                    setCurrent(0);
                    return reshuffle(false);
                }
            }
            return data;
        })
    }
    function reshuffle(id="",click){
        setCardData((prev)=>{
 
            // console.log("Before shuffle:", prev);
            let shuffled = [...prev];
            
        
            shuffled.map((elem)=>{
            if(click){
                if(elem.id===id){
                    elem.clicked = false;
                }
                return elem;
            }
            else{
                elem.clicked = true;
                return elem;
            }

            })
            

            let currentIndex = shuffled.length;

            while(currentIndex != 0){
                let randomIndex = Math.floor(Math.random()*currentIndex);
                currentIndex--;
                [shuffled[currentIndex],shuffled[randomIndex]]=[shuffled[randomIndex],shuffled[currentIndex]]
            }
            
            return shuffled;
        })
        
    }
    return cardData.map((img)=>{
        
        return (
        <div className="img-card" key={img.id} onClick={()=>imgClicked(img.id)} >
            {!img.loaded && <div className="img-loader"><span class="line-md--loading-loop"></span></div>}

            <img src={img.largeImageURL} alt="Img" onLoad={()=>{
                
                setCardData((prev)=>{
                    let updated = [...prev];
                    updated.map((elem)=>{
                        if(elem.id === img.id){
                            return elem.loaded = true;
                        }
                        return elem;
                    })
                    return updated;
                })
            }} style={{display:img.loaded?"block":"none"}}/>
        
        </div>)
    })
}

export {ImgCard}