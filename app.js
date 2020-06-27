const API_KEY = `FsXt5pwoerVZrsV3DwhRctls8YzUev9H`;
const work = 'https://cors-anywhere.herokuapp.com/';
var page = 1
var filter = ''
var sort = 'toplist'

const body = document.querySelector('#body')
const landing = document.querySelector('#banner')
const gallery = document.querySelector('.gallery')
const titleDiv = document.querySelector('.title')
const links = document.querySelectorAll('.links')
const secSearch = document.querySelector('#sec-search-bar')
const mainSearch = document.querySelector('#search-field')
const viewAll = document.querySelector('.view-all')
const logo = document.querySelector('.logo')


var modal = document.getElementById("myModal");
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var span = document.getElementsByClassName("close")[0];



var URL = `https://cors-anywhere.herokuapp.com/https://wallhaven.cc/api/v1/search?categories=100&purity=100&page=${page}&q=${filter}&sort=${sort}`

var xhr = new XMLHttpRequest();


xhr.open('GET',URL)
xhr.onreadystatechange = function(){
    console.log('hiii');
    
    if(this.status === 200 && this.readyState === 4){

        var resData = JSON.parse(this.responseText)
        console.log(resData);

        landing.style.backgroundImage = `url(${resData.data[1].path})`
        
        var title = document.createElement('h2')
        title.textContent = 'Most Popular';
        titleDiv.appendChild(title)

        gallery.style.padding = '10px'
        gallery.style.columnCount = '3'
        gallery.style.columnGap = '0'
        gallery.style.rowGap = '0'


        for(let i=0; i<resData.data.length; i++){
            var img = document.createElement('img');
            img.src = `${resData.data[i].thumbs.large}`;
            gallery.appendChild(img);
            img.style.width = '100%';
            img.style.height = 'auto';
            img.style.padding = '20px'
            img.style.transition = 'transform 0.2s'
            img.style.cursor = 'pointer';
            img.addEventListener('click',() =>{
                modal.style.display = "block";
                modalImg.src = `${resData.data[i].path}`
                modalImg.style.cursor = 'pointer'
                modalImg.addEventListener('click',() =>{
                    window.open(`${resData.data[i].url}`)
                })

            })
            span.onclick = function() {
                modal.style.display = "none";
              }
        }

    }
}

xhr.send()


links[0].addEventListener('click',() =>{
    gallery.innerHTML = '';
    titleDiv.innerHTML = '';

    var filter = 'landscape';
    var URL = `https://cors-anywhere.herokuapp.com/https://wallhaven.cc/api/v1/search?categories=100&purity=100&page=${page}&q=${filter}&sort=${sort}`

    xhr.open('GET',URL)
    xhr.onreadystatechange = function(){
        if(this.status === 200 && this.readyState === 4){

            console.log('Landscape');
            var resData = JSON.parse(this.responseText)
            console.log(resData);
            landing.style.backgroundImage = `url(${resData.data[0].path})`;

            gallery.style.padding = '10px'
            gallery.style.columnCount = '3'
            gallery.style.columnGap = '0'
            gallery.style.rowGap = '0'

            var title = document.createElement('h2')
            title.textContent = 'Landscape';
            titleDiv.appendChild(title)

            for(let i=0; i<resData.data.length; i++){
                var img = document.createElement('img');
                img.src = `${resData.data[i].thumbs.large}`;
                gallery.appendChild(img);
                img.style.width = '100%';
                img.style.height = 'auto';
                img.style.padding = '20px'
                img.style.transition = 'transform 0.2s'
                img.style.cursor = 'pointer';
                img.addEventListener('click',() =>{
                    modal.style.display = "block";
                    modalImg.src = `${resData.data[i].path}`
                    modalImg.style.cursor = 'pointer'
                    modalImg.addEventListener('click',() =>{
                        window.open(`${resData.data[i].url}`)
                    })
    
                })
                span.onclick = function() {
                    modal.style.display = "none";
                  }
            }
        }
}

xhr.send()
})


