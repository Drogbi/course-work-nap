import partyIcon from "../../assets/images/icons8-party-96.png";
import festIcon from "../../assets/images/icons8-fest-96.png";
import parkIcon from  "../../assets/images/icons8-park-96.png";

export default sportSectionsListData = {
  title: 'entertainmentSectionsList',
  items: [
    { icon: partyIcon, title: 'Party' },
    { icon: festIcon, title: 'Fest' },
    { icon: parkIcon, title: 'Amusement park' },

  ],
  _onPress(item){
    console.log(item.title);
  }
};