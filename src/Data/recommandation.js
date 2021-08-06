function Recommandation(){
    const currentMonth = new Date().getMonth() //recupération du mois
    const isSpring = currentMonth >= 2 && currentMonth <= 5  //condition si le mois est sup ou egale a 2 ou inf ou egale à 5
    // console.log(currentMonth)
    if (!isSpring){
        return (
            <div>Ce n'est pas le moment de rempoter 🍂  </div>
        )        
    } 
     return <div>C'est la saison pour planter ou rempoter vos plants 🌼   </div>
    
            
}
export default Recommandation