links[1].addEventListener('click',() =>{
    gallery.innerHTML = '';
    titleDiv.innerHTML = '';

    var filter = 'sky';
    var URL = `https://cors-anywhere.herokuapp.com/https://wallhaven.cc/api/v1/search?categories=100&purity=100&page=${page}&q=${filter}&sort=${sort}`

    xhr.open('GET',URL)
    xhr.onreadystatechange = function(){
        if(this.status === 200 && this.readyState === 4){

            console.log('Sky');
            var resData = JSON.parse(this.responseText)
            console.log(resData);
            landing.style.backgroundImage = `url(${resData.data[0].path})`;

            gallery.style.padding = '10px'
            gallery.style.columnCount = '3'
            gallery.style.columnGap = '0'
            gallery.style.rowGap = '0'

            var title = document.createElement('h2')
            title.textContent = 'Sky';
            titleDiv.appendChild(title)

            for(let i=0; i<resData.data.length; i++){
                var img = document.createElement('img');
                img.src = `${resData.data[i].thumbs.large}`;
                gallery.appendChild(img);
                img.style.width = '100%';
                img.style.height = 'auto';
                img.style.padding = '20px'
                img.style.transition = 'transform 0.2s'
                img.style.cursor = 'pointer';
                img.addEventListener('click',() =>{
                    modal.style.display = "block";
                    modalImg.src = `${resData.data[i].path}`
                    modalImg.style.cursor = 'pointer'
                    modalImg.addEventListener('click',() =>{
                        window.open(`${resData.data[i].url}`)
                    })
                })
                span.onclick = function() {
                    modal.style.display = "none";
                  }
            }

        }
}

xhr.send()
})


links[2].addEventListener('click',() =>{
    gallery.innerHTML = '';
    titleDiv.innerHTML = '';

    var filter = 'Digital+Art';
    var URL = `https://cors-anywhere.herokuapp.com/https://wallhaven.cc/api/v1/search?categories=100&purity=100&page=${page}&q=${filter}&sort=${sort}`

    xhr.open('GET',URL)
    xhr.onreadystatechange = function(){
        if(this.status === 200 && this.readyState === 4){

            console.log('Digital Art');
            var resData = JSON.parse(this.responseText)
            console.log(resData);
            landing.style.backgroundImage = `url(${resData.data[0].path})`;

            gallery.style.padding = '10px'
            gallery.style.columnCount = '3'
            gallery.style.columnGap = '0'
            gallery.style.rowGap = '0'

            var title = document.createElement('h2')
            title.textContent = 'Digital Art';
            titleDiv.appendChild(title);

            for(let i=0; i<resData.data.length; i++){
                var img = document.createElement('img');
                img.src = `${resData.data[i].thumbs.large}`;
                gallery.appendChild(img);
                img.style.width = '100%';
                img.style.height = 'auto';
                img.style.padding = '20px'
                img.style.transition = 'transform 0.2s'
                img.style.cursor = 'pointer';
                img.addEventListener('click',() =>{
                    modal.style.display = "block";
                    modalImg.src = `${resData.data[i].path}`
                    modalImg.style.cursor = 'pointer'
                    modalImg.addEventListener('click',() =>{
                        window.open(`${resData.data[i].url}`)
                    })
                })
                span.onclick = function() {
                    modal.style.display = "none";
                  }
            }
        }
}

xhr.send()
})


