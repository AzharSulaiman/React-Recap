import resList from '../../utils/restaurantData';


const Shimmer = () => {
    const rData = resList;
    return (
        <div className="shimmer-container">
           {rData.map((res)=> 
              <div className="shimmer-card" key={res.info.id}></div>
           ) }
        </div>
    )
}

export default Shimmer;