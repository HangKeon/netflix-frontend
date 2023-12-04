import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons';
import ListItem from "../listitem/ListItem";
import './list.scss';
import { useRef } from 'react';

const List = () => {

  const listRef = useRef();

  const handleClick = (direction) => {
    if(direction === "left"){
      listRef.current.style.transfrom = `translateX(230px)`;
    }
  }

  return (
    <div className='list'>
      <span className="listTitle">Continue to watch</span>
      <div className="wrapper">
        <ArrowBackIosOutlined className='sliderArrow left' oncClick={() => handleClick("left")}/>
        <div className="container" ref={listRef}>
          <ListItem item={1}/>
          <ListItem item={2}/>
          <ListItem item={3}/>
          <ListItem item={4}/>
          <ListItem item={5}/>
          <ListItem item={6}/>
          <ListItem item={7}/>
          <ListItem item={8}/>
        </div>
        <ArrowForwardIosOutlined className='sliderArrow right' oncClick={() => handleClick("right")}/>
      </div>
    </div>
  )
}

export default List;