links[3].addEventListener('click',() =>{
    gallery.innerHTML = '';
    titleDiv.innerHTML = '';

    var filter = 'Monochrome';
    var URL = `https://cors-anywhere.herokuapp.com/https://wallhaven.cc/api/v1/search?categories=100&purity=100&page=${page}&q=${filter}&sort=${sort}`

    xhr.open('GET',URL)
    xhr.onreadystatechange = function(){
        if(this.status === 200 && this.readyState === 4){

            console.log('Monochrome');
            var resData = JSON.parse(this.responseText)
            console.log(resData);
            landing.style.backgroundImage = `url(${resData.data[0].path})`;

            gallery.style.padding = '10px'
            gallery.style.columnCount = '3'
            gallery.style.columnGap = '0'
            gallery.style.rowGap = '0'

            var title = document.createElement('h2')
            title.textContent = 'Monochrome';
            titleDiv.appendChild(title)

            for(let i=0; i<resData.data.length; i++){
                var img = document.createElement('img');
                img.src = `${resData.data[i].thumbs.large}`;
                gallery.appendChild(img);
                img.style.width = '100%';
                img.style.height = 'auto';
                img.style.padding = '20px'
                img.style.transition = 'transform 0.2s'
                img.style.cursor = 'pointer';
                img.addEventListener('click',() =>{
                    modal.style.display = "block";
                    modalImg.src = `${resData.data[i].path}`
                    modalImg.style.cursor = 'pointer'
                    modalImg.addEventListener('click',() =>{
                        window.open(`${resData.data[i].url}`)
                    })
                })
                span.onclick = function() {
                    modal.style.display = "none";
                  }
            }
        }
}

xhr.send()
})

links[4].addEventListener('click',() =>{
    gallery.innerHTML = '';
    titleDiv.innerHTML = '';

    var filter = 'Science+Fiction';
    var URL = `https://cors-anywhere.herokuapp.com/https://wallhaven.cc/api/v1/search?categories=100&purity=100&page=${page}&q=${filter}&sort=${sort}`

    xhr.open('GET',URL)
    xhr.onreadystatechange = function(){
        if(this.status === 200 && this.readyState === 4){

            console.log('Science Fiction');
            var resData = JSON.parse(this.responseText)
            console.log(resData);
            landing.style.backgroundImage = `url(${resData.data[0].path})`;

            gallery.style.padding = '10px'
            gallery.style.columnCount = '3'
            gallery.style.columnGap = '0'
            gallery.style.rowGap = '0'

            var title = document.createElement('h2')
            title.textContent = 'Science Fiction';
            titleDiv.appendChild(title)

            for(let i=0; i<resData.data.length; i++){
                var img = document.createElement('img');
                img.src = `${resData.data[i].thumbs.large}`;
                gallery.appendChild(img);
                img.style.width = '100%';
                img.style.height = 'auto';
                img.style.padding = '20px'
                img.style.transition = 'transform 0.2s'
                img.style.cursor = 'pointer';
                img.addEventListener('click',() =>{
                    modal.style.display = "block";
                    modalImg.src = `${resData.data[i].path}`
                    modalImg.style.cursor = 'pointer'
                    modalImg.addEventListener('click',() =>{
                        window.open(`${resData.data[i].url}`)
                    })
                })
                span.onclick = function() {
                    modal.style.display = "none";
                  }
            }
        }
}

xhr.send()
})

links[5].addEventListener('click',() =>{
    gallery.innerHTML = '';
    titleDiv.innerHTML = '';

    var filter = 'Travel';
    var URL = `https://cors-anywhere.herokuapp.com/https://wallhaven.cc/api/v1/search?categories=100&purity=100&page=${page}&q=${filter}&sort=${sort}`

    xhr.open('GET',URL)
    xhr.onreadystatechange = function(){
        if(this.status === 200 && this.readyState === 4){

            console.log('Travel');
            var resData = JSON.parse(this.responseText)
            console.log(resData);
            landing.style.backgroundImage = `url(${resData.data[0].path})`;

            gallery.style.padding = '10px'
            gallery.style.columnCount = '3'
            gallery.style.columnGap = '0'
            gallery.style.rowGap = '0'

            var title = document.createElement('h2')
            title.textContent = 'Travel';
            titleDiv.appendChild(title)

            for(let i=0; i<resData.data.length; i++){
                var img = document.createElement('img');
                img.src = `${resData.data[i].thumbs.large}`;
                gallery.appendChild(img);
                img.style.width = '100%';
                img.style.height = 'auto';
                img.style.padding = '20px'
                img.style.transition = 'transform 0.2s'
                img.style.cursor = 'pointer';
                img.addEventListener('click',() =>{
                    modal.style.display = "block";
                    modalImg.src = `${resData.data[i].path}`
                    modalImg.style.cursor = 'pointer'
                    modalImg.addEventListener('click',() =>{
                        window.open(`${resData.data[i].url}`)
                    })
                })
                span.onclick = function() {
                    modal.style.display = "none";
                  }
            }
        }
}

xhr.send()
})

