import React, {Component} from 'react';
import './wishlist.css';
import ProductCondensed from "../product-condensed/product-condensed";

class WishList extends Component{
    
    constructor(props){
        super(props);
        this.state={wishList:[
            {
            title:"Bologna Killer",
                price:23.99,
                _id:"asfdshfsfd"
            },
            {
            title:"Foo Man Chu",
                price:4.54,
                _id:"asflkjasdewfd"
            },
            {
            title:"Pipe Dream",
                price:100,
                _id:"977uoofsfd"
            }   
                             ]}
        //Bind functions
        this.createWishList = this.createWishList.bind(this);
    }
    
    createWishList =() =>{
        const list = this.state.wishList.map((product) =>
            <ProductCondensed product={product} key={product._id}/>
                                       );
            return(list);
    }
    render(){
        return(
        <div className= "card">
            <div className="card-block">
                <h4 className="card-title">Wish List</h4>
                    <ul className="list-group">
                        {this.createWishList()}
                    </ul>
                
            </div>
        </div>
        );
    }
}

export default WishList;