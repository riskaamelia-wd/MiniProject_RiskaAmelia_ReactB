const EmptyBag = () => {
    return(
        <div className="m-auto">
            <i class='fas fa-sad-cry ms-4 mt-4' style={{color:'#e0bd3e', fontSize:'90px'}}></i>
            <p>Your Bag is <span style={{color:'red'}}>Empty</span></p>
        </div>
    )
}

export default EmptyBag