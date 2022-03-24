import React, {FC} from "react";
import styles from "./constructor-card.module.css";
import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {useDrag, useDrop, XYCoord} from "react-dnd";
import {useDispatch} from "react-redux";
import {moveIngredient} from "../../services/actions/burger-constructor";
import {DND_TYPES} from "../../utils/constants";
import {TConstructorCard, TConstructorIngredient} from "../../types";

export const ConstructorCard: FC<TConstructorCard> = ({ ingredient, index, onDelete }) => {
  const dispatch = useDispatch();

  const { name, price, image, uuid, _id } = ingredient;
  const ref = React.useRef<HTMLLIElement>(null);

  const [{ isDragging }, dragRef] = useDrag({
    type: DND_TYPES.CARD_FROM_CONSTRUCTOR,
    item: () => {
      return { uuid, index }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [ , dropRef ] = useDrop({
    accept: DND_TYPES.CARD_FROM_CONSTRUCTOR,
    hover: (item: TConstructorIngredient, monitor) => {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      const clientOffset: XYCoord | null = monitor.getClientOffset();

      if (clientOffset && ref && ref.current) {
        const hoverBoundingRect = ref.current.getBoundingClientRect();
        const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
        const hoverClientY = clientOffset.y - hoverBoundingRect.top;

        if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
          return;
        }
        if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
          return;
        }
      }

      dispatch(moveIngredient(dragIndex, hoverIndex));

      item.index = hoverIndex;
    }
  });

  dragRef(dropRef(ref));

  return (
    <li className={`${styles.item} ${isDragging && styles.item_drag}`} ref={ref}>
      <DragIcon type={"primary"} />
      <ConstructorElement text={name} thumbnail={image} price={price} handleClose={() => onDelete(uuid, _id)}/>
    </li>
  );
};