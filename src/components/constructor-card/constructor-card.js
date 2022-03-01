import React from "react";
import cardStyles from "./constructor-card.module.css";
import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {useDrag, useDrop} from "react-dnd";
import {useDispatch} from "react-redux";
import {MOVE_INGREDIENT} from "../../services/actions/burger-constructor";
import {DND_TYPES} from "../../utils/constants";
import {ingredientPropTypes} from "../../utils/custom-prop-types";
import PropTypes from "prop-types";

export default function ConstructorCard({ ingredient, index, onDelete }) {
  const dispatch = useDispatch();
  const { name, price, image, uuid, _id } = ingredient;
  const ref = React.useRef(null);

  const [{ isDragging }, dragRef] = useDrag({
    type: DND_TYPES.CARD_FROM_CONSTRUCTOR,
    item: () => {
      return { uuid, index }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, dropRef ] = useDrop({
    accept: DND_TYPES.CARD_FROM_CONSTRUCTOR,
    hover: (item, monitor) => {
      if (!ref.current) {
        return
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return
      }

      const hoverBoundingRect = ref.current.getBoundingClientRect();
      const clientOffset = monitor.getClientOffset();
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return
      }
      dispatch({
        type: MOVE_INGREDIENT,
        dragIndex: dragIndex,
        hoverIndex: hoverIndex,
      });

      item.index = hoverIndex;
    }
  });

  dragRef(dropRef(ref));

  return (
    <li className={`${cardStyles.item} ${isDragging && cardStyles.item_drag}`} ref={ref}>
      <DragIcon type={"primary"} />
      <ConstructorElement text={name} thumbnail={image} price={price} handleClose={() => onDelete(uuid, _id)}/>
    </li>
  );
}

ConstructorCard.propTypes = {
  ingredient: ingredientPropTypes.isRequired,
  index: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
};