links[6].addEventListener('click',() =>{
    gallery.innerHTML = '';
    titleDiv.innerHTML = '';

    var filter = 'Nature';
    var URL = `https://cors-anywhere.herokuapp.com/https://wallhaven.cc/api/v1/search?categories=100&purity=100&page=${page}&q=${filter}&sort=${sort}`

    xhr.open('GET',URL)
    xhr.onreadystatechange = function(){
        if(this.status === 200 && this.readyState === 4){

            console.log('Nature');
            var resData = JSON.parse(this.responseText)
            console.log(resData);
            landing.style.backgroundImage = `url(${resData.data[0].path})`;

            gallery.style.padding = '10px'
            gallery.style.columnCount = '3'
            gallery.style.columnGap = '0'
            gallery.style.rowGap = '0'

            var title = document.createElement('h2')
            title.textContent = 'Nature';
            titleDiv.appendChild(title)

            for(let i=0; i<resData.data.length; i++){
                var img = document.createElement('img');
                img.src = `${resData.data[i].thumbs.large}`;
                gallery.appendChild(img);
                img.style.width = '100%';
                img.style.height = 'auto';
                img.style.padding = '20px'
                img.style.transition = 'transform 0.2s'
                img.style.cursor = 'pointer';
                img.addEventListener('click',() =>{
                    modal.style.display = "block";
                    modalImg.src = `${resData.data[i].path}`
                    modalImg.style.cursor = 'pointer'
                    modalImg.addEventListener('click',() =>{
                        window.open(`${resData.data[i].url}`)
                    })
                })
                span.onclick = function() {
                    modal.style.display = "none";
                  }
            }
        }
}

xhr.send()
})

links[7].addEventListener('click',() =>{
    gallery.innerHTML = '';
    titleDiv.innerHTML = '';

    var filter = 'Cars';
    var URL = `https://cors-anywhere.herokuapp.com/https://wallhaven.cc/api/v1/search?categories=100&purity=100&page=${page}&q=${filter}&sort=${sort}`

    xhr.open('GET',URL)
    xhr.onreadystatechange = function(){
        if(this.status === 200 && this.readyState === 4){

            console.log('Cars');
            var resData = JSON.parse(this.responseText)
            console.log(resData);
            landing.style.backgroundImage = `url(${resData.data[0].path})`;

            gallery.style.padding = '10px'
            gallery.style.columnCount = '3'
            gallery.style.columnGap = '0'
            gallery.style.rowGap = '0'

            var title = document.createElement('h2')
            title.textContent = 'Cars';
            titleDiv.appendChild(title)

            for(let i=0; i<resData.data.length; i++){
                var img = document.createElement('img');
                img.src = `${resData.data[i].thumbs.large}`;
                gallery.appendChild(img);
                img.style.width = '100%';
                img.style.height = 'auto';
                img.style.padding = '20px'
                img.style.transition = 'transform 0.2s'
                img.style.cursor = 'pointer';
                img.addEventListener('click',() =>{
                    modal.style.display = "block";
                    modalImg.src = `${resData.data[i].path}`
                    modalImg.style.cursor = 'pointer'
                    modalImg.addEventListener('click',() =>{
                        window.open(`${resData.data[i].url}`)
                    })
                })
                span.onclick = function() {
                    modal.style.display = "none";
                  }
            }
        }
}

xhr.send()
})



