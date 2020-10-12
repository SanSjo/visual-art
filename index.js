const title = document.getElementById('title');
const price = document.getElementById('price');
const subPrice = document.getElementById('subPrice');
const measure = document.getElementById('measure');
const adTitle = document.getElementById('adTitle');
const brandName = document.getElementById('brandName');



const url = "/advdata.json"
fetch(url)
.then((res) => {
    return res.json()
})
.then((json) => {
    console.log(json)
    
    price.innerHTML = `${json.promotion_unit} `
    subPrice.innerHTML = `${json.promotion_sub_unit}`
    measure.innerHTML = `/${json.article_unit_of_measurement}`
    adTitle.innerHTML = `${json.article_name}`
    brandName.innerHTML = `${json.article_brand_name} ${json.article_origin_country} ${json.article_package_info} `

    const changeManer = () => {
        let updatedData = json.layout = "veckans_kortpris"
        updatedData = "Veckans kortpris!"
        title.innerHTML = updatedData
        document.getElementById('maner').style.display = 'none';
        title.style.background = '#f8b9d4';
        console.log('Uppdaterad data', json)
        document.getElementById('svg-object').style.fill = '#f8b9d4';
    }
    changeManer()
  
 
})







