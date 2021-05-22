const Stat = ({count, content}) => {
  return ( 
    <div className="statistics">
      
					<p className="stat_count phead">{count}</p>
					<h3 className={"hh hh3"}>{content}</h3>
				</div>
   );
}
 
export default Stat;