//export default (para poder utilizarlo en otros componentes)
export default function Pelicula(props){
    return(
        <div className="movie-item-style-2">
        <img src="images/uploads/mv1.jpg" alt=""/>
        <div className="mv-item-infor">                    
          <h6><a href="#"> {} <span>(2012)</span></a></h6>
          <p className="rate"><i className="ion-android-star"></i><span>{}</span> /10</p>
          <p className="describe">Earth's mightiest heroes must come together and learn to fight as a team if they are to stop the mischievous Loki and his alien army from enslaving humanity...</p>
          <p className="run-time"> Run Time: 2h21’    .     <span>MMPA: PG-13 </span>    .     <span>Release: 1 May 2015</span></p>
          <p>Director: <a href="#">Joss Whedon</a></p>
          <p>Stars: <a href="#">Robert Downey Jr.,</a> <a href="#">Chris Evans,</a> <a href="#">  Chris Hemsworth</a></p>
        </div>
      </div>
    )
}