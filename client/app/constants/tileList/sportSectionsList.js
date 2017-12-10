import swimmingIcon from "../../assets/images/icons8-swimming-96.png";
import fitnessIcon from "../../assets/images/icons8-fitness-96.png";
import gymIcon from  "../../assets/images/icons8-gym-96.png";
import tennisIcon from  "../../assets/images/icons8-tennis-racquet-96.png";

export default sportSectionsListData = {
  title: 'sportSectionsList',
  items: [
    { icon: swimmingIcon, title: 'Swimming' },
    { icon: fitnessIcon, title: 'Fitness' },
    { icon: gymIcon, title: 'Gym' },
    { icon: tennisIcon, title: 'Tennis' },
  ],
  _onPress(item){
    switch(item.title){
      case 'Swimming': this.props.setViewDispatcher('ItemsList', { title: 'Swimming' }); break;
      case 'Fitness': this.props.setViewDispatcher('ItemsList', { title: 'Fitness' }); break;
      case 'Gym': this.props.setViewDispatcher('ItemsList', { title: 'Gym' }); break;
      case 'Tennis': this.props.setViewDispatcher('ItemsList', { title: 'Tennis' }); break;
    }
  }
};