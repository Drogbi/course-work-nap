import carouselIcon from "../../assets/images/icons8-theatre-mask-100.png";
import barbellIcon from "../../assets/images/icons8-dumbbell-100.png";
import schoolIcon from "../../assets/images/icons8-book-100.png";
import educationSectionsListData from "./educationSectionsList";
import entertainmentSectionsListData from "./entertainmentSectionsList";
import sportSectionsListData from "./sportSectionsList";

export default eventsListData = {
  title: 'eventsList',
  items: [
    { icon: barbellIcon, title: 'Sport' },
    { icon: schoolIcon, title: 'Education' },
    { icon: carouselIcon, title: 'Entertainment' },
  ],
  _onPress(item){
    switch(item.title){
      case 'Sport': this.props.setTileListDataDispatcher(sportSectionsListData); break;
      case 'Entertainment': this.props.setTileListDataDispatcher(entertainmentSectionsListData); break;
      case 'Education': this.props.setTileListDataDispatcher(educationSectionsListData); break;
    }
    console.log(item.title);
  }
};