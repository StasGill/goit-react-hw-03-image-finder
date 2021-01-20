import React, {Component} from 'react'
import Searchbar from './searchBar/Searchbar'
import ImageGallery from './imageGallery/ImageGallery'
import Button from './button/Button'
import Modal from './modal/Modal'
import getData from './getData/getData'
import Loader from "react-loader-spinner";



export default class ImageSearch extends Component  {
    state = {
        searchQuery:'',
        searchItems: [],
        isModalOpen: false,
        prewiewImg: '',
        currentPage: 1,
        loaderOn: false,
}
    switchLoader = () => {
        this.setState(prev =>({ loaderOn: !prev.loaderOn}))
    }

    onSubmit = (e, page=1) => {
       e.preventDefault();
       const searchQ = this.state.searchQuery
       this.switchLoader()
       getData('',searchQ).then(data =>  this.setState({searchItems:[...data.hits]}))
       this.switchLoader()
      
    }
    
    loadMore = () => {

        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
          });


        const searchQQ = this.state.searchQuery
        this.switchLoader()
        getData(this.state.currentPage + 1,searchQQ).then(data =>  this.setState( prev =>({searchItems:[...prev.searchItems,...data.hits],currentPage: prev.currentPage +1 }) ))
        this.switchLoader()
        
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
        }

    openModal = (e) => {
        this.setState(prev =>({ isModalOpen: !prev.isModalOpen}))
        const prewiewImg = this.state.searchItems.find(item => item.id == e.target.dataset.id)
        this.setState({ prewiewImg: prewiewImg.webformatURL })
        
    }
    
    

    componentDidMount() {
        this.loadMore()
    }

    componentDidUpdate() {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
          });
    }

    render() {
        
        const items = [...this.state.searchItems]
        const{ isModalOpen,loaderOn} = this.state
       
        
    return (
        <>
        
         <Searchbar onChange={this.onChange} onSubmit={this.onSubmit} value={this.state.searchQuery}/>
         <ImageGallery imgSrc={items} openModal={this.openModal}/>
         {loaderOn? <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />:<Button onClick={this.loadMore}/>}
         
         {isModalOpen && <Modal onClick={this.openModal} imgSrc={this.state.prewiewImg}/>}
        </>
    );
    }
}

