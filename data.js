const getData = async (start=0, end=8)=>{
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
              <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                <div class="card">
                  <img src="${food.menu_img}" alt="">
                  <div class="content-div">
                    <a href="#"><h2>${food.menu_name}</h2></a>
                    <p>${food.description.substring(0, 50)}.....</p>
                    <div class="cart-button">
                      <p class="span">
                          ${food.prize}
                      </p>
                      <div class="cart">
                          <p><a href="detail.html">Add to cart</a></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              `
              
          });
          

      }
     
  } catch (error) {
      console.log(error);
  }
}


getData();