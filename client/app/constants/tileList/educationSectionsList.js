import conferenceIcon from "../../assets/images/icons8-conference-96.png";
import trainingIcon from "../../assets/images/icons8-training-96.png";
import lectureIcon from  "../../assets/images/icons8-lecture-96.png";

export default educationSectionsListData = {
  title: 'educationSectionsList',
  items: [
    { icon: conferenceIcon, title: 'ConferenceIcon' },
    { icon: trainingIcon, title: 'Training' },
    { icon: lectureIcon, title: 'Lecture' },
  ],
  _onPress(item){
    console.log(item.title);
  }
};