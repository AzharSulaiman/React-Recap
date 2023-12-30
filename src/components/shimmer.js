import resList from '../../utils/restaurantData';


const Shimmer = () => {
    const rData = resList;
    return (
        <div className="shimmer-container">
           {rData.map(()=> 
              <div className="shimmer-card"></div>
           ) }
        </div>
    )
}

export default Shimmer;