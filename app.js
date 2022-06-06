
class App extends React.Component {
    state = {
        products: productsList,
        item: '',
        brand: '',
        units: '',
        quantity: 0,
        isPurchased: false
    }

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const newItem = {
            item: this.state.item,
            brand: this.state.brand,
            units: this.state.units,
            quantity: this.state.quantity,
        }

        this.setState({
            products: [newItem, ...this.state.products]
        })
    }

    togglePurchased = () => {
        this.setState({
            isPurchased: !this.state.isPurchased
        })
    }

    crossLine = event => {
        const item=event.target;
        item.productsList.togglePurchased;
    }

    render() {
        return (
            <div>
                <h1>Cart Blanche</h1>
                <form id="form" onSubmit={this.handleSubmit}>
                    <label htmlFor="item">Item:</label>
                    <input type="text" value={this.state.item} onChange={this.handleChange} id="item"/>
                    <label htmlFor="brand">Brand:</label>
                    <input type="text" id="brand" value={this.state.brand} onChange={this.handleChange}/>
                    <label htmlFor="units">Units:</label>
                    <input type="text" id="units" value={this.state.units} onChange={this.handleChange} />
                    <label htmlFor="quantity">Quantity:</label>
                    <input type="number" id="quantity" value={this.state.quantity} onChange={this.handleChange} />
                    <input type="submit" value="Add Item"/>


                    {/* <label htmlFor="cb">Cross Out Items Already Purchased</label>
                    <input type="checkbox" id="cb" value={} onClick={this.crossLine}>
                </input> */}
                </form>

                <h2>Shopping List:</h2>
                <ul>
                    {this.state.products.sort((firstProduct, secondProduct) => firstProduct.item.localeCompare(secondProduct.item)).map(product => <li>{product.item} | {product.brand}  | {product.quantity} {product.units}</li>)}
                </ul> 
                
                
                 
                     

                <button onClick={this.state.isPurchased ? "{item}" : "Nothing yet"}>Items Already Purchased</button>
                {/* <button onClick={this.togglePurchased}>Items Purchased</button> */}
                {/* {isPurchased ? `${this.state.item}` : "Nothing has been purchased"} */}

            </div>
        )
    }
}



ReactDOM.render(
    <App />,
    document.querySelector('.container')
)