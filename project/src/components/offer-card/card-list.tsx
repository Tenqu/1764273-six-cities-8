import { Offer } from '../../types/offer';
import {useState} from 'react';
import CardScreen from '../offer-card/card-screen';

type CardListProps = {
    offers: Offer[]
    placeType: string;
  }

function CardList({offers, placeType}: CardListProps): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeCard, setActiveCard] = useState({});

  const handleMouseEnter = (card: Offer): void => {
    setActiveCard(card);
  };
  const handleMouseLeave = (): void => {
    setActiveCard({});
  };

  return (
    <>
      {offers.map((offer) => <CardScreen key={offer.id} offer={offer} placeType={placeType} handleMouseEnter={() => handleMouseEnter(offer)} handleMouseLeave={() => handleMouseLeave()}/>)}
    </>
  );
}

export default CardList;
