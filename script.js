const getData = async (start=0, end=6)=>{
    const row = document.getElementById("row");
    row.innerHTML = ``;
    const response = await fetch("http://student-api.softwareacademy.ng/api/");
    try {
        if(response.ok){
            const rawData = await response.json();
            console.log(rawData);
            const data = rawData.splice(start, end);
            data.map((food)=>{
                row.innerHTML += `
                <div class="column">
                    <div class='img-box' style='background:url(${food.menu_img}) no-repeat center/cover'>
                        
                    </div>
                    <h2>${food.menu_name}</h2>
                    <p>
                       ${food.description}
                    </p>
                    <a href="detail.html?id=${food.id}" id="readmore">readmore</a>
                </div>  
                `
                
            });
            

        }
       
    } catch (error) {
        console.log(error);
    }
}

const detailData = async (id)=>{
    const detail = document.getElementById("rowData");
    detail.innerHTML = ``;
    const response = await fetch(`https://student-api.softwareacademy.ng/detail/api/?id=${id}`);
    try {
        if(!response.ok){
            throw new Error("Could not fetch data");
        }
        const data = await response.json();
        detail.innerHTML += `
        <div class="column-detail">
                <img src="${data.menu_img}" alt="">
                <h2>${data.menu_name}</h2>
                <p>
                    ${data.description}
                </p>
        </div>
        `

    } catch (error) {
        console.log(error);
    }
}

getData();
detailData(12)
