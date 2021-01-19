
const getData = (page=1,searchQ) => {
    return (
        fetch(`https://pixabay.com/api/?key=19931633-64dd09852af588ce39504dae9&q=${searchQ}&page=${page}&image_type=photo`)
       .then(data => data.json())
    )
}

export default getData;