secSearch.addEventListener('keyup',(event) =>{
    // let seachValue = secSearch.value;
    if(event.keyCode === 13){
        let secSearchValue = secSearch.value.replace(' ','+')
        console.log(secSearchValue);


        // 
        var filter = secSearchValue;
        var URL = `https://cors-anywhere.herokuapp.com/https://wallhaven.cc/api/v1/search?categories=100&purity=100&page=${page}&q=${filter}&sort=${sort}`

        xhr.open('GET',URL)
        xhr.onreadystatechange = function(){
            if(this.status === 200 && this.readyState === 4){
                    gallery.innerHTML = '';
                    titleDiv.innerHTML = '';
    
                var resData = JSON.parse(this.responseText)
                // console.log(resData);

                if(resData.data.length == 0){
                    gallery.innerHTML = '';
                    titleDiv.innerHTML = '';

    
                    var title = document.createElement('h2')
                    title.textContent = 'Nothing Found Try Other Keywords';
                    titleDiv.appendChild(title)
                }
                else{
                    console.log(`${secSearch.value}`);
                landing.style.backgroundImage = `url(${resData.data[0].path})`;
    
                gallery.style.padding = '10px'
                gallery.style.columnCount = '3'
                gallery.style.columnGap = '0'
                gallery.style.rowGap = '0'
    
                var title = document.createElement('h2')
                title.textContent = `${secSearch.value.toUpperCase()}`;
                titleDiv.appendChild(title)
    
                for(let i=0; i<resData.data.length; i++){
                    var img = document.createElement('img');
                    img.src = `${resData.data[i].thumbs.large}`;
                    gallery.appendChild(img);
                    img.style.width = '100%';
                    img.style.height = 'auto';
                    img.style.padding = '20px'
                    img.style.transition = 'transform 0.2s'
                    img.style.cursor = 'pointer';
                    img.addEventListener('click',() =>{
                        modal.style.display = "block";
                        modalImg.src = `${resData.data[i].path}`
                        modalImg.style.cursor = 'pointer'
                        modalImg.addEventListener('click',() =>{
                            window.open(`${resData.data[i].url}`)
                        })
                    })
                    span.onclick = function() {
                        modal.style.display = "none";
                      }
                }
                }
                
            }

    }
    
    xhr.send()
        

    }
    
})


mainSearch.addEventListener('keyup',(event) =>{
    // let seachValue = secSearch.value;
    if(event.keyCode === 13){
        let mainSearchValue = mainSearch.value.replace(' ','+')
        console.log(mainSearchValue);


        // 
        var filter = mainSearchValue;
        var URL = `https://cors-anywhere.herokuapp.com/https://wallhaven.cc/api/v1/search?categories=100&purity=100&page=${page}&q=${filter}&sort=${sort}`

        xhr.open('GET',URL)
        xhr.onreadystatechange = function(){
            if(this.status === 200 && this.readyState === 4){
                    gallery.innerHTML = '';
                    titleDiv.innerHTML = '';
    
                var resData = JSON.parse(this.responseText)
                // console.log(resData);

                if(resData.data.length == 0){
                    gallery.innerHTML = '';
                    titleDiv.innerHTML = '';

    
                    var title = document.createElement('h2')
                    title.textContent = 'Nothing Found Try Other Keywords';
                    titleDiv.appendChild(title)
                }
                else{
                    console.log(`${secSearch.value}`);
                landing.style.backgroundImage = `url(${resData.data[0].path})`;
    
                gallery.style.padding = '10px'
                gallery.style.columnCount = '3'
                gallery.style.columnGap = '0'
                gallery.style.rowGap = '0'
    
                var title = document.createElement('h2')
                title.textContent = `${secSearch.value.toUpperCase()}`;
                titleDiv.appendChild(title)
    
                for(let i=0; i<resData.data.length; i++){
                    var img = document.createElement('img');
                    img.src = `${resData.data[i].thumbs.large}`;
                    gallery.appendChild(img);
                    img.style.width = '100%';
                    img.style.height = 'auto';
                    img.style.padding = '20px'
                    img.style.transition = 'transform 0.2s'
                    img.style.cursor = 'pointer';
                    img.addEventListener('click',() =>{
                        modal.style.display = "block";
                        modalImg.src = `${resData.data[i].path}`
                        modalImg.style.cursor = 'pointer'
                        modalImg.addEventListener('click',() =>{
                            window.open(`${resData.data[i].url}`)
                        })
                    })
                    span.onclick = function() {
                        modal.style.display = "none";
                      }
                }
                }
                
            }

    }
    
    xhr.send()
        

    }
    